import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Nav component will mount NavBar when rendered to the DOM.
 * @namespace Nav
 * @return {string} JSX element
 */
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/search/travel">Travel</NavLink></li>
        <li><NavLink to="/search/food">Food</NavLink></li>
        <li><NavLink to="/search/music">Music</NavLink></li>
      </ul>
    </nav>
  )
};

export default Nav;