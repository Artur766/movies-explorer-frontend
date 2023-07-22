import React from 'react';
import "./SearchForm.css";
import { useFormValidation } from "../../utils/useFormValidation";

function SearchForm({ onSerch, valueSerch, onQuerySerch, checked, onToggle }) {

  function handleSubmit(e) {
    onSerch(e);
  }

  const { errors, isValid, handleChange } = useFormValidation();

  function handleChangde(e) {
    handleChange(e);
    onQuerySerch(e)
  }

  return (
    <section className='serch-form'>
      <form className='serch-form__form' onSubmit={handleSubmit}>
        <div className='serch-form__wrapper'>
          <input
            value={valueSerch}
            onChange={handleChangde}
            className='serch-form__input'
            type="text"
            name='serch'
            placeholder='Фильм'
            required
          />
          <button className={`serch-form__button ${isValid ? "" : "authorization__submit-btn_disablded"}`} type='submit' disabled={!isValid}>Найти</button>
          <div className='serch-form__border'></div>
          <span className="serch-form__error" >{errors["serch"]}</span>
          {/* {<span className='serch-form__error'>Заполните это поле!</span>} */}
        </div>
        <div className='serch-form__short'>
          <label className="serch-form__toggle">
            <input
              className="serch-form__toggle-checkbox"
              type="checkbox"
              checked={checked}
              onChange={onToggle}
            />
            <span className="serch-form__toggle-switch"></span>
          </label>
          <h2 className='serch-form__text'>Короткометражки</h2>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;