# KohortPay Checkout Button Integration into Web FrameWork (REACT as Example)🚀

Integrate the KohortPay checkout button seamlessly into your React application or any other web framework. This guide will walk you through the steps to ensure a smooth integration experience.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Integration Steps](#integration-steps)
- [Customization](#customization)
- [Potential Issues & Solutions](#potential-issues--solutions)
- [Sample Project](#sample-project)

## Prerequisites 📋

- Ensure you have a valid `publishable-key` from your KohortPay dashboard.
- Familiarity with React or the web framework you're using.

## Integration Steps 🛠️

1. **Include the Script**:

   - Place the KohortPay script in the `<head>` section of your HTML.
     ```html
     <script async src="YOUR_KOHORTPAY_SCRIPT_URL_HERE"></script>
     ```

2. **Add the Button**:

   - Place the KohortPay checkout button component in your React component or HTML where you want the button to appear.
     ```jsx
     <kohortpay-checkout-button
       id="kohortpay-button"
       publishable-key="YOUR_PUBLISHABLE_KEY_HERE"
       background-color="#ec395e"
       button-color="#FFFFFF"
       font="georgia, serif"
       border-style="1px solid #ec395e"
       border-radius="4px"
     >
       Checkout
     </kohortpay-checkout-button>
     ```

3. **Configuration**:
   - The `config` attribute is crucial. It's where you'll pass the `lineItems` for the products the user intends to purchase. You can also specify `successUrl` and `cancelUrl` here.
     ```jsx
     config='{
       "successUrl": "https://example.com/success", // it is optional
       "cancelUrl": "https://example.com/cancel",   // it is optional
       "lineItems": [                               // mendatory
         {
           "name": "Product Name",
           "price": 100,
           "quantity": 1,
           "description": "Product Description",
           "image_url": "https://example.com/product-image.jpg"
         }
       ]
     }'
     ```

## Customization 🎨

You can customize the appearance of the button using the following attributes:

- `background-color`: Sets the background color of the button.
- `button-color`: Sets the text color of the button.
- `font`: Specifies the font family of the button text.
- `border-style`: Defines the border style of the button.
- `border-radius`: Sets the border radius for rounded corners.

## Potential Issues & Solutions ⚠️

1. **Button Not Rendering**:

   - Ensure the KohortPay script is correctly placed in the `<head>` section.
   - Check if there are any JavaScript errors in the console.

2. **Configuration Issues**:

   - Ensure the `config` attribute is correctly formatted as a JSON string.
   - Ensure all required fields in `lineItems` are provided.

3. **Styling Issues**:
   - If the button doesn't appear as expected, ensure you've correctly set the customization attributes.
   - Avoid using global styles that might conflict with the button's styles.

## Sample Project 📁

For a hands-on example of integrating the KohortPay checkout button, check out our sample hosted project [here](link should be placed here). It provides a clear reference on how to properly set up the button in a real-world scenario.
