import { elements } from '../view/base';

export default class Utilities {

    constructor() {}
    
    toggleDisplay(el) {
        el.classList.toggle('hide');
        el.classList.toggle('show');

        //return a flag if class 'show' was added to el's classList
        if(el.classList.contains('show')) {
            return true;
        } else {
            return false;
        }

    }


    showAsErrorText(el) {
        //add err-input class and remove ok-input
        if(!(el.classList.contains('err-input')))
            el.classList.add('err-input');

        //remove ok-input if it exists
        if(el.classList.contains('ok-input')) {
           el.classList.remove('ok-input');
        }
    }


    showAsOkText(el) {
        //add ok-input class and remove error-input
        if(!(el.classList.contains('ok-input')))
            el.classList.add('ok-input');

        //remove err-input if it exists
        if(el.classList.contains('err-input')) {
           el.classList.remove('err-input');
        }
    }


    show(el) {

        //check if show doesn't already exist
        if(!(el.classList.contains('show')))
            el.classList.add('show');

        //remove hide if it exists
        if(el.classList.contains('hide')) {
           el.classList.remove('hide');
        }
    }

    
    hide(el) {

        //check if hide doesn't already exist
        if(!(el.classList.contains('hide')))
            el.classList.add('hide');

        //remove show if it exists
        if(el.classList.contains('show')) {
           el.classList.remove('show');
        }
    }



    active(el) {

        //check if active doesn't already exist
        if(!(el.classList.contains('active')))
            el.classList.add('active');

        //remove deactive if it exists
        if(el.classList.contains('deactive')) {
           el.classList.remove('deactive');
        }
    }


    deactive(el) {

        //check if active doesn't already exist
        if(!(el.classList.contains('deactive')))
            el.classList.add('deactive');

        //remove deactive if it exists
        if(el.classList.contains('active')) {
           el.classList.remove('active');
        }
    }


    getCartLength() {
        //Calculate total number of elements in cart
   
        let cartLength, cartData;
        cartLength = 0;
        cartData = JSON.parse(localStorage.getItem('cartData'));
        
        if(cartData !== null) {
            for(var i = 0; i < cartData.length; i++) {
                cartLength += +(cartData[i].productCurrentCount);
            }
        }

        return cartLength;
    }


    updateHeaderNav(cartLength) {
        elements.headerCartCountDiv.innerHTML = cartLength + ' items';
    }
    
}

