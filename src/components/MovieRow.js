import React, { Component } from 'react'
import placeholderImage from '../images/universe-site-photo-1.png'


class MovieRow extends Component {

  movieView = () =>{
    console.log(this.props.movie.id)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.open(url)
    
  }

  constructor(props) {
    super(props)

    this.state = {
       overview: this.props.movie.overview,
       title: this.props.movie.title
 
    }

  
    var overviewReplace = "";
    var titleReplace = "";

    for(let i =0;i<this.state.overview.length;i++){
      if(i === 300){
        overviewReplace += "...";
        break;
      } else{
        overviewReplace += this.state.overview[i];
      }
    }

    for(let i =0;i<this.state.title.length;i++){
      if(i === 30){
        titleReplace += "...";
        break;
      } else{
        titleReplace += this.state.title[i];
      }
    }

    this.state = {
      overviewReplace :overviewReplace,
      titleReplace: titleReplace
    }
  
   

  }
  


    render() {

        return (
        
            <div className="movies__row">
             
          <div className="movies__item">
            <div className="movies__data">
              <img src={this.props.movie.poster_src} alt="poster"/>
            </div>

            <div className="movies__data">
              <div className="movies__title" title={this.props.movie.title}>{this.state.titleReplace}</div>
              <div className="movies__overview">
               
                {this.state.overviewReplace}
                </div> 
              </div>

            <button className="movies__play-button">Play</button>
            <button onClick={this.movieView} className="movies__view-button" >View</button>

          </div>
 
      </div>
        )
    }
}

export default MovieRow
