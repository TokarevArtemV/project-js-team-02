import { refs } from './refs'
import { GetProduct } from './products-api/api';
import { createMarkupModalProductCard } from './markup/createMarkupModalProductCard';
import { appendMarkup } from './markup/appendMarkup';



export function modalProductCart() {
    function openModal() {
        refs.modal.style.display = 'block';
    }

    function closeModal() {
        refs.modal.style.display = 'none';
    }

    refs.productCardsContainer.addEventListener("click", async (evt) => {
        const idCard = evt.target.closest(".product-card");
        const dataCardID = idCard.dataset.cardid;

        if (idCard) {
            openModal();
        }

        const getModalProduct = new GetProduct();

        try {
            const objModal = await getModalProduct.getProductId(dataCardID);
            appendMarkup(refs.modal, createMarkupModalProductCard(objModal));

            if (refs.modal) {
                const addToBasketBtn = refs.modal.querySelector('.add-to-cart-btn');
                console.log(addToBasketBtn);
                
                addToBasketBtn.addEventListener('click', () => {
                    addToBasket(objModal);
                });

                refs.modal.addEventListener("click", function (event) {
                    if (event.target === refs.modal) {
                        closeModal();
                    }

                    const closeIcon = event.target.closest('.close-icon');
                    if (closeIcon) {
                        closeModal();
                    }
                });
            }
        } catch (error) {
            console.error('Error getting product ID:', error);
        }
    });
}


function addToBasket(product) {
    const currentBasket = JSON.parse(localStorage.getItem('cartfrom')) || {};

    // Отримати id продукту
    const productId = product._id;

    if (currentBasket[productId]) {
        currentBasket[productId] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cartfrom', JSON.stringify(currentBasket));


}



function checkIfInBasket(product) {
    const currentBasket = JSON.parse(localStorage.getItem('cartfrom')) || [];
    return currentBasket.some(item => String(item._id) === String(product._id));
}
