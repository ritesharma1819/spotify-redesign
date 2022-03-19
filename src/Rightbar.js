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
            <div className='suggestion_list'>
                <p>#</p>
                <p className='title_list'>TITLE</p>
                <p className='playing_list'>PLAYING</p>
                <p className='time_list'>TIME</p>
                <p className='album_list'>ALBUM</p>
            </div> 
            <div >
                <ol className='main_container_list'>
                    <li className='first_li_container'>
            
                            <ul className='first_list'>
                                <li className='first_title_list'>Wildest Dreams(Taylor's Version)</li>
                                <li>63,637,378</li>
                                <li className='first_time_list'>3:40</li>
                                <li>1998</li>
                            </ul>
                
                    </li>
                    
                    <li>
                            <ul className='second_list'>
                                <li className='second_title_list'>Blank Space</li>
                                <li>648,598,809</li>
                                <li className='second_time_list'>3:40</li>
                                <li>1998</li>
                            </ul>

                    </li>
                    <li className='third_li_container'>
                           <ul className='third_list'>
                                <li>Exile (feat,Bon Iver)</li>
                                <li>289,455,503</li>
                                <li>3:40</li>
                                <li>Folklore</li>
                            </ul>
                    </li>
                        
                    <li>
                            <ul className='fourth_list'>
                                <li>Cardigan</li>
                                <li>336,863,916</li>
                                <li>3:40</li>
                                <li>Folklore</li>
                            </ul>

                    </li>
                </ol>
            </div>

        </div>
    );
}

export default Rightbar;