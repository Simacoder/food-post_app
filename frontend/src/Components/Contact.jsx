import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <h3>Send Us Email</h3>
            <div className='contact-input'>
                <input type='email' placeholder ='example@foodpost.com'/>
                <a href='#' className='text-decoration-none'> Contact</a>
            </div>
            
        </div>
    );
}

export default Contact;
