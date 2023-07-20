import React, { useState } from "react";
import axios from 'axios';
import Navbar from './Navbar';

 
//import { useHistory } from "react-router-dom";
 
const Donate = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    food_name: "",
    food_quantity: "",
    food_description: ""
  });
 
  const { food_name, food_quantity, food_description} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/posts",user);
    alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div id='donate'>
        <Navbar/> 
          
<div class='d-flex justify-content-center align-items-center bg-gradient-light vh-100'>
<div className="container bg-light border p-3 rounded" >
      <div class="row g-3">  
      
      
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-info text-center mb-4">Donate Food</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Food Name"
              name="foodt_name"
              value={food_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Food Quantity"
              name="food_quantity"
              value={food_quantity}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Food Description"
              name="food_description"
              value={food_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class='text-center d-grid gap-3'>
          <button className="btn btn-primary btn-block ">Send Donation</button>
          </div>
          <div class='text-center d-grid gap-3 h-50'>
          <a class="btn btn-outline-dark btn-block" href="/volunteer" role="button">Volunteer with us</a>  
          </div>
                 
        </form>
      </div>
    </div>
  </div>  

    </div>

</div>

    
  );
};

export default Donate;