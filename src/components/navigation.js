import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navigation">
    <h1 className="text-1">Math Magicians</h1>
    <ul className="list">
      <li><Link to="/" className="nav-link"> Home </Link></li>
      <li><Link to="/Calculator" className="nav-link"> Calculator </Link></li>
      <li><Link to="/Quotes" className="nav-link"> Quotes </Link></li>
    </ul>
  </nav>
);

export default Navbar;
