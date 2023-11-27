import './header';
import { modalProductCard } from './getProductFormBasket';

import { updateCartContent } from './cartContentBasket';
import { removeProduct } from './removeProduct';
import { clearBasket } from './deleteAll';
import { updateTotal } from './updateTotal';

document.addEventListener('DOMContentLoaded', () => {
  const cartData = JSON.parse(localStorage.getItem('BASKET')) || [];

  updateCartContent(cartData);

  updateTotal(cartData);

  const cartContent = document.getElementById('cartContent');
  const clearAllButton = document.getElementById('clearAllButton');

  cartContent.addEventListener('click', event => {
    const removeButton = event.target.closest('.remove-product-button');

    if (removeButton) {
      const productId = removeButton.dataset.id;
      removeProduct(productId);
    }
  });

  clearAllButton.addEventListener('click', () => {
    clearBasket();
  });
});

modalProductCard();
