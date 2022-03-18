import React from 'react';
import { FaHome } from 'react-icons/fa';

const BottomContainer=()=>{
    return(
        <div className='bottomcontainer_icon'>
            <p>Your Collection</p>
                <div className='likedsongs_icon'>
                    <FaHome size={25} />
                    <p className='likedsongs_heading'>Liked Songs</p>
                </div>

                <div className='favorite_icon'>
                    <FaHome size={25} />
                    <p className='favorite_heading'>Fovorite Artist</p>
                </div>

                <div className='playlist_icon'>
                    <FaHome size={25} />
                    <p className='playlist_heading'>Playlist</p>
                </div> 
                
        </div>
    );
}

export default BottomContainer;