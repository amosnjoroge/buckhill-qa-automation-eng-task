# Bug [#5](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/15): User Receives "Failed to Create New Order" Error During Order payment

## Description

When a user attempts to complete the checkout process in the Pet Shop application by clicking on the "PLACE ORDER" button, they encounter a "Failed to Create New Order" error message. This error prevents the user from successfully placing their order, impacting their ability to make purchases on the platform.

## Steps to Reproduce

1. Navigate to the Pet Shop application.
2. Log in as a registered user.
3. Add one or more products to the shopping cart.
4. Click on the shopping cart icon or navigate to the cart page.
5. Review the items in the cart and click the "PROCEED TO CHECKOUT" button to proceed with the purchase.
6. Fill the "Shipping Address" and click the "NEXT" button.
7. Fill the "Payment details", select the "Cash on Delivery" option, and click the "NEXT" button.
8. Review the order details and click the "PLACE ORDER" button.

## Expected Behavior

After clicking the "PLACE ORDER" button, the user should be able to smoothly progress through the checkout process without encountering any errors. The order creation should be completed successfully, and the user should receive an order confirmation.

## Actual Behavior

Upon clicking the "PLACE ORDER" button, the user is presented with a "Failed to Create New Order" error message. This prevents the user from proceeding with the checkout process, and their order is not created.

## Screenshots

![image](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/assets/16039248/a699304b-0744-475b-b2c3-b5a851002f0c)
![image](https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/assets/16039248/a9f0215b-ef37-4186-82b5-2219d8767184)

## Environment

- Browser: Chrome (Version 115.0.5790.114)
- Operating System: macOS 13.4.1

## Reproducibility

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## Impact

This bug significantly disrupts the user's ability to complete purchases on the Pet Shop application, impacting their experience and preventing successful transactions.

## Severity

High - The error during the checkout process obstructs normal user workflows and negatively affects user engagement.

## Workaround

Currently, there is no known workaround for this issue. Users are unable to complete the checkout until the error is resolved.

## Related Bugs

None
