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

export function createMarkupDiscountProducts(data) {
  const arrProducts = productsInBasket() || [];

  const markup = data
    .map(({ img, name, price, _id }) => {
      const disable = isProduct(_id, arrProducts) ? 'js-button-disabled' : '';

      const iconBasket = isProduct(_id, arrProducts)
        ? 'icon-checkbox'
        : 'icon-shopping-cart';

      return `<li data-id=${_id} class="discount-products-item common-card js-discount-card ${disable}" >
          <div class="card-image-discount">
            <svg class="icon-discount" width="60" height="60">
              <use href="${icon}#icon-discount"></use>
            </svg>
            <img src="${img}" alt="${name}" />
          </div>
          <div class="discount-info-box">
          <p class="discount-card-text">${name}</p>
          <div class="discount-card-info">
            <p class="discount-card-text price">$${price}</p>
            <button class="button-shopping-discount js-button-discount ${disable}">
              <svg class="icon-shopping-discount" width="18" height="18">
                <use href="${icon}#${iconBasket}"></use>
              </svg>
            </button>
          </div></div>
          
        </li>`;
    })
    .join('');
  return markup;
}
