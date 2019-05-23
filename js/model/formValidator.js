

export default class FormValidator {
    constructor(form) {
        this.form = form;
    }

    //after form loads focus will go to email field
    firstfocus() {
       this.form['email'].focus();
        return true;
    }


    //on blur event of email input
    validateEmail() {
        this.form['email'].addEventListener('blur', (event) => {
            if(this.form['email'].value == "") {
                console.log();
            }    
        });
        
    }
}
    