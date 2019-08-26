import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let directorDIV = directors.map(director => {
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
          <ul>
            {director.movies.map((movie, i) => <li key={i}>{movie}</li>)}
          </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
        {directorDIV}
    </div>
  );
}

export default Directors
