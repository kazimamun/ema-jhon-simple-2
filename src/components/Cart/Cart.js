import React from 'react';

const Cart = (props) => {
    // this line and upper props are receive cart data from shop.js
    const cart = (props).cart; 
    console.log (cart);
    /* 
    two system is set. one is this and one is with for loop.
    const totalPrice = cart.reduce((total, prdct) => total + prdct.price, 0);
    */
    let totalPrice = 0;
    for(let i=0; i<cart.length; i++){
        const prdct = cart[i];
        totalPrice = totalPrice + prdct.price;
    }

    let shipping = 0;
    if (totalPrice>30){
        shipping = 0;
    }else if (totalPrice>15){
        shipping = 5;
    }else if(totalPrice>0){
        shipping = 7;
    }

    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    const formatNumber = num=>{
        const pre = num.toFixed(2);
        return Number(pre);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Orderd: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;