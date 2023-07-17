import React from 'react';
import Navbar from './Navbar';



const About = (props) => {
    return (
        <div id='about'>
            <Navbar/>
            
            <div className='about-image'>
            
                <img src={props.image} alt=''/>
               
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Food Post is a web application developed to tackle the pressing issue of food wastage in 
                    Africa. It is a centralized platform that efficiently connects those with excess food to 
                    individuals, farmers, and NGOs, enabling the efficient redistribution of surplus food and 
                    significantly reducing food wastage across Africa.
                </p>
                <button>{props.button}</button>
            </div>
            
        </div>
    );
}

export default About;
