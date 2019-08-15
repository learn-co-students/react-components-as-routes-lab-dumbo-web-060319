import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'teal',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
      <li><NavLink to="/" exact style={link} activeStyle={{background: "teal"}}>Home</NavLink> </li> <br></br> <br></br>
      <li><NavLink to="/movies" exact style={link} activeStyle={{background: "teal"}} >Movies</NavLink> </li> <br></br> <br></br>
      <li><NavLink to="/actors" exact style={link} activeStyle={{background: "teal"}} >Actors</NavLink> </li> <br></br> <br></br>
      <li><NavLink to="/directors" exact style={link} activeStyle={{background: "teal"}} >Directors</NavLink> </li> 
      <br></br>
      </ul>
    </div>
  );
};

export default NavBar;
