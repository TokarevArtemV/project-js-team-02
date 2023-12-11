import icon from '../../images/icons/icons.svg';
import { getFromLocalStg } from '../local-storadge/localstorage';
import { BASKET_KEY } from '../variables/variables';

function isProduct(product_id, arrProducts) {
  return arrProducts.some(({ product: { _id } }) => _id === product_id);
}

export function createMarkupProducts(data) {
  const arrProducts = getFromLocalStg(BASKET_KEY) || [];

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
        const disable = isProduct(_id, arrProducts) ? 'button-disabled' : '';

        const iconBasket = isProduct(_id, arrProducts)
          ? 'icon-checkbox'
          : 'icon-shopping-cart';

        if (is10PercentOff) {
          return `<li data-id="${_id}" class="product-card common-card js-product-card">
                <div class="image-product">
                <svg class="icon-discount" width="60" height="60">
                    <use href="${icon}#icon-discount"></use>
                </svg>
                    <img class="image js-product-img" src="${img}" alt="${name}" />
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
                    <p class="price-product">$${price}</p>
                    <button class="js-button-shopping ${disable}" >
                    <svg class="icon-shopping-card" width="28" height="28">
                        <use class="js-use-icon" href="${icon}#${iconBasket}"></use>
                    </svg>
                    </button>
                </div>
            </li>`;
        } else {
          return `<li data-id="${_id}" class="product-card common-card js-product-card">
                <div class="image-product">
                    <img class="image js-product-img" src="${img}" alt="${name}" />
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
                    <p class="price-product">$${price}</p>
                    <button class="js-button-shopping ${disable}">
                    <svg class="icon-shopping-card" width="28" height="28">
                        <use class="js-use-icon" href="${icon}#${iconBasket}"></use>
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
