export default class FormValidator {
    constructor(validations, formElement) {
      this._validations = validations;
      this._formElement = formElement;
    }

//Функция отображения ошибки.
_showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._validations.inputInvalidClass);
}

//Функция скрытия ошибки.
_hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this._validations.inputInvalidClass);
}


//Проверка инпута на валидность.
_checkInputValidity(form, input) {
    if (input.validity.valid) {
        this._hideError(form, input);
    } else {
        this._showError(form, input);
    }
}

//Функция проверки состояния кнопки.
_setButtonState(button, isActive) {
    if (isActive) {
        button.classList.remove(this._validations.buttonInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(this._validations.buttonInvalidClass);
        button.disabled = 'disabled';
    }
}

//Функция передачи формы.
_setEventListener(form) {
    const inputList = form.querySelectorAll(this._validations.inputSelector);
    const submitButton = form.querySelector(this._validations.submitButtonSelector);

    inputList.forEach(input => {
        input.addEventListener('input', () => {
            this._checkInputValidity(form, input);
            this._setButtonState(submitButton, form.checkValidity());
        })
    })
}

enableValidation() {
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListener(this._formElement);
    }
  } 

 