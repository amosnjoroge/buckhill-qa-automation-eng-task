# Cypress Test Automation Project

This repository contains automated tests a pseudo eCommerce web application using Cypress and TypeScript.

## Table of Contents

- [Cypress Test Automation Project](#cypress-test-automation-project)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the tests](#running-the-tests)
  - [Folder Structure](#folder-structure)
  - [Bugs filled during testing](#bugs-filled-during-testing)
  - [Test Cases automated](#test-cases-automated)

## Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed (Node.js >= 12)
- Git (optional, but recommended)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/cypress-test-automation.git
   ```

2. Navigate to the project folder:

   ```bash
   cd cypress-test-automation
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

## Configuration

The following environment variables are required to run the tests:

- ADMIN_EMAIL = 'admin@buckhill.co.uk'
- ADMIN_PASSWORD = 'admin'

> 💬 **Note**
>
> These variable have already been configure in the [.env](.env) file. However, if you wish to change them, you can do so in the .env file.

## Running the tests

To run the tests, run the following command:

```bash
npm run cy:run
```

_This will launch the Cypress Test Runner and execute the test suite._

## Folder Structure

- `bugs/` - Contains bug reports found during testing
- `cypress/` - Contains Cypress test files
- `integration/` - Test scripts
- `support/` - Custom commands and reusable utilities
- `commands/` - Cypress custom commands; these are reusable functions that can be called from within the test scripts.
- `selectors/` - Contains reusable selectors that can be called from within the test scripts.
- `.env` - Environment configuration
- `cypress.config.ts` - Cypress configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `README.md` - Project documentation (you are here)

## Bugs filled during testing

- [QA-1](bugs/qa-1.md)
- [QA-2](bugs/qa-2.md)
- [QA-3](bugs/qa-3.md)
- [QA-4](bugs/qa-4.md)
- [QA-5](bugs/qa-5.md)
- [QA-6](bugs/qa-6.md)

## Test Cases automated

- TC-001: #3
- TC-002: #9
- TC-003: #10
- TC-004: #12
- TC-006: #17
- TC-007: #19
- TC-008: #20
- TC-009: #21
- TC-010: #25
- TC-011: #26
