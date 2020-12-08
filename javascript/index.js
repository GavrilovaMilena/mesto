let infoButtonNode = document.querySelector('.info__button');
let profileAddButtonNode = document.querySelector('.profile__add-button');
let popupNode = document.querySelector('.popup');
let popupBNode = document.querySelector('.popup_b');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let popupCloseButtonBNode = document.querySelector('.popup__close-button_b');
let popupFormNode = document.querySelector('.popup__form');

function closePopup() {
  popupNode.classList.remove('popup_visible');
}

function closePopupB() {
  popupBNode.classList.remove('popup_visible-b');
}

function openPopup() {
  popupNode.classList.add('popup_visible');
  titleInput.value = infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
}

function openPopupB() {
  popupBNode.classList.add('popup_visible-b');
  textInput.value = cardText.textContent;
  imageInput.value = cardImage.textContent;
}

let titleInput = document.querySelector('.popup__input[name="infoTitle"]');
let subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
let textInput = document.querySelector('.popup__input[name="cardText"]');
let imageInput = document.querySelector('.popup__input[name="cardImage"]');
let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');
let cardText = document.querySelector('.card__text');
let cardImage = document.querySelector('.card__image');

let popupForm = document.querySelector('.popup__form');

function submitHandler(evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
  cardText.textContent = textInput.value;
  cardImage.textContent = imageInput.value;
  closePopup();
  closePopupB();
}

popupCloseButtonNode.addEventListener('click', closePopup);
popupCloseButtonBNode.addEventListener('click', closePopupB);
infoButtonNode.addEventListener('click', openPopup);
profileAddButtonNode.addEventListener('click', openPopupB);
popupFormNode.addEventListener('submit', submitHandler);



const popupUserData = document.querySelector('.popup-user');
const popupPlace = document.querySelector('.popup-place');
const popupPreview = document.querySelector('.popup-preview');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');;
const cardsElements = document.querySelector('.cards');
const templateElement = document.querySelector('.template');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderCard() {
  const itemsCard = initialCards.map(composeItem);
  cardsElements.append(...itemsCard);
}


function composeItem(item) {
  const cardItem = templateElement.cloneNode(true).content;
  const cardsImage = cardItem.querySelector('.card__image');
  cardsImage.addEventListener('click', previewImage);
  const cardText = cardItem.querySelector('.card__text');
  const deliteItem = cardItem.querySelector('.card__delete');
  deliteItem.addEventListener('click', removeItem);
  cardImage.src = item.link;
  cardText.textContent = item.name;
  return cardItem;
}


function popupText(evt) {  
   evt.preventDefault();
  let newItem = {
    name: textInput.value,
    link: imageInput.value
  }
  const newCard = composeItem(newItem);
  cardsElements.prepend(newCard);
  closePopup();
}


function removeItem(event) {
  const targetElement = event.target;
  const targetItem = targetElement.closest('.cards');
  targetItem.remove();
}


function previewImage(event) {
  openPopup(popupPreview);
  const targetElement = event.target;
  const targetBox = targetElement.closest('.card');
  const targetImage = targetBox.querySelector('.card__image');
  const targetText = targetBox.querySelector('.card__text');
  previewImage.src = targetImage.src;
  previewText.textContent = targetText.textContent;
}

renderCard();

