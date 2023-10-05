import React from "react";

function Product({ name, price, description, imageUrl, addToCart }) {
  return (
    <div
      className="product"
      data-name={name}
      data-price={price}
      data-description={description}
    >
      <img src={imageUrl} alt={name} />
      <p>Name: {name}</p>
      <p>Price: ${price / 100}</p>
      <p>Description: {description}</p>
      <button onClick={() => addToCart(name, price, description, imageUrl)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
