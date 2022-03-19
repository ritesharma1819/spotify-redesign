import React from 'react';
import "./Leftbar.scss";
import TopContainer from "../TopbarContainer/TopContainer";
import MiddleContainer from "../MiddlebarContainer/MiddleContainer"
import BottomContainer from '../BottombarContainer/BottomContainer';

const Leftbar=()=>{
    return(
        <div className='leftbar_container'>
             <img className='logo' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png' alt='logo' />
             <TopContainer />
             <MiddleContainer />
             <BottomContainer />
        </div>
    );
}

export default Leftbar;