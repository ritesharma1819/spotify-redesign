import React from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import "./Rightbar.scss"

const Rightbar=()=>{
    return(
        <div className='rightbar_container'>
            <div className='header'>
                <div className='pre_and_next_but_sty'>
                    <GrFormPrevious size={25}/>
                    <div className='nextbutton_styling'>
                        <GrFormNext size={25} />
                    </div>
                </div>
                
                <div className='input_box'>
                    <input type='search' className="search_symbol" placeholder="&#61442;      Taylor Swift" />               
                </div>
            </div>
            <div className='image_container'>
                <img className='image_styling' src={require('./taylor.jpeg')} alt='Taylor Swift Singer' />
            </div>
            <div className='song_suggestion'>
                <h3>Popular</h3>
                <div className='see_all_container'>
                    <p>See All</p>
                </div>
            </div>

        </div>
    );
}

export default Rightbar;