const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dummy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: false, //turn this on for recording tests
    chromeWebSecurity: false,
    pageLoadTimeout: 80000,
    specPattern: 'cypress/e2e/*.js'
  },
});
