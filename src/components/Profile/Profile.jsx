import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidation } from "../../utils/useFormValidation";
import "./Profile.css";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import Modal from "../Modal/Modal"
import checkMark from "../../images/unionСheckmark.svg"

function Profile({ handleSignOut }) {
  const [isModal, setIsModal] = React.useState(false);
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState("");
  const { values, errors, handleChange, reset, isValid, setIsValid } = useFormValidation();
  const navigate = useNavigate();

  // устанавливаем значение на инпуты
  React.useEffect(() => {
    if (currentUser) {
      reset({ "name": currentUser.name, "email": currentUser.email });
    }
  }, [currentUser, reset]);

  //проверяем чтобы значения инпутов не были одинаковыми
  React.useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false)
    }
  }, [currentUser, values, setIsValid])

  //выход из аккаунта
  function signUserOut() {
    handleSignOut();
    setCurrentUser({ name: '', email: '' });
    localStorage.clear();
    navigate("/", { replace: true });
  }

  //сабмит на форму
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    mainApi.updateUserInfo({ name: values["name"], email: values["email"] })
      .then((newDataUser) => {
        setIsError("");
        setCurrentUser(newDataUser);
        setIsEditing(false);
        setIsModal(true);
      })
      .catch(err => {
        setIsError(err.message)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function getErrorClassName(name) {
    return `profile__input ${errors[name] && "profile__input_type_error"}`
  }

  function handleModalClose() {
    setIsModal(false)
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name || ""}!`}</h2>
      <Modal title="Данные успешно сохранены." image={checkMark} isOpen={isModal} onClose={handleModalClose} />
      <form className='profile__form' onSubmit={handleSubmit} noValidate  >
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
            disabled={!isEditing}
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
            disabled={!isEditing}
            pattern='[a-z0-9]+@[a-z]+\.{1,1}[a-z]{2,}'
          />
        </label>
        <span className="profile__error profile__error_visable" >{errors["email"]}</span>
        <div className='profile__container-btn'>
          <span className='profile__error-submit'>{isError}</span>
          {!isEditing && (
            <>
              <button
                type='button'
                className="profile__button-edit"
                onClick={() => setIsEditing(true)}
              >
                Редактировать
              </button>
              <Link to="/" className='profile__button-exit' type='button' onClick={signUserOut}>Выйти из аккаунта</Link>
            </>
          )}
          {isLoading
            ?
            <Preloader />
            :
            (isEditing && (
              <button
                type='submit'
                className={`profile__button-save ${isValid ? "" : "authorization__submit-btn_disablded"}`}
                disabled={!isValid}
              >
                Сохранить
              </button>
            ))
          }
        </div>
      </form>
    </section >
  )
}

export default Profile;
