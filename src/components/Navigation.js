import React, { Component } from 'react'
import brand from '../images/tmdb.png'
import {Link} from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
            <div className="navigation__brand">
              <img className="navigation__image" src={brand} alt=""/>  <p>mr. MovieDB Theater</p>
            </div>
                <div className="navigation__list">
                <Link className="navigation__link " to="/Movie-Database-Site-with-React-JS">
                    <div className="navigation__item">
                       <div>HOME</div>
                    </div>
                    </Link>
                 
                </div>
            </div>
        )
    }
}

export default Navigation
