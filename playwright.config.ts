import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  timeout: 30 * 10 * 10 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://192.168.200.11:7001/",
    headless: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
    screenshot: "on",
    // globalTimeout: 60*60*1000,
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
  },

  // projects: [
  //   {
  //     name: "chromium",
  //     use: {
  //       browserName: "chromium",
  //       /* Base URL to use in actions like `await page.goto('/')`. */
  //       baseURL: "http://192.168.200.11:7001/",
  //       headless: false,

  //       /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  //       trace: "retain-on-failure",
  //       screenshot: "only-on-failure",
  //       ignoreHTTPSErrors: true,
  //       video: "retain-on-failure",
  //     },
  //   },

  //   {
  //     name: "firefox",
  //     use: { ...devices["Desktop Firefox"] },
  //   },

  //   {
  //     name: "webkit",
  //     use: { ...devices["Desktop Safari"] },
  //   },
  // ],
});
