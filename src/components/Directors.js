import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const all = () => 
  {
    const allDirectors = directors.map((director,index) => {
      return (
        <div key = {index}>
          <h3>Name: {director.name}</h3>
          <p> Movies: {director.movies.join(", ")} </p>
        </div>
      )
    })
    return allDirectors;
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {all()}
    </div>
  );
}

export default Directors
