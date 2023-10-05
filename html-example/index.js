let cart = [];

function addToCart(productDiv, button) {
  const name = productDiv.getAttribute("data-name");
  const price = parseInt(productDiv.getAttribute("data-price"));
  const description = productDiv.getAttribute("data-description");
  console.log({ name, price, quantity: 1, description });
  const imageUrl = productDiv.querySelector("img").src;

  cart.push({ name, price, quantity: 1, description, imageUrl: imageUrl });

  console.log(cart);

  document
    .getElementById("kohortpay-button")
    .setAttribute("config", JSON.stringify({ lineItems: cart }));
  console.log(productDiv.getAttribute("config"));
  document.getElementById("cart-count").textContent = cart.length;

  button.textContent = "Added to Cart";
  button.classList.add("added");
  button.disabled = true;
}
