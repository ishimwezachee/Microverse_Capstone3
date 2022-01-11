import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/:country">Country</Link>
  </div>
);

export default Nav;
