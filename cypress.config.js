const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "j8cia5",
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://naveenautomationlabs.com',
    specPattern:"cypress/e2e/*/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    //  URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    // URL:'https://www.shopist.io/'
  }
});
