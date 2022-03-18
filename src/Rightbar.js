import React from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import "./Rightbar.scss"

const Rightbar=()=>{
    return(
        <div className='rightbar_container'>
            <div className='header'>
                <GrFormPrevious size={25}/>
                <GrFormNext size={25}/>
                <div className='input_box'>
                    <input type='search' className="search_symbol" placeholder="&#61442; Taylor Swift" />               
                </div>
            </div>

        </div>
    );
}

export default Rightbar;