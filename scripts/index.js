import Card from './card.js'
import FormValidator from './FormValidator.js'
import {initialCards} from './initialСards.js'
import {validationConfig} from './validate.js'

const popupProfileNode = document.querySelector('.popup_profile');
const popupFormNode = document.querySelector('.popup__form');
const popupCloseButtonNode = document.querySelector('.popup__close-button');
const titleInput = document.querySelector('.popup__input[name="infoTitle"]');
const subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
const infoTitle = document.querySelector('.info__title');
const infoSubtitle = document.querySelector('.info__subtitle');
const popupCardFormNode = document.querySelector('.popup__form_card');

const profileCardAddButtonNode = document.querySelector('.profile__add-button');
const popupCardNode = document.querySelector('.popup_card');
const popupCardCloseButtonNode = document.querySelector('.popup__close-button_card');
const cardNameInput = document.querySelector('.popup__input_card[name="cardName"]');
const cardLinkInput = document.querySelector('.popup__input_card[name="cardLink"]');

const cardsContainerElement = document.querySelector('.cards');

const popupCloseButtonFullNode = document.querySelector('.popup__close-button_full');
export const popupFullImageNode = document.querySelector('.popup__full-image');
export const popupFullTextNode = document.querySelector('.popup__full-text');
export const popupFullNode = document.querySelector('.popup_full');

const profileFormValidity = new FormValidator(validationConfig, popupFormNode);
const addCardFormValidity = new FormValidator(validationConfig, popupCardFormNode);

const infoButtonNode = document.querySelector('.info__button');

//Рендер карточек.
function renderCard() {
  initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
    document.querySelector('.cards').append(cardElement);
  })
}
renderCard();

//сброс полей карточки
function resetPopupForm() {
  popupCardFormNode.reset();
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  closePopup(popupCardNode);
}

//сохранение данных профиля
infoButtonNode.addEventListener('click', () => {
  titleInput.value = infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
  openPopup(popupProfileNode);
});

//Закрытие попапа.
function closePopup(node) {
  node.classList.remove('popup_visible');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('click', closeByOverlay);
}

//Закрытие попапа на 'Esc'.
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_visible');
    closePopup(activePopup);
  }
}

//Закрытие попапа на оверлей.
function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_visible')) {
    const activePopup = document.querySelector('.popup_visible');
    closePopup(activePopup);
  }
}

//Открытие попапа.
export function openPopup(node) {
  node.classList.add('popup_visible');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByOverlay);
}

function submitHandler(evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
  closePopup(popupProfileNode);
}



popupCloseButtonNode.addEventListener('click', () => {
  closePopup(popupProfileNode);
});
popupCardCloseButtonNode.addEventListener('click', () => {
  closePopup(popupCardNode);
});
popupCloseButtonFullNode.addEventListener('click', () => {
  closePopup(popupFullNode);
});

infoButtonNode.addEventListener('click', () => {
  titleInput.value = infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
  openPopup(popupProfileNode);
});
profileCardAddButtonNode.addEventListener('click', () => {
  openPopup(popupCardNode);
});

popupFormNode.addEventListener('submit', submitHandler);
popupCardFormNode.addEventListener('submit', handleAddCardFormSubmit);

//Добавление новых карточек.
function addNewCard() {
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  const card = new Card({name: cardName, link: cardLink}, '.template');
  const cardElement = card.generateCard();
  cardsContainerElement.prepend(cardElement);
  resetPopupForm();
}


profileFormValidity.enableValidation();
addCardFormValidity.enableValidation();
