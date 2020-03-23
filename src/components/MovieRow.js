import React, { Component } from 'react'
import placeholderImage from '../images/universe-site-photo-1.png'


class MovieRow extends Component {

  movieView = () =>{
    console.log(this.props.movie.id)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.open(url)
    
  }


    render() {
        return (
            <div className="movies__row">
             
          <div className="movies__item">
            <div className="movies__data">
              <img src={this.props.movie.poster_src} alt="poster"/>
            </div>

            <div className="movies__data">
              <div className="movies__title">{this.props.movie.title}</div>
              <div className="movies__overview">{this.props.movie.overview}</div> 
              </div>

            <button className="movies__play-button">Play</button>
            <button onClick={this.movieView} className="movies__view-button" >View</button>

          </div>
 
      </div>
        )
    }
}

export default MovieRow
