import React from 'react'
import {useLocation}from 'react-router-dom';

function Home (){
    const location =useLocation();
    return(
        <div classname="homepage">
            <h1>Hello {location.state.id}and welcome to the page</h1>
        </div>
    )
}
export default Home;