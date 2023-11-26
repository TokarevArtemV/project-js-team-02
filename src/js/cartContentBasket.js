import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';

export function updateCartContent(cartData) {
  const cartContent = document.getElementById('cartContent');
  const emptyMessage = document.getElementById('emptyMessage');

  if (cartData.length > 0) {
    cartContent.innerHTML = createMarkupBasketProductsCard(cartData);
    emptyMessage.style.display = 'none';
  } else {
    cartContent.style.visibility = 'hidden';
    emptyMessage.style.display = 'block';
  }
}
