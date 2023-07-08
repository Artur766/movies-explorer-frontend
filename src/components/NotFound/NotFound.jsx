import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

function NotFound() {
  const history = useNavigate();

  function handleGoBack() {
    history(-1);
  }
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button className='not-found__button' onClick={handleGoBack}>Назад</button>
    </main>
  )
}

export default NotFound;