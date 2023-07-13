// eslint-disable-next-line
import React from 'react';
import './activity.css';

//importing icons
import {BsArrowRightShort} from 'react-icons/bs'

//importing images
import user from '../../../Assets/ben.jpg'
import user1 from '../../../Assets/ben1.jpg'
import user2 from '../../../Assets/ben2.jpg'
import user3 from '../../../Assets/ben3.jpg'


const Activity = () => {
    return (
        <div className='activitysection'>
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className='btn flex'>
                    See All 
                    <BsArrowRightShort className="icon"/>

                </button>
            </div>
            
            <div className="secContainer grid">
                <div className="singleBeneficial flex">
                    <img src={user} alt="Beneficial Image" />
                    <div className="beneficialDetails">
                        <div className="name"> John Mckenzie</div>
                        <small>Ordered beans for new NGO</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleBeneficial flex">
                    <img src={user1} alt="Beneficial Image" />
                    <div className="beneficialDetails">
                        <div className="name"> Sharon Stone</div>
                        <small>Ordered beans for new NGO</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleBeneficial flex">
                    <img src={user2} alt="Beneficial Image" />
                    <div className="beneficialDetails">
                        <div className="name"> Wiseman Jonathan</div>
                        <small>Ordered beans for new NGO</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleBeneficial flex">
                    <img src={user3} alt="Beneficial Image" />
                    <div className="beneficialDetails">
                        <div className="name"> Becky Karen</div>
                        <small>Ordered beans for new NGO</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Activity;
