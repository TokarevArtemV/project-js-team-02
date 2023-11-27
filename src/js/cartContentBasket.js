import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
const basket = [
  { _id: '640c2dd963a319ea671e383b', count: 1 },
  { _id: '640c2dd963a319ea671e376e', count: 3 },
  { _id: '640c2dd963a319ea671e3860', count: 4 },
  { _id: '640c2dd963a319ea671e385e', count: 3 },
  { _id: '640c2dd963a319ea671e376f', count: 2 },
  { _id: '640c2dd963a319ea671e3770', count: 1 },
  { _id: '640c2dd963a319ea671e3860', count: 1 },
];
localStorage.setItem('BASKET', JSON.stringify(basket));
export function updateCartContent(cartData) {
  const cartContent = document.getElementById('cartContent');
  const emptyMessage = document.getElementById('emptyMessage');

  if (cartData.length > 0) {
    const productCardsMarkup = cartData.map(createMarkupBasketProductsCard).join('');
    cartContent.innerHTML = productCardsMarkup;
    emptyMessage.style.display = 'none';
  } else {
    cartContent.innerHTML = '';
    emptyMessage.style.display = 'block';
  }
}

