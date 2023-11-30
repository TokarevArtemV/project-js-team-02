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

export function createMarkupProducts(data) {
  const arrProducts = productsInBasket() || [];

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
        const disable = isProduct(_id, arrProducts) ? 'js-button-disabled' : '';

        const iconBasket = isProduct(_id, arrProducts)
          ? 'icon-checkbox'
          : 'icon-shopping-cart';

        if (is10PercentOff) {
          return `<li data-id="${_id}" class="product-card common-card js-product-card ${disable}">
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
                        <use href="${icon}#${iconBasket}"></use>
                    </svg>
                    </button>
                </div>
            </li>`;
        } else {
          return `<li data-id="${_id}" class="product-card common-card js-product-card ${disable}">
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
                        <use href="${icon}#${iconBasket}"></use>
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
