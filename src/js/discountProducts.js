import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupDiscountProducts } from './markup/createMarkupDiscountProducts';
import { appendMarkup } from './markup/appendMarkup';

export async function getDiscountProducts() {
  const getProduct = new GetProduct();
  const objDiscount = await getProduct.getDiscount();
  objDiscount.splice(2);
  appendMarkup(refs.discountProdEl, createMarkupDiscountProducts(objDiscount));
}
