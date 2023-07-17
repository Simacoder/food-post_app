import React from 'react';
import aboutimage1 from '../images/download.png';
import Navbar from './Navbar';
import About from './About';

const Download = () => {
    return (
        <div>
            <Navbar/>
            <About image={aboutimage1} title='Download and Get te App now' button='Download'/>
        </div>
    );
}

export default Download;
