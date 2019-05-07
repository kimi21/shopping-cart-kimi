import axios from 'axios';

export default class Category {
    constructor() {
        //this.query = query;
    }
    async getCategories() {
        try {
            const res = await axios(`./server/categories/index.get.json`);
            // const result = res.data;
            return res.data;
        } catch (err) {
            alert(err);
        }
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