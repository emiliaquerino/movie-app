import React from 'react';

import '../styles/Header.css';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
      </nav>
    </header>
  );
};

export default Header;