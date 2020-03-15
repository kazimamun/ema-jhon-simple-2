import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    /* this const use for set no of order in cart*/
    const [cart, setCart] = useState([]);
    /* handleAppProduct use for add product on cart */
    const handleAppProduct = (product) => {
        /* 
        console.log("cart added", product); 
        this line use when first use this code for know your item is working.
        */
       
        /* this const use for set no of order in cart*/
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        handleAppProduct = {handleAppProduct}
                         product={pd}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart> 
                {/* 
                    cart={cart} is for sent data from anywhere.
                    here cart will received at cart.js
                */}
                
            </div>
        </div>
    );
};

export default Shop;