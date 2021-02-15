import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleForm}) {
    super(popupSelector);
    this._handleForm = handleForm;
    this._submit = this._submit.bind(this);
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
  }

  _submit(evt) {
    evt.preventDefault();
    this._handleForm(this._getInputValues());
  }

  //собирает данные всех полей
  _getInputValues() {
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
