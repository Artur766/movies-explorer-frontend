import React from 'react';
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className='serch-form'>
      <form className='serch-form__form'>
        <div className='serch-form__wrapper'>
          <input className='serch-form__input' type="text" placeholder='Фильм' required />
          <button className='serch-form__button' type='submit'>Найти</button>
          <div className='serch-form__border'></div>
        </div>
        <div className='serch-form__short'>
          <label className="serch-form__toggle">
            <input className="serch-form__toggle-checkbox" type="checkbox" />
            <span className="serch-form__toggle-switch"></span>
          </label>
          <h2 className='serch-form__text'>Короткометражки</h2>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;