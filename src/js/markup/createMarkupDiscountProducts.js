import icon from '../../images/icons/icons.svg';

export function createMarkupDiscountProducts(data) {
  const markup = data
    .map(({ img, name, price, _id }) => {
      return `<li class="discount-products-item" data-cardId=${_id}>
          <div class="card-image-discount">
            <svg class="icon-discount" width="60" height="60">
              <use href="${icon}#icon-discount"></use>
            </svg>
            <img src="${img}" alt="${name}" />
          </div>
          <div class="discount-info-box">
          <p class="discount-card-text">${name}</p>
          <div class="discount-card-info">
            <p class="discount-card-text price">${price}</p>
            <button class="button-shopping-discount">
              <svg class="icon-shopping-discount" width="18" height="18">
                <use href="${icon}#icon-shopping-cart"></use>
              </svg>
            </button>
          </div></div>
          
        </li>`;
    })
    .join('');
  return markup;
}
