import{p as $,i as l,k as L,r as c,G as y,l as j,b as p,m as q,c as b,s as E}from"./assets/subscription-395be4f6.js";import{S as N}from"./assets/vendor-860dfefd.js";function x(t,s){for(let o in s)if(Object.hasOwnProperty.call(s,o)){const e=s[o];if(Object.values(e).includes(t))return Object.values(e).includes(t)}}function _(t){const s=$()||[];return t.map(({img:e,name:a,price:d,_id:r})=>{const i=x(r,s)?"js-button-disabled":"",n=x(r,s)?"icon-checkbox":"icon-shopping-cart";return`<li data-id=${r} class="discount-products-item common-card js-discount-card ${i}" >
          <div class="card-image-discount">
            <svg class="icon-discount" width="60" height="60">
              <use href="${l}#icon-discount"></use>
            </svg>
            <img src="${e}" alt="${a}" />
          </div>
          <div class="discount-info-box">
          <p class="discount-card-text">${a}</p>
          <div class="discount-card-info">
            <p class="discount-card-text price">$${d}</p>
            <button class="button-shopping-discount js-button-discount ${i}">
              <svg class="icon-shopping-discount" width="18" height="18">
                <use href="${l}#${n}"></use>
              </svg>
            </button>
          </div></div>
          
        </li>`}).join("")}async function f(){const s=await new y().getDiscount();s.splice(2),L(c.discountProdEl,_(s))}async function F(){return await new y().getCategories()}function D(t){const s=new Set;return t.map(o=>{s.add(o.replaceAll("_"," "))}),Array.from(s).map(o=>`<option value=${o.replaceAll(" ","_")}>${o}</option>`).join("")+'<option value="">Show All</option>'}function R(){const t=localStorage.getItem("FILTERS_ITEM");return JSON.parse(t)}function A(t,s){for(let o in s)if(Object.hasOwnProperty.call(s,o)){const e=s[o];if(Object.values(e).includes(t))return Object.values(e).includes(t)}}function J(t){const s=$()||[];return t.map(({img:e,name:a,category:d,size:r,popularity:i,price:n,_id:u,is10PercentOff:m})=>{const g=A(u,s)?"js-button-disabled":"",S=A(u,s)?"icon-checkbox":"icon-shopping-cart";return m?`<li data-id="${u}" class="product-card common-card js-product-card ${g}">
                <div class="image-product">
                <svg class="icon-discount" width="60" height="60">
                    <use href="${l}#icon-discount"></use>
                </svg>
                    <img class="image js-product-img" src="${e}" alt="${a}" />
                </div>
                <div class="info-product">
                    <h3 class="name-product">${a}</h3>
                    <p class="characteristics-product">
                        Category:<span class="details-product">${d.replaceAll("_"," ")}</span> Size: <span
                            class="details-product">${r}</span>
                        Popularity: <span class="details-product">${i}</span>
                    </p>
                </div>
                <div class="product-card-price">
                    <p class="price-product">$${n}</p>
                    <button class="js-button-shopping ${g}" >
                    <svg class="icon-shopping-card" width="28" height="28">
                        <use href="${l}#${S}"></use>
                    </svg>
                    </button>
                </div>
            </li>`:`<li data-id="${u}" class="product-card common-card js-product-card ${g}">
                <div class="image-product">
                    <img class="image js-product-img" src="${e}" alt="${a}" />
                </div>
                <div class="info-product">
                    <h3 class="name-product">${a}</h3>
                    <p class="characteristics-product">
                        Category:<span class="details-product">${d.replaceAll("_"," ")}</span> Size: <span
                            class="details-product">${r}</span>
                        Popularity: <span class="details-product">${i}</span>
                    </p>
                </div>
                <div class="product-card-price">
                    <p class="price-product">$${n}</p>
                    <button class="js-button-shopping ${g}">
                    <svg class="icon-shopping-card" width="28" height="28">
                        <use href="${l}#${S}"></use>
                    </svg>
                    </button>
                </div>
            </li>`}).join("")}function H(t,s){const o={indexOne:1,indexTwo:"",indexThree:"",indexFour:"",indexFive:s};s<=5&&(o.indexTwo=2,o.indexThree=3,o.indexFour=4),s>5&&(t<=2||t>=s-1)&&(o.indexTwo=2,o.indexThree="...",o.indexFour=s-1),s>5&&t>3&&t<s-2&&(o.indexTwo="...",o.indexThree=t,o.indexFour="..."),s>5&&t===s-2&&(o.indexTwo="...",o.indexThree=s-2,o.indexFour=s-1),s>5&&t===3&&(o.indexTwo=2,o.indexThree=3,o.indexFour="...");const e=[];return e.push(o.indexOne,o.indexTwo,o.indexThree,o.indexFour,o.indexFive,o.leftBtn,o.rightBtn),e}function K(t,s){const o=H(t,s),e=`<button id="left-button" type="button" class="pag-btn pag-item">
    <svg class="arrow-icon" width="24" height="24">
      <use href="${l}#icon-caret-small-left"></use>
    </svg>
  </button>
  <ul class="pag-wrapper">`,a=`</ul>
  <button id="right-button" type="button" class="pag-btn pag-item">
    <svg class="arrow-icon" width="24" height="24">
      <use href="${l}#icon-caret-small-right"></use>
    </svg>
  </button>`;let d;s<=5?d=s:d=5;let r=[];for(let i=0;i<d;i++){let n;o[i]==="..."?n="dots"+i:n=o[i],r.push(`<li class="list"><button id="${n}" type="button" class="pag-item">${o[i]}</button></li>`)}return r.unshift(e),r.push(a),r.join("")}function z(t,s){if(c.pagesRibbonEL.innerHTML="",c.pagesRibbonEL.classList.remove("visually-hidden"),s===1){c.pagesRibbonEL.classList.add("visually-hidden");return}const o=K(t,s);c.pagesRibbonEL.insertAdjacentHTML("afterbegin",o),t===1&&document.getElementById("left-button").classList.add("disabled"),t===s&&document.getElementById("right-button").classList.add("disabled"),document.querySelectorAll(".pag-item").forEach(a=>{a.textContent==="..."&&a.classList.add("pag-inactive"),Number(a.textContent)===t&&a.classList.add("pag-active")})}async function h(){try{const t=new y,s=await R(),o=await t.getProducts(s);if(!o.results.length){j(),c.productCardsContainer.innerHTML="",c.productCardsContainer.innerHTML='<div class="js-empty-product-card"><p class="text-nothing-found">Nothing was found for the selected <span class=""> filters...</span></p class="text-try"><p class="text-try">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div > ',c.productCardsContainer.classList.add("js-empty-product-cards-container"),c.pagesRibbonEL.classList.add("visually-hidden");return}c.productCardsContainer.classList.remove("js-empty-product-cards-container");const e=J(o.results);z(t.currentPage,t.totalPages),L(c.productCardsContainer,e)}catch(t){console.log(t.message)}}async function W(t){t.preventDefault(),w()}function Y(){const t=new y(G());let s={};return new FormData(c.searchForm).forEach((o,e)=>{s[e]=o.replaceAll("&","%26")}),s.page=t.page,s.limit=t.perPage,s}function w(){p();const t=Y();q(t),h()}function G(){let t=6;return window.innerWidth>767&&window.innerWidth<1440?t=8:window.innerWidth>1440&&(t=9),t}new N({select:".home_categorias-sort",settings:{placeholderText:"A-Z",showSearch:!1,searchHighlight:!0},events:{afterChange:t=>{w()}}});async function V(){const t=await F(),s=D(t);c.searchElCategories.insertAdjacentHTML("beforeend",s),new N({select:".home_categorias-search",settings:{placeholderText:"Categories",showSearch:!1,searchHighlight:!0},events:{afterChange:o=>{w()}}})}function T(t,s){for(let o in s)if(Object.hasOwnProperty.call(s,o)){const e=s[o];if(Object.values(e).includes(t))return Object.values(e).includes(t)}}function Z(t){const s=$()||[];return t.map(({img:e,name:a,category:d,size:r,popularity:i,_id:n,is10PercentOff:u})=>{const m=T(n,s)?"js-button-disabled":"",g=T(n,s)?"icon-checkbox":"icon-shopping-cart";return u?`<li data-id=${n} class="popular-products-item common-card js-popular-card ${m}" >
                <svg class="icon-popular-discount" width="30" height="30">
                    <use href="${l}#icon-discount"></use>
                </svg>
                <div class="card-image">
                  <img src="${e}" alt="${a}" />
                </div>
                <div class="card-info">
                  <h3 class="products-card-title">${a}</h3>
                  <p class="popular-cards-text">
                    Category: <span>${d.replaceAll("_"," ")}</span>
                  </p>
                  <div class="text-box">
                    <p class="popular-cards-text">Size: <span>${r}</span></p>
                    <p class="popular-cards-text">
                      Popularity: <span>${i}</span>
                    </p>
                  </div>
                </div>
                <button class="button-shopping js-button-popular ${m}">
                  <svg class="icon-shopping" width="12" height="12">
                    <use href="${l}#${g}"></use>
                  </svg>
                </button>
              </li>`:`<li data-id=${n} class="popular-products-item common-card js-popular-card ${m}" >
                <div class="card-image">
                  <img src="${e}" alt="${a}" />
                </div>
                <div class="card-info">
                  <h3 class="products-card-title">${a}</h3>
                  <p class="popular-cards-text">
                    Category: <span>${d.replaceAll("_"," ")}</span>
                  </p>
                  <div class="text-box">
                    <p class="popular-cards-text">Size: <span>${r}</span></p>
                    <p class="popular-cards-text">
                      Popularity: <span>${i}</span>
                    </p>
                  </div>
                </div>
                <button class="button-shopping js-button-popular ${m}">
                  <svg class="icon-shopping" width="12" height="12">
                    <use href="${l}#${g}"></use>
                  </svg>
                </button>
              </li>`}).join("")}async function v(){const s=await new y().getPopular();L(c.popularProdEl,Z(s))}function I(t){return t.is10PercentOff?`<div class="modal-content">
                <svg class="icon-modal-discount" width="60" height="60">
                    <use href="${l}#icon-discount"></use>
                </svg>
                <button type="button" class="modal-close-btn">
                    <svg class="close-icon" width="28" height="28">
                        <use href="${l}#icon-close-sharp"></use>
                    </svg>
                </button> 
                <div class="modal-content-wrapper">
                <div class="picture">
                    <img class="js-modal-picture-onLoad" src="${t.img}" alt="${t.name}" width="160">
                </div>
    
                <div class="modal-container">
                    <h3 class="modal-name">${t.name}</h3>
                    <ul class="modal-list list">
                        <div class="group-item">
                            <li>Category: <span class="category modal-item">${t.category.replaceAll("_"," ")}</span></li>
                            <li>Size: <span class="size modal-item">${t.size}</span></li>
                        </div>
                        <li>Popularity: <span class="popularity modal-item">${t.popularity}</span></li>
                    </ul>
                    <p class="modal-text">${t.desc}</p>
                </div>
                </div>
                
                <div class="price-wrapper modal-content-wrapper">
                    <p class="modal-price">$${t.price}</p>
                    <button class="add-to-cart-btn btn js-modal-button" type="button">
                        Add to
                        <svg class="modal-cart-icon" width="18" height="18">
                            <use href="${l}#icon-shopping-cart"></use>
                        </svg>
                    </button>
                    <button class="remove-from-cart-btn btn visually-hidden js-modal-button" type="button">
                    Remove from
                    <svg class="modal-cart-icon" width="18" height="18">
                        <use href="${l}#icon-shopping-cart"></use>
                    </svg>
                </button>
                </div>
            </div>`:`<div class="modal-content">
                <button type="button" class="modal-close-btn">
                    <svg class="close-icon" width="28" height="28">
                        <use href="${l}#icon-close-sharp"></use>
                    </svg>
                </button> 
                <div class="modal-content-wrapper">
                <div class="picture">
                    <img class="js-modal-picture-onLoad" src="${t.img}" alt="${t.name}" width="160">
                </div>
    
                <div class="modal-container">
                    <h3 class="modal-name">${t.name}</h3>
                    <ul class="modal-list list">
                        <div class="group-item">
                            <li>Category: <span class="category modal-item">${t.category.replaceAll("_"," ")}</span></li>
                            <li>Size: <span class="size modal-item">${t.size}</span></li>
                        </div>
                        <li>Popularity: <span class="popularity modal-item">${t.popularity}</span></li>
                    </ul>
                    <p class="modal-text">${t.desc}</p>
                </div>
            </div>
            
            <div class="price-wrapper modal-content-wrapper">
                <p class="modal-price">$${t.price}</p>
                <button class="add-to-cart-btn btn js-modal-button" type="button">
                    Add to
                    <svg class="modal-cart-icon" width="18" height="18">
                        <use href="${l}#icon-shopping-cart"></use>
                    </svg>
                </button>
                <button class="remove-from-cart-btn btn visually-hidden js-modal-button" type="button">
                    Remove from
                    <svg class="modal-cart-icon" width="18" height="18">
                        <use href="${l}#icon-shopping-cart"></use>
                    </svg>
                </button>
            </div>
        </div>`}const P="BASKET";function B(){return JSON.parse(localStorage.getItem(P))??[]}function Q(){let t;c.productCardsContainer.addEventListener("click",r=>{if(r.target.classList.contains("home_product-card-container")||r.target.closest(".js-button-shopping"))return;t=r.target.closest(".js-product-card").dataset.id,p(),n();async function n(){const m=await new y().getProductId(t);L(c.modal,I(m));const g=document.querySelector(".add-to-cart-btn"),S=document.querySelector(".remove-from-cart-btn");document.querySelector(".js-modal-picture-onLoad").onload=()=>{s(),j()},d(B(),t)&&(g.classList.toggle("visually-hidden"),S.classList.toggle("visually-hidden"))}c.modal.addEventListener("click",a)});function s(){c.modal.style.display="block"}function o(){c.modal.style.display="none",c.modal.removeEventListener("click",a)}let e=1;function a(r){const i=document.querySelector(".add-to-cart-btn"),n=document.querySelector(".remove-from-cart-btn"),u=B();if((r.target===c.modal||r.target.closest(".close-icon"))&&o(),r.target===i){let g={_id:t,amount:e};u.push(g),localStorage.setItem(P,JSON.stringify(u)),i.classList.toggle("visually-hidden"),n.classList.toggle("visually-hidden"),p(),h(),v(),f(),b()}if(r.target===n){const m=u.filter(g=>g._id!=t);localStorage.setItem(P,JSON.stringify(m)),i.classList.toggle("visually-hidden"),n.classList.toggle("visually-hidden"),p(),h(),v(),f(),b()}}function d(r,i){return r.some(({_id:n})=>n===i)}}const C="BASKET";let U=1;function X(){let t;c.popularCardsContainer.addEventListener("click",e=>{if(e.target.classList.contains("popular-products-container")||e.target.closest(".js-button-popular"))return;t=e.target.closest(".js-popular-card").dataset.id,p(),d();async function d(){const i=await new y().getProductId(t);L(c.modal,I(i));const n=document.querySelector(".add-to-cart-btn"),u=document.querySelector(".remove-from-cart-btn");document.querySelector(".js-modal-picture-onLoad").onload=()=>{tt(),j()},o(O(),t)&&(n.classList.toggle("visually-hidden"),u.classList.toggle("visually-hidden"))}c.modal.addEventListener("click",s)});function s(e){const a=document.querySelector(".add-to-cart-btn"),d=document.querySelector(".remove-from-cart-btn"),r=O();if((e.target===c.modal||e.target.closest(".close-icon"))&&st(),e.target===a){let n={_id:t,amount:U};r.push(n),localStorage.setItem(C,JSON.stringify(r)),a.classList.toggle("visually-hidden"),d.classList.toggle("visually-hidden"),p(),h(),v(),f(),b()}if(e.target===d){const i=r.filter(n=>n._id!=t);localStorage.setItem(C,JSON.stringify(i)),a.classList.toggle("visually-hidden"),d.classList.toggle("visually-hidden"),p(),h(),v(),f(),b()}}function o(e,a){return e.some(({_id:d})=>d===a)}}function O(){return JSON.parse(localStorage.getItem(C))??[]}function tt(){c.modal.style.display="block"}function st(){c.modal.style.display="none"}const k="BASKET";let ot=1;function et(){let t;c.discountCardsContainer.addEventListener("click",e=>{if(e.target.classList.contains("discount-products-list")||e.target.closest(".js-button-discount"))return;t=e.target.closest(".js-discount-card").dataset.id,p(),d();async function d(){const i=await new y().getProductId(t);L(c.modal,I(i));const n=document.querySelector(".add-to-cart-btn"),u=document.querySelector(".remove-from-cart-btn");o(M(),t)&&(n.classList.toggle("visually-hidden"),u.classList.toggle("visually-hidden")),document.querySelector(".js-modal-picture-onLoad").onload=()=>{at(),j()}}c.modal.addEventListener("click",s)});function s(e){const a=document.querySelector(".add-to-cart-btn"),d=document.querySelector(".remove-from-cart-btn"),r=M();if((e.target===c.modal||e.target.closest(".close-icon"))&&ct(),e.target===a){let n={_id:t,amount:ot};r.push(n),localStorage.setItem(k,JSON.stringify(r)),a.classList.toggle("visually-hidden"),d.classList.toggle("visually-hidden"),p(),h(),v(),f(),b()}if(e.target===d){const i=r.filter(n=>n._id!=t);localStorage.setItem(k,JSON.stringify(i)),a.classList.toggle("visually-hidden"),d.classList.toggle("visually-hidden"),p(),h(),v(),f(),b()}}function o(e,a){return e.some(({_id:d})=>d===a)}}function M(){return JSON.parse(localStorage.getItem(k))??[]}function at(){c.modal.style.display="block"}function ct(){c.modal.style.display="none"}function rt(t){try{p();const s=JSON.parse(localStorage.getItem("FILTERS_ITEM")),o=s.page,e=t.target.closest(".pag-item").id;let a;if(e==="left-button"?a=o-1:e==="right-button"?a=o+1:a=Number(e),Number(e)===o)return;s.page=a,localStorage.setItem("FILTERS_ITEM",JSON.stringify(s)),h()}catch{j();return}}function nt(t){if(t.preventDefault(),t.target.closest(".js-button-shopping")&&!t.target.closest(".js-product-card").classList.contains("js-button-disabled")){const s=$()||[],o=it(t.target);s.push(o),E(s);const e=t.target.closest(".js-product-card");let a=t.target;(t.target.nodeName.toLowerCase()==="button"||t.target.nodeName.toLowerCase()==="svg")&&(a=t.target.querySelector("use")),a.setAttribute("href",`${l}#icon-checkbox`),a.closest(".js-button-shopping").classList.add("button-disabled"),e.classList.add("js-button-disabled"),p(),h(),f(),v(),b()}}function it(t){return{_id:t.closest(".js-product-card").dataset.id,amount:1}}function dt(t){if(t.preventDefault(),t.target.closest(".js-button-popular")&&!t.target.closest(".js-popular-card").classList.contains("js-button-disabled")){const s=$()||[],o=lt(t.target);s.push(o),E(s);const e=t.target.closest(".js-popular-card");let a=t.target;(t.target.nodeName.toLowerCase()==="button"||t.target.nodeName.toLowerCase()==="svg")&&(a=t.target.querySelector("use")),a.setAttribute("href",`${l}#icon-checkbox`),a.closest(".js-button-popular").classList.add("button-disabled"),e.classList.add("js-button-disabled"),p(),h(),v(),f(),b()}}function lt(t){return{_id:t.closest(".js-popular-card").dataset.id,amount:1}}function ut(t){if(t.preventDefault(),t.target.closest(".js-button-discount")&&!t.target.closest(".js-discount-card").classList.contains("js-button-disabled")){const s=$()||[],o=pt(t.target);s.push(o),E(s);const e=t.target.closest(".js-discount-card");let a=t.target;(t.target.nodeName.toLowerCase()==="button"||t.target.nodeName.toLowerCase()==="svg")&&(a=t.target.querySelector("use")),a.setAttribute("href",`${l}#icon-checkbox`),a.closest(".js-button-discount").classList.add("button-disabled"),e.classList.add("js-button-disabled"),p(),h(),v(),f(),b()}}function pt(t){return{_id:t.closest(".js-discount-card").dataset.id,amount:1}}V();w();f();v();c.searchForm.addEventListener("submit",W);c.productCardsContainer.addEventListener("click",nt);c.popularCardsContainer.addEventListener("click",dt);c.discountCardsContainer.addEventListener("click",ut);c.pagesRibbonEL.addEventListener("click",rt);Q();et();X();b();
//# sourceMappingURL=commonHelpers2.js.map
