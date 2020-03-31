import React from 'react'
import siteLogo from '../images/tmdb.png'

function About() {
    return (
        <div className="about">
            <div className="about__heading">ABOUT</div>
            <div className="about__heading2">mr. MovieDB Theater</div>
    
            <div className="about__text">This site is built with React JS and using MovieDB API. This project is part of the portfolio of Jer Carlo D. Catallo.</div>
          
            <img src={siteLogo} alt=""/>
           
        </div>
    )
}

export default About
