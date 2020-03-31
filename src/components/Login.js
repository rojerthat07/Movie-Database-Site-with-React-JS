import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <forms className="login__form">
                <div className="login__heading">Sign in for Movie Streaming</div>
              <p>Username: <input type="text" name="" id=""/></p> 
              <p>Password: <input type="password" name="" id=""/></p>  
              <input className="login__button" type="submit" value="Login"/>
              <p>Don't have any account?   
        <Link to="/Movie-Database-Site-with-React-JS" className="login__link">
                  <span>Free Access</span>
                  </Link>
                   </p>
            </forms>
        </div>
    )
}

export default Login
