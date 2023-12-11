import icon from '../../images/icons/icons.svg';
import { BASKET_KEY } from '../variables/variables';
import { getFromLocalStg } from '../local-storadge/localstorage';

function isProduct(product_id, arrProducts) {
  return arrProducts.some(({ product: { _id } }) => _id === product_id);
}

export function createMarkupPopularProducts(data) {
  const arrProducts = getFromLocalStg(BASKET_KEY) || [];

  const markup = data
    .map(({ img, name, category, size, popularity, _id, is10PercentOff }) => {
      const disable = isProduct(_id, arrProducts) ? 'button-disabled' : '';

      const iconBasket = isProduct(_id, arrProducts)
        ? 'icon-checkbox'
        : 'icon-shopping-cart';

      if (is10PercentOff) {
        return `<li data-id=${_id} class="popular-products-item common-card js-product-card" >
                <svg class="icon-popular-discount" width="30" height="30">
                    <use href="${icon}#icon-discount"></use>
                </svg>
                <div class="card-image">
                  <img class="js-product-img" src="${img}" alt="${name}" />
                </div>
                <div class="card-info">
                  <h3 class="products-card-title">${name}</h3>
                  <p class="popular-cards-text">
                    Category: <span>${category.replaceAll('_', ' ')}</span>
                  </p>
                  <div class="text-box">
                    <p class="popular-cards-text">Size: <span>${size}</span></p>
                    <p class="popular-cards-text">
                      Popularity: <span>${popularity}</span>
                    </p>
                  </div>
                </div>
                <button class="button-shopping js-button-shopping ${disable}">
                  <svg class="icon-shopping" width="12" height="12">
                    <use class="js-use-icon" href="${icon}#${iconBasket}"></use>
                  </svg>
                </button>
              </li>`;
      }

      return `<li data-id=${_id} class="popular-products-item common-card js-product-card" >
                <div class="card-image">
                  <img class="js-product-img" src="${img}" alt="${name}" />
                </div>
                <div class="card-info">
                  <h3 class="products-card-title">${name}</h3>
                  <p class="popular-cards-text">
                    Category: <span>${category.replaceAll('_', ' ')}</span>
                  </p>
                  <div class="text-box">
                    <p class="popular-cards-text">Size: <span>${size}</span></p>
                    <p class="popular-cards-text">
                      Popularity: <span>${popularity}</span>
                    </p>
                  </div>
                </div>
                <button class="button-shopping js-button-shopping ${disable}">
                  <svg class="icon-shopping" width="12" height="12">
                    <use class="js-use-icon" href="${icon}#${iconBasket}"></use>
                  </svg>
                </button>
              </li>`;
    })
    .join('');
  return markup;
}
