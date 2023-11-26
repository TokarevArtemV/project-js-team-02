import { refs } from './refs'
import { GetProduct } from './products-api/api';
import { createMarkupModalProductCard } from './markup/createMarkupModalProductCard';
import { appendMarkup } from './markup/appendMarkup';
import { getProductsFromServer } from './loadProduct';

const getModalProduct = new GetProduct();

// console.log(getModalProduct.getProductId(productId));



function openModal(){
    refs.modal.style.display = 'block';
}

function closeModal(){
    refs.modal.style.display = 'none';
}

refs.modal.addEventListener("click", closeModal);

refs.productCardsContainer.addEventListener("click", (evt) => {
    const idCard = evt.target.closest(".product-card");
    const dataCardID = idCard.dataset.cardid;



    if(idCard){
        openModal();
    }
    console.log(idCard);

    async function getProductId() {
        const objModal = await getModalProduct.getProductId(dataCardID);
        appendMarkup(refs.modal, createMarkupModalProductCard(objModal));
    }

    console.log(dataCardID);
    getProductId();
});

