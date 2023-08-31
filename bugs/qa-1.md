# Bug [#1](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/4): None of the Main Navigation Bar Items Navigate to the Correct Page

## Description

When clicking on any of the main navigation bar items in the [Pet Shop](https://pet-shop.buckhill.com.hr/), the expected behavior is for the user to be navigated to the corresponding page. However, currently, none of the main navigation bar items navigate to the correct page. The application fails to redirect the user to the expected destinations.

## Steps to Reproduce

1. Open the [Pet Shop](https://pet-shop.buckhill.com.hr/) application in a web browser.
2. Navigate to any page within the application.
3. Locate the main navigation bar at the top of the page.
4. Click on one of the main navigation bar items (e.g., "PROMOTIONS," "PRODUCTS," "BLOG").

## Expected Behavior

After clicking on a main navigation bar item, the application should navigate the user to the corresponding page associated with that menu item.

## Actual Behavior

Upon clicking on any of the main navigation bar items, the application fails to redirect the user to the expected page. Instead, the user remains on the current page, and there is no change in the URL or content displayed.

## Additional Information

- This issue is consistent across different browsers (tested on Chrome, Firefox, and Edge).
- Clearing browser cache and cookies did not resolve the problem.
- No JavaScript errors or warnings are displayed in the browser console.

## Screenshots/Videos

https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/assets/16039248/c85ba390-bce0-411e-8396-b5fca0d74669

## Environment

- Browser: Chrome (Version 115.0.5790.114)
- Operating System: macOS 13.4.1

## Reproducibility

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## Impact

This bug affects the user experience negatively, as users are unable to navigate between the different sections of the application.

## Severity

High - Users are unable to access critical sections of the application.

## Workaround

There is currently no known workaround for this issue.

## Related Bugs

None
