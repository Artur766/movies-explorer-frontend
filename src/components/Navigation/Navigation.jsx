import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconProfile from "../../images/icon__COLOR_icon-main.svg"
import Logo from '../Logo/Logo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import "./Navigation.css"

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const location = useLocation(); // получаем текущий путь

  const shownavigationRegister = ['/'].includes(location.pathname);
  const shownavigationProfile = ['/movies', "/saved-movies", "/profile"].includes(location.pathname);

  function handleMenu() {
    setIsOpen(true)
  }
  function closeMenu() {
    setIsOpen(false)
  }

  return (
    (shownavigationRegister && (
      <>
        <Logo />
        <nav className="navigation-login-menu">
          <Link className="navigation-login-menu__registration" to="/signup">Регистрация</Link>
          <Link className="navigation-login-menu__enter" to="/signin">Войти</Link>
        </nav>
      </>)) ||
    (shownavigationProfile && (
      <>
        <Logo />
        <div className='navigation-profile'>
          <button className='navigation-profile__menu' onClick={handleMenu}  ></button>
          {isOpen && <BurgerMenu closeMenu={closeMenu} />}
          <div className='navigation-profile__links'>
            <Link className='navigation-profile__link-movies' to="/movies">Фильмы</Link>
            <Link className='navigation-profile__link-saved-movies' to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className='navigation-profile__profile-container'>
            <Link className='navigation-profile__profile-link' to="/profile">Аккаунт</Link>
            <img className='navigation-profile__icon-profile' alt='иконка профиля' src={iconProfile} />
          </div>
        </div>
      </>))
  )
}

export default Navigation;
