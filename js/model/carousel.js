import axios from 'axios';

export default class Carousel {
    constructor() {
        this.slideIndex = 1;
    }

    async getCarousel() {
        try {
            const res = await axios(`./server/banners/index.get.json`);
            return res.data;
        } catch(err) {
            alert(err);
        }
    }

    showSlide(currSlideNum) {
        let slides = document.getElementsByClassName('.carousel__img');
        // var dots = document.getElementsByClassName('.dot');

        if( currSlideNum > slides.length) { this.slideIndex =  1; }
        if( currSlideNum < 1) { this.slideIndex = slides.length; }

        for(var i = 0; i < slides.length; i++) {
            slides[i].classList.add('hide');
        }

        // for( i = 0; i < dots.length; i++) {
        //     dots[i].classList.add('active');
        // }

        slides[slideIndex - 1].classList.add('show');
    }
}