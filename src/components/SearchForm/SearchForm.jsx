import React from 'react';
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className='serch-form'>
      <form className='serch-form__form'>
        <div className='serch-form__wrapper'>
          <input className='serch-form__input' type="text" placeholder='Фильм' required />
          <button className='serch-form__button' type='submit'>Найти</button>
        </div>
        <div className='serch-form__short'>
          <label className="serch-form__toggle">
            <input className="serch-form__toggle-checkbox" type="checkbox" />
            <div className="serch-form__toggle-switch"></div>
          </label>
          <p className='serch-form__text'>Короткометражки</p>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;