import React from 'react';
import { FaHome } from 'react-icons/fa';
import "./MiddleContainer.scss"

const MiddleContainer =()=>{
    return(
             <div className='meddilecontainer_icon'>
                <p className='discover_suggestion'>Discover</p>
                <div className='discover_icon'>
                    <FaHome size={25} />
                    <p className='discover_heading'>Discover Weekly</p>
                </div>

                <div className='made_icon'>
                    <FaHome size={25} />
                    <p className='made_heading'>Made For You</p>
                </div>

                <div className='daily_icon'>
                    <FaHome size={25} />
                    <p className='daily_heading'>Daily Mix</p>
                </div> 
            
        </div>
    );
}

export default MiddleContainer; 