export function clearBasket() {
  localStorage.removeItem('BASKET');

  updateCartContent([]);
}

