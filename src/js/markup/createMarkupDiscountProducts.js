export function createMarkupDiscountProducts(data) {
  const markup = data
    .map(({ img, name, price }) => {
      return `<li class="discount-products-item">
          <div class="card-image-discount">
            <svg class="icon-discount" width="60" height="60">
              <use href="./images/icons/icons.svg#icon-discount"></use>
            </svg>
            <img src="${img}" alt="${name}" />
          </div>
          <div class="discount-card-info">
            <p class="discount-card-text">${name}</p>
            <p class="discount-card-text price">${price}</p>
            <button class="button-shopping-discount">
              <svg class="icon-shopping-discount" width="18" height="18">
                <use href="./images/icons/icons.svg#icon-shopping-cart"></use>
              </svg>
            </button>
          </div>
        </li>`;
    })
    .join('');
  return markup;
}