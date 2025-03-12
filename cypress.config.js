const { defineConfig } = require("cypress");
const pdf = require("pdf-parse");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    env: {
      // username: "huanyi",
      // password: "rapa21z",
      loginUrl: "https://login-ext-test.schueco.com/",
      unifiedModelEndPoint: "https://dev-api.vcldesign.com/api/BpsProject/UploadResults/"
    },
    
    setupNodeEvents(on, config) {
      on("task", {
        parsePDF({ filePath }) {
          return new Promise((resolve, reject) => {
            fetch(filePath)
              .then(res => res.arrayBuffer()) // Fetch PDF file as binary
              .then(buffer => pdf(Buffer.from(buffer))) // Convert to text
              .then(data => resolve(data.text)) // Extract text
              .catch(err => reject(err));
          });
        }
      });
      
      // implement node event listeners here
    },

    baseUrl: "https://dev-bps.vcldesign.com/",
    specPattern: 'cypress/integrations/examples/*.js',
    chromeWebSecurity: false,
    defaultCommandTimeout: 120000,
    // experimentalOriginDependencies: true,
    // experimentalMemoryManagement: true,
    //numTestsKeptInMemory: 1,
  
    
  },
});
