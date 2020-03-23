import React from 'react'
import headerbg from '../images/headerbg.jpg'

function Header() {
    return (
        <div className="header" style={headerStyle}>
            <div className="header__information">
            <div className="header__title">World's Largest Movie Database Site</div>
            <div className="header__text">Made by Jer Carlo Catallo</div>
            </div>
           
        </div>
    )
}


const headerStyle ={
    background:`linear-gradient(rgba(0, 0, 0,0.5),rgba(0, 0, 0,0.5)),url(${headerbg})`,
    backgroundSize:'cover'
}

export default Header

