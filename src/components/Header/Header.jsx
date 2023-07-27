import React from 'react'
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import "./Header.css"

function Header({ loggedIn }) {
  const location = useLocation(); // получаем текущий путь
  const showHeader = ['/', '/movies', "/saved-movies", "/profile"].includes(location.pathname);

  return ((
    showHeader &&
    <header className={location.pathname === "/" ? "header" : "header header_color_dark"} >
      <div className='header__container'>
        <Navigation loggedIn={loggedIn} />
      </div>
    </header >
  )
  )
}

export default Header;