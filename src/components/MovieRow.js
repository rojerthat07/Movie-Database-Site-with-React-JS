import React, { Component } from 'react'



class MovieRow extends Component {

  movieView = () =>{
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
              <div className="movies__title" title={this.props.movie.title}>{this.props.movie.title}</div>
              
              <div className="movies__overview">
                {this.props.movie.overview}
                </div> 
           
              </div>
              
          </div>
 
      </div>
        )
    }
}

export default MovieRow
