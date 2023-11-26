import icon from '../../images/icons/icons.svg';

export function createMarkupBasketProductsCard(data) {
  const markup = data
    .map(({ img, name, category, price, size }) => {
      return `<div class="product-cart-js">
          <div class="basket-img-box">
            <img src="${img}" alt="${name}" class="product-image" />
          </div>
          <div class="product-details">
            <button class="remove-button">
              <svg class="icon-close" width="18" height="18">
                <use href="./images/icons/icons.svg#icon-close-sharp"></use>
              </svg>
            </button>
            <h2 class="product-name">${name}</h2>
            <div class="cart-product-box">
              <p class="product-basket-text">
                Category: <span class="category-slyle">${category}</span>
              </p>
              <p class="product-basket-text">
                Size: <span class="size-slyle">${size}</span>
              </p>
            </div>
            <p class="product-price">${price}</p>
          </div>
        </div>`;
    })
    .join('');

  return markup;
}
