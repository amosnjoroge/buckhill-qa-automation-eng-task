import { defineConfig } from 'cypress';
import fs from 'fs';
require('dotenv').config();

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    specPattern: '**/*.spec.ts',
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: { ADMIN_EMAIL, ADMIN_PASSWORD },
    setupNodeEvents(on, config) {
      // Delete the recorded video for specs that had no retry attempts or failures
      on(
        'after:spec',
        (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
          if (results && results.video) {
            const failures = results.tests.some((test) =>
              test.attempts.some((attempt) => attempt.state === 'failed')
            );
            if (!failures) {
              fs.unlinkSync(results.video);
            }
          }
        }
      );
    },
  },
});
