# KohortPay Checkout Button Integration Guide (HTML, CMS) 🛍️

Welcome to the KohortPay Checkout Button integration guide. This document provides a detailed walkthrough on how to seamlessly integrate the KohortPay Checkout Button into your website, be it a simple HTML site or any CMS. By the end of this guide, you'll have a clear understanding of the integration process, customization options, and best practices.

## Table of Contents 📖

1. [Introduction](#1-introduction) 🚀
2. [Prerequisites](#2-prerequisites) 📋
3. [Integration Steps](#3-integration-steps) 🛠️
4. [Customization Options](#4-customization-options) 🎨
5. [Detailed Configuration Guide](#5-detailed-configuration-guide) 🔧
6. [Sample Integration](#6-sample-integration) 🌐
7. [FAQs](#7-faqs) ❓
8. [Support](#8-support) 

## 1. Introduction

KohortPay offers a simple yet powerful checkout solution that allows developers and website owners to integrate a payment system effortlessly. The KohortPay Checkout Button is designed to be embedded on your site, enabling users to make payments with just a few clicks.

## 2. Prerequisites

- A KohortPay account.
- Your publishable key (found in your KohortPay dashboard).
- Basic knowledge of HTML.

## 3. Integration Steps

### Step 1: Include the Script

First, include the KohortPay script in the `<head>` section of your HTML:

```html
<script async src="https://js.kohortpay.com/checkout-button.js"></script> 
```

### Step 2: Add the Button

Embed the KohortPay Checkout Button in your desired location:

```html
<kohortpay-checkout-button
    id="kohortpay-button"
    publishable-key="YOUR_PUBLISHABLE_KEY_HERE">
</kohortpay-checkout-button>
```

Replace `YOUR_PUBLISHABLE_KEY_HERE` with your actual publishable key founded in your Dashboard

### Step 3: Configuration

The button accepts a `background-color`,`button-color`,`font`, `border-style`  ,`border-radius`,  `config`  attributes where you can specify details like `lineItems`, `successUrl`, and `cancelUrl`. 

Example:

```html
config='{
    "lineItems": [
        {
            "name": "Product Name",
            "price": 1000,  // Price is taxes included.
            "quantity": 1,
            "description": "Product Description", // optional
            "image_url": "https://example.com/image.jpg" //optional
        }
    ],
    "customerFirstName": "John", //optional
    "customerLastName": "Doe",   //optional
    "customerEmail": "john.doe@example.com", //optional
    "metadata": {  //optional
        "additionalData": "Any additional data you want to send"
    },
    "successUrl": "https://yourwebsite.com/success",  //optional
    "cancelUrl": "https://yourwebsite.com/cancel"    //optional
}
'
```

## 4. Customization Options

The KohortPay Checkout Button is designed to be fully customizable. Here are the attributes you can modify:

- `background-color`: Sets the button's background color.
- `button-color`: Sets the button's text color.
- `font`: Specifies the font family for the button text.
- `border-style`: Defines the button's border style.
- `border-radius`: Sets the button's border radius for rounded corners.

## Detailed Configuration Guide

The KohortPay Checkout Button is designed to be both flexible and user-friendly. While there are certain parameters that are essential for the button to function correctly, many are optional and allow for customization based on your specific needs.

### Essential Parameters:

1. **publishable-key**: This is your unique identifier provided by KohortPay. It's crucial for the button to communicate with the KohortPay system. You'll have both a `test` and a `live` key. Use the `test` key for testing purposes and the `live` key for actual transactions.

2. **lineItems**: This is an array that contains the details of the items/products that the user intends to purchase. Each item in this array should have the following properties:
   - **name**: The name of the product.
   - **price**: The price of the product (in cents). For example, for a price of $10, you'd input 1000. **This price is taxes included.**
   - **quantity**: The number of units of the product. This allows for bulk purchases. The total price is automatically calculated based on the `price` and `quantity`.
   - **description** (optional): A brief description of the product.
   - **image_url** (optional): A direct link to the product's image.

### Optional Parameters:

1. **successUrl**: If specified, this URL will override the success URL set up in the KohortPay dashboard. It's the URL where users are redirected after a successful payment.

2. **cancelUrl**: Similarly, if specified, this URL will override the cancel URL set up in the KohortPay dashboard. It's where users are redirected if they cancel the payment process.

3. **font**, **background-color**, **button-color**, **border-style**, and **border-radius**: These are all styling attributes that allow you to customize the appearance of the button to match your website's design.

5. **customerFirstName**: The first name of the customer making the purchase.

6. **customerLastName**: The last name of the customer making the purchase.

7. **customerEmail**: The email address of the customer. This can be used by KohortPay to send transaction confirmations or receipts.

8. **metadata**: Any additional data you want to pass along with the transaction. This can be useful for tracking or analytics purposes.

### Important Notes:

- **Overriding Dashboard Settings**: If you specify the `successUrl` and `cancelUrl` in the button configuration, these will take precedence over the URLs set up in the KohortPay dashboard. This provides flexibility, especially if you want different success or cancel URLs for different products or pages.

- **Quantity and Price Calculation**: The total price for each product is automatically calculated by multiplying the `price` by the `quantity`. This total is then used in the checkout process.

- **Test vs. Live Keys**: It's essential to use the correct key based on your needs. The `test` key allows you to simulate transactions without any real money being exchanged. This is perfect for testing the integration and ensuring everything works as expected. Once you're ready to go live, replace the `test` key with the `live` key.

here is an Example:
```html
<kohortpay-checkout-button
      id="kohortpay-button"
      publishable-key="published_key"
      background-color="#ec395e"
      button-color="#FFFFFF"
      font="georgia, serif"
      border-style="1px solid #ec395e"
      border-radius="4px"
      // config passed dynamically or static
>
```

By understanding and correctly utilizing these parameters, you can ensure a smooth integration of the KohortPay Checkout Button into your website. Whether you're looking to provide a simple single-item checkout or a more complex cart system, the flexibility of the KohortPay button has got you covered. Remember to always test thoroughly before going live to ensure the best experience for your users.

#### Important Notes:
Overriding Dashboard Settings: If you specify the successUrl and cancelUrl in the button configuration, these will take precedence over the URLs set up in the KohortPay dashboard. This provides flexibility, especially if you want different success or cancel URLs for different products or pages.

Quantity and Price Calculation: The total price for each product is automatically calculated by multiplying the price by the quantity. This total is then used in the checkout process.

Test vs. Live Keys: It's essential to use the correct key based on your needs. The test key allows you to simulate transactions without any real money being exchanged. This is perfect for testing the integration and ensuring everything works as expected. Once you're ready to go live, replace the test key with the live key.



## 5. Sample Integration

Refer to the sample website we created using plain HTML. This example showcases a simple e-commerce site with multiple products and an integrated KohortPay Checkout Button.

[Link to Sample Integration](#) <!-- TODO: Add the actual link -->

## 6. FAQs

**Q:** Can I integrate the KohortPay button on multiple pages of my website?  
**A:** Absolutely! You can integrate the button on as many pages as you need.

**Q:** Is it possible to style the button differently on different pages?  
**A:** Yes, you can customize the button's appearance on each page using the provided attributes.

## 7. Support

If you encounter any issues or have questions, please reach out to our support team at [support@kohortpay.com](mailto:support@kohortpay.com).

---

This README provides a comprehensive guide to integrating the KohortPay Checkout Button. Remember, the key to a successful integration is understanding your platform and the tools at your disposal. Happy coding!
