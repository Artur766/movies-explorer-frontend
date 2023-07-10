import React from 'react';
import { arrCard } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import "./MoviesCardList.css"

function MoviesCardList({ classButtonDelete, buttonName, buttonStillShow }) {
  return (
    <section className='card-list'>
      {arrCard.map((item, index) => (
        <MoviesCard
          key={index}
          title={item.title}
          duration={item.duration}
          image={item.image}
          classButtonDelete={classButtonDelete}
          buttonName={buttonName}
        />
      ))}
      {buttonStillShow ? <button className='card-list__button-still'>Еще</button> : ""}
    </section>
  )
}

export default MoviesCardList;