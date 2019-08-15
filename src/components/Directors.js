import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const showDirectors = () => {
    return directors.map((director) => {
      const movies = director.movies.map(movie => <li>{movie}</li>)
      return <div>
          <h3>{director.name}</h3>
          Movies: 
          <ul>
            {movies}
          </ul>
        </div>
    })
  }
  return (
    <div>
     <h1> Directors Page </h1>
      {showDirectors()}
    </div>
  );
}

export default Directors
