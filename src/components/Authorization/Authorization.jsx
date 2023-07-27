import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import "./Authorization.css"

function Authorization({ linkText, text, route, title, children, handleSubmit, nameForm }) {

  return (
    <section className='authorization'>
      <Logo />
      <h2 className='authorization__title'>{title}</h2>
      <form className='authorization__form' onSubmit={handleSubmit} noValidate>
        {children}
        <p className="authorization__text">{text}<Link to={route} className="authorization__link"> {linkText}</Link></p>
      </form>
    </section>
  )
}

export default Authorization;
