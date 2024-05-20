import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: "chrome",
    baseUrl: "https://www.wtwco.com/en-us",
    specPattern: "cypress/integration/**/*.spec.js",
    supportFile: "cypress/support/index.js",
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    downloadsFolder: "cypress/downloads",
    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
    },
    chromeWebSecurity: false,
  },
});
