import axios from 'axios';

export default class Products {
    constructor() {}
    
    async getProducts(){
        try {
            const res = await axios(`../server/products/index.get.json`);
            return res.data;
        } catch (err) {
            console.log(`Error fetching products : ${err}`);
        }
    }    


    increaseProductCount(product) {

    }

    decreaseProductCount(product) {
        
    }

    // 1.) create a productObj object from the data attributes in 'productData' variable
    createProductObj (productData) {
        const productObj = {
            productID: productData.productId,
            productName: productData.productName,
            productImageurl: productData.productImageurl,
            productDesc: productData.productDesc,
            productPrice: productData.productPrice,
            productCategory: productData.productCategory,
            productSku: productData.productSku,
            productStock: productData.productStock
        };  
    
        return productObj;
    }
    

    //2. check if the product is already in cart
    productAlreadyInCart(productToBuy) {
    
        let productFound;
        let cartArr;
    
        //Get cart from local storage
        cartArr = JSON.parse(localStorage.getItem('cartData')) || [];
        console.log("cart : " + cartArr);
    
        //check if cart is not empty
        if(cartArr.length > 0) {

            //return product found from cart
            productFound = cartArr.find(function(cartProduct) {
                return cartProduct.productID === productToBuy.productID ;
            });
        }
        return productFound;   
    }


    //update product's count in cart
    updateProductInCart(productObj) {
    
        //1. fetch value of localstorage's cartData. 
        var cart = JSON.parse(localStorage.getItem("cartData"));
        console.log("Cart BEFORE update: " + cart);

        for(var i = 0; i < cart.length; i++) { 

            //find the element in cart with matching ID of productObj 
            if(cart[i].productID === productObj.productID) {
                cart[i].productCurrentCount = productObj.productCurrentCount;
                break;
            }
        }

        //store this updated cart in local storage
        localStorage.setItem('cartData', JSON.stringify(cart));
        console.log("Cart with updated count of product : " + JSON.stringify(cart));
    }


    addNewProduct(productObj) {
        //1. fetch value of localstorage's cartData. 
        var cart = JSON.parse(localStorage.getItem("cartData")) || [];
        console.log("Cart BEFORE push: " + cart);

        // 3. Add productObj to cart
        cart.push(productObj);
        console.log("Cart AFTER push: " + cart);

        // 4. store the updated cart in local storage
        localStorage.setItem("cartData", JSON.stringify(cart));
        console.log("cart Added to LS");
    }


    /* 
    *  Add product To Cart:
    *  1.) create a productObj object from the data attributes in 'productData' variable
    *  2.) Check if the product is already in cart
        *  2.1.) If product is in cart => in stock => update count [do not add to cart]
        *  2.2.) If product is in cart => not in stock => alert()
    *  3.) If product not in cart => set its count to 1 => add it to cart
    */
    
    addToCart(productData) {

        //1. create a productObj object from the data attributes in 'productData' variable
        let productObj = this.createProductObj(productData);

        //2. check if the product is already in cart
        let productInCart = this.productAlreadyInCart(productObj);

        
        if(productInCart) {
            //2.1.) product is IN cart and IN stock
            if(productInCart.productCurrentCount < productInCart.productStock) {
               
                productObj.productCurrentCount = ++productInCart.productCurrentCount;
                
                //update the count of this object in local storage's cart
                this.updateProductInCart(productObj);
                return true;
            } else {
                //2.2.) product is IN cart but NOT in stock
                console.log("Oops! this product is out of stock");
                return false;
            }

        } else {
            //3.) product not in cart => set its count to 1 
            productObj.productCurrentCount = 1;
            
            //add this new product to cart
            this.addNewProduct(productObj);
            return true;
        }

    }


    //Calculate total number of elements in cart
    getCartLength() {
        let cartLength, cartData;
        cartLength = 0;
        cartData = JSON.parse(localStorage.getItem('cartData'));
        
        cartData.forEach( (cartItem) => {
            cartLength += cartItem.productCurrentCount;
        });

        return cartLength;
    }

}



