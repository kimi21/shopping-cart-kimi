import FormValidator from "../model/formValidator";
import FormView from "../view/formView";

export default class FormController {
    constructor(form) {
        this.form = form;
        this.formId = this.form.id;
        this.model = new FormValidator();
        this.view = new FormView(this.form);
    }

    //Apply validations on input fields of the form

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


        //listen for on blur events of password input fields on form
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

        return true;
    }

    listenFormEvents() {
        let requiredFormInputs = [];

        //get all the textbox input elements of form that are required
        console.log("Form: " + JSON.stringify(this.form));

        //store all input elements with required attribute set and call event listeners on them
        requiredFormInputs = this.form.childElementCount

        for(var i = 0 ; i < this.form.childElementCount; i++) {
            //Store all inputs with required attribute set in an array
            if(this.form[i].required == true) {
                //push in array
                requiredFormInputs.push(this.form[i]);
            }

        }

    }

}
