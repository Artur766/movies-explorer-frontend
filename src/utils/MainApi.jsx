import { BASE_URL } from "./utils";

class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((error) => {
      const errorMessage = error.message || "Произошла ошибка...";
      return Promise.reject(new Error(errorMessage));
    });
  }

  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(this._handleResponse)
  }

  updateUserInfo(userData) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(this._handleResponse)
  }

  getSavedMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${token}`
      },
    })
      .then(this._handleResponse)
  }

  saveMovie(movieData) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
      .then(this._handleResponse)
  }

  deleteMovie(idMovie) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.baseUrl}/movies/${idMovie}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(this._handleResponse)
  }
}

const mainApi = new MainApi(BASE_URL);

export default mainApi;
