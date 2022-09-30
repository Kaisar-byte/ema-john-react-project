import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <p>Order Summary</p>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;