import { countCartProducts } from '../countCartProducts';
import { BASKET_KEY } from '../variables/variables';
import { getFromLocalStg, setToLocalStg } from '../local-storadge/localstorage';
import { changeIcons } from '../changeIcons';
import { GetProduct } from '../products-api/api';

export async function addProductInBasket(evt) {
  evt.preventDefault();

  if (
    evt.target.closest('.js-button-shopping') &&
    !evt.target
      .closest('.js-product-card')
      .classList.contains('js-button-disabled')
  ) {
    const basketArr = getFromLocalStg(BASKET_KEY) || [];

    const product = await createProductObj(evt.target);

    basketArr.push(product);

    setToLocalStg(BASKET_KEY, basketArr);

    const productCard = evt.target.closest('.js-product-card');

    //  оновлення іконок всіх товарів
    changeIcons(productCard.dataset.id);
    countCartProducts();
  }
}

export async function createProductObj(element) {
  const getPropuct = new GetProduct();

  const productId = element.closest('.js-product-card');
  const cardId = productId.dataset.id;

  const productData = await getPropuct.getProductId(cardId);
  const productObj = {
    product: {
      _id: productData._id,
      name: productData.name,
      img: productData.img,
      category: productData.category,
      price: productData.price,
      size: productData.size,
    },
    amount: 1,
  };

  return productObj;
}
