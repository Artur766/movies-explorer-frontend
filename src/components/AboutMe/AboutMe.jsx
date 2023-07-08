import React from 'react';
import "./AboutMe.css";
import photo from "../../images/photo_2023-06-18_12-57-35.jpg";

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <article className='about-me__container'>
        <div className='about-me__wrapper'>
          <p className='about-me__name'>Артур</p>
          <p className='about-me__about'>Фронтенд-разработчик, 22 года</p>
          <p className='about-me__description'>Я родился в Альметьевске живу в Казани, закончил факультет управления, автоматизации и информационных технологий.</p>
          <a className='about-me__link-git' href='https://github.com/Artur766?tab=repositories'>Github</a>
        </div>
        <img src={photo} alt="студент" className='about-me__photo' />
      </article>
    </section>
  )
}

export default AboutMe;