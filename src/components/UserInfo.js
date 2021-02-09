export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameUser = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  // возвращает объект с данными
  getUserInfo() {
    const userInfo = {
      name: this._nameUser,
      about: this._about
    };
    return userInfo;
  }
  // принимает новые данные
  setUserInfo(usrName, usrAbout) {
    this._nameUser.textContent = usrName.value;
    this._about.textContent = usrAbout.value;
  }
}

