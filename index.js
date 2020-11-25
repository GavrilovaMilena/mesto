let infoButtonNode = document.querySelector('.info__button');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');


infoButtonNode.addEventListener('click', togglePopupVisibility);
popupCloseButtonNode.addEventListener('click', togglePopupVisibility);

function togglePopupVisibility() {
    popupNode.classList.toggle('popup__visible');
}

let titleInput = document.querySelector('.popup__input[name="infoTitle"]');
let subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');

let popupForm = document.querySelector('.popup__form');


function openPopup() {
  titleInput.value = infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
}

infoButtonNode.addEventListener('click', openPopup);

popupForm.addEventListener('submit', formSubmitHandler);








