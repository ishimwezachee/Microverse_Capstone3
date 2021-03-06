import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Nav = () => (
  <div className="nav">
    <Link className="arrow" to="/">
      <FaAngleLeft />
    </Link>
  </div>
);
export default Nav;
