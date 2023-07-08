import React from 'react';
import "./Techs.css"

function Techs() {
  return (
    <section className="technologies">
      <h2 className="technologies__title">Технологии</h2>
      <h3 className="technologies__subtitle">7 технологий</h3>
      <p className="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="technologies__elements">
        <div className="technologies__element">
          <p className="technologies__element-text">HTML</p>
        </div>
        <div className="technologies__element">
          <p className="technologies__element-text">CSS</p>
        </div>
        <div className="technologies__element">
          <p className="technologies__element-text">JS</p>
        </div>
        <div className="technologies__element">
          <p className="technologies__element-text">React</p>
        </div >
        <div className="technologies__element">
          <p className="technologies__element-text">Git</p>
        </div >
        <div className="technologies__element">
          <p className=" technologies__element-text">Express.js</p>
        </div >
        <div className="technologies__element">
          <p className=" technologies__element-text">mongoDB</p>
        </div >
      </div >
    </section >
  )
}

export default Techs;