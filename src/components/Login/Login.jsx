import React from 'react';
import Authorization from '../Authorization/Authorization';
import { useFormValidation } from "../../utils/useFormValidation";
import * as auth from "../../utils/auth";
import { useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function Login({ handleLogin }) {
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

    auth.authorize(values["email"], values["password"])
      .then((data) => {
        if (data.token) {
          setIsError("");
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => setIsError(err.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <Authorization
      linkText={"Регистрация"}
      text={"Ещё не зарегистрированы?"}
      route={"/signup"}
      title={"Рады видеть!"}
      handleSubmit={handleSubmit}
      nameForm={"login"}
    >
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
          <button className={`authorization__submit-btn authorization__submit-btn_type_register  ${isValid ? "" : "authorization__submit-btn_disablded"}`} type="submit" >Войти</button>
      }
    </Authorization>
  )
}

export default Login;
