import React from 'react';
import Authorization from '../Authorization/Authorization';

function Login() {
  return (
    <Authorization
      buttonText={"Войти"}
      linkText={"Регистрация"}
      text={"Ещё не зарегистрированы?"}
      route={"/signup"}
      title={"Рады видеть!"}
      classButton={"authorization__submit-btn_type_register"}
    />
  )
}

export default Login;