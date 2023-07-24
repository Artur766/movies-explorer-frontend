import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import "./Movies.css";
import getMovies from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import Modal from '../Modal/Modal';
import cross from "../../images/unionСross.svg"
import { filterMoviesChekbox, filterMoviesSerch } from '../../utils/filterMovies';
import { useFormValidation } from "../../utils/useFormValidation";


function Movies() {
  const [allMovies, setAllMovies] = React.useState([]);
  const { values } = useFormValidation();
  const [nothingFound, setNothingFound] = React.useState(false);
  const [showButtonStill, setShowButtonStill] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState({
    query: values["serch"] || '',
    movies: [],
    isShort: false,
  });
  const [cardsPerRow, setCardsPerRow] = React.useState(0);

  React.useEffect(() => {
    let resizeTimeout;
    function handleResize() {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1280) {
          setCardsPerRow(3);
        } else if (window.innerWidth >= 768) {
          setCardsPerRow(2);
        } else {
          setCardsPerRow(1.25);
        }
      }, 200)
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const searchResultsString = localStorage.getItem('searchResults');
    const moviesString = localStorage.getItem("movies");
    try {
      if (searchResultsString && moviesString) {
        setSearchResults(JSON.parse(searchResultsString));
        setMovies(JSON.parse(moviesString));
      }
    } catch (err) {
      console.log(err);
      localStorage.removeItem('searchResults');
      localStorage.removeItem('movies');
    }
    setIsLoading(true);
    getMovies()
      .then(dataMovies => {
        setAllMovies(dataMovies);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, []);

  React.useEffect(() => {
    if (searchResults.isShort) {
      setShowButtonStill(movies.length < searchResults.movies.length);
    } else {
      setShowButtonStill(movies.length > searchResults.movies.length);
    }
  }, [movies, searchResults])

  function closePopup() {
    setIsOpen(false);
  }

  function handleSerch(e) {
    e.preventDefault();

    const filteredMovies = filterMoviesSerch(allMovies, searchResults.query, searchResults.isShort);

    setMovies(filteredMovies);
    const newSearchResults = {
      ...searchResults,
      movies: filteredMovies.slice(0, cardsPerRow * 4)
    };

    setSearchResults(newSearchResults);

    // проверяем существуют ли фильмы по фильтрации 
    if (filteredMovies.length === 0) {
      setNothingFound(true);
    } else {
      setNothingFound(false);
    }
    localStorage.setItem("searchResults", JSON.stringify(newSearchResults));
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  }

  function handleQuerySerch(e) {
    setSearchResults({
      ...searchResults,
      query: e.target.value,
    });
  }

  function handleToggle() {

    const filteredMoviesChekbox = filterMoviesChekbox(movies, !searchResults.isShort, cardsPerRow);

    //cначала вызываем функцию setSearchResults() для изменения значения searchResults. 
    setSearchResults({
      ...searchResults,
      isShort: !searchResults.isShort,
      movies: filteredMoviesChekbox,
    });

    //Затем создаем новый объект updatedSearchResults,
    const updatedSearchResults = {
      ...searchResults,
      isShort: !searchResults.isShort,
      movies: filteredMoviesChekbox,
    };

    localStorage.setItem("searchResults", JSON.stringify(updatedSearchResults));
  }

  function handleShowMore() {
    const additionalCards = window.innerWidth >= 1280 ? 3 : 2;
    const newDisplayedMovies = movies.slice(0, searchResults.movies.length + additionalCards);
    const newSearchResults = {
      ...searchResults,
      movies: newDisplayedMovies,
    };
    setSearchResults(newSearchResults);
    localStorage.setItem("searchResults", JSON.stringify(newSearchResults));
  }

  return (
    <main>
      <Modal
        isOpen={isOpen}
        title={"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"}
        image={cross}
        onClose={closePopup}
      />
      <SearchForm
        onSerch={handleSerch}
        valueSerch={searchResults.query}
        onQuerySerch={handleQuerySerch}
        checked={searchResults.isShort}
        onToggle={handleToggle}
      />
      {
        isLoading
          ?
          <Preloader />
          :
          <MoviesCardList movies={searchResults.movies} >
            {
              nothingFound && <h1 className='card-list__nothing-found' >Ничего не найдено</h1>
            }
            {
              showButtonStill && <button className='card-list__button-still' type='button' onClick={handleShowMore}>Еще</button>
            }
          </MoviesCardList>
      }
    </main >
  )
}

export default Movies;
