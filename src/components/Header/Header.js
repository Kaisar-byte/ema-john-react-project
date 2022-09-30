import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div className='header-nav'>
                <a href="/order">Order</a>
                <a href="/order-review">Order review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;