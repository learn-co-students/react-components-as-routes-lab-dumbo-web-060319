import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d =>
        <div className="director">
          <h3>{d.name}</h3>
          {d.movies.map(movie =>
            <ul>
              {movie}
            </ul>
          )}
        </div>)}
    </div>
  );
}

export default Directors
