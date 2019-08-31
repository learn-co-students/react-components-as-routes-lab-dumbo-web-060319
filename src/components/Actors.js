import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a =>
        <div className='actor'>
          <h3>{a.name}</h3>
          {a.movies.map(movie =>
            <ul>
              {movie}
            </ul>
          )}
        </div>)}
    </div>
  );
};

export default Actors;
