import { elements } from './base';
import { miscData } from './miscData'

export default class CartView {
    
    constructor() {}

    renderProductOnCart(product) {

        const markup = `
            <div class="cart-modal__body__item" data-product-name="${product.productName}" 
                data-product-id="${product.productId}" data-product-category="${product.productCategory}"
                data-product-price="${product.productPrice}" data-product-stock="${product.productStock}"
                data-product-sku="${product.productSku}" data-product-imageUrl="${product.productImageurl}"
                data-product-desc="${product.productDesc}" data-product-current-count="${product.productCurrentCount}">

                <div class="cart-item-img">
                    <img src="./.${product.productImageurl}" />
                </div>                        
                <div class="cart-item-desc">
                    <div class="cart-item-desc__title">
                        <span class="">${product.productName}</span>
                    </div>
                    <div class="cart-item-desc__info">
                            <div class="cart-item-desc__info-left">
                                <a class="js-btn-minus">
                                    <i class="fa fa-minus fa-cart-tablet js-btn-minus" aria-hidden="true"></i>
                                </a>
                                <span class="cart-item-qauntity">${product.productCurrentCount}</span>
                                <a class="js-btn-add">
                                    <i class="fa fa-plus fa-cart-tablet js-btn-add" aria-hidden="true"></i>
                                </a>
                                
                                <span class="cart-item-price">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                    Rs. ${product.productPrice}
                                </span>
                            </div>
                        
                        <div class="cart-item-desc__info-right">
                            <span class="">Rs. ${product.productCurrentCount * product.productPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;        
        
        // if(elements.countOnCart)
        //     elements.countOnCart.textContent = "( " + cartTotalCount + (cartTotalCount === 1 ? ' item )' : ' items )');
        if(elements.cartDynamic)
            elements.cartDynamic.insertAdjacentHTML('beforeend', markup);
        if(elements.cartBillAmount)
            elements.cartBillAmount.innerHTML = `Rs. ${product.productCurrentCount * product.productPrice}`;
    }


    renderResult(products) {
        
        //emty the contents of cart dynamic div
        elements.cartDynamic.innerHTML = "";
        products.forEach(this.renderProductOnCart);
    }

    getProductClicked(event) {
        
        /* --> From the click event of minus/add btn, get the nearest matching plp card's 
        *  data attributes and store that data in productData
        */
        const productData = event.target.closest('.cart-modal__body__item').dataset; 
        return productData;
    }

    updateUI(event, count) {
        
        //find the span in this event and set its content to the count of the product
        const countSpan = event.target.closest('.cart-modal__body__item').querySelector('.cart-item-qauntity'); 
        countSpan.innerHTML = count;
    }
}





