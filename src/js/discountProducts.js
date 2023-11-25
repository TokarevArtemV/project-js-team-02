import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupDiscountProducts } from './markup/createMarkupDiscountProducts';
import { appendMarkup } from './markup/appendMarkup';

const getProduct = new GetProduct();
getDiscount();

async function getDiscount() {
  const objDiscount = await getProduct.getDiscount();
  objDiscount.splice(2);
  appendMarkup(refs.discountProdEl, createMarkupDiscountProducts(objDiscount));
}
