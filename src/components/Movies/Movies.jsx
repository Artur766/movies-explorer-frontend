import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import "./Movies.css";

function Movies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        buttonStillShow={true}
        buttonName={"Сохранить"}
      />
    </main>
  )
}

export default Movies;