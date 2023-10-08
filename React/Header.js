import React from 'react';
import './IdHeader.css';
import './styles/styles.css'
import logo from './images/logo.png'
import { a } from 'react-router-dom';

function Header() {
  const logo_style = {
    "max-width": "20%", "margin-bottom": "0%"
  };
  const icon_style = {
    "min-height": "20px", "font-size": "2em"
  };

  return (
    <header>
      <a className={"responsive-img"} style={logo_style} to={"/"}><img src={logo} alt={"Logo"} /></a>
      <nav>
        <li><a to={"/marketplace"}>Marketplace</a></li>
        <li><a to={"/about"}>About</a></li>
      </nav>
      <a to={"/login"} className = {"Profile"}>
        <i style={icon_style} className = {"fa fa-user"}></i>
        Login
      </a>
    </header>
  );
}

export default Header;
