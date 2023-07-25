import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import "./SavedMovies.css"
import { SavedMoviesContext } from '../../context/SavedMoviesContext';
import Preloader from '../Preloader/Preloader';
import { filterMoviesSerch, filterSavedMoviesChekbox } from '../../utils/filterMovies';
import { useFormValidation } from "../../utils/useFormValidation";


function SavedMovies({ movies, isLoading }) {
  const [displayedMovies, setDisplayedMovies] = React.useState(movies);
  const [nothingFound, setNothingFound] = React.useState(false);
  const { savedMovies } = React.useContext(SavedMoviesContext);
  const { values } = useFormValidation();
  const [searchResults, setSearchResults] = React.useState({
    query: values["serch"] || '',
    movies: [],
    isShort: false,
  });


  function handleQuerySerch(ev) {
    setSearchResults({
      ...searchResults,
      query: ev.target.value,
    })
  }

  React.useEffect(() => {
    setDisplayedMovies(savedMovies);
  }, [savedMovies]);

  function handleSerch(e) {
    e.preventDefault();
    const filteredMovies = filterMoviesSerch(savedMovies, searchResults.query);

    setDisplayedMovies(filteredMovies);

    if (filteredMovies.length === 0) {
      setNothingFound(true);
    } else {
      setNothingFound(false);
    }
  }

  function handleToggle() {
    const filteredMoviesChekbox = filterSavedMoviesChekbox(savedMovies, !searchResults.isShort);
    setDisplayedMovies(filteredMoviesChekbox);
    setSearchResults({
      ...searchResults,
      isShort: !searchResults.isShort,
    })
  }

  return (
    <main>
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
          <MoviesCardList
            classButtonDeleteShow={true}
            movies={displayedMovies}>
            {nothingFound && <h1 className='card-list__title-zero-movie'>Ничего не найдено</h1>}
          </MoviesCardList>
      }
    </main >
  )
}

export default SavedMovies;
