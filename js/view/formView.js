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
        // this.form[0].focus();
        return true;
    }


    hideError(el) {
        let container = el.parentElement;
        let queryString = '.' + container.className + ' .js-form__input-error';
        let errorDiv = document.querySelector(queryString);

        // if(errorDiv.classList.contains('show')) {
            this.utility.hide(errorDiv);
        // }
    }


    displayError(el, error) {
        // 1. get the error div in element
        let container = el.parentElement;
        let queryString = '.' + container.className + ' .js-form__input-error';
        let errorDiv = document.querySelector(queryString);
        
        this.utility.show(errorDiv);

        errorDiv.innerHTML = error;
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

        if(email.value == '') {
            // this.displayError(email.parentElement, errorNotifications.emptyInput);
            
            //bring focus to the input field
            // email.focus();
            return errorNotifications.emptyInput;

        } else {    //email was not empty
            if(!validEmail.test(email.value)) {
                //render error on UI
                // this.displayError(email.parentElement, errorNotifications.invalidEmail);
                
                //bring focus to the input field
                // email.focus();
                return errorNotifications.invalidEmail;
    
            } else {    //email was valid
                        //hide error div if previously shown
                return false;
            }
        }
    }


    scorePassword(password) {
        let score = 0;
        if (!password.value) {
            this.displayError(password.parentElement, errorNotifications.emptyInput);
            //bring focus to the input field
            
            return score;
        }
           
    
        // award every unique letter until 5 repetitions
        let letters = new Object();
        for (var i = 0; i < password.value.length; i++) {
            letters[password.value[i]] = (letters[password.value[i]] || 0) + 1;
            score += 5.0 / letters[password.value[i]];
        }
    
        // bonus points for mixing it up
        let variations = {
            digits: /\d/.test(password.value),
            lower: /[a-z]/.test(password.value),
            upper: /[A-Z]/.test(password.value),
            nonWords: /\W/.test(password.value),
        }
    
        let variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;
    
        return parseInt(score);
    }



    checkPasswordStrength(password) {
        let score = this.scorePassword(password);
        if (score > 80)
            return "Your password is strong";
        if (score > 60)
            return "Your password is good";
        if (score >= 30)
            return "Your password is weak";
    
        return errorNotifications.emptyInput;
    }

}