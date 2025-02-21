const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      username: "huanyi",
      password: "rapa21z",
      loginUrl: "https://login-ext-test.schueco.com/"
    },
    
    setupNodeEvents(on, config) {

      
      // implement node event listeners here
    },

    baseUrl: "https://bps.staging.vcldesign.com/", // Default base URL
    specPattern: 'cypress/integrations/examples/*.js',
    chromeWebSecurity: false,
    defaultCommandTimeout: 120000,
  },
});
