import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';
import "./BottomContainer.scss";

const BottomContainer=()=>{
    return(
        <div className='bottomcontainer_icon'>
            <p className='yourcollection_suggestion'>Your Collection</p>
                <div className='likedsongs_icon'>
                    <AiFillHeart size={25} />
                    <p className='likedsongs_heading'>Liked Songs</p>
                </div>

                <div className='favorite_icon'>
                    <FaUserCheck size={25} />
                    <p className='favorite_heading'>Fovorite Artist</p>
                </div>

                <div className='playlist_icon'>
                    <BsMusicNoteList size={25} />
                    <p className='playlist_heading'>Playlist</p>
                </div> 
                
        </div>
    );
}

export default BottomContainer;