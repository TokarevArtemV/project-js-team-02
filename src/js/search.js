import { GetProduct } from './products-api/api';
import { saveSerchParamsToLocStg } from './saveSerchParamsToLocStg';
import { getProductsFromServer } from './loadProduct';
import { refs } from './refs';

// формування запиту по сабміту
export async function getProductSearch(evt) {
  evt.preventDefault();
  updateLocStor();
  getProductsFromServer();
}

// формування параметрів для збереження в локальне сховище
export function setSerchParams() {
  const getProduct = new GetProduct();
  let objSearch = {};
  new FormData(refs.searchForm).forEach((value, key) => {
    objSearch[key] = value;
  });
  objSearch.page = getProduct.page;
  objSearch.limit = getProduct.perPage;
  return objSearch;
}

// оновлення данних в локальному сховищі
export function updateLocStor() {
  const serchParams = setSerchParams();
  saveSerchParamsToLocStg(serchParams);
}
