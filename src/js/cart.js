import { updateCartTitle } from './header';
import { updateCartContent } from './cartContentBasket';
import { updateTotal } from './totalSum';
import { setupCheckoutButton } from './checkoutBasket.js';
import { setupDeleteAllButton } from './deleteAll';
import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
import { incrementCount, decrementCount } from './changeBasketCountProduct';

document.addEventListener('DOMContentLoaded', () => {
  const cartTitle = document.getElementById('cartTitle');
  const cartContent = document.getElementById('cartContent');
  const emptyMessage = document.getElementById('emptyMessage');
  const sumElement = document.getElementById('sum'); 

  const removeProduct = (productId) => {
    let cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData = cartData.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cartData));
    window.location.reload();
  };

  const calculateTotal = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    updateTotal(cartData);
  };

  const deleteAllButton = document.querySelector('.delete-all-button');
  setupDeleteAllButton(deleteAllButton);

  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      removeProduct(productId);
    });
  });

  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartTitle(cartData);
  updateCartContent(cartData);
  calculateTotal();
});
