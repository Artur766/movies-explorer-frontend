import React from 'react';
import Authorization from '../Authorization/Authorization';
import { useFormValidation } from "../../utils/useFormValidation";

function Register() {

  const { values, errors, handleChange } = useFormValidation();

  function getErrorClassName(name) {
    return `authorization__input ${errors[name] && "authorization__input_type_error"}`
  }
  return (
    <Authorization
      buttonText={"Зарегистрироваться"}
      linkText={"Войти"}
      text={"Уже зарегистрированы?"}
      route={"/signin"}
      title={"Добро пожаловать!"}
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
    </Authorization>
  )
}

export default Register;