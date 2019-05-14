import Hamburger from "../model/hamburger";
import HamburgerView from "../view/hamburgerView";
import Utility from '../Utility/utilities';

import { elements } from '../view/base';

export default class HamburgerController {
    constructor(state) {
        this.view = new HamburgerView();
        this.model = new Hamburger();
        this.state = state;
        this.utility = new Utility();
    }
    
    //handles click event of hamburger menu icon in header
    handleClick() {
        if(elements.hamburgerMenuIcon) {
            elements.hamburgerMenuIcon.addEventListener('click', ()=> {
                if(elements.hamburgerMenuDiv) {
                   debugger;
                        let isDisplayed = this.utility.toggleDisplay(elements.hamburgerMenuDiv);
                } else {
                    console.log('not found hamburger menu div');
                }
            });
        }
        
    }
 
}