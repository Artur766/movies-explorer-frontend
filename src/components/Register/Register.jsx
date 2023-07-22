import React from 'react';
import Authorization from '../Authorization/Authorization';
import { useFormValidation } from "../../utils/useFormValidation";
import * as auth from "../../utils/auth";
import { useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function Register({ handleLogin }) {

  const [isError, setIsError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const { values, errors, isValid, handleChange } = useFormValidation();

  function getErrorClassName(name) {
    return `authorization__input ${errors[name] && "authorization__input_type_error"}`
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) return;

    setIsLoading(true);

    auth.register(values["email"], values["password"], values["name"])
      .then((data) => {
        if (data.email) {
          setIsError("");
          return auth.authorize(values["email"], values["password"])
        }
      })
      .then(() => {
        handleLogin();
        navigate("/movies", { replace: true });
      })
      .catch((err) => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <Authorization
      linkText={"Войти"}
      text={"Уже зарегистрированы?"}
      route={"/signin"}
      title={"Добро пожаловать!"}
      handleSubmit={handleSubmit}
      nameForm={"register"}
    >
      <label className='authorization__label' >Имя
        <input
          onChange={handleChange}
          value={values["name"] || ''}
          type="text"
          className={getErrorClassName("name")}
          name='name'
          required
          minLength={3}
          maxLength={30}
        />
        <span className="authorization__error authorization__error_visable" >{errors["name"]}</span>
      </label>
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
      <span className='authorization__error-submit'>{isError}</span>
      {
        isLoading ?
          <Preloader />
          :
          <button className={`authorization__submit-btn  ${isValid ? "" : "authorization__submit-btn_disablded"}`} type="submit" >Зарегистрироваться</button>
      }
    </Authorization>
  )
}

export default Register;