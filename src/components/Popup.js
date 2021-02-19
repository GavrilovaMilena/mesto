export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._handleButtonClose = this._handleButtonClose.bind(this);
  }

  //открытие попапа
  open() {
    this._popup.classList.add('popup_visible');
    document.addEventListener('keydown', this._handleEscClose);
}
  //закрытие попапа
  close() {
    this._popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  //закрытие попапа на Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  //закрытие попапа на оверлей
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_visible')) {
      this.close();
    }
  }
  //закрытие попапа на крестик
  _handleButtonClose() {
    this.close();
  };

  //листнеры
  setEventListeners() {
    this._popupCloseButton.addEventListener('click', this._handleButtonClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
  }
}
