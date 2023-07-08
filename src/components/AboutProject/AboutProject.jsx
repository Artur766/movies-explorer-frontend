import React from 'react'
import "./AboutProject.css"

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__wrapper">
        <div className="project__column">
          <h3 className="project__discretion">Дипломный проект включал 5 этапов</h3>
          <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__column">
          <h3 className="project__discretion">На выполнение диплома ушло 5 недель</h3>
          <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__container">
        <div className="project__column">
          <div className="project__progress project__progress_backend">1 неделя</div>
          <p className="project__development">Back-end</p>
        </div>
        <div className="project__column">
          <div className="project__progress project__progress_frontend">4 недели</div>
          <p className="project__development">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;