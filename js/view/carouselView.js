import { elements } from './base';

export default class CarouselView {
    constructor(container) {
        this.container = container;
    }

    renderCarouselImage(carouselImage) {
        const markup = `

            <img src="./.${carouselImage.bannerImageUrl}" alt="${carouselImage.bannerImageAlt}" 
                id="${carouselImage.id}" class="main__carousel__img js-carousel-img" "/>

        `;
        
        // if (this.container)
        //     this.container.insertAdjacentHTML('beforeend', markup);

        if (elements.homePageContent)
            elements.homePageContent.insertAdjacentHTML('afterbegin', markup);
    }

    renderCarousel(carousel) {
        let num = 1;
        carousel.forEach(this.renderCarouselImage);
    }
}

//Renders each category one by one



export const renderCarousel = carouselImages => {
    // carouselImages.forEach(renderCarouselImage);
    // carouselImages.(renderCarouselImage);
    // carouselImages[0].(renderCarouselImage);

    const carouselImage = carouselImages[0];

    const markup = `
            <div id="main-carousel" class="main__carousel" >
                <img src="./.${carouselImage.bannerImageUrl}" 
                    alt="${carouselImage.bannerImageAlt}"
                    class="main__carousel__img" />
            </div>
        `;
    
    if (elements.homePageContent)
        elements.homePageContent.insertAdjacentHTML('afterbegin', markup);
}