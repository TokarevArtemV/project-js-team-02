import { GetProduct } from "./js/products-api/api";


const getProduct = new GetProduct();
async function getPopular() {
  const objPopular = await getProduct.getPopular();
  console.log(objPopular);
}

getPopular(data);