import React from 'react';
import './Banner.css'

function Banner(props) {
    return(
        <div className="App-main-photo-title">
            <div className='App-main-photo'> 
                <img src={props.img} className="App-header-banner" alt="banner" />
            </div>
                <h1 className='App-main-title'>{props.text}</h1>
        </div>
            )
}

export default Banner;
