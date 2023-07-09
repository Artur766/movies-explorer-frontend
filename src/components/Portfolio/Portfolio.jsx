import React from 'react';
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__projects-list'>
        <li className='portfolio__project'>
          <a href="https://github.com/Artur766/how-to-learn" className='portfolio__link' target="_blank" rel="noopener noreferrer">Статичный сайт</a>
        </li>
        <li className='portfolio__project'>
          <a href="https://github.com/Artur766/russian-travel" className='portfolio__link' target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
        </li>
        <li className='portfolio__project'>
          <a href="https://github.com/Artur766/react-mesto-api-full-gha" className='portfolio__link' target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
