import icon from '../../images/icons/icons.svg';

export function createMarkupBasketProductsCard(data) {
  const markup = data
    .map(({ img, name, category, price, size }) => {
      return `<div class="product-cart">
  
  <img src="${img}" alt="${name}" class="product-image" />
  
  <div class="product-details">
    <h2 class="product-name">${name}</h2>
    <div class="cart-product-box">
      <p class="product-category">
    <span class="category-slyle">${category.replaceAll('_', ' ')}</span>
      </p>
      <p class="product-size">
        <span class="size-slyle">${size}</span>
      </p>
    </div>
    <p class="product-price">${price}</p>

  </div>
</div>
`;
    })
    .join('');

  return markup;
}
