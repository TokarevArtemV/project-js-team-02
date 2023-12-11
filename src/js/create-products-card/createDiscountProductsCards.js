import '../variables/variables.js';
import { refs } from '../refs.js';
import { GetProduct } from '../products-api/api.js';
import { createMarkupDiscountProducts } from '../markup/createMarkupDiscountProducts.js';
import { appendMarkup } from '../markup/appendMarkup.js';
import {
  setToLocalStg,
  getFromLocalStg,
} from '../local-storadge/localstorage.js';
import { DISCOUNT_PRODUCTS_KEY } from '../variables/variables.js';

export async function createDiscountProductsCards() {
  const getProduct = new GetProduct();
  let arrProducts = await getProduct.getDiscount();

  //запис до локального сховища товарів
  setToLocalStg(DISCOUNT_PRODUCTS_KEY, arrProducts);

  arrProducts = await getFromLocalStg(DISCOUNT_PRODUCTS_KEY);

  changingDiscProducts();

  function changingDiscProducts() {
    const randNumbers = getRandom(arrProducts.length);
    const newArrProducts = arrProducts.slice(
      randNumbers.firstNumber,
      randNumbers.secondNumber
    );

    appendMarkup(
      refs.discountProdEl,
      createMarkupDiscountProducts(newArrProducts)
    );
  }

  setInterval(() => {
    changingDiscProducts();
  }, 10000);
}

function getRandom(max) {
  let random = Math.floor(Math.random() * max);
  let firstNumber = random === max - 1 ? max - 2 : random;
  let secondNumber = firstNumber === max ? 2 : firstNumber + 2;
  return { firstNumber, secondNumber };
}
