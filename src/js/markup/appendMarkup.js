export function appendMarkup(parentEl, markup) {
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('beforeend', markup);
}
