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
        <nav className="navigation__wrapper">
          <Link className="navigation__registration" to="/signup">Регистрация</Link>
          <Link type='button' className="navigation__enter" to="/signin">Войти</Link>
        </nav>
      </>)) ||
    (shownavigationProfile && (
      <>
        <Logo />
        <button className='navigation__menu' onClick={handleMenu}  ></button>
        {isOpen && <BurgerMenu closeMenu={closeMenu} />}
        <div className='navigation__links'>
          <Link className='navigation__link-movies' to="/movies">Фильмы</Link>
          <Link className='navigation__link-saved-movies' to="/saved-movies">Сохранённые фильмы</Link>
        </div>
        <div className='navigation__profile-container'>
          <Link className='navigation__profile-link' to="/profile">Аккаунт</Link>
          <img className='navigation__icon-profile' alt='иконка профиля' src={iconProfile} />
        </div>
      </>))
  )
}

export default Navigation;
