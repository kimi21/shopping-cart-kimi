import { elements } from './base';

var cartTotalCount;

const renderProductOnCart = product => {

    const markup = `
        <div class="cart-content__item">
            <div class="cart-item-img">
                <img src="./.${product.productImageurl}" />
            </div>                        
            <div class="cart-item-desc">
                <div class="">
                    <span class="cart-item-desc-title">${product.productName}</span>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-info-left">
                        <i class="fa fa-minus fa-cart-tablet" aria-hidden="true"></i>
                        <span class="cart-item-qauntity">${product.productCurrentCount}</span>
                        <i class="fa fa-plus fa-cart-tablet" aria-hidden="true"></i>
                        
                        <span class="cart-item-price">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            Rs. ${product.productPrice}
                        </span>
                    </div>
                    
                    <div class="cart-item-info-right">
                        <span class="">Rs. ${product.productCurrentCount * product.productPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    if(elements.countOnCart)
        elements.countOnCart.textContent = "( " + cartTotalCount + (cartTotalCount === 1 ? ' item )' : ' items )');
    if(elements.cartDynamic)
        elements.cartDynamic.insertAdjacentHTML('beforeend', markup);
    if(elements.cartBillAmount)
        elements.cartBillAmount.textContent = `Rs. ${product.productCurrentCount * product.productPrice}`;
}


export const renderResult = products => {
    
    cartTotalCount = products.length;
    console.log("Products in cart : " + cartTotalCount);
    console.log("In CART VIEW PRODUCTS : : : " + JSON.stringify(products));
    products.forEach(renderProductOnCart);
    
}





