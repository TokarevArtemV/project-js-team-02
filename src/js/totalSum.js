export function updateTotal(cartData) {
  const sumElement = document.getElementById('sum');
  const total = cartData.reduce((sum, product) => sum + product.price, 0);
  sumElement.textContent = `Sum: ${total}`;
}
