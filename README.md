# [Pet-Shop](https://pet-shop.buckhill.com.hr/) Automated Tests.

This repository contains automated tests of a pseudo eCommerce pet shop web application using Cypress and TypeScript.

## Table of Contents

- [Pet-Shop Automated Tests.](#pet-shop-automated-tests)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the tests](#running-the-tests)
    - [Locally](#locally)
    - [In the CI](#in-the-ci)
  - [Folder Structure](#folder-structure)
  - [Bugs logged during testing](#bugs-logged-during-testing)
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
> These variable have already been configure in the [.env](.env) file. However, if you wish to change them, you can do so in this file.

## Running the tests

### Locally

To run all the tests locally in headed mode, run the following command:

```bash
npm run cy:open
```

To run all the tests locally in headless mode, run the following command:

```bash
npm run cy:run
```

_This commands will launch the Cypress Test Runner and execute the test suite._

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

## Bugs logged during testing

- [QA-1: None of the Main Navigation Bar Items Navigate to the Correct Page](bugs/qa-1.md)
- [QA-2: Logged-In Users (Admin and Normal) Are Logged Out Upon Page Refresh](bugs/qa-2.md)
- [QA-3: User Not Notified of Successful or Failed Registration](bugs/qa-3.md)
- [QA-4: Error "Undefined array key 'category_uuid'" When Creating a Product by an Admin](bugs/qa-4.md)
- [QA-5: User Receives "Failed to Create New Order" Error During Order payment](bugs/qa-5.md)
- [QA-6: User Created by Admin Does Not Persist in the Database](bugs/qa-6.md)

## Test Cases automated

- [TC-001: User registration to create a new account.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/3)
- [TC-002: Search products by product's title.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/9)
- [TC-003: Viewing the detailed information page of a specific product](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/10)
- [TC-004: Viewing the detailed information page of a specific product](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/12)
- [TC-006: A registered user wants to view their latest orders categorised by their status.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/17)
- [TC-007: An admin user wants to create a new customer user account.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/19)
- [TC-008: An admin user wants to update a new customer user account.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/20)
- [TC-009: An admin user wants to update a new customer user account.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/21)
- [TC-010: An admin user wants to add a new product.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/25)
- [TC-011: An admin user wants to edit a new product.](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/26)
