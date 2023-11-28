import { refs } from './refs';

export function loadOn() {
  refs.modalWindowEl.classList.remove('is-modal-hidden');
}

export function loadOff() {
  refs.modalWindowEl.classList.add('is-modal-hidden');
}
