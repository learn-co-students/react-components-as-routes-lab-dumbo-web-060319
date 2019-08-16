import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const all = () => {
    let allActors = actors.map((actor, index) => {
      return (
        <div key = {index}>
          <h3>Name: {actor.name}</h3>
          <p> Movies: {actor.movies.join(", ")}</p>
        </div>
      )
    })
    return allActors;
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {all()}
    </div>
  );
};

export default Actors;
