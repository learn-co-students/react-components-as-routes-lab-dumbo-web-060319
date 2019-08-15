import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
   return movies.map((movie) => 
      {
        const genrelist = movie.genres.map((genre) => { return <li>{genre}</li>})
        return <div> 
          ~~~~~~~~~~~~~~~~~~~~~
          <br></br>
           <h2>Title: {movie.title} </h2>  
        <h3>Time: {movie.time} minutes </h3>
        <ul>
         <h4> {genrelist} </h4>
        </ul>
        
        </div>
      })
  }

  return (
    <div>
        <h1>
          Movies Page
        </h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
