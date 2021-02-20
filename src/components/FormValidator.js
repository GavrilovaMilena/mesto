export default class FormValidator {
    constructor(validations, formElement) {
        this._validations = validations;
        this._submitButton = formElement.querySelector(this._validations.submitButtonSelector);
        this._formElement = formElement;
    }

    //Функция отображения ошибки.
    _showError(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._validations.inputInvalidClass);
    }

    //Функция скрытия ошибки.
    _hideError(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._validations.inputInvalidClass);
    }

    //Проверка инпута на валидность.
    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    }

    //Функция проверки состояния кнопки.
    setButtonState() {
        if (!this._formElement.checkValidity()) {
            this._submitButton.classList.add(this._validations.buttonInvalidClass);
            this._submitButton.disabled = 'disabled';
        } else {
            this._submitButton.classList.remove(this._validations.buttonInvalidClass);
            this._submitButton.disabled = false;
        }
    }

    //слушатели
    _setEventListener() {
        const inputList = this._formElement.querySelectorAll(this._validations.inputSelector);

        inputList.forEach(thisInput => {
            thisInput.addEventListener('input', () => {
                this._checkInputValidity(thisInput);
                this.setButtonState();
            });
        });
        this._formElement.addEventListener('reset', () => {
            inputList.forEach((input) => {
                this._hideError(input);
                this.setButtonState();
            });
        });
    }

    //включение валидации
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this.setButtonState();
        this._setEventListener(this._formElement);
    }
}
