import { GetProduct } from './products-api/api';

export async function getCategories() {
  const getProduct = new GetProduct();
  const arrCategories = await getProduct.getCategories();
  return arrCategories;
}
