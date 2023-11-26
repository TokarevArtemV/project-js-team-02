import SlimSelect from 'slim-select';
import { GetProduct } from './products-api/api';
import { getCategories } from './createRequestCategory';
import { markupOptionsCategory } from './markupOptionsCategory';
import { saveSerchParamsToLocStg } from './saveSerchParamsToLocStg';
import { getProductsFromServer } from './loadProduct';
import { setSerchParams } from './search';
import { updateLocStor } from './search';
import { refs } from './refs';

// инициализация библиотеки сортировки

new SlimSelect({
  select: '.home_categorias-sort',
  settings: {
    placeholderText: 'A-Z',
    showSearch: false,
    searchHighlight: true,
  },
  events: {
    // формирование запроса
    afterChange: newVal => {
      updateLocStor();
    },
  },
});

export async function loadPage() {
  // получение масива категорий
  const arrCategories = await getCategories();

  // создание разметки селекта
  const markupOptions = markupOptionsCategory(arrCategories);

  // отрисовка селекта
  refs.searchElCategories.insertAdjacentHTML('beforeend', markupOptions);

  // инициализация библиотеки поиска
  new SlimSelect({
    select: '.home_categorias-search',
    settings: {
      placeholderText: 'Categories',
      showSearch: false,
      searchHighlight: true,
    },
    events: {
      // формирование запроса
      afterChange: newVal => {
        updateLocStor();
        getProductsFromServer();
      },
    },
  });
}
