import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {
    const { name, img, price, seller, ratings } = product
    // // const { handleAddToCart } = props
    // console.log(props)
    // const { handleAddToCart, product } = props

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="cart-text">
                <p className='product-name'>Name: {name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='addToCartBtn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Product;