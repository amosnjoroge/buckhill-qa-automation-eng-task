# Bug #6: User Not Notified of Successful or Failed Registration

## Description

When a user attempts to register a new account on the Pet Shop application, there is no feedback provided to indicate whether the registration was successful or failed. After completing the registration process, the user is not presented with any notification or message, leaving them uncertain about the status of their registration.

## Steps to Reproduce

1. Navigate to the Pet Shop application's registration page.
2. Fill in the required registration fields with valid information.
3. Click the "Sign Up" or "Register" button to submit the registration form.
4. Observe the page after submission.

## Expected Behavior

After submitting the registration form, the user should receive a clear and immediate notification indicating whether the registration was successful or if there was an error during the registration process.

## Actual Behavior

After completing the registration process, the user is not provided with any visual or textual feedback. The absence of a success or error message leaves the user uncertain about the outcome of their registration attempt.

## Additional Information

- This issue occurs consistently across different browsers and operating systems.
- No JavaScript errors or warnings are displayed in the browser console.
- Other forms within the application, such as login and checkout, do provide appropriate notifications.

## Screenshots

https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/assets/16039248/08301a40-459e-4783-9dd7-5c2bdf26cd09

## Environment

- Browser: Chrome (Version 115.0.5790.114)
- Operating System: macOS 13.4.1

## Reproducibility

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## Impact

This bug negatively affects the user experience, as users are left uncertain about the outcome of their registration attempts.

## Severity

Medium - The absence of registration feedback could lead to user confusion.

## Workaround

Currently, there is no known workaround for this issue. Users have to attempt to login to confirm registration if successful.

## Related Bugs

None
