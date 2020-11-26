let infoButtonNode = document.querySelector('.info__button');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let popupFormNode = document.querySelector('.popup__form');

function closePopup() {
  popupNode.classList.remove('popup_visible');
}

function openPopup() {
  popupNode.classList.add('popup_visible');
  titleInput.value =  infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
}

let titleInput = document.querySelector('.popup__input[name="infoTitle"]');
let subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');

let popupForm = document.querySelector('.popup__form');

function submitHandler(evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
  closePopup();
}

popupCloseButtonNode.addEventListener('click', closePopup);
infoButtonNode.addEventListener('click', openPopup);
popupFormNode.addEventListener('submit', submitHandler);




