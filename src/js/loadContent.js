import { getProductsFromServer } from './loadProduct';
import { loadOn, loadOff } from './loadStateForLoader';
// refs.pagesRibbonEL.addEventListener('click', onLoadContent);

export function onLoadContent(e) {
  try {
    loadOn();
    const localStorageObj = JSON.parse(localStorage.getItem('FILTERS_ITEM'));
    const currentPage = localStorageObj.page;
    const clickedBtn = e.target.closest('.pag-item').id;
    let buttonId;
    if (clickedBtn === 'left-button') {
      buttonId = currentPage - 1;
    } else if (clickedBtn === 'right-button') {
      buttonId = currentPage + 1;
    } else {
      buttonId = Number(clickedBtn);
    }
    if (Number(clickedBtn) === currentPage) {
      return;
    }
    localStorageObj.page = buttonId;
    localStorage.setItem('FILTERS_ITEM', JSON.stringify(localStorageObj));
    getProductsFromServer();
  } catch (error) {
    loadOff();
    return;
  }
}
