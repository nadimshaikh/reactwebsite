import React from 'react'
import web from "../src/imges/service.jpeg"
import {NavLink} from "react-router-dom"
import Common from "./Common"

const About= () => {
    return (
        <>
            <Common name="Welcome to About page" 
            imgsrc={web} 
            visit="/Contact"
             btname="Contact Now"/>
        </>

    );
};

export default About;
