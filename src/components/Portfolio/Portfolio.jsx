import React from 'react';
import "./Portfolio.css";
import arrow from "../../images/text__COLOR_font-main.svg"

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__projects-list'>
        <li className='portfolio__project'>
          <p className='portfolio__name'>Статичный сайт</p>
          <a href="https://github.com/Artur766/how-to-learn" className='portfolio__link'><img className='portfolio__image' src={arrow} alt="иконка стрелки" /></a>
        </li>
        <li className='portfolio__project'>
          <p className='portfolio__name'>Адаптивный сайт</p>
          <a href="https://github.com/Artur766/russian-travel" className='portfolio__link'><img className='portfolio__image' src={arrow} alt="иконка стрелки" /></a>
        </li>
        <li className='portfolio__project'>
          <p className='portfolio__name'>Одностраничное приложение</p>
          <a href="https://github.com/Artur766/react-mesto-api-full-gha" className='portfolio__link'><img className='portfolio__image' src={arrow} alt="иконка стрелки" /></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
