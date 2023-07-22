import { MOVIES_URL } from "./utils"

export default function getMovies() {
  return fetch(`${MOVIES_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error("Произошла ошибка"))
    })
}
