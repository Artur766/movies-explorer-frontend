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
          <h3 className='about-me__about'>Фронтенд-разработчик, 22 года</h3>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className='about-me__link-git' href='https://github.com/Artur766?tab=repositories' target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img src={photo} alt="студент" className='about-me__photo' />
      </article>
    </section>
  )
}

export default AboutMe;