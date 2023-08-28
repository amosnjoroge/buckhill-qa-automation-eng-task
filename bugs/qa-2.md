# Bug #5: Search Product Input Field Still Visible When Viewing a Product

## Description

When a user navigates to view a products details page in the [Pet Shop](https://pet-shop.buckhill.com.hr/) application, the search product input field is still visible at the top of the page. This is unexpected behavior, as the search input field should not be visible on the product detail page.

## Steps to Reproduce

1. Open the [Pet Shop](https://pet-shop.buckhill.com.hr/) application in a web browser.
2. Navigate to any products category listing page.
3. Click on a specific product to view its details.

## Expected Behavior

Upon viewing a product details page, the search product input field should be hidden, allowing the user to focus solely on the product information.

## Actual Behavior

After clicking on a product to view its details, the search product input field is still visible at the top of the page.

## Additional Information

- This issue occurs consistently across different browsers (tested on Chrome, Firefox, and Edge).
- No JavaScript errors or warnings are displayed in the browser console.

## Screenshots

![search-input-issues](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/assets/16039248/a57845d2-291c-4ec0-89e5-2753baf2261c)

## Environment

- Browser: Chrome (Version 115.0.5790.114)
- Operating System: macOS 13.4.1

## Reproducibility

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## Impact

This bug negatively impacts the user experience, as it makes it difficult for users to focus on the product details when the search input field is included in the details page.

## Severity

Medium - The bug interferes with user experience but does not prevent essential functionality.

## Workaround

Users can manually scroll down to move the search input field out of view when viewing product details.

## Related Bugs

None
