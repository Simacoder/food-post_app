// eslint-disable-next-line
import React from 'react';
import './listing.css';

// Importing images
import img from '../../../Assets/seme2.jpg'
import img1 from '../../../Assets/seme3.jpg'
import img2 from '../../../Assets/seme4.jpg'
import img3 from '../../../Assets/seme5.jpg'
import userA from '../../../Assets/user1.png'
import userB from '../../../Assets/user2.jpg'
import userC from '../../../Assets/user3.jpg'
import userD from '../../../Assets/user4.jpg'

//importing icons
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

const Listing = () => {
    return (
        <div className='listingSection'>
            <div className="heading flex">
                <h1>Our Listings</h1>
                <button className='btn flex'>
                    See All <BsArrowRightShort className="icon"/>
                </button>
            </div>
            
            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img} alt='Image Name'/>
                    <h3>Share together</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img1} alt='Image Name'/>
                    <h3>More the merry</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img2} alt='Image Name'/>
                    <h3>Share your fortune</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={img3} alt='Image Name'/>
                    <h3>Organic foods</h3>
                </div>
            </div>

            <div className="requests flex">
                <div className="topDonors">
                    <div className="heading flex">
                        <h3>Top Donors</h3>
                        <button className='btn flex'>
                           See All <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={userA} alt='User Image'/>
                            <img src={userB} alt='User Image'/>
                            <img src={userC} alt='User Image'/>
                            <img src={userD} alt='User Image'/>
                        </div>
                        <div className="cardText">
                            <span>
                                160 foods donated <br/>
                                <small>
                                    34 Donors <span className='date'>10 Days
                                    </span>
                                </small>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="featuredDonors">
                    <div className="heading flex">
                        <h3>Featured Donors</h3>
                        <button className='btn flex'>
                           See All <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={userB} alt='User Image'/>
                            <img src={userC} alt='User Image'/>
                            <img src={userD} alt='User Image'/>
                            <img src={userA} alt='User Image'/>
                        </div>
                        <div className="cardText">
                            <span>
                                34,160 foods donated <br/>
                                <small>
                                    60 Donors <span className='date'>30 Days
                                    </span>
                                </small>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Listing;
