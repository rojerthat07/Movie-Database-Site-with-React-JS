import React, { Component } from 'react'
//modules
import {BrowserRouter as Router, Route} from 'react-router-dom'
import $ from 'jquery'
//Styles
import './main.scss'
//Components
import MovieRow from './components/MovieRow'
import Login from './components/Login'
//layout
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Header from './components/Header'
//pages
import About from './components/About'
import placeholder from './images/placeholderImage.jpg'


class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      searchTerm: 'avengers'
    }


  this.performSearch()

  }


  performSearch(searchTerm = this.state.searchTerm){

    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=ad8a2a3e22a31453b48785c80f462afd&query='+ searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
 

        const results = searchResults.results
        var movieRows =[]

        results.forEach( movie =>{
          movie.poster_src = (movie.poster_path == null ? placeholder : "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path)//"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
      
         
        })

        this.setState({
          rows:movieRows
        })
      },
      error: (xhr,status,err) =>{
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler = (e) =>{
    const searchTerm = e.target.value
    this.setState({
      searchTerm: searchTerm
    })

  }

  submitHandler = (event) =>{
    event.preventDefault()
    this.performSearch()
  }
 

  render() {
    return (
      <Router>
      <div>
        <Navigation />
      
      <Route path="/Movie-Database-Site-with-React-JS" exact >
      <Header />
      <div className="main">
        <form className="search-bar" onSubmit={this.submitHandler}>
        <input onChange={this.searchChangeHandler} className="search-bar__input" placeholder="Enter Movie Name" type="text"/>
        <input  type="submit" className="search-bar__button" value="Search "/>
        </form>
        <div className="movies">
        {this.state.rows}
        </div>
        </div>
        </Route>
    
        <Route path="/Movie-Database-Site-with-React-JS/about" component={About}/> 
      
        <Route path="/Movie-Database-Site-with-React-JS/login" component={Login}/> 
        <Footer />
 
      </div>
      </Router>
      
    )
  }
}

export default App
