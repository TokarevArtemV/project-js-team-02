import SlimSelect from 'slim-select';
import { getCategories } from './products-api/createRequestCategory';
import { createMarkupOptionsCategory } from './markup/createMarkupOptionsCategory';
import { updateLocStor } from './search';
import { createProductsCards } from './create-products-card/createProductsCards';
import { refs } from './refs';

// ініціалізація бібліотеки селекту сортування
export async function createSortCategories() {
  new SlimSelect({
    select: '.home_categorias-sort',
    settings: {
      placeholderText: 'A-Z',
      showSearch: false,
      searchHighlight: true,
    },
    events: {
      // формування запиту
      afterChange: newVal => {
        //  оновлення запису в локальном сховищі
        updateLocStor();
        //  відмалювання карток товарів
        createProductsCards();
      },
    },
  });
}

//////////
/////////
export async function createSelectCategories() {
  // получение масива категорий
  const arrCategories = await getCategories();

  // создание разметки селекта
  const markupOptions = createMarkupOptionsCategory(arrCategories);

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
        //  оновлення запису в локальном сховищі
        updateLocStor();
        //  відмалювання карток товарів
        createProductsCards();
      },
    },
  });
}
