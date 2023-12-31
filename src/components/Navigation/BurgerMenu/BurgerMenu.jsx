import React from 'react';
import { Link } from 'react-router-dom';
import iconProfile from "../../../images/icon__COLOR_icon-main.svg"
import "./BurgerMenu.css";

function BurgerMenu({ closeMenu }) {

  return (
    <div className='burger'>
      <button className='burger__close-btn' type="button" onClick={closeMenu}></button>
      <div className='burger__list'>
        <div className='burger__links'>
          <Link className="burger__link" to="/" onClick={closeMenu}>Главная</Link>
          <Link className='burger__link' to="/movies" onClick={closeMenu}>Фильмы</Link>
          <Link className='burger__link' to="/saved-movies" onClick={closeMenu}>Сохранённые фильмы</Link>
        </div>
        <div className='burger__profile-container'>
          <Link className='burger__profile-link' to="/profile" onClick={closeMenu}>Аккаунт</Link>
          <img className='burger__icon-profile' alt='иконка профиля' src={iconProfile} />
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu;
