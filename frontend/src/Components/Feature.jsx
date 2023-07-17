import React from 'react';
import Navbar from './Navbar';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';


const Feature = () => {
    return (
        <div id='features'>
            <Navbar/>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Development world'/>
                <FeatureBox image={featureimage1} title='Saving food, saving World'/>
                <FeatureBox image={featureimage2} title='Reusable Foods'/>

            </div>
            
        </div>
    );
}

export default Feature;
