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
                    <div className="navigation__item">
                        <Link className="navigation__link " to="/">
                       <div>HOME</div>
                       </Link>
                    </div>
                    <div className="navigation__item">
                    <Link className="navigation__link" to="/about">
                       <div>ABOUT</div>
                       </Link>
                    </div>
                    
                    <div className="navigation__item navigation__item--login">
                    <Link className="navigation__link " to="/">
                       <div>LOGIN</div>
                       </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Navigation
