import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Share Your Meal</span> With Confidence and intelligence</h1>
                <p className='Details'>Food Post is a web application developed to 
                tackle the pressing issue of food wastage in Africa.</p>
                <a href='#' className='cv-btn'>Download</a>

            </div>
            
        </div>
    );
}

export default Header;
