import { countCartProducts } from './cartCount';

// функция сохранения параметров поиска в локальное хранилище

export function saveSerchParamsToLocStg(serchParams) {
  localStorage.setItem('FILTERS_ITEM', JSON.stringify(serchParams));
}

export function saveProductsToBasket(arrProducts) {
  localStorage.setItem('BASKET', JSON.stringify(arrProducts));
  countCartProducts();
}
