

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
        el.classList.add('show');
    }

    hide(el) {
        el.classList.add('hide');
    }
}

