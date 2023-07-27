export function filterMoviesSerch(movies, query, isShort) {
  const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()) && (isShort ? movie.duration <= 40 : true));
  return filteredMovies;
}

export function filterMoviesChekbox(movies, isShort, cardsPerRow) {
  if (isShort) {
    const filteredMovies = movies.filter(movie => movie.duration <= 40);
    return filteredMovies;
  } else {
    return movies.slice(0, cardsPerRow * 4);
  }
}

export function filterSavedMoviesChekbox(movies, isShort) {
  if (isShort) {
    const filteredMovies = movies.filter(movie => movie.duration <= 40);
    return filteredMovies;
  } else {
    return movies;
  }
}