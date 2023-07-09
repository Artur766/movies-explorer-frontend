import React from 'react'
import "./MoviesCard.css";

function MoviesCard({ title, duration, image, classButtonDelete, buttonName }) {

  const [isSave, setIsSave] = React.useState(false);

  function handleButtonSave() {
    setIsSave(!isSave)
  }

  return (
    <div className='card'>
      <div className='card__container'>
        <h2 className='card__title'>{title}</h2>
        <p className='card__duration'>{duration}</p>
      </div>
      <img className='card__image' src={image} alt="картинка фильма" />
      <button onClick={handleButtonSave} className={`card__button-save ${classButtonDelete} ${isSave ? "" : "card__button-save_saved"}`}>
        {isSave ? "" : buttonName}
      </button>
    </div >
  )
}

export default MoviesCard