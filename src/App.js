import React, { Component } from 'react'
import $ from 'jquery'
//Styles
import './main.scss'
//Components
import MovieRow from './components/MovieRow'
//layout
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Header from './components/Header'
//pages
import About from './components/About'


class App extends Component {

  constructor(props){
    super(props)

    this.state ={}


    this.performSearch()

  }


  performSearch(searchTerm){
    console.log('perform search')
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=ad8a2a3e22a31453b48785c80f462afd&query='+ searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
        console.log("Fetched data succesfully")

        const results = searchResults.results
        var movieRows =[]

        results.forEach( movie =>{
          movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
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
      this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <Navigation />
      <Header />



        <form className="search-bar">
        <input onChange={this.searchChangeHandler} className="search-bar__input" placeholder="Enter Movie Name" type="text"/>
        
        <input type="submit" className="search-bar__button" value="Search "/>
        </form>
        

        <div className="movies">
        {this.state.rows}
        </div>
        <Footer />
      
      <About />

      </div>
    )
  }
}

export default App
