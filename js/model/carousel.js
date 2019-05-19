import axios from 'axios';

export default class Carousel {
    constructor() {
        
    }

    async getCarousel() {
        try {
            const res = await axios(`./server/banners/index.get.json`);
            return res.data;
        } catch(err) {
            alert(err);
        }
    }

    
}