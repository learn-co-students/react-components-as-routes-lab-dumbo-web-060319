import React from 'react';
import { movies } from '../data';



const Movies = () => {

  const all = () => 
  {
    let all = movies.map((movie,index) => {
      return (
        <div key = {index} >
          <h3>Title: {movie.title}</h3>
          <p> Time: {movie.time} </p>
          <p>Genres: {movie.genres.join(", ")}</p> 
        </div>
      )
    })
    return all;
    
  }



  return (
    <div>
      <h1>Movies Page</h1>
      {all()}
    </div>
  );
};

export default Movies;
