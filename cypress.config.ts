import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    specPattern: '**/*.spec.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
