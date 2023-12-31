import React from 'react';
import earth from "../../images/text__COLOR_landing-logo.png";
import "./Promo.css";

function Promo({ onScroll }) {
  return (
    <section className="promo">
      <div className='promo__contianer'>
        <div className="promo__wrapper">
          <h1 className="promo__title">Учебный проект студента факультета Веб-&nbsp;разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="navigation" onClick={onScroll} type='button'>Узнать больше</button>
        </div>
        <img className="promo__img" src={earth} alt="Земля из надписи WEB" />
      </div>
    </section>
  )
}

export default Promo