import axios from 'axios';

export default class Products {
    constructor() {
        // this.query = query;
    }
    async getProducts(){
        try {
            const res = await axios(`../server/products/index.get.json`);
            return res.data;
        } catch (err) {
            alert(err);
        }
    }    
}
