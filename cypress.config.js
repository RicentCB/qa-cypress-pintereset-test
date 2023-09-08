const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor')

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  return config;
}

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  numTestsKeptInMemory: 0,
  redirectionLimit: 50,
  pageLoadTimeout: 150000,
  e2e: {
    defaultCommandTimeout: 100000,
    experimentalSessionAndOrigin: true,
    failOnStatusCode: false,
    includeShadowDom: true,
    setupNodeEvents,
    chromeWebSecurity: false,
    specPattern: '**/*.feature',
    env: {
      allureReuseAfterSpec: true,
    },
  },
  video: false,
  screenshotOnRunFailure: false,
});