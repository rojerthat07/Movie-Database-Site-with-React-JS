import React, { Component } from 'react'
//Styles
import './main.scss'
//Components
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>App.js</h1>
      </div>
    )
  }
}

export default App
