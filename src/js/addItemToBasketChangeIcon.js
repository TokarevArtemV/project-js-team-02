// import { refs } from './refs';

// const KEY_BUSKET = 'BUSKET';
// const busketArr = JSON.parse(localStorage.getItem(KEY_BUSKET)) ?? [];

// refs.prodEl.addEventListener('click', onClick);

// function onClick(evt) {
//     evt.preventDafault();
//     if (evt.target.classList.contains('.js-button-shopping')) {
//         // debugger;
//         const product = findProduct(evt.target);
//         const inStorage = busketArr.some(({ _id }) => _id === product._id)

//         if (inStorage) {
//         //     const changeIcon = function (icon) {
//         //         icon.classList.replace();
//         //     }
//             return;
//         }

//         busketArr.push(product);
//         localStorage.setItem(KEY_BUSKET, JSON.stringify(busketArr));
//     }
// }

// function findProduct(element) {
//     const productId = Number(element.closest('.js-product-card').dataset.id);
//     return results.find(({ _id }) => _id === productId);
// }
// console.log(_id)
