import React from "react";
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {

  return (
    <header className="container__header">
      <h1><Link to="/">ImmoCoin</Link></h1>
      <ul>
        <li><Link to="/page1">PAGE 1</Link></li>
        <li><Link to="/page2">PAGE 2</Link></li>
        <li><Link to="/page3">PAGE 3</Link></li>
      </ul>
    </header>
  );
};

export default Header;
