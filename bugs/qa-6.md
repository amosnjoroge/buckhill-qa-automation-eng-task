# Bug [#6](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/22): User Created by Admin Does Not Persist in the Database

## Description

When an admin user attempts to create a new user in the Pet Shop application, the newly created user account does not persist in the database. This issue prevents the successful creation and storage of user accounts, affecting the functionality of the application.

## Steps to Reproduce

1. Navigate to the Pet Shop application.
2. Log in using valid admin credentials.
3. Access the "Add new customer" feature from the admin panel.
4. Fill in the required user details for the new user.
5. Click the "Add new customer" button to create the user account.
6. Attempt to log in using the newly created user account credentials.

## Expected Behavior

After an admin user creates a new user, the user account should be successfully created and stored in the application's user database. The user should be able to log in using the provided credentials.

## Actual Behavior

Despite completing the user creation process, the newly created user account does not persist in the database. As a result, the user cannot log in with the provided credentials, and the account does not appear in the application's user list.

## Environment

- Browser: Chrome (Version 115.0.5790.114)
- Operating System: macOS 13.4.1

## Reproducibility

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## Impact

This bug significantly impairs the admin's ability to create and manage user accounts in the Pet Shop application, affecting the overall functionality and user management process.

## Severity

High - The inability to persist user accounts poses a critical issue as it hinders user management capabilities.

## Workaround

Currently, there is no known workaround for this issue. Admin users cannot create new users until the bug is resolved.

## Related Bugs

None
