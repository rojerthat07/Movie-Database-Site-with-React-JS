import React, { Component } from 'react'
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

    const movies = [
      {
      id: 0,
      poster_src: '',
      title:"Avengers: Infinity War",
      overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
      },
      {
        id: 1,
        poster_src: '',
        title:"Avengers: Endgame",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
        },
        {
          id: 2,
          poster_src: '',
          title:"Spiderman",
          overview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
          },
          {
            id: 3,
            poster_src:'',
            title:"Superman",
            overview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus eum, architecto quasi cupiditate itaque provident magni nobis placeat obcaecati numquam aliquid quo voluptate id voluptates, dignissimos ullam voluptas praesentium!"
            },
            {
              id: 4,
              poster_src: '',
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
      <Header />



        <form className="search-bar">
        <input className="search-bar__input" placeholder="Enter Movie Name" type="text"/>
        
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
