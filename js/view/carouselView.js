import { elements } from './base';
import Utility from '../Utility/utilities';
import Utilities from '../Utility/utilities';

export default class CarouselView {
    constructor() {
        this.utility = new Utility();
        this.slideIndex = 0;
    }


    showSlide(currSlideNum) {
        let slides = document.querySelectorAll('.js-carousel-img');
        let dots = document.querySelectorAll('.js-dots');

        if( currSlideNum > slides.length) { this.slideIndex =  1; }
        if( currSlideNum < 1) { this.slideIndex = slides.length; }

        slides.forEach((image) => {
            this.utility.hide(image);
        });

        dots.forEach((dot) => {
            this.utility.deactive(dot);
        });

        this.utility.show(slides[this.slideIndex - 1]);
        this.utility.active(dots[this.slideIndex - 1]);
    }



    changeSlide(event) {
        let movement = 1;
        this.showSlide(this.slideIndex += movement);
       
    }
    

    renderCarouselImage(carouselImage) {
        const markup = `
            <li class="fade"> 
                <img src="./.${carouselImage.bannerImageUrl}" alt="${carouselImage.bannerImageAlt}" 
                    id="${carouselImage.id}" class="main__carousel__img js-carousel-img" "/>
            </li>
        `;
        
        if(elements.carouselImages)
            elements.carouselImages.insertAdjacentHTML('beforeend', markup);
    }


    renderCarouselDots(carouselImage) {
        const markup = `
            <a><span class="main__carousel__circle main__carousel__circle js-dots" data-pos="${carouselImage.order}"></span></a>
        `;

        if(document.querySelector('.main__carousel__indicators'))
            document.querySelector('.main__carousel__indicators').insertAdjacentHTML('beforeend', markup);

    }


    renderCarousel(carousel) {
        let num = 0;
        carousel.forEach(this.renderCarouselImage);

        // for( var i = 0; i < carousel.length; i++) {
        //     num++;
        //     this.renderCarouselDots(carousel[i], num);
            
        // }
        carousel.forEach(this.renderCarouselDots);

    }

}
