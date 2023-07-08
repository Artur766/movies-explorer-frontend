import React from 'react';
import logo from "../../images/logo.svg"
import { Link } from 'react-router-dom';
import "./Logo.css";

function Logo() {
  return (
    <Link to="/">
      <img className="header__logo" src={logo} alt='лого' />
    </Link>
  )
}

export default Logo;