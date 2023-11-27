import throttle from 'lodash.throttle';

// ------------------------------валідація форми
export function validateInput(inputEl, btnEl) {
  inputEl.addEventListener('input', throttle(onInput, 700));
  function onInput() {
    const isValid = this.validity.valid;
    console.log(isValid);
    btnEl.disabled = true;
    if (isValid) {
      btnEl.disabled = false;
    }
  }
}
