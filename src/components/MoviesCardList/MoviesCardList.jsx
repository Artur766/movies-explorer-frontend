import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import "./MoviesCardList.css"

function MoviesCardList({ children, movies, isSave, classButtonDeleteShow }) {
  return (
    <section className='card-list'>
      {movies.map((item) => (
        <MoviesCard
          key={item.id ? item.id : item._id}
          card={item}
          classButtonDeleteShow={classButtonDeleteShow}
          isSave={isSave}
        />
      ))}
      {children}
    </section>
  )
}

export default MoviesCardList;
