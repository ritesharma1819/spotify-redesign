import React from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaRegDotCircle } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import "./MiddleContainer.scss"

const MiddleContainer =()=>{
    return(
             <div className='middlecontainer_icon'>
                <p className='discover_suggestion'>Discover</p>
                <div className='discover_icon'>
                    <AiFillCalendar size={25} />
                    <p className='discover_heading'>Discover Weekly</p>
                </div>

                <div className='made_icon'>
                    <FaRegDotCircle size={25} />
                    <p className='made_heading'>Made For You</p>
                </div>

                <div className='daily_icon'>
                    <MdLibraryMusic size={25} />
                    <p className='daily_heading'>Daily Mix</p>
                </div> 
            
        </div>
    );
}

export default MiddleContainer; 