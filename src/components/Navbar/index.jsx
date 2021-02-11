/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => (
  <nav className="nav">
    <ul>
      <li><NavLink to="/profile"> My Profile</NavLink></li>
      <li><NavLink to="/news">News</NavLink></li>
      <li><NavLink to="/messages">Messages</NavLink></li>
      <li><NavLink to="/friends">Friends</NavLink></li>
      <li><NavLink to="/music">Music</NavLink></li>
      <li><NavLink to="/photos">Photos</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
