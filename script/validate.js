//Функция отображения ошибки.
function showError(form, input, сonfig) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(сonfig.inpuyInvalidClass);
  }
  
  //Функция скрытия ошибки.
  function hideError(form, input, сonfig) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(сonfig.inpuyInvalidClass);
  }
  
  //Проверка инпута на валидность.
  function checkInputValidity(form, input, сonfig) {
    if (input.validity.valid) {
      hideError(form, input, сonfig);
    } else {
      showError(form, input, сonfig);
    }
  }
  
  //Функция проверки состояния кнопки.
  function setButtonState(button, isActive, сonfig) {
    if (isActive) {
      button.classList.remove(сonfig.buttonInvalidClass);
      button.disabled = false;
    } else {
      button.classList.add(сonfig.buttonInvalidClass);
      button.disabled = 'disabled';
    }
  }
  
  //Функция передачи формы.
  function setEventListener(form, сonfig) {
    const inputList = form.querySelectorAll(сonfig.inputSelector);
    const submitButton = form.querySelector(сonfig.submitButtonSelector);
  
    inputList.forEach(input => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(form, input, сonfig);
        setButtonState(submitButton, form.checkValidity(), сonfig);
      })
    });
  }
  
  function enableValidation(сonfig) {
    const popupFormNode = document.querySelectorAll(сonfig.formSelector);
    popupFormNode.forEach(form => {
      setEventListener(form, сonfig);
  
      //Обработчик события, чтобы форма не перезагружалась.
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      const submitButton = form.querySelector(сonfig.submitButtonSelector);
      setButtonState(submitButton, form.checkValidity(), сonfig);
    });
  }
  
  const vlidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inpuyInvalidClass: 'popup__input_state-invalid',
    buttonInvalidClass: 'popup__button_invalid'
  };
  
  enableValidation(vlidationConfig);