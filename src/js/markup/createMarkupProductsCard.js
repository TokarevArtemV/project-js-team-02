export function createMarkupProducts(data) {
    const markup = data
        .map(({ img, name, category, size, popularity, price, _id }) => {
            return `<li data-id="${_id}" class="js-product-card">
                <div class="image-product">
                    <img class="image" src="${img}" alt="${name}" />
                </div>
                <div class="info-product">
                    <h3 class="name-product">${name}</h3>
                    <p class="characteristics-product">
                        Category:<span class="details-product">${category.replaceAll('_', ' ')}</span> Size:<span
                            class="details-product">${size}</span>
                        Popularity:<span class="details-product">${popularity}</span>
                    </p>
                </div>
                <div class="price">
                    <p class="price-product">${price}</p>
                    <button class="js-button-shopping">
                    <svg class="icon-shopping" width="28" height="28">
                        <use href="./images/icons/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    </button>
                </div>
            </li>`;
        })
        .join('');
    return markup;
}
