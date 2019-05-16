import FormValidator from "../model/formValidator";
import FormView from "../view/formView";

export default class FormController {
    constructor(form) {
        this.form = form;
        this.formId = this.form.id;
        this.model = new FormValidator();
        this.view = new FormView(this.form);
    }

    /* Apply validations on input fields of the form
     * Inputs with 'required' set on them, need to be checked for empty validation
     */

    readyForm() {
        //after form loads, focus will go to email field
        // this.view.firstFocus();
       
        //listen for on blur events of email input field on form
        if(this.form['email']) {
            this.form['email'].addEventListener('blur', () => {

                //check for empty email input
                let isInputEmpty;
                isInputEmpty = this.view.checkForEmpty(this.form['email']);

                //check for valid email format if input is not empty
                if(!isInputEmpty)
                    this.view.validateEmail(this.form['email']);
            });
        }
    }


    formEventListener() {
         //listen for on blur events of email input field on form
         if(this.form['email']) {

            this.form['email'].addEventListener('input', () => {
            
                let errMsg = this.view.validateEmail(this.form['email']);
                if(errMsg) {
                    this.view.displayError(this.form['email'], errMsg);
                    this.form['email'].focus();
                } else {
                    this.view.hideError( this.form['email']);
                }
            });
        }

        //listen for on blur events of password input field on form
        debugger;
        if(this.form['pswrd']) {
            this.form['pswrd'].addEventListener('input', () => {
                let passwordScore = 0;
                passwordScore = this.view.checkPasswordStrength(this.form['pswrd']);
                console.log("Password Score : "  + passwordScore);
                this.form['pswrd'].focus();
                this.view.displayError(this.form['pswrd'], passwordScore);
            });

        }
    }
}
