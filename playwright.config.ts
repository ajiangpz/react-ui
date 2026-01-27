import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry"
  },
  webServer: {
    command: "pnpm --filter @tendaui/site dev -- --host localhost --port 3000 --strictPort --open false",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome"
      }
    },
    {
      name: "msedge",
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge"
      }
    }
  ]
});
