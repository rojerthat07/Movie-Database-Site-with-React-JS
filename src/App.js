import React, { Component } from 'react'
//Styles
import './main.scss'
//Components
import Navigation from './components/Navigation'
import MovieRow from './components/MovieRow'
import Footer from './components/Footer'
//Images
import placeholderImage from './images/universe-site-photo-1.png'

class App extends Component {

  constructor(props){
    super(props)

    const movies = [
      {
      id: 0,
      poster_src: {placeholderImage},
      title:"Avengers: Infinity War",
      overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
      },
      {
        id: 1,
        poster_src: {placeholderImage},
        title:"Avengers: Endgame",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
        },
        {
          id: 2,
          poster_src: {placeholderImage},
          title:"Spiderman",
          overview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
          },
          {
            id: 3,
            poster_src: {placeholderImage},
            title:"Superman",
            overview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
            },
            {
              id: 4,
              poster_src: {placeholderImage},
              title:"Justice League",
              overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
              }
        
    ]

  
    var movieRows = []
    movies.forEach(movie =>{
      console.log(movie.title)
      const movieRow = <MovieRow key={movie.id} movie={movie} />
      movieRows.push(movieRow)
    })

    this.state = {rows:movieRows}

  }


  render() {
    return (
      <div>
        <Navigation />




        <form className="search-bar">
        <input className="search-bar__input" placeholder="Enter Movie Name" type="text"/>
        
        <input type="submit" className="search-bar__button" value="Search "/>
        </form>
        

        <div className="movies">
        {this.state.rows}
        </div>
        <Footer />
      


      </div>
    )
  }
}

export default App
