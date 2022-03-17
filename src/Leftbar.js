import React from 'react';
import "./Leftbar.scss";
import TopContainer from "./TopContainer";

const Leftbar=()=>{
    return(
        <div className='leftbar_container'>
             <img className='logo' src={require('./Spotify-redesign -logos.jpeg')} alt='logo' />
             <TopContainer />
        </div>
    );
}

export default Leftbar;