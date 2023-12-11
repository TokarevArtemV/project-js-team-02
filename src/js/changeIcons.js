import icon from '../images/icons/icons.svg';

export function changeIcons(cardID) {
  const cards = document.querySelectorAll(`[data-id = "${cardID}"]`);
  cards.forEach(productCard => {
    const iconEl = productCard.querySelector('.js-use-icon');
    if (iconEl.getAttribute('href').includes('checkbox')) {
      iconEl.setAttribute('href', `${icon}#icon-shopping-cart`);
      productCard
        .querySelector('.js-button-shopping')
        .classList.remove('button-disabled');
      return;
    }
    iconEl.setAttribute('href', `${icon}#icon-checkbox`);
    productCard
      .querySelector('.js-button-shopping')
      .classList.add('button-disabled');
  });
}
