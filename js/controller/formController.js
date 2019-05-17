import FormValidator from "../model/formValidator";
import FormView from "../view/formView";
import Utility from '../Utility/utilities';
import { errorNotifications } from '../view/errorNotifs';
import { elements } from "../view/base";

export default class FormController {
    constructor(form) {
        this.form = form;
        this.formId = this.form.id;
        this.model = new FormValidator();
        this.view = new FormView(this.form);
        this.utility = new Utility();
        this.validEmail = false;
        this.validPassword = false;
        this.passwordConfirmed = false;
    }

    initialize() {
        this.utility.updateHeaderNav(this.utility.getCartLength());
        //disable submit button on form load
        // elements.submitBtn.disabled = true;
    }


    onSubmit() {

        if(this.form.name == 'index') {
            if(this.validEmail && this.validPassword ) {
                window.location.assign("home.html");

            } else {
                if(!this.validEmail) {
                    this.view.displayMessage(this.form['email'], errorNotifications.emptyInput);
                }
                if(!this.validPassword) {
                    this.view.displayMessage(this.form['pswrd'], errorNotifications.emptyInput);
                }
                // window.location.assign(this.form.name + '.html');
                e.preventDefault();
            }

        } else if(this.form.name == 'register') {
            if(this.validEmail && this.validPassword && this.passwordConfirmed) {
                window.location.assign("home.html");
            } else {
                if(!this.validEmail) {
                    this.view.displayMessage(this.form['email'], errorNotifications.emptyInput);
                }
                if(!this.validPassword) {
                    this.view.displayMessage(this.form['pswrd'], errorNotifications.emptyInput);
                }
                if(!this.passwordConfirmed) {
                    this.view.displayMessage(this.form['pswrd'], "Passwords do Not match");
                }
                // window.location.assign(this.form.name + '.html');
                e.preventDefault();
            }
        }
        
    }


    confirmPassword() {
        if(this.validPassword) {
            //now check if the passwords match

        }
    }


    loadPasswordMsg(passwordScore) {
        let message = '';

        if(passwordScore == 0) {    //password field was empty
            message = errorNotifications.emptyInput;
            this.view.displayMessage(this.form['pswrd'], message);
            this.validPassword = false;

        } else if(passwordScore > 70) {     //here, display password msg as green
            message = errorNotifications.strongPassword;
            this.view.displayOkMessage(this.form['pswrd'], message);
            this.validPassword = true;

        } else if(passwordScore > 50) {
            message = errorNotifications.goodPassword;
            this.view.displayMessage(this.form['pswrd'], message);
            this.validPassword = true;

        } else if(passwordScore >= 30) {
            message = errorNotifications.weakPassword;
            this.view.displayMessage(this.form['pswrd'], message);
            this.validPassword = false;

        } else if(passwordScore >= 5) {
            message = errorNotifications.shortPassword;
            this.view.displayMessage(this.form['pswrd'], message);
            this.validPassword = false;
        }

        console.log(`Password Score : ${passwordScore} | Password Message : ${message}`);

    }


    getEmailMsg(isEmailValid) {
        if(isEmailValid == 0) {     //Email was empty
            this.view.displayMessage(this.form['email'], errorNotifications.emptyInput);
            this.validEmail = false;

        } else if(isEmailValid == 2) {      //Email not empty but INVALID
            this.view.displayMessage(this.form['email'], errorNotifications.invalidEmail);
            this.validEmail = false;

        } else if( isEmailValid == 1) {     //Email is valid
            this.view.hideError( this.form['email']);
            this.validEmail = true;
        }
        this.form['email'].focus();
    }


    formEventListener() {

         //listen for on 'blur' event of email input field
         if(this.form['email']) {
            this.form['email'].addEventListener('input', () => {
            
                let isEmailValid = this.view.validateEmail(this.form['email']);
                this.getEmailMsg(isEmailValid);
  
            });
        }

        //listen for on 'input' events of password input field on form
        if(this.form['pswrd']) {
            this.form['pswrd'].addEventListener('input', () => {
                let passwordScore = 0;

                passwordScore = this.view.checkPasswordStrength(this.form['pswrd']);
                this.loadPasswordMsg(passwordScore);
            });

        }

        elements.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.onSubmit();
        });

        //listen for confirm password input 
        if(this.form['confirm-pswrd']) {
            this.form['confirm-pswrd'].addEventListener('input', () => {
                
                //check if the original password is valid
                if(this.validPassword) {
                   
                    let passwordsMatch = this.view.confirmPassword(this.form['pswrd'], this.form['confirm-pswrd']);
                    if(passwordsMatch) {
                        //show error for not matching passwords
                        this.passwordConfirmed = true;
                        this.view.hideError( this.form['confirm-pswrd']);

                        // this.view.displayOkMessage(this.form['confirm-pswrd'], "Your passwords match!");
                    } else {
                        this.passwordConfirmed = false;
                        this.view.displayMessage(this.form['confirm-pswrd'], errorNotifications.passwordMismatch);

                    }
                }                    
                
                
            });

        }
    }

}
