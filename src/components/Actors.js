import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map((actor) => {
      const movies = actor.movies.map((movie) => {return <li>{movie}</li>})
      console.log(actor)
      return <div> ~~~~~~~~~~~~~~~~~ <h2>{actor.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies}
      </ul>
      </div>
    })
  }

  return (
    <div>
     <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
