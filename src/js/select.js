import SlimSelect from 'slim-select';
import { getCategories } from './createRequestCategory';
import { markupOptionsCategory } from './markup/markupOptionsCategory';
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
      },
    },
  });
}
