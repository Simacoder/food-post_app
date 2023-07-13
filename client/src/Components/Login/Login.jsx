// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import './Login.css'
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

const Login = () => {
//Usestate to store inputs data
const [loginUserName, setLoginUserName] = useState('') 
const [loginPassword, setLoginPassword] = useState('')
const navigateTo = useNavigate()

// Showing the messae to the user
const [loginStatus, setLoginStatus] = useState('')
const [statusHolder, setStatusHolder] = useState('message')

// click on the user 
const loginUser = (e)=>{
    
    e.preventDefault();

    // may you use axious an API that communicate with server or you may use fetch()
    Axios.post('http://localhost:3003/login', {
        //create variable to sent through routes
        LoginUserName: loginUserName,
        LoginPassword: loginPassword
    }).then((response)=>{
        console.log()
        // if creadentials don't match
        if(response.data.message || loginUserName == '' || loginPassword == ''){
            navigateTo('/')
            setLoginStatus('Credentials does not exist!!!')
        }
        else{
            // if creadentials don't match , we navigate to dashboard
            navigateTo('/dashboard')
        }
    })

  }

  useEffect(()=>{
    if(loginStatus !== ''){
        setStatusHolder('showMessage') // showing the message
        setTimeout(() => {
            setStatusHolder('message') // disappear after 4s
            
        }, 4000);
    }

  },[loginStatus])

  // clearing the input on submit form
  const onSubmit = ()=>{
    setLoginUserName('')
    setLoginPassword('')
  }

    return (
        <div className='loginPage flex'>
        <div className="container flex">
            
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'> Reach out and Save our planet and reduce poverty</h2>
                    <p>Sharing is caring!!!!</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Dont you have an account?</span>
                    <Link to={'/register'}>
                    <button className='btn'>Sign up</button>
                    </Link>
                </div>

            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image"/>
                    <h3> Login Here!</h3>

                </div>

                <form action="" className='form grid' onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter username'
                            onChange={(event)=>{
                                setLoginUserName(event.target.value)
                            }} />

                        </div>

                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="text" id='password' placeholder='Enter password' 
                            onChange={(event)=>{
                                setLoginPassword(event.target.value)
                            }}/>

                        </div>

                    </div>

                    <button type='submit' className='btn flex' onClick={loginUser}>
                        <span>Login</span>
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

export default Login;
