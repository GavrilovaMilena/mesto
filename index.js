let infoButtonNode = document.querySelector('.info__button');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');


infoButtonNode.addEventListener('click', handleHeaderButtonClick);
popupCloseButtonNode.addEventListener('click', handleHeaderButtonClick);

function handleHeaderButtonClick() {
  popupNode.classList.toggle('popup_visible');
}

let titleInput = document.querySelector('.popup__input[name="infoTitle"]');
let subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');


let popupForm = document.querySelector('.popup__form');


function openPopup() {
  popup.classList.add('popup_opened');
  titleInput.value = infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
  closePopup()
}

popupForm.addEventListener('submit', formSubmitHandler);





