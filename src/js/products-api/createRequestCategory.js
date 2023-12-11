import { GetProduct } from './api';

export async function getCategories() {
  const getProduct = new GetProduct();
  const arrCategories = await getProduct.getCategories();
  return arrCategories;
}
