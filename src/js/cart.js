import "./header.js"
import { cartCount } from './cartCount';
import { cartStorege } from './header.js'
const itemsNumbersCart = document.querySelector('.item-number-cart')
cartCount(cartStorege, itemsNumbersCart);