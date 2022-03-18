import React from 'react';
import "./App.scss";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar"

const App =()=>{
    return(
        <div className='app__container'>
           <Leftbar />
           <Rightbar />
        </div>
    );
}

export default App;