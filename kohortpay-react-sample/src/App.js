// App.js
import React, { useState } from "react";
import "./App.css";
import KohortPayButtonComponent from "./KohortPayButton";
import Product from "./product";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price, description, imageUrl) => {
    const newCartItem = { name, price, quantity: 1, description, imageUrl };
    setCart([...cart, newCartItem]);
  };

  const config = {
    lineItems: cart,
  };

  return (
    <div>
      <header>
        <p>Sample Page to Show Checkout KohortPayButton </p>
        <Product
          name="Casquette_KONGO"
          price={2000}
          description="This is a sample product."
          imageUrl="https://shop.kohortpay.com/cdn/shop/files/Casquette_KONGO.png?v=1692971762&width=2200"
          addToCart={addToCart}
        />

        <Product
          name="Chaussettes_KIKI"
          price={500}
          description="This is another sample product."
          imageUrl="https://shop.kohortpay.com/cdn/shop/files/Chaussettes_KIKI.png?v=1692974993&width=2200"
          addToCart={addToCart}
        />

        <Product
          name="Notebook_KOPA"
          price={1500}
          description="This is yet another sample product."
          imageUrl="https://shop.kohortpay.com/cdn/shop/files/Notebook_KOPA.png?v=1692977788&width=2200"
          addToCart={addToCart}
        />
        {/* ... Add other products similarly ... */}
        <div id="cart-info">
          <p>Total Products in Cart: {cart.length}</p>
        </div>
        <KohortPayButtonComponent
          publishableKey="sk_test_0fd333a2d2443303c530d52f541c477391f3bb6d59867f5a6823f59c4c597bf6b04147eac7f52b471de3df1874e309"
          background-color="#ec395e"
          button-color="#FFFFFF"
          font="georgia, serif"
          border-style="1px solid #ec395e"
          border-radius="4px"
          config={config}
        >
          GO TO CHECKOUT
        </KohortPayButtonComponent>
      </header>
    </div>
  );
}

export default App;
