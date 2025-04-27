const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    // user: '',
    // TOKEN:'',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})