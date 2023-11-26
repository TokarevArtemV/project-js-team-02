import icon from '../../images/icons/icons.svg';

export function createMarkupProducts(data) {
  const markup = data
    .map(({ img, name, category, size, popularity, price, _id }) => {
      return `<div class="product-card" data-cardId=${_id}>
                <div class="image-product">
                    <img class="image" src="${img}" alt="${name}" />
                </div>
                <div class="info-product">
                    <h3 class="name-product">${name}</h3>
                    <p class="characteristics-product">
                        Category:<span class="details-product">${category.replaceAll(
                          '_',
                          ' '
                        )}</span> Size:<span
                            class="details-product">${size}</span>
                        Popularity:<span class="details-product">${popularity}</span>
                    </p>
                </div>
                <div class="price">
                    <p class="price-product">${price}</p>
                    <button class="button-shopping">
                    <svg class="icon-shopping" width="28" height="28">
                        <use href="${icon}#icon-shopping-cart"></use>
                    </svg>
                    </button>
                </div>
            </div>`;
    })
    .join('');
  return markup;
}
