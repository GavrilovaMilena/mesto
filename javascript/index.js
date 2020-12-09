let infoButtonNode = document.querySelector('.info__button');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let popupFormNode = document.querySelector('.popup__form');
let titleInput = document.querySelector('.popup__input[name="infoTitle"]');
let subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');

let profileCardAddButtonNode = document.querySelector('.profile__add-button');
let popupCardNode = document.querySelector('.popup_card');
let popupCardCloseButtonNode = document.querySelector('.popup__close-button_card');
let popupCardFormNode = document.querySelector('.popup__form_card');
let cardNameInput = document.querySelector('.popup__input_card[name="cardName"]');
let cardLinkInput = document.querySelector('.popup__input_card[name="cardLink"]');

let popupFullImageNode = document.querySelector('.popup__full-image');
let popupFullTextNode = document.querySelector('.popup__full-text');
let popupFullNode = document.querySelector('.popup_full');
let popupCloseButtonFullNode = document.querySelector('.popup__close-button_full');

function closePopups() {
  popupNode.classList.remove('popup_visible');
  popupCardNode.classList.remove('popup_visible');
  popupFullNode.classList.remove('popup_visible');
}

function openPopup() {
  popupNode.classList.add('popup_visible');
  titleInput.value = infoTitle.textContent;
  subtitleInput.value = infoSubtitle.textContent;
}

function submitHandler(evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
  closePopups();
}

function openPopupCard() {
  popupCardNode.classList.add('popup_visible');
}

function submitCardHandler(evt) {
  evt.preventDefault();
  addNewCard();
  cardNameInput.value = '';
  cardLinkInput.value = '';
  closePopups();
}

function openFullImagePopup(name, link) {
  popupFullNode.classList.add('popup_visible');
  popupFullTextNode.textContent = name;
  popupFullImageNode.src = link;
}

popupCloseButtonNode.addEventListener('click', closePopups);
popupCardCloseButtonNode.addEventListener('click', closePopups);
popupCloseButtonFullNode.addEventListener('click', closePopups);
infoButtonNode.addEventListener('click', openPopup);
profileCardAddButtonNode.addEventListener('click', openPopupCard);
popupFormNode.addEventListener('submit', submitHandler);
popupCardFormNode.addEventListener('submit', submitCardHandler);



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
    link: 'https://images.unsplash.com/photo-1543514060-d333dec37b9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8a2FtY2hhdGthfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1490791135648-882cc5638215?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2075&q=80'
  }
];

const cardsContainerElement = document.querySelector('.cards');
const templateCard = document.querySelector('.template');

function renderCard() {
  const cardsCard = initialCards.map(composeCard);
  cardsContainerElement.append(...cardsCard);
}

function composeCard(item) {
  const newCard = templateCard.content.cloneNode(true);
  const cardText = newCard.querySelector('.card__text');
  const cardImage = newCard.querySelector('.card__image');
  cardText.textContent = item.name;
  cardImage.src = item.link;
  addRemoveListenerToCard(newCard);
  addFullImageClickListenerToCard(item.name, item.link, cardImage);
  return newCard;
}

function addNewCard() {
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  const addNewCard = composeCard({ name: cardName, link: cardLink });
  cardsContainerElement.prepend(addNewCard);
  cardNameInput.value = '';
  cardLinkInput.value = '';
}

function removeCard(evt) {
  const targetCard = evt.target.closest('.card');
  targetCard.remove();
}

function addRemoveListenerToCard(item) {
  const deleteButton = item.querySelector('.card__delete');
  deleteButton.addEventListener('click', removeCard);
}

function addFullImageClickListenerToCard(name, link, cardImage) {
  cardImage.addEventListener('click', () => {
    openFullImagePopup(name, link);
  });
}

renderCard();
