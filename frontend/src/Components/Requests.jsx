import axios from 'axios';
import {useEffect, useState } from "react";
import Navbar from './Navbar';

function Requests()
{
  const [id, setId] = useState('');
  const [stname, setName] = useState("");
  const [meal, setMeal] = useState("");
  const [fee, setFee] = useState("");


  const [foods, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);

  
  
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8088/api/requestdb/");
         setUsers(result.data.data);
         console.log(result.data);
  }
 
    
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8088/api/requestdb/add",
        {
        
          stname: stname,
          meal: meal,
          fee: fee
        
        });
          alert("Food Requestered Successfully");
         
         
          Load();
        
        }
    catch(err)
        {
          alert("Food Request Failed");
        }
   }
   async function editFood(foods)
   {
    setName(foods.stname);
    setMeal(foods.meal);
    setFee(foods.fee); 
 
    setId(foods.id);
    
   }



   async function DeleteFoods(id)
   {
       
        await axios.delete("http://localhost:8088/api/requestdb/delete/" + id); 
        alert("Food deleted Successfully");
        Load();
   
   }



   async function update(event)
   {
    event.preventDefault();

   try
       {
        
        await axios.put("http://localhost:8088/api/requestdb/update/"+ foods.find(u => u.id === id).id || id,
       {
         id: id,
         stname: stname,
         meal: meal,
         fee: fee
       
       });
         alert("Registration Updated");
      
       
       }
   catch(err)
       {
         alert(" Registration Failed");
       }
  }



  return (
    <div id='request'>
        <div>
        <Navbar/>
       <h1 class='p-5 text-center' >Food Details</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="food_id" hidden
               value={id}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }}
               
               />
                <label><strong>Food Name</strong></label>
                <input  type="text" class="form-control" id="name"
                value={stname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
                <label><strong>Cook or unCook</strong></label>
                <input  type="text" class="form-control" id="meal" 
                 value={meal}
                  onChange={(event) =>
                    {
                      setMeal(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label><strong>How many bags</strong></label>
                <input type="text" class="form-control" id="fee" 
                  value={fee}
                onChange={(event) =>
                  {
                    setFee(event.target.value);      
                  }}
                />
              </div>

                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Request</button>
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>

<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Food Id</th>
      <th scope="col">Food Name</th>
      <th scope="col">Cook or uncooked</th>
      <th scope="col">How many Bags</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {foods.map(function fn(requestdb)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{requestdb.id} </th>
                <td>{requestdb.stname}</td>
                <td>{requestdb.meal}</td>
                <td>{requestdb.fee}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editFood(requestdb)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteFoods(requestdb.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>

    </div>
    
            );
        }
 
export default Requests;