export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._nameUser = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  // возвращает объект с данными
  getUserInfo() {
    return {
      name: this._nameUser.textContent,
      about: this._about.textContent
    };
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
}

  // принимает новые данные
  setUserInfo(data) {
    this._nameUser.textContent =  data.infoTitle;
    this._about.textContent = data.infoSubtitle;
  }

  setInitialInfo(name, about, avatar) {
    this._nameUser.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  }
  setUserId(id) {
    this._userId = id;
  }
  returnUserId() {
    return this._userId;
  }
}