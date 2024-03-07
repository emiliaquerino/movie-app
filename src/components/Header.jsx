import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';
import '../utils/index.css';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
        <ul>
          <li>
            <Link to="/">All Films</Link>
          </li>
          <li>
            <Link to="/my-favorites">MyFavorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;