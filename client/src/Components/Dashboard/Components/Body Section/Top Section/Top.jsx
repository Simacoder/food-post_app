// eslint-disable-next-line
import React from 'react';
import './top.css';

// import icons
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircleBolt} from 'react-icons/tb'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsArrowUpRight} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

// import images
import img from '../../../Assets/user.png'
import img2 from '../../../Assets/seme1.png'
import video from '../../../Assets/rain.png'

const Top = () => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Food Post</h1>
                    <p>Sharing is caring, welcome Back</p>
                </div>

                <div className="searchBar flex">
                    <input type='text' placeholder='search dashoard'/>
                    <BiSearchAlt className="icon"/>

                </div>

                <div className="adminDiv flex">
                    <TbMessageCircleBolt className="icon"/>
                    <IoIosNotificationsOutline className="icon"/>
                    <div className="adminImage">
                        <img src={img}alt='Admin Image'/>
                    </div>
                </div>

            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and Share food, save planet and reduce poverty</h1>
                    <p>Food and organic waste is typically a large component of cities’ solid waste streams, 
                       and the biggest contributor to greenhouse gas emissions from waste</p>

                       <div className="button flex">
                        <button className='btn'>Explore More</button>
                        <button className='btn transparent'>Top Donors</button>
                       </div>

                       <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                       </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">

                        <div className="textDiv">
                            <h1>Our Stats</h1>
                            <div className="flex">
                                <span>
                                    Today <br/> <small> 4 Requests</small>
                                </span>

                                <span>
                                    This Month <br/> <small> 180 Requests</small>
                                </span>
                            </div>
                            <span className="flex link">
                                Go to my requests <BsArrowUpRight className='icon'/>

                            </span>
                        </div>
                        
                        <div className="imgDiv">
                            <img src={img2} alt='image Name'/>
                        </div>
                        <div className="sideBarCard">
                            <BsQuestionCircle className="icon"/>
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help centre</h3>
                                <p>Having challenges in Food Post, reach to us for help</p>

                                <button className='btn'> Go to help centre</button>
                            </div> 

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Top;
