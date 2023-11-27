import { refs } from './refs';

export function loadOn() {
  refs.modalWindowEl.classList.remove('is-hidden');
}

export function loadOff() {
  refs.modalWindowEl.classList.add('is-hidden');
}
