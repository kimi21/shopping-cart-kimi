import { elements } from './base';
import { miscData } from './miscData'
import { errorNotifications } from './errorNotifs';
import Utility from '../Utility/utilities';

export default class FormView {
    
    constructor(form) {
        this.form = form;
        this.utility = new Utility();
    }

    firstFocus() {
        //first field in form gets the focus
        this.form[0].focus();
        return true;
    }


    hideError(container) {
        let queryString = '.' + container.className + ' .js-form__input-error';
        let errorDiv = document.querySelector(queryString);

        if(errorDiv.classList.contains('show')) {
            this.utility.hide(errorDiv);
        }
    }


    displayError(container, error) {
        // 1. get the error div in element
        let queryString = '.' + container.className + ' .js-form__input-error';
        let errorDiv = document.querySelector(queryString);
        this.utility.hide(elements.errorMsg);
        this.utility.show(elements.errorMsg);

        elements.errorMsg.innerHTML = error;
    }


    checkForEmpty(input) {
        if(input.value === "") {
            this.displayError(input.parentElement, errorNotifications.emptyInput);

            //bring focus to the input field
            input.focus();
            return true;
        } else {    //input is not empty, do not show error
            return false;  
        }
    }


    validateEmail(email) {
        var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!validEmail.test(email.value)) {

            //render error on UI
            this.displayError(email.parentElement, errorNotifications.invalidEmail);
            
            //bring focus to the input field
            input.focus();

        } else {    //email was valid
                    //hide error div if previously shown
            this.hideError(email.parentElement);
        }
    }


}