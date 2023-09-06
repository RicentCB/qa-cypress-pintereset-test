const fs = require('fs')
const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor')

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const getJsonFromVariables = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent);
    } else {
      throw new Error(`Path of File not found / exist: ${filePath}`)
    }
  } catch (e) {
    console.log(`Error: ${e}`);
    return null;
  }
}

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
  // Tasks
  on('task', {
    readFileToken() {
      if (fs.existsSync('index.variables.json')) {
        return getJsonFromVariables('index.variables.json');
      }
      return null;
    },
    writeFileToken({ token, date }) {
      const jsonVariables = getJsonFromVariables('index.variables.json') || {};
      jsonVariables["tokenData"] = token;
      jsonVariables["tokenLastDate"] = date;
      // save variables in the file
      fs.writeFileSync('index.variables.json',
        JSON.stringify(jsonVariables, null, 2)
      )
      return true;
    },
    readAllSavedVariables() {
      return getJsonFromVariables('index.variables.json');
    },
    readFileVariable({ keyValue }) {
      return getJsonFromVariables('index.variables.json')[keyValue]
    },
    writeFileVariable({ keyValue, newValue }) {
      const jsonVariables = getJsonFromVariables('index.variables.json') || {};
      jsonVariables[keyValue] = newValue;
      // save variables in the file
      fs.writeFileSync('index.variables.json',
        JSON.stringify(jsonVariables, null, 2)
      )
      return true;
    },
    readFileAsInput({ filePath }) {
      return getJsonFromVariables(filePath) || {};
    },
  });
  return config;
}

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  numTestsKeptInMemory: 0,
  redirectionLimit: 50,
  pageLoadTimeout: 150000,
  e2e: {
    supportFile: false,
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