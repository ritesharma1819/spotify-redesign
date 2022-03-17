import React from 'react';
import { FaHome } from 'react-icons/fa';
import "./TopContainer.scss";


const TopContainer =()=>{
    return(
        <div className='home_icon'>
            <FaHome size={30} />
            <p className='home_heading'>Home</p>
        </div>
    );
}

export default TopContainer;