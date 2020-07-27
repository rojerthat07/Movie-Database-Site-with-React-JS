import React, { Component } from 'react'
//modules
import {BrowserRouter as Router, Route} from 'react-router-dom'
import $ from 'jquery'
//Styles
import './main.scss'


import placeholder from './images/placeholderImage.jpg'
import InputSearch from './components/InputSearch'
import MovieCard from './components/MovieCard'


class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      searchTerm: 'AVENGERS: ENDGAME'
    }

  this.inputRef = React.createRef()
  this.performSearch()
  }


//Initial search for the movie
  performSearch(searchTerm = this.state.searchTerm){
 
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=ad8a2a3e22a31453b48785c80f462afd&query='+ searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
 
        const results = searchResults.results

        results.forEach( movie =>{

          this.setState({
            movieID: movie.id
          })
      
        })

      },
      error: (xhr,status,err) =>{
        console.error("Failed to fetch data in Perform Search")
      }
    })

  }

//Final Search for more info
  finalSeach = () =>{

    const urlString = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=ad8a2a3e22a31453b48785c80f462afd`
    $.ajax({
      url: urlString,
      success: (searchResults) =>{

        const results = [searchResults]
      
        results.forEach( movie =>{
          //Pushing Data to State
          this.setState({
            original_title: movie.original_title,
            tagline: movie.tagline,
            overview: movie.overview,
            homepage: (movie.homepage === 'undefined' || movie.homepage === 0 ? '-' : movie.homepage),
            poster_src: (movie.poster_path == null ? placeholder : "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path),
            production: movie.production_companies,
            production_countries: movie.production_countries,
            genre: movie.genres,
            status:movie.status,
            release: movie.release_date,
            vote_average: (movie.vote_average === 'undefined' || movie.vote_average === 0 ? '-' : movie.vote_average + ' / 10'),
            runtime: movie.runtime,
            revenue:(movie.revenue === 'undefined' || movie.revenue === 0 ? '-': '$' + this.numberWithCommas(movie.revenue)),
            backdrop: (movie.backdrop_path == null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g" : "https://image.tmdb.org/t/p/w1280_and_h720_bestv2" + movie.backdrop_path)
          })

        //Getting the list of genres in an array
          let genreArray = []

          movie.genres.map( (e,i) =>{
            genreArray.push(e.name)
            return null
          })

          this.setState({
            genres: genreArray.join(', ')
          })
       
        })

      },
      error: (xhr,status,err) =>{
        console.error("Failed to fetch data in Final Search")
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

  //auto focus on seearch input
  componentDidMount(){
    this.inputRef.current.focus()
  }

 
  componentDidUpdate(prevProps,prevState){
    //comparing previous state to current state, this fixes the infinite loop and only execute if there is difference between state
    if(prevState.movieID !== this.state.movieID){
       //Render the final outcome after fetching the movie ID to be able successfully excecute the finalSearch
      this.finalSeach()
    }
  }

 numberWithCommas = (x = this.state.revenue) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  render() {

    const jer ={
      background:'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3),rgba(0,0,0,0.3),rgba(0,0,0,0.9)),url('+this.state.backdrop+')'
    }

    return (
      <Router>
      <div>
      
      <Route path="/Movie-Database-Site-with-React-JS" exact >
  
      <div className="main" style={jer} >
       <InputSearch inputRef={this.inputRef} searchChangeHandler={this.searchChangeHandler} submitHandler={this.submitHandler}></InputSearch>
        <MovieCard state={this.state}></MovieCard>
        </div>
        </Route>
 
      </div>
      </Router>
      
    )
  }
}

export default App
