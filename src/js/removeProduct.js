export function removeProduct(productId) {
  const basket = JSON.parse(localStorage.getItem('BASKET')) || [];

  const updatedBasket = basket.filter(product => product._id !== productId);

  localStorage.setItem('BASKET', JSON.stringify(updatedBasket));

  updateCartContent(updatedBasket);
}
