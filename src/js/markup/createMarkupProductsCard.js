import icon from '../../images/icons/icons.svg';

export function createMarkupProducts(data) {
  const markup = data
    .map(
      ({
        img,
        name,
        category,
        size,
        popularity,
        price,
        _id,
        is10PercentOff,
      }) => {
        if (is10PercentOff) {
          return `<li data-id="${_id}" class="product-card js-product-card">
                <div class="image-product">
                <svg class="icon-discount" width="60" height="60">
              <use href="${icon}#icon-discount"></use>
            </svg>
                    <img class="image" src="${img}" alt="${name}" />
                </div>
                <div class="info-product">
                    <h3 class="name-product">${name}</h3>
                    <p class="characteristics-product">
                        Category:<span class="details-product">${category.replaceAll(
                          '_',
                          ' '
                        )}</span> Size: <span
                            class="details-product">${size}</span>
                        Popularity: <span class="details-product">${popularity}</span>
                    </p>
                </div>
                <div class="product-card-price">
                    <p class="price-product">${price}</p>
                    <button class="js-button-shopping">
                    <svg class="icon-shopping-card" width="28" height="28">
                        <use href="${icon}#icon-shopping-cart"></use>
                    </svg>
                    </button>
                </div>
            </li>`;
        } else {
          return `<li data-id="${_id}" class="product-card js-product-card">
                <div class="image-product">
                    <img class="image" src="${img}" alt="${name}" />
                </div>
                <div class="info-product">
                    <h3 class="name-product">${name}</h3>
                    <p class="characteristics-product">
                        Category:<span class="details-product">${category.replaceAll(
                          '_',
                          ' '
                        )}</span> Size: <span
                            class="details-product">${size}</span>
                        Popularity: <span class="details-product">${popularity}</span>
                    </p>
                </div>
                <div class="product-card-price">
                    <p class="price-product">${price}</p>
                    <button class="js-button-shopping">
                    <svg class="icon-shopping-card" width="28" height="28">
                        <use href="${icon}#icon-shopping-cart"></use>
                    </svg>
                    </button>
                </div>
            </li>`;
        }
      }
    )
    .join('');
  return markup;
}
