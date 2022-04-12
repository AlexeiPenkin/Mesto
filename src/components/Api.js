class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status}`);
    }
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })
    })
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(this._checkResponse)
    // .catch(console.log)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: '5d4e1190-b28e-43b7-8ea4-e77452b82da9',
    'Content-Type': 'application/json'
  }
});