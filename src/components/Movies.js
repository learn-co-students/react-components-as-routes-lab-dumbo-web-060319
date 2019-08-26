import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let movieDIV = movies.map(movie => {
    return (
      <div key={`${movie.title} ${movie.metascore}`}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {`${movie.time}`}</p>
        <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}
          </ul>
      </div> 
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {movieDIV}
    </div>
  );
};

export default Movies;
