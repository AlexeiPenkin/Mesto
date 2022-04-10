<<<<<<< HEAD
class Api {
=======
export class Api {
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  getProfile() {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/users/me`, {
=======
    return fetch(`${this._baseUrl}/users/me`, { 
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  getCards() {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/cards`, {
=======
    return fetch(`${this._baseUrl}/cards`, { 
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  editProfile(name, about) {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
=======
    return fetch(`${this._baseUrl}/users/me`, { 
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name, 
        about
      })
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  addCard(name, link) {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
=======
    return fetch(`${this._baseUrl}/cards`, { 
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name, 
        link
      })
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  deleteCard(id) {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
=======
    return fetch(`${this._baseUrl}/cards/${id}`, { 
      method: "DELETE",
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  deleteLike(id) {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
=======
    return fetch(`${this._baseUrl}/cards/${id}/likes`, { 
      method: "DELETE",
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  addLike(id) {
<<<<<<< HEAD
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
=======
    return fetch(`${this._baseUrl}/cards/${id}/likes`, { 
      method: "PUT",
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

<<<<<<< HEAD
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })
=======
  updateAvatar(url) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers, 
      body: JSON.stringify({
        avatar: url
      })
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }
<<<<<<< HEAD
}

export const api = new Api({
=======

}

export const api = new Api ({
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: '5d4e1190-b28e-43b7-8ea4-e77452b82da9',
    'Content-Type': 'application/json'
  }
});