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

    initialize() {}

    displayModal() {
        document.querySelector('.body').classList.add('modal-open');
        document.querySelector('.modal').classList.add('modal-bg-style');
    }


    removeModal() {
        document.querySelector('.body').classList.remove('modal-open');
        document.querySelector('.modal').classList.remove('modal-bg-style');
    }


    toggleCartDisplay() {
        let isDisplayed = this.utility.toggleDisplay(elements.cartModal);
            //if cart is shown, and cart data is not null
            if(isDisplayed) {
                this.displayModal();

                if(localStorage.getItem('cartData') !== null)
                    this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));
                
                this.view.updateCartBillUI();
            } else {
                this.removeModal();
            }
    }


    toggleCartDisplayFromHeader() {
        //listen for click on cart icon in header
        elements.cartIconInHeader.addEventListener('click', (event) => {
            this.toggleCartDisplay();
        });
    }


    toggleCartDisplayFromHamburgerMenu() {
        //listen for click on cart icon in hamburger Menu
        elements.cartIconInHamburgerMenu.addEventListener('click', (event) => {
            
            let isDisplayed = this.utility.toggleDisplay(elements.cartModal);
            if(isDisplayed) {   //if cart is shown, load cart data
                this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));
            }
            
        });
    }


    //handles click event of add btn on product in cart
    handlePlusClick() {  
        let product;
        let success;

        // 1. get the corresponding product of this add btn
        product = this.view.getProductClicked(event); 
        success = this.model.increaseProductCount(product);
        
        if(success) {
            //if the element's count was increased
            this.view.updateProductInCartUI(event, product); 
            this.utility.updateHeaderNav(this.utility.getCartLength());           
            this.view.updateCartBillUI();
        }
            
    }


    handleMinusClick() {
        let product;
        let countReduced;

        // 1. get the corresponding product of this minus btn
        product = this.view.getProductClicked(event); 

        //2. decrease product's count in localstorage(LS)/ remove product 
        // from LS if count reduced to 0
        countReduced = this.model.decreaseProductCount(product);

        if(countReduced) 
            this.view.updateProductInCartUI(event, product);

        else {   //element's removed from cart since count reduced to 0
            this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));
            this.view.updateCartBillUI();
        } 
        
        this.utility.updateHeaderNav(this.utility.getCartLength());
        this.view.updateCartBillUI();
    }


    //handles click events in cart
    cartEventHandler() {
        elements.cartModal.addEventListener('click', (event) => {
            event.preventDefault();

            if(event.target.matches('.js-btn-minus')) {
                this.handleMinusClick(event);
            }
            if(event.target.matches('.js-btn-add')) { 
                this.handlePlusClick(event);
            }
            if(event.target.matches('.btn-close')) {
                this.toggleCartDisplay();
            }

        });   
    }

} 