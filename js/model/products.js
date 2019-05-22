import axios from 'axios';

export default class Products {
    constructor() {}
    
    async getProducts(){
        try {
            const res = await axios(`/products`);         //../server/products/index.get.json`);
            return res.data;
        } catch (err) {
            console.log(`Error fetching products : ${err}`);
        }
    }    

    increaseProductCount(product) {

        if(+(product.productCurrentCount) < +(product.productStock)) {
            product.productCurrentCount++;
            
            //update this product in cart of local storage.
            this.updateProductInCart(product);
            return true;    //count increased successfully
            
        } else {
            return false;   //count exceeded stock
        }
    }


    //Decreases product's count and updates product in local storage
    decreaseProductCount(product) {

        if(+(product.productCurrentCount) >= 1) {
            product.productCurrentCount--;
            
            if(+(product.productCurrentCount) === 0) {
                this.removeProductFromCart(product.productId);
                return false; //since the element is now removed from the cart
            }
            //update this product in cart of local storage.
            this.updateProductInCart(product);
            return true;    //count decreased and item still in cart
        }
       
    }


    // create a productObj object from the data attributes in 'productData' variable
    createProductObj (productData) {
        const productObj = {
            productId: productData.productId,
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
    productAlreadyInCart(productId) {
    
        let productFound;
        let cartArr;
    
        //Get cart from local storage
        cartArr = JSON.parse(localStorage.getItem('cartData')) || [];
        console.log("cart : " + cartArr);
    
        //check if cart is not empty
        if(cartArr.length > 0) {

            //return product found from cart
            productFound = cartArr.find(function(cartProduct) {
                return cartProduct.productId === productId ;
            });
        }
        return productFound;   
    }


    /* update product's count in cart
     */
    updateProductInCart(product) {
    
        //1. fetch value of local storage's cartData. 
        var cart = JSON.parse(localStorage.getItem("cartData"));
        console.log("Cart BEFORE update: " + cart);

        //2. Find the product in cart
        for(var i = 0; i < cart.length; i++) { 
            if(cart[i].productId === product.productId) {
                //update count field
                cart[i].productCurrentCount = product.productCurrentCount;
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


    removeProductFromCart(productId) {
        //1. fetch value of localstorage's cartData. 
        var cart = JSON.parse(localStorage.getItem("cartData")) || [];

        // 3. Remove product from cart
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].productId === productId)
                cart.splice(i, 1);
        }
        //cart.splice(cart.indexOf(cart.find((el) => el.productId === productId)));

        // 4. store the updated cart in local storage
        localStorage.setItem("cartData", JSON.stringify(cart));
        console.log("Product removed from cart");
    }

    /* 
    *  Add product To Cart:
    *  1.) create a productObj object from the data attributes in 'productData' variable
    *  2.) Check if the product is already in cart
        *  2.1.) If product is in cart => if in stock => increase count [do not add to cart] - flag #1
        *  2.2.) If product is in cart => if not in stock => alert()
    *  3.) If product not in cart => set its count to 1 => add it to cart
    */
    
    addToCart(productData) {

        //1. create a productObj object from the data attributes in 'productData' variable
        let productObj = this.createProductObj(productData);

        //2. check if the product is already in cart
        let productInCart = this.productAlreadyInCart(productObj.productId);

        
        if(productInCart) {

            //2.1.) product is IN cart and IN stock            
            // productObj.productCurrentCount = ++productInCart.productCurrentCount;
            let success = this.increaseProductCount(productInCart);
            if(!success) {
                console.log("Product is out of stock");
            }
            return true;
          
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
        
        if(cartData !== null) {
            cartData.forEach( (cartItem) => {
                cartLength += cartItem.productCurrentCount;
            });
        }

        return cartLength;
    }

}



