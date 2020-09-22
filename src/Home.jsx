import React from 'react'
import web from "../src/imges/frontend.jpeg"
import {NavLink} from "react-router-dom"
import Common from './Common'

const Home = () => {
    return (
        <>
        <Common 
         name="Grow your buisness with" 
         imgsrc={web} 
         visit="/Service"
          btname="Get Started"/>
        </>

    );
};

export default Home;
