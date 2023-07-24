import React from 'react';
import "./MoviesCard.css";
import mainApi from '../../utils/MainApi';
import { SavedMoviesContext } from "../../context/SavedMoviesContext";

function MoviesCard({ card, classButtonDeleteShow, }) {

  const { savedMovies, setSavedMovies } = React.useContext(SavedMoviesContext);
  const [isSave, setIsSave] = React.useState(localStorage.getItem(card.id ? card.id : card.movieId) === "true");

  React.useEffect(() => {
    // сохранение значения isSave в localStorage при изменении
    localStorage.setItem(card.id ? card.id : card.movieId, isSave ? 'true' : 'false');
  }, [isSave, card.id, card.movieId]);

  function handleSave() {
    // Создаем копию объекта movieData
    const dataToSend = {
      ...card,
      movieId: card.id,
      image: `https://api.nomoreparties.co/${card.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
    };

    delete dataToSend.id;
    delete dataToSend.created_at;
    delete dataToSend.updated_at;

    mainApi.saveMovie(dataToSend)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
        setIsSave(true);
      })
      .catch(err => console.log(err));
  }

  function handleDelete() {
    const movieDelete = savedMovies.find(movie => movie.movieId === (card.id || card.movieId))
    mainApi.deleteMovie(movieDelete._id)
      .then(() => {
        setSavedMovies(state => state.filter(movie => movie._id !== movieDelete._id));
        setIsSave(localStorage.setItem(card.id ? card.id : card.movieId, 'false'));
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='card'>
      <div className='card__container'>
        <h2 className='card__title'>{card.nameRU}</h2>
        <p className='card__duration'>{card.duration} минут</p>
      </div>
      <a href={card.trailerLink} target="_blank" rel="noopener noreferrer"><img className='card__image' src={card.image.url ? `https://api.nomoreparties.co/${card.image.url}` : card.image} alt="картинка фильма" /></a>
      {
        classButtonDeleteShow
          ?
          <button className='card__button-save  card__button-save_delete' onClick={handleDelete}></button>
          :
          <button onClick={isSave ? handleDelete : handleSave} className={`card__button-save  ${isSave ? "" : "card__button-save_saved"}`}>
            {isSave ? "" : "Сохранить"}
          </button>
      }
    </div >
  )
}

export default MoviesCard;
