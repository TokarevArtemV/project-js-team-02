import{p as l,i as u,g as n,c as d,l as i,s as m,a as h,r as o,b,d as v,t as B,e as P,v as x,f as C,h as E,j as $}from"./assets/subscription-395be4f6.js";import{l as y}from"./assets/vendor-860dfefd.js";const j=l()||[];function S(t){let e;return j.forEach(({_id:c,amount:s})=>{c===t&&(e=Number(s))}),e||0}function w(t){return t.map(({img:c,name:s,category:a,price:r,size:f,_id:p})=>{const k=S(p);return`<div class="product-cart-js js-basket-card" data-cardId=${p}>
          <div class="basket-img-box">
            <img src="${c}" alt="${s}" class="product-image" />
          </div>
          <div class="product-details">
            <button class="remove-button">
              <svg class="icon-close" id="cart-icon-close" width="18" height="18">
                <use href="${u}#icon-close-sharp"></use>
              </svg>
            </button>
            <h2 class="product-name">${s}</h2>
            <div class="cart-product-box">
              <p class="product-basket-text category">
                Category:&nbsp;&nbsp;<span class="category-style" >${a.replaceAll("_"," ")}</span>
              </p>
              <p class="product-basket-text size">
                Size:&nbsp;&nbsp;<span class="size-slyle">${f}</span>
              </p>
            </div>
            <div class="price-and-counter-wrapper">
            <p class="product-price">$ ${r.toString().replaceAll(".",",")}</p>
              <div class="counter-box">
              <button id="minus" class="item-decrease-counter"><svg class="cart-minus" width="14" height="14">
    <use href="${u}#icon-minus"></use>
  </svg></button>
              <span class="item-counter-span">${k}</span>
              <button id="plus" class="item-increase-counter"><svg class="cart-plus" width="14" height="14">
    <use href="${u}#icon-plus"></use>
  </svg></button>
              </div>
              </div>
          </div>
        </div>`}).join("")}function F(){let t=1;try{let c=function(s){const a=s.target.closest(".js-basket-card").dataset.cardid;if(s.target.closest("#minus")){const r=s.target.closest("#minus").nextElementSibling;t=Number(r.textContent),t!==1&&(r.textContent=t,g(a,r.textContent=t-1),n())}if(s.target.closest("#plus")){const r=s.target.closest("#plus").previousElementSibling;t=Number(r.textContent),t<100&&(r.textContent=t,g(a,r.textContent=t+1),n())}d()};document.querySelector(".flex-cart-js").addEventListener("click",c)}catch{i()}}function g(t,e){const s=(l()||[]).map(a=>a._id===t?(a.amount=e,{_id:t,amount:e}):a);m(s)}async function O(){const t=await n();h(o.productFormBasket,w(t)),d(),F()}async function A(t){try{if(!t.target.closest(".remove-button"))return;b();const e=t.target.closest(".product-cart-js").dataset.cardid,s=l().filter(r=>r._id!==e);m(s),t.target.closest(".product-cart-js").remove(),v()||(B(),P()),n(),d(),i()}catch(e){i(),console.log("Server response error when deleting a card",e.message)}}b();O();x(o.inputCartEl,o.submitBtnCartEl);o.productFormBasket.addEventListener("click",y(A,1e3));o.deleteAllButton.addEventListener("click",C);E();$();
//# sourceMappingURL=commonHelpers.js.map
