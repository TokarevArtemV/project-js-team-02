import { GetProduct } from './products-api/api';

const getProduct = new GetProduct();

export async function getCategories() {
  const arrCategories = await getProduct.getCategories();
  return arrCategories;
}
