import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import "./SavedMovies.css"

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        classButtonDelete={"card__button-save_delete"}
      />
    </main>
  )
}

export default SavedMovies;