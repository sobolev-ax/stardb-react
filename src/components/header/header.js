import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/secrets">Secrets</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button
            onClick={onServiceChange}
            className="btn btn-small btn-primary">
            Change Service
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;