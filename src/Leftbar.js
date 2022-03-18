import React from 'react';
import "./Leftbar.scss";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer"
import BottomContainer from "./BottomContainer"

const Leftbar=()=>{
    return(
        <div className='leftbar_container'>
             <img className='logo' src={require('./Spotify-redesign -logos.jpeg')} alt='logo' />
             <TopContainer />
             <MiddleContainer />
             <BottomContainer />
        </div>
    );
}

export default Leftbar;