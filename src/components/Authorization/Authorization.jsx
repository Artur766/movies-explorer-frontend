import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from "../../utils/useFormValidation";
import Logo from '../Logo/Logo';
import "./Authorization.css"

function Authorization({ buttonText, linkText, text, route, title, children, classButton }) {

  const { values, errors, isValid, handleChange } = useFormValidation();

  function getErrorClassName(name) {
    return `authorization__input ${errors[name] && "authorization__input_type_error"}`
  }

  return (
    <section className='authorization'>
      <Logo />
      <h2 className='authorization__title'>{title}</h2>
      <form action="#" name='authorization' className='authorization__form' noValidate>

        {children}
        <label className='authorization__label' >E-mail
          <input
            onChange={handleChange}
            value={values["email"] || ''}
            className={getErrorClassName("email")}
            type="email"
            name='email'
            required
          />
          <span className="authorization__error authorization__error_visable" >{errors["email"]}</span>
        </label>
        <label className='authorization__label' >Пароль
          <input
            type="password"
            onChange={handleChange}
            value={values["password"] || ''}
            className={getErrorClassName("password")}
            name='password'
            minLength={7}
            maxLength={20}
            required
          />
          <span className="authorization__error authorization__error_visable" >{errors["password"]}</span>
        </label>
      </form>
      <button className={`authorization__submit-btn ${classButton} ${isValid ? "" : "authorization__submit-btn_disablded"}`} type="submit" >{buttonText}</button>
      <p className="authorization__text">{text}<Link to={route} className="authorization__link"> {linkText}</Link></p>
    </section>
  )
}

export default Authorization;