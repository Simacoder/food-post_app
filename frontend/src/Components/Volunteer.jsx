import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import Navbar from './Navbar';
import axios from 'axios';

const Volunteer= () => {
    

    const [values, setValues] = useState({
        name: '',
        email: '',
        mobile: ''
    })

    const navigate =useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.mobile === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.Consolelog(err));
        }
    }



    return (
        <div id='volunteer'>
            <Navbar/> 
        
            
            <div className='d-flex justify-content-center align-items-center bg-gradient-light vh-100'>
            <div className='bg-secondary p-3 rounded w-25'>
                <h2>Volunteer with Us</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter name' name='name'
                         onChange={handleInput} className='form-control rounded-0'/>
                         {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                         onChange={handleInput} className='form-control rounded-0'/>
                         {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='city'><strong>City</strong></label>
                        <input type='city' placeholder='Enter City' name='city'
                         onChange={handleInput} className='form-control rounded-0'/>
                         
                    </div>

                    

                    <div className='mb-3'>
                        <label htmlFor='mobile'><strong>Cell number</strong></label>
                        <input type='mobile' placeholder='Enter Cell No' name='mobile'
                         onChange={handleInput} className='form-control rounded-0'/>
                         {errors.mobile && <span className='text-danger'> {errors.mobile}</span>}
                    </div>
            
                          <p class='text-white bg-dark'>Please accept the terms and Conditions </p>
                           
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Submit form</strong></button>
                    
                    
                </form>
            </div>
        </div>
        

        </div>
            

        
    );
}

export default Volunteer;
