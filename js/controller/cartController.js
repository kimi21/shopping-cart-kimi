import Products from "../model/products";
import CartView from "../view/cartView";
import Utility from '../Utility/utilities';

import { elements } from '../view/base';

export default class CartController {
    constructor(state) {
        this.view = new CartView();
        this.model = new Products();
        this.state = state;
        this.utility = new Utility();
    }


    toggleCartDisplayFromHeader() {
        
        //listen for click on cart icon in header
        elements.cartIconInHeader.addEventListener('click', (event) => {
            
            let isDisplayed = this.utility.toggleDisplay(elements.cartModal);

            //if cart is shown, and cart data is not null
            if(isDisplayed) {
                if(localStorage.getItem('cartData') !== null)
                    this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));
            }
        });
        
    }

    toggleCartDisplayFromHamburgerMenu() {
        //listen for click on cart icon in hamburger Menu
        elements.cartIconInHamburgerMenu.addEventListener('click', (event) => {
            
            let isDisplayed = this.utility.toggleDisplay(elements.cartModal);

            //if cart is shown, load cart data
            if(isDisplayed) {
                this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));
            }
            
        });
    }

    //handles click event of minus btn on product in cart
    handleMinusClick() {

        elements.cartModal.addEventListener('click', (event) => {

            event.preventDefault();

            if(event.target.matches('.js-btn-minus')) {
                let productData;
                let success;

                // 1. get the corresponding product of this minus btn
                productData = this.view.getProductClicked(event); 
                success = this.model.decreaseProductCount(productData);

                
                if(success) //if the element's count was reduced
                    this.view.updateUI(event, productData.productCurrentCount);
                else    //element's removed from cart since count reduced to 0
                    this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));
            
                this.utility.updateHeaderNav(this.utility.getCartLength());
            }
        });
            
    }

    //handles click event of add btn on product in cart
    handlePlusClick() {
        elements.addBtn.addEventListener('click', (event) => {

        });
            
    }

} 