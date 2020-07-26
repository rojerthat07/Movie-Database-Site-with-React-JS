import React, { Component } from 'react'
//modules
import {BrowserRouter as Router, Route} from 'react-router-dom'
import $ from 'jquery'
//Styles
import './main.scss'

//layout
import Footer from './components/Footer'
//pages

import placeholder from './images/placeholderImage.jpg'
import InputSearch from './components/InputSearch'


class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      searchTerm: 'AVENGERS: ENDGAME',
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
       
        console.log(searchResults)
        results.forEach( movie =>{
          this.setState({
            original_title: movie.original_title,
            tagline: movie.tagline,
            overview: movie.overview,
            homepage: movie.homepage,
            poster_src: (movie.poster_path == null ? placeholder : "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path),
            production: movie.production_companies,
            production_countries: movie.production_countries,
            genre: movie.genres,
            release: movie.release_date,
            vote_average: movie.vote_average,
            runtime: movie.runtime,
            revenue: this.numberWithCommas(movie.revenue),
            backdrop: (movie.backdrop_path == null ? placeholder : "https://image.tmdb.org/t/p/w1280_and_h720_bestv2" + movie.backdrop_path)
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
      background:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('+this.state.backdrop+')'
    }

    return (
      <Router>
      <div>
    
      
      <Route path="/Movie-Database-Site-with-React-JS" exact >
  
      <div className="main" style={jer} >
       <InputSearch inputRef={this.inputRef} searchChangeHandler={this.searchChangeHandler} submitHandler={this.submitHandler}></InputSearch>
        <div className="movies">
          <div className="movies__row">
             <div className="movies__item">
   
               <div className="movies__data">
                 <img src={this.state.poster_src} alt="poster"/>
               </div>
   
               <div className="movies__data">
   
                 <div className="movies__description">

                 <div className="movies__title" title={this.state.original_title}>{this.state.original_title}</div>
                 
                 <div className="movies__overview"> {this.state.overview} </div> 
                 
                 <div className="movies__stats">
                    <div className="movies__stats-data">
                    Vote Average: <span>{this.state.vote_average}</span>
                    </div>

                    <div className="movies__stats-data">
                    Running Time: <span> {this.state.runtime}</span>
                    </div>

                    <div className="movies__stats-data">
                    Box Office: <span>${this.state.revenue}</span>
                   </div>

                   <div className="movies__stats-data">
                   Original Release: <span>{this.state.release} </span>
                   </div>
                 </div>
           
                 </div>
              
                 </div>
   
             </div>
    
         </div>
        </div>
        </div>
        </Route>

        <Footer />
 
      </div>
      </Router>
      
    )
  }
}

export default App
