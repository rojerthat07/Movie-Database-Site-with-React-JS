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

              <div className="movies__description">
              <div className="movies__title" title={this.props.movie.title}>{this.props.movie.title}</div>
              
              <div className="movies__overview">
                {this.props.movie.overview}
                </div> 
              <div className="movies__stats">
                <div className="movies__stats-data">
                Vote average:  
              
              <span>
              {this.props.movie.vote_average}
              </span>
                </div>
                <div className="movies__stats-data">
                Release Date:  
              
              <span>
              {this.props.movie.release_date}
              </span>
                </div>
                <div className="movies__stats-data">
                Language:  
              
              <span>
                {this.props.movie.original_language}
              </span>
                </div>
                <div className="movies__stats-data">
                Popularity:  
                <span>
                {this.props.movie.popularity}
                </span>
              
                </div>
                
              </div>
        
              </div>
              
           
              </div>

          </div>
 
      </div>
        )
    }
}

export default MovieRow
