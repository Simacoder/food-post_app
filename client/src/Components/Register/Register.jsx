// eslint-disable-next-line
import React, {useState} from 'react';
import './Register.css'
import '../../App.css'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

// import our assests img, video
import video from '../../LoginAssets/rain.mp4'
import logo from '../../LoginAssets/logo.png'

//imported the react-icon
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
    // use State to hold the inputs
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('') 
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()
  
  // click on the user 
  const createUser = (e)=>{
    e.preventDefault()
    // may you use axious an API that communicate with server or you may use fetch()
    Axios.post('http://localhost:3003/register', {
        //create variable to sent through routes
        Email:email,
        UserName: userName,
        Password: password
    }).then(()=>{
        // on Register , rediecting the click 
        navigateTo('/')

        // clearing the field 
        setEmail('')
        setUserName('')
        setPassword('')
    })

  }
  
    return (
        <div className='registerPage flex'>
        <div className="container flex">
            
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'> Reach out and Save our planet and reduce poverty</h2>
                    <p>Sharing is caring!!!!</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to={'/'}>
                    <button className='btn'>Login</button>
                    </Link>
                </div>

            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo image"/>
                    <h3> Register Here!</h3>

                </div>

                <form action="" className='form grid'>
                    
                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type="email" id='email' placeholder='Enter email' 
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}/>


                        </div>

                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter username'
                            onChange={(event)=>{
                                setUserName(event.target.value)
                            }} />

                        </div>

                    </div>



                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="text" id='password' placeholder='Enter password'
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }} />

                        </div>

                    </div>

                    <button type='submit' className='btn flex' onClick={createUser}>
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>
                    <span className='forgotPassword'>
                        Forgot your password? <a href=''>Click here</a>

                    </span>
                </form>

            </div>
        </div>
           

        </div>
    );
}

export default Register;
