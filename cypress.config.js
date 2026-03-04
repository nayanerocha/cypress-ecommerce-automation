const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a38jzp',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
