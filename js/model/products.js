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


    increaseProductCount(productData) {
        
    }

    decreaseProductCount(productData) {
        
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


    /* update product's count in cart
     * action = 1, if count is to be increased
     * action = 0, if count is to be decreased
     */
    updateProductInCart(productID, productCurrentCount, action) {
    
        //1. fetch value of local storage's cartData. 
        var cart = JSON.parse(localStorage.getItem("cartData"));
        console.log("Cart BEFORE update: " + cart);

        //2. Find the product in cart
        for(var i = 0; i < cart.length; i++) { 
            if(cart[i].productID === productID) {

                /* decrease product count since action = 0
                * 1. check if the product's current count > 0
                */
                if(action === 0) {
                    
                    if(cart[i].productCurrentCount > 0)
                        cart[i].productCurrentCount--;
                    else    
                        console.log("Product's count cannot be reduced beyond 0");
                } else {
                    /* increase product count since action = 1
                     */
                    if(cart[i].productStock > productCurrentCount) 
                        cart[i].productCurrentCount = ++productCurrentCount;
                }
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
        *  2.1.) If product is in cart => if in stock => increase count [do not add to cart] - flag #1
        *  2.2.) If product is in cart => if not in stock => alert()
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
               
                // productObj.productCurrentCount = ++productInCart.productCurrentCount;

                //argument 1 is sent to 'increase' the count of this object in local storage's cart
                this.updateProductInCart(productObj.productID, productInCart.productCurrentCount, 1);
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
        
        if(cartData !== null) {
            cartData.forEach( (cartItem) => {
                cartLength += cartItem.productCurrentCount;
            });
        }

        return cartLength;
    }

}



