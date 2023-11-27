export function updateTotal(cartData) {
  const sumElement = document.querySelector('.sum-span');
  const total = cartData.reduce((sum, product) => sum + product.price * product.count, 0);
  sumElement.textContent = `Sum: ${total}`;
}

