import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, expect } from "@playwright/test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = mkdtempSync(join(tmpdir(), "tendaui-consumer-"));
const tarballs = join(output, "tarballs");
mkdirSync(tarballs);
const pnpm = process.env.npm_execpath;
assert(pnpm, "Run this check through pnpm: pnpm test:package");

function run(args, cwd = root) {
  const result = spawnSync(process.execPath, [pnpm, ...args], {
    cwd,
    encoding: "utf8",
    stdio: args[0] === "pack" ? "pipe" : "inherit",
    env: process.env,
    timeout: 300000,
    maxBuffer: 20 * 1024 * 1024
  });
  if (result.status !== 0) {
    throw new Error(`${args.join(" ")} failed\n${[result.stdout, result.stderr].filter(Boolean).join("\n")}`, {
      cause: result.error
    });
  }
  return result.stdout;
}

console.log(`Consumer verification artifacts: ${output}`);
const packageDirs = ["tendaui-icons", "tendaui-react", "theme-generator"];
const archives = {};
for (const dir of packageDirs) {
  const pkg = JSON.parse(readFileSync(join(root, "packages", dir, "package.json"), "utf8"));
  if (!process.argv.includes("--skip-build")) {
    console.log(`Building ${pkg.name}`);
    run(["--filter", pkg.name, "build"]);
  }
  console.log(run(["pack", "--pack-destination", tarballs], join(root, "packages", dir)));
}

// Validate the packed package rather than the workspace manifest.
for (const dir of packageDirs) {
  const pkg = JSON.parse(readFileSync(join(root, "packages", dir, "package.json"), "utf8"));
  const archive = join(tarballs, `${pkg.name.replace("@", "").replace("/", "-")}-${pkg.version}.tgz`);
  assert(existsSync(archive), `Missing tarball for ${pkg.name}`);
  archives[pkg.name] = archive.replaceAll("\\", "/");
  const list = spawnSync("tar", ["-tzf", archive], { encoding: "utf8" });
  assert.equal(list.status, 0, list.stderr);
  const files = new Set(list.stdout.trim().split(/\r?\n/));
  const manifestResult = spawnSync("tar", ["-xOf", archive, "package/package.json"], { encoding: "utf8" });
  assert.equal(manifestResult.status, 0, manifestResult.stderr);
  const manifest = JSON.parse(manifestResult.stdout);
  for (const key of ["main", "module", "types", "typings", "style"]) {
    if (manifest[key]) assert(files.has(`package/${manifest[key]}`), `${manifest.name}: ${key} points to missing ${manifest[key]}`);
  }
  if (manifest.name === "@tendaui/react") {
    assert(files.has("package/es/button/style/css.js"), "React tarball is missing the component CSS loader");
    const styleEntry = spawnSync("tar", ["-xOf", archive, "package/es/button/style/index.js"], { encoding: "utf8" });
    assert.match(styleEntry.stdout, /import\s+["']\.\//, "Public style entry must import its stylesheet");
  }
  for (const [name, version] of Object.entries(manifest.dependencies || {})) {
    assert(!version.startsWith("workspace:"), `${manifest.name}: unresolved workspace dependency ${name}`);
    assert(!["@tendaui/components", "@tendaui/utils"].includes(name), `${manifest.name}: private dependency ${name}`);
  }
}
console.log("Packed package metadata passed.");

const consumer = join(output, "app");
cpSync(join(root, "tests/package-consumer"), consumer, { recursive: true });
writeFileSync(join(consumer, "package.json"), JSON.stringify({
  name: "tendaui-published-consumer",
  private: true,
  type: "module",
  dependencies: {
    ...Object.fromEntries(Object.entries(archives).map(([name, archive]) => [name, `file:${archive}`])),
    react: "18.3.1",
    "react-dom": "18.3.1"
  },
  devDependencies: {
    "@types/react": "18.3.26",
    "@types/react-dom": "18.3.7",
    "@types/node": "22.18.12",
    typescript: "5.6.2",
    vite: "7.1.11"
  },
  pnpm: { overrides: Object.fromEntries(Object.entries(archives).map(([name, archive]) => [name, `file:${archive}`])) }
}, null, 2));
console.log("Installing tarballs in independent consumer");
run(["install", "--ignore-scripts", "--no-frozen-lockfile"], consumer);
console.log("Checking consumer types");
run(["exec", "tsc", "--project", "tsconfig.json"], consumer);
console.log("Checking consumer types with Node module resolution");
run(["exec", "tsc", "--project", "tsconfig.node.json"], consumer);
console.log("Building consumer production bundle");
run(["exec", "vite", "build"], consumer);

const dist = join(consumer, "dist");
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml" };
const server = createServer((request, response) => {
  const path = resolve(dist, `.${decodeURIComponent(new URL(request.url, "http://localhost").pathname)}`);
  const target = path === dist ? join(dist, "index.html") : path;
  if (!target.startsWith(`${dist}/`) && !target.startsWith(`${dist}\\`)) {
    response.writeHead(403).end();
    return;
  }
  if (!existsSync(target)) {
    response.writeHead(404).end();
    return;
  }
  response.setHeader("Content-Type", mime[target.slice(target.lastIndexOf("."))] || "application/octet-stream");
  response.end(readFileSync(target));
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
let browser;
try {
  const fallback = "C:/Program Files/Google/Chrome/Application/chrome.exe";
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
    (!existsSync(chromium.executablePath()) && existsSync(fallback) ? fallback : undefined);
  browser = await chromium.launch({ executablePath, headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  const button = page.getByRole("button", { name: "发布包按钮" });
  await button.click();
  await expect(page.getByRole("status")).toHaveText("已点击 1 次");
  await page.getByPlaceholder("独立消费输入").fill("tarball");
  await expect(page.getByPlaceholder("独立消费输入")).toHaveValue("tarball");
  await page.getByRole("button", { name: "切换主题" }).click();
  await expect(button).toHaveCSS("background-color", "rgb(237, 123, 47)");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "导出主题", exact: true }).click();
  const download = await downloadPromise;
  assert.equal(download.suggestedFilename(), "theme.css");
  await download.saveAs(join(output, "exported-theme.css"));
  assert(readFileSync(join(output, "exported-theme.css"), "utf8").includes("--td-brand-color"));
  await page.getByRole("button", { name: "主题定制" }).click();
  const panel = page.locator(".theme-generator .t-drawer__content-wrapper");
  await expect(panel).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
  await expect(panel).toBeInViewport({ ratio: 1 });
  await expect(page.getByText("成功色", { exact: true })).toBeVisible();
  await page.screenshot({ path: join(output, "consumer.png"), fullPage: true });
  assert.deepEqual(errors, [], `Browser runtime errors: ${errors.join("; ")}`);
  writeFileSync(join(output, "result.json"), JSON.stringify({
    status: "passed", checks: ["tarball-metadata", "isolated-install", "consumer-types", "consumer-node-types", "production-build", "browser-interactions", "component-css", "theme-export"]
  }, null, 2));
  console.log("Package consumer verification passed.");
} finally {
  await browser?.close();
  await new Promise((done) => server.close(done));
}
