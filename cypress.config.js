const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber());
  allureWriter(on, config);
  return config;
}


module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 100000,
  responseTimeout: 100000,
  video: false,
  reports: false,
  screenshots: false,
  downloads: false,
  retries: {
    runMode: 2,
    openMode: 0,
   
  },
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://develop.pwa-venia.com/',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    experimentalStudio: true,
    chromeWebSecurity: false,
  },
});

