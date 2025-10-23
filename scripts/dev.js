#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

function startDev() {
  console.log("🚀 Starting development mode...");

  // Start all packages in watch mode
  const devProcess = spawn("pnpm", ["-r", "--parallel", "dev"], {
    stdio: "inherit",
    shell: true,
  });

  devProcess.on("close", (code) => {
    console.log(`Development process exited with code ${code}`);
  });

  // Handle Ctrl+C
  process.on("SIGINT", () => {
    console.log("\n🛑 Stopping development mode...");
    devProcess.kill("SIGINT");
    process.exit(0);
  });
}

if (require.main === module) {
  startDev();
}

module.exports = { startDev };
