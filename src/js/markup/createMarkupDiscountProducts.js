import icon from '../../images/icons/icons.svg';
import { getFromLocalStg } from '../local-storadge/localstorage';
import { BASKET_KEY } from '../variables/variables';

function isProduct(product_id, arrProducts) {
  return arrProducts.some(({ product: { _id } }) => _id === product_id);
}

export function createMarkupDiscountProducts(data) {
  const arrProducts = getFromLocalStg(BASKET_KEY) || [];

  const markup = data
    .map(({ img, name, price, _id }) => {
      const disable = isProduct(_id, arrProducts) ? 'button-disabled' : '';

      const iconBasket = isProduct(_id, arrProducts)
        ? 'icon-checkbox'
        : 'icon-shopping-cart';

      return `<li data-id=${_id} class="discount-products-item common-card js-product-card" >
          <div class="card-image-discount">
            <svg class="icon-discount" width="60" height="60">
              <use href="${icon}#icon-discount"></use>
            </svg>
            <img class="js-product-img" src="${img}" alt="${name}" />
          </div>
          <div class="discount-info-box">
          <p class="discount-card-text">${name}</p>
          <div class="discount-card-info">
            <p class="discount-card-text price">$${price}</p>
            <button class="button-shopping-discount js-button-shopping ${disable}">
              <svg class="icon-shopping-discount" width="18" height="18">
                <use class="js-use-icon" href="${icon}#${iconBasket}"></use>
              </svg>
            </button>
          </div></div>

        </li>`;
    })
    .join('');
  return markup;
}
