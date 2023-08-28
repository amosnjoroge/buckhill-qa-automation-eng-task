import { defineConfig } from 'cypress';
require('dotenv').config();

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    specPattern: '**/*.spec.ts',
    env: { ADMIN_EMAIL, ADMIN_PASSWORD },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
