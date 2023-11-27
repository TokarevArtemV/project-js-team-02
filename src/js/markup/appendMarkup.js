export function appendMarkup(parentEl, markup) {
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('beforeend', markup);
}

export function appendMarkupAfterBegin(parentEl, markup) {
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

export function appendMarkupAfterbeginWithoutReset(parentEl, markup) {
  parentEl.insertAdjacentHTML('afterbegin', markup);
}
