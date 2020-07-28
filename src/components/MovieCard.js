import React from 'react'

const MovieCard = (props) => {
    const {state} = props
    return (
        <div className="movies">
        <div className="movies__row">
           <div className="movies__item">
 
             <div className="movies__data">
               <img src={state.poster_src} alt="poster"/>
             </div>
 
             <div className="movies__data">

               <div className="movies__description">
                
               <div className="movies__title" title={state.original_title}>{state.original_title}</div>

               <div className="movies__meta">{state.genres}</div>
               <hr></hr>
               <div className="movies__stats">
                  <div className="movies__stats-data">
                  Vote Average: <span>{state.vote_average}</span>
                  </div>

                  <div className="movies__stats-data">
                  Running Time: <span> {state.runtime} minutes</span>
                  </div>

                  <div className="movies__stats-data">
                  Box Office: <span>{state.revenue}</span>
                 </div>

                 <div className="movies__stats-data">
                 Original Release: <span>{state.release} </span>
                 </div>
                 <div className="movies__stats-data">
                 Current Status: <span>{state.status} </span>
                 </div>
                 <div className="movies__stats-data">
                 Homepage:
                   <a href={state.homepage} target="_blank" rel="noopener noreferrer">   <span style={{fontSize:'.7em'}}>{state.homepage} </span></a>
               
                 </div>
               </div>
             
               <hr></hr>
             <div className="movies__meta">{state.tagline}</div>
               
               <div className="movies__overview"> {state.overview} </div> 
              <hr></hr>
              <div className="footer">
               
         <p>© 2020 Jer Carlo Catallo | All rights reserved | Release Version 0.2 </p>
         <hr/>
         
      </div> 
         
               </div>
            
               </div>
 
           </div>
  
       </div>
      </div>
    )
}

export default MovieCard
