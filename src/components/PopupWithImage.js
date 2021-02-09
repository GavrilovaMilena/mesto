import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullImage = this._popup.querySelector(".popup__full-image");
    this._fullText = this._popup.querySelector(".popup__full-text");
  }

  open(card) {
    super.open();

    this._fullImage.src = card._image;;
    this._fullImage.alt = card._name;
    this._fullText.textContent = card._name;
  }
}
