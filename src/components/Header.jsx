import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
        <ul className='links'>
          <li>
            <Link to="/">SEARCH</Link>
          </li>
          <li>
            <Link to="/watchlist">WATCHLIST</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;