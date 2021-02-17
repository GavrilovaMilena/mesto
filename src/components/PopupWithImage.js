import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullImage = this._popup.querySelector(".popup__full-image");
    this._fullText = this._popup.querySelector(".popup__full-text");
  }

  open(image, name) {
    super.open();
    this._fullImage.src = image;
    this._fullImage.alt = name;
    this._fullText.textContent = name;
  }
}
