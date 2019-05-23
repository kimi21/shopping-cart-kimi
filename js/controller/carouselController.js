
import Utility from '../Utility/utilities';
import CarouselView from '../view/carouselView';
import Carousel from '../model/carousel';
import { elements } from '../view/base';

export default class CarouselController {
    constructor() {
        this.view = new CarouselView();
        this.model = new Carousel();
        this.utility = new Utility();
    }

    async loadCarousel() {
       
        //1) get the carousel images 
        const carousel = await this.model.getCarousel();
        console.log("Fetching carousel... Length = " + carousel.length);
    
        //2) render results on UI
        this.view.renderCarousel(carousel);
        this.view.changeSlide();

    }


    carouselEvenListener() {
        elements.carouselContainer.addEventListener('click', (event) => {
            if(event.target.matches('.js-dots')) {
                this.view.changeSlide(event);
            }
            
        });   
    }

} 