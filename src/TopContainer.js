import React from 'react';
import { FaHome } from 'react-icons/fa';
import { HiMusicNote } from 'react-icons/hi';
import { SiTrendmicro } from 'react-icons/si';
import "./TopContainer.scss";



const TopContainer =()=>{
    return(
        <div className='topcontainer_icon'>
            <div className='home_icon'>
                <FaHome size={25} />
                <p className='home_heading'>Home</p>
            </div>

            <div className='trends_icon'>
                <SiTrendmicro size={25} />
                <p className='trends_heading'>Trends</p>
            </div>

            <div className='library_icon'>
                <HiMusicNote size={25} />
                <p className='library_heading'>Library</p>
            </div> 
            
        </div>
    );
}

export default TopContainer;