import React from 'react';
import About from './About';
import Navbar from './Navbar';
import aboutimage from '../images/seme2.png';

const AboutBox = () => {
    return (
        <div id='aboutbox'>
            <Navbar/>
            <About image={aboutimage} title='Sharing is caring' button='Get the App'/>
        </div>
    );
}

export default AboutBox;
