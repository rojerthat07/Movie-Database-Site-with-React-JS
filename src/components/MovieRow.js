import React, { Component } from "react";

class MovieRow extends Component {
  movieView = () => {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.open(url);
  };

  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = {
      overview: movie.overview,
      title: movie.title,
    };

    var overviewReplace = "";
    var titleReplace = "";

    for (let i = 0; i < this.state.overview.length; i++) {
      if (i === 300) {
        overviewReplace += "...";
        break;
      } else {
        overviewReplace += this.state.overview[i];
      }
    }

    for (let i = 0; i < this.state.title.length; i++) {
      if (i === 30) {
        titleReplace += "...";
        break;
      } else {
        titleReplace += this.state.title[i];
      }
    }

    this.state = {
      overviewReplace: overviewReplace,
      titleReplace: titleReplace,
    };
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="movies">
        <div className="movies__row">
          <div className="movies__item">
            <div className="movies__data">
              <img src={movie.poster_src} alt="poster" />
            </div>

            <div className="movies__data">
              <div className="movies__description">
                <div className="movies__title" title={movie.original_title}>
                  {movie.original_title}
                </div>

                <hr></hr>
                <div className="movies__stats">
                  {" "}
                  <div className="movies__stats-data">
                    Original Release: <span>{movie.release_date} </span>
                  </div>
                  <div className="movies__stats-data">
                    Vote Average: <span>{movie.vote_average}</span>
                  </div>
                  <div className="movies__stats-data">
                    Popularity: <span>{movie.popularity}</span>
                  </div>
                  <div className="movies__stats-data">
                    Vote Count: <span>{movie.vote_count} </span>
                  </div>
                </div>

                <hr></hr>

                <div className="movies__overview"> {movie.overview} </div>
                <hr></hr>
                <div className="footer">
                  <p>© 2020 Jer Carlo Catallo | All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
