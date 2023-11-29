import { loadOff } from '../loadStateForLoader';

export function appendMarkup(parentEl, markup, selectorEl) {
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('beforeend', markup);
  // console.log('appendMarkup');
  // document.querySelector(`.${selectorEl}`).onload = () => {};
  loadOff();
}

export function appendMarkupAfterBegin(parentEl, markup) {
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
  // console.log('appendMarkupAfterBegin');
  // document.querySelector('.image-product').onload = () => {};
  loadOff();
}

export function appendMarkupAfterbeginWithoutReset(parentEl, markup) {
  parentEl.insertAdjacentHTML('afterbegin', markup);
  // console.log('appendMarkupAfterbeginWithoutReset');
  // document.querySelector('.image-product').onload = () => {};
  loadOff();
}
