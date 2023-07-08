import React from 'react'
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import "./Header.css"

function Header() {
  const location = useLocation(); // получаем текущий путь
  return (
    <header className={location.pathname === "/" ? "header" : "header header_color_dark"}  >
      <Navigation />
    </header>
  )
}

export default Header;