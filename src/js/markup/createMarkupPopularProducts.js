import icon from '../../images/icons/icons.svg';

export function createMarkupPopularProducts(data) {
  const markup = data
    .map(({ img, name, category, size, popularity, _id, is10PercentOff }) => {
      if (is10PercentOff) {
        return `<li class="popular-products-item" data-cardId=${_id}>
                <svg class="icon-popular-discount" width="30" height="30">
                    <use href="${icon}#icon-discount"></use>
                </svg>
                <div class="card-image">
                  <img src="${img}" alt="${name}" />
                </div>
                <div class="card-info">
                  <h3 class="products-card-title">${name}</h3>
                  <p class="popular-cards-text category">
                    Category: <span>${category.replaceAll('_', ' ')}</span>
                  </p>
                  <div class="text-box">
                    <p class="popular-cards-text">Size: <span>${size}</span></p>
                    <p class="popular-cards-text">
                      Popularity: <span>${popularity}</span>
                    </p>
                  </div>
                </div>
                <button class="button-shopping">
                  <svg class="icon-shopping" width="12" height="12">
                    <use href="${icon}#icon-shopping-cart"></use>
                  </svg>
                </button>
              </li>`;
      }
      return `<li class="popular-products-item" data-cardId=${_id}>
                <div class="card-image">
                  <img src="${img}" alt="${name}" />
                </div>
                <div class="card-info">
                  <h3 class="products-card-title">${name}</h3>
                  <p class="popular-cards-text category">
                    Category: <span>${category.replaceAll('_', ' ')}</span>
                  </p>
                  <div class="text-box">
                    <p class="popular-cards-text">Size: <span>${size}</span></p>
                    <p class="popular-cards-text">
                      Popularity: <span>${popularity}</span>
                    </p>
                  </div>
                </div>
                <button class="button-shopping">
                  <svg class="icon-shopping" width="12" height="12">
                    <use href="${icon}#icon-shopping-cart"></use>
                  </svg>
                </button>
              </li>`;
    })
    .join('');
  return markup;
}
