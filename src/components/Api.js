export default class Api {
  constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
  }

  getInitialCards() {
      return fetch(`${this._url}/cards`, {
              headers: this._headers
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }

  getUserInfo() {
      return fetch(`${this._url}/users/me`, {
              headers: this._headers
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }

  setUserInfo(newName, newAbout) {
      return fetch(`${this._url}/users/me`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                  name: newName,
                  about: newAbout
              })
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }

  addCard(name, image) {
      return fetch(`${this._url}/cards`, {
              method: 'POST',
              headers: this._headers,
              body: JSON.stringify({
                  name: name,
                  link: image
              })

          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })

  }
  deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
              method: 'DELETE',
              headers: this._headers,

          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }
  updateAvatarImage(imageUrl) {
      return fetch(`${this._url}/users/me/avatar`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                  avatar: imageUrl
              })
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }
  addLike(cardId) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
              method: 'PUT',
              headers: this._headers,

          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }
  removeLike(cardId) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
              method: 'DELETE',
              headers: this._headers,

          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
  }


}