import icon from '../../images/icons/icons.svg';

export function createMarkupModalProductCard(data) {
  if (data.is10PercentOff) {
    return `<div class="modal-content">
                <svg class="icon-modal-discount" width="60" height="60">
                    <use href="${icon}#icon-discount"></use>
                </svg>
                <button type="button" class="modal-close-btn">
                    <svg class="close-icon" width="28" height="28">
                        <use href="${icon}#icon-close-sharp"></use>
                    </svg>
                </button> 
                <div class="modal-content-wrapper">
                <div class="picture">
                    <img class="js-modal-picture-onLoad" src="${
                      data.img
                    }" alt="${data.name}" width="160">
                </div>
    
                <div class="modal-container">
                    <h3 class="modal-name">${data.name}</h3>
                    <ul class="modal-list list">
                        <div class="group-item">
                            <li>Category: <span class="category modal-item">${data.category.replaceAll(
                              '_',
                              ' '
                            )}</span></li>
                            <li>Size: <span class="size modal-item">${
                              data.size
                            }</span></li>
                        </div>
                        <li>Popularity: <span class="popularity modal-item">${
                          data.popularity
                        }</span></li>
                    </ul>
                    <p class="modal-text">${data.desc}</p>
                </div>
                </div>
                
                <div class="price-wrapper modal-content-wrapper">
                    <p class="modal-price">$${data.price}</p>
                    <button class="add-to-cart-btn btn js-modal-button" type="button">
                        Add to
                        <svg class="modal-cart-icon" width="18" height="18">
                            <use href="${icon}#icon-shopping-cart"></use>
                        </svg>
                    </button>
                    <button class="remove-from-cart-btn btn visually-hidden js-modal-button" type="button">
                    Remove from
                    <svg class="modal-cart-icon" width="18" height="18">
                        <use href="${icon}#icon-shopping-cart"></use>
                    </svg>
                </button>
                </div>
            </div>`;
  }
  return `<div class="modal-content">
                <button type="button" class="modal-close-btn">
                    <svg class="close-icon" width="28" height="28">
                        <use href="${icon}#icon-close-sharp"></use>
                    </svg>
                </button> 
                <div class="modal-content-wrapper">
                <div class="picture">
                    <img class="js-modal-picture-onLoad" src="${
                      data.img
                    }" alt="${data.name}" width="160">
                </div>
    
                <div class="modal-container">
                    <h3 class="modal-name">${data.name}</h3>
                    <ul class="modal-list list">
                        <div class="group-item">
                            <li>Category: <span class="category modal-item">${data.category.replaceAll(
                              '_',
                              ' '
                            )}</span></li>
                            <li>Size: <span class="size modal-item">${
                              data.size
                            }</span></li>
                        </div>
                        <li>Popularity: <span class="popularity modal-item">${
                          data.popularity
                        }</span></li>
                    </ul>
                    <p class="modal-text">${data.desc}</p>
                </div>
            </div>
            
            <div class="price-wrapper modal-content-wrapper">
                <p class="modal-price">$${data.price}</p>
                <button class="add-to-cart-btn btn js-modal-button" type="button">
                    Add to
                    <svg class="modal-cart-icon" width="18" height="18">
                        <use href="${icon}#icon-shopping-cart"></use>
                    </svg>
                </button>
                <button class="remove-from-cart-btn btn visually-hidden js-modal-button" type="button">
                    Remove from
                    <svg class="modal-cart-icon" width="18" height="18">
                        <use href="${icon}#icon-shopping-cart"></use>
                    </svg>
                </button>
            </div>
        </div>`;
}
