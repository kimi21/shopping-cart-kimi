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


    show(el) {

        //check if show doesn't already exist
        if(!(el.classList.contains('show')))
            el.classList.add('hide');

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

