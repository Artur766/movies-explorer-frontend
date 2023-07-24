import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';
import mainApi from '../../utils/MainApi';
import * as auth from "../../utils/auth";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isTokenCheck, setIsTokenCheck] = React.useState(false);

  //При авторизации получаем данные о пользователе и все карточки
  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then(dataUser => {
          setCurrentUser(dataUser);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn]);


  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.checkToken(jwt)
        .then((dataUser) => {
          if (dataUser) {
            setLoggedIn(true);
          }
        })
        .catch(err => console.log(err))
        .finally(() => setIsTokenCheck(true));
    } else {
      setIsTokenCheck(true);
    }
  }, [setLoggedIn]);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleSignOut() {
    setLoggedIn(false);
  }

  function handleUpdateUser(dataCurrentUser) {
    mainApi.updateUserInfo(dataCurrentUser)
      .then((newDataUser) => {
        setCurrentUser(newDataUser);
      })
      .catch(err => console.log(err))
  }

  return (

    <div className="App">{
      isTokenCheck ?
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <SavedMoviesContext.Provider value={{ savedMovies, setSavedMovies }}>
            <Header loggedIn={loggedIn} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                />
              } />
              <Route path="/saved-movies" element={
                <ProtectedRoute
                  movies={savedMovies}
                  element={SavedMovies}
                  loggedIn={loggedIn}
                />
              } />
              <Route path="/profile" element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                  element={Profile}
                  handleSignOut={handleSignOut}
                />}
              />
              <Route path="/signup" element={<Register handleLogin={handleLogin} />} />
              <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </SavedMoviesContext.Provider >
        </CurrentUserContext.Provider >
        : <Preloader />}
    </div >
  );
}

export default App;
