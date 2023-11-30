import icon from '../../images/icons/icons.svg';
import { productsInBasket } from '../getProductFormBasket';

//////

const arrProducts = productsInBasket() || [];

//////

function countOfProducts(productId) {
  let counter;
  arrProducts.forEach(({ _id, amount }) => {
    if (_id === productId) {
      counter = Number(amount);
    }
  });

  return counter || 0;
}

////////

export function createMarkupBasketProductsCard(data) {
  const markup = data
    .map(({ img, name, category, price, size, _id }) => {
      const counter = countOfProducts(_id);

      return `<div class="product-cart-js js-basket-card" data-cardId=${_id}>
          <div class="basket-img-box">
            <img src="${img}" alt="${name}" class="product-image" />
          </div>
          <div class="product-details">
            <button class="remove-button">
              <svg class="icon-close" id="cart-icon-close" width="18" height="18">
                <use href="${icon}#icon-close-sharp"></use>
              </svg>
            </button>
            <h2 class="product-name">${name}</h2>
            <div class="cart-product-box">
              <p class="product-basket-text category">
                Category:&nbsp;&nbsp;<span class="category-style" >${category.replaceAll(
                  '_',
                  ' '
                )}</span>
              </p>
              <p class="product-basket-text size">
                Size:&nbsp;&nbsp;<span class="size-slyle">${size}</span>
              </p>
            </div>
            <div class="price-and-counter-wrapper">
            <p class="product-price">$ ${price
              .toString()
              .replaceAll('.', ',')}</p>
              <div class="counter-box">
              <button id="minus" class="item-decrease-counter"><svg class="cart-minus" width="14" height="14">
    <use href="${icon}#icon-minus"></use>
  </svg></button>
              <span class="item-counter-span">${counter}</span>
              <button id="plus" class="item-increase-counter"><svg class="cart-plus" width="14" height="14">
    <use href="${icon}#icon-plus"></use>
  </svg></button>
              </div>
              </div>
          </div>
        </div>`;
    })
    .join('');

  return markup;
}
