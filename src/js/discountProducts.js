import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupDiscountProducts } from './markup/createMarkupDiscountProducts';

getDiscount();

async function getDiscount() {
  const getProduct = new GetProduct();
  const objPopular = await getProduct.getDiscount();
  objPopular.splice(2);
  const markupDiscount = createMarkupDiscountProducts(objPopular);
  refs.popularProdEl.innerHTML = '';
  refs.discountProdEl.insertAdjacentHTML('beforeend', markupDiscount);
}
