import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation(); // получаем текущий путь

  // определяем, на каких страницах нужно отображать Footer
  const showFooter = ['/movies', '/saved-movies', '/'].includes(location.pathname);

  return (
    showFooter && (<footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>&#169;{(new Date()).getFullYear()}</p>
        <nav className='footer__navigation'>
          <a href="https://practicum.yandex.ru/profile/web/" className='footer_link'>Яндекс.Практикум</a>
          <a href="https://github.com/" className='footer_link'>Github</a>
        </nav>
      </div>
    </footer>)
  )
}

export default Footer;
