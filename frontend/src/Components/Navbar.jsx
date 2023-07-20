import React,{ useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    } 
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active': 'nav'}>
            <a href='#' className='logo'>
                < img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>            
            <ul className='menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/feature'>Features</a></li>
                <li><a href='/aboutbox'>About</a></li>
                <li><a href='/dashboard'>Dashboard</a></li>
                <li><a href='/requests'>Request</a></li>
                <li><a href='/donate'>Donate</a></li>
                <li><a href='/download'>Download</a></li>
                <li><a href='/signup'>Sign up</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
