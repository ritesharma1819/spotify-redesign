import React from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import "./Rightbar.scss"

const Rightbar=()=>{
    return(
        <div className='rightbar_container'>
            <div>
                <GrFormPrevious size={25}/>
                <GrFormNext size={25}/>
                <input type='search' placeholder=" Taylor Swift"/>
            </div>

        </div>
    );
}

export default Rightbar;