import React, { Component } from 'react'
import brand from '../images/tmdb.png'

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">

            <div className="navigation__brand">
              <img className="navigation__image" src={brand} alt=""/>  <p>Movie Database</p>

            </div>


                <div className="navigation__list">
                    <div className="navigation__item">
                       <a href="/public/index.html" className="navigation__link">HOME</a>
                    </div>
                    <div className="navigation__item">
                       <a href="/public/index.html" className="navigation__link">ABOUT</a>
                    </div>
                    <div className="navigation__item">
                       <a href="/public/index.html" className="navigation__link">FACTS</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Navigation
