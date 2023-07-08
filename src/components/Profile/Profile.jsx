import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from "../../utils/useFormValidation";
import "./Profile.css";

function Profile() {

  const { values, errors, handleChange } = useFormValidation();

  function getErrorClassName(name) {
    return `profile__input ${errors[name] && "profile__input_type_error"}`
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form action="#" className='profile__form' >
        <label className='profile__label'>
          <span className='profile__input-span'>Имя</span>
          <input
            type="text"
            className={getErrorClassName("name")}
            name='name'
            minLength={3}
            maxLength={30}
            required
            onChange={handleChange}
            value={values["name"] || ''}
          />

        </label>
        <span className="profile__error profile__error_visable" >{errors["name"]}</span>
        <label className='profile__label' >
          <span className='profile__input-span'>E-mail</span>
          <input
            type="email"
            name="email"
            required
            className={getErrorClassName("email")}
            onChange={handleChange}
            value={values["email"] || ''}
          />
        </label>
        <span className="profile__error profile__error_visable" >{errors["email"]}</span>
        <div className='profile__container-btn'>
          <button type='button' className='profile__button-edit'>Редактировать</button>
          <Link type="button" to="/" className='profile__button-exit'>Выйти из аккаунта</Link>
        </div>
      </form>
    </section>
  )
}

export default Profile;