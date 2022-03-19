import React from 'react';
import "./App.scss";
import Leftbar from './component/Lelfbar/Leftbar';
import Rightbar from './component/Rightbar/Rightbar'

const App =()=>{
    return(
        <div className='app__container'>
           <Leftbar />
           <Rightbar />
        </div>
    );
}

export default App;