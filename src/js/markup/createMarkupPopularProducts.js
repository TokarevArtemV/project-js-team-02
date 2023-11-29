import icon from '../../images/icons/icons.svg';
import { productsInBasket } from '../getProductFormBasket';

function isProduct(product, arrProducts) {
  for (let key in arrProducts) {
    if (Object.hasOwnProperty.call(arrProducts, key)) {
      const element = arrProducts[key];
      if (Object.values(element).includes(product)) {
        return Object.values(element).includes(product);
      }
    }
  }
}

export function createMarkupPopularProducts(data) {
  const arrProducts = productsInBasket() || [];

  const markup = data
    .map(({ img, name, category, size, popularity, _id, is10PercentOff }) => {
      const disable = isProduct(_id, arrProducts) ? 'js-button-disabled' : '';

      const iconBasket = isProduct(_id, arrProducts)
        ? 'icon-checkbox'
        : 'icon-shopping-cart';

      if (is10PercentOff) {
        return `<li data-id=${_id} class="popular-products-item common-card js-popular-card ${disable}" >
                <svg class="icon-popular-discount" width="30" height="30">
                    <use href="${icon}#icon-discount"></use>
                </svg>
                <div class="card-image">
                  <img src="${img}" alt="${name}" />
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
                <button class="button-shopping js-button-popular ${disable}">
                  <svg class="icon-shopping" width="12" height="12">
                    <use href="${icon}#${iconBasket}"></use>
                  </svg>
                </button>
              </li>`;
      }

      return `<li data-id=${_id} class="popular-products-item common-card js-popular-card ${disable}" >
                <div class="card-image">
                  <img src="${img}" alt="${name}" />
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
                <button class="button-shopping js-button-popular ${disable}">
                  <svg class="icon-shopping" width="12" height="12">
                    <use href="${icon}#${iconBasket}"></use>
                  </svg>
                </button>
              </li>`;
    })
    .join('');
  return markup;
}
