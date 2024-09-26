import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const renderNavlinks = () => 
  {
    return (
      <div className = "navbar">
        <NavLink to="/" >Home</NavLink>
        <NavLink to = "/movies">Movies</NavLink>
        <NavLink to = "/directors">Directors</NavLink>
        <NavLink to = "/actors">Actors</NavLink>
      </div>
    )
  }
  return (
    <div>
      {renderNavlinks()}
    </div>
  );
};

export default NavBar;
