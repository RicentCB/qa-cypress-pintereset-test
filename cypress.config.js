const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  numTestsKeptInMemory: 0,
  redirectionLimit: 100,
  pageLoadTimeout: 150000,
  e2e: {
    defaultCommandTimeout: 100000,
    failOnStatusCode: false,
  },
  video: false,
  screenshotOnRunFailure: false,
});