import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleForm) {
    console.log(popupSelector);
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._handleForm = handleForm;
    this._submit = this._submit.bind(this);
  }

  _submit(evt) {
    evt.preventDefault();
    this._handleForm(this._getInputValues());
  }

  //собирает данные всех полей
  _getInputValues() {
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    this._formValues = {};
    this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
    });
    return this._formValues;
}

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._submit);
  }

  // закрывает форму
  close() {
    super.close();
    this._formElement.reset();
  }
}