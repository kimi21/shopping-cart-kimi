import { elements } from './base';

var cartTotalCount;

const renderProductOnCart = product => {

    const markup = `
        <div class="cart-content__item">
            <div class="cart-item-img">
                <img src="./.${category.imageUrl}" />
            </div>                        
            <div class="cart-item-desc">
                <div class="">
                    <span class="cart-item-desc-title">${product.name}</span>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-info-left">
                        <i class="fa fa-minus fa-cart-tablet" aria-hidden="true"></i>
                        <span class="cart-item-qauntity">2</span>
                        <i class="fa fa-plus fa-cart-tablet" aria-hidden="true"></i>
                        
                        <span class="cart-item-price">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            Rs. 187
                        </span>
                    </div>
                    
                    <div class="cart-item-info-right">
                        <span class="">Rs. 187</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // elements.cartTotalCount.textContent = cartTotalCount;
    elements.cartContainer.insertAdjacentHTML('beforeend', "Hello kimi");
}

export const renderResult = products => {
    cartTotalCount = products.length;

    console.log("Products in cart : " + cartTotalCount);
    console.log("In CART VIEW PRODUCTS : : : " + products);
   
    products.forEach(renderProductOnCart);
    
}





