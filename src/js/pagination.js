import { refs } from './refs';
import icon from '../images/icons/icons.svg';

function onPaginationRibbonItems(pageIndex, pages) {
  const pageIndexObj = {
    indexOne: 1,
    indexTwo: '',
    indexThree: '',
    indexFour: '',
    indexFive: pages,
  };

  if (pages <= 5) {
    pageIndexObj.indexTwo = 2;
    pageIndexObj.indexThree = 3;
    pageIndexObj.indexFour = 4;
  }
  //передаєм "..." на третю позицію, якщо більше 5-ти сторінок і активна сторінка або 1,2, або передостання, остання
  if (pages > 5 && (pageIndex <= 2 || pageIndex >= pages - 1)) {
    pageIndexObj.indexTwo = 2;
    pageIndexObj.indexThree = '...';
    pageIndexObj.indexFour = pages - 1;
  }
  //передаєм "..." на другу або четверту позицію, якщо більше 5-ти сторінок і активна сторінка більша за 3 або меньша за перед-передостанню
  if (pages > 5 && pageIndex > 3 && pageIndex < pages - 2) {
    pageIndexObj.indexTwo = '...';
    pageIndexObj.indexThree = pageIndex;
    pageIndexObj.indexFour = '...';
  }
  //передаєм "..." на другу позицію, якщо більше 5-ти сторінок і активна сторінка - перед-передостання
  if (pages > 5 && pageIndex === pages - 2) {
    pageIndexObj.indexTwo = '...';
    pageIndexObj.indexThree = pages - 2;
    pageIndexObj.indexFour = pages - 1;
  }
  //передаєм "..." на четверту позицію, якщо більше 5-ти сторінок і активна сторінка - третя
  if (pages > 5 && pageIndex === 3) {
    pageIndexObj.indexTwo = 2;
    pageIndexObj.indexThree = 3;
    pageIndexObj.indexFour = '...';
  }
  const pageIndexArr = [];
  pageIndexArr.push(
    pageIndexObj.indexOne,
    pageIndexObj.indexTwo,
    pageIndexObj.indexThree,
    pageIndexObj.indexFour,
    pageIndexObj.indexFive,
    pageIndexObj.leftBtn,
    pageIndexObj.rightBtn
  );
  return pageIndexArr;
}

function onPaginationMarkup(pageIndex, pages) {
  const ribbonArr = onPaginationRibbonItems(pageIndex, pages);
  const leftBtn = `<button id="left-button" type="button" class="pag-btn pag-item">
    <svg class="arrow-icon" width="24" height="24">
      <use href="${icon}#icon-caret-small-left"></use>
    </svg>
  </button>
  <ul class="pag-wrapper">`;
  const rightBtn = `</ul>
  <button id="right-button" type="button" class="pag-btn pag-item">
    <svg class="arrow-icon" width="24" height="24">
      <use href="${icon}#icon-caret-small-right"></use>
    </svg>
  </button>`;
  let pageItems;
  if (pages <= 5) {
    pageItems = pages;
  } else {
    pageItems = 5;
  }
  let markupArr = [];
  for (let i = 0; i < pageItems; i++) {
    let buttonId;
    if (ribbonArr[i] === '...') {
      buttonId = 'dots' + i;
    } else {
      buttonId = ribbonArr[i];
    }
    markupArr.push(
      `<li class="list"><button id="${buttonId}" type="button" class="pag-item">${ribbonArr[i]}</button></li>`
    );
  }
  markupArr.unshift(leftBtn);
  markupArr.push(rightBtn);

  return markupArr.join('');
}

export function onPaginationRender(pageIndex, pages) {
  refs.pagesRibbonEL.innerHTML = '';
  refs.pagesRibbonEL.classList.remove('visually-hidden');

  if (pages === 1) {
    refs.pagesRibbonEL.classList.add('visually-hidden');
    return;
  }
  const markup = onPaginationMarkup(pageIndex, pages);

  refs.pagesRibbonEL.insertAdjacentHTML('afterbegin', markup);

  if (pageIndex === 1) {
    document.getElementById('left-button').classList.add('disabled');
  }
  if (pageIndex === pages) {
    document.getElementById('right-button').classList.add('disabled');
  }
  const dotItemsEl = document.querySelectorAll('.pag-item');
  dotItemsEl.forEach(item => {
    if (item.textContent === '...') {
      item.classList.add('pag-inactive');
    }
    if (Number(item.textContent) === pageIndex) {
      item.classList.add('pag-active');
    }
  });
}
