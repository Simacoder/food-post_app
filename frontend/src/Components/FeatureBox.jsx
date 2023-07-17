import React from 'react';

const FeatureBox = (props) => {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>Substantially reduce waste generation through prevention, reduction, recycling and reuse.</p>

            </div>
            
        </div>
    );
}

export default FeatureBox;
