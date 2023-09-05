# Bug [#4](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/24): Error "Undefined array key 'category_uuid'" When Creating a Product by an Admin

## Description

When an admin user attempts to create a new product within the Pet Shop application, an error message is displayed, stating "Undefined array key 'category_uuid'." This error prevents the successful creation of the product and impacts the admin's ability to add new products to the system.

## Steps to Reproduce

1. Navigate to the Pet Shop application.
2. Log in as an admin user with appropriate administrative privileges.
3. Access the products page.
4. Click on "ADD NEW PRODUCT" button
5. Fill in the required product details, including:
   - Product Name
   - Product Description
   - Price
   - Brand
   - Category
6. Click the "SAVE CHANGES" button to create the new product.

## Expected Behavior

After creating a new product as an admin user, the product details, including the category, should be accurately processed, and the product should be successfully added to the application's product database.

## Actual Behavior

Upon clicking the "SAVE CHANGES" button to create the new product, an error message is displayed: "Undefined array key 'category_uuid'." This error indicates a problem with the processing of the category information, preventing the successful creation of the product.

## Environment

- Browser: Chrome (Version 115.0.5790.114)
- Operating System: macOS 13.4.1

## Screenshots

![image](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/assets/16039248/ff3c1b64-c8e3-43d8-a4ea-07c7a2bb5298)

## Reproducibility

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## Impact

This bug significantly impedes the admin user's ability to add new products to the application, affecting the product management workflow.

## Severity

High - The error during product creation disrupts normal administrative workflows and negatively impacts product management.

## Workaround

Currently, there is no known workaround for this issue. Admin users cannot create new users until the bug is resolved.

## Related Bugs

None
