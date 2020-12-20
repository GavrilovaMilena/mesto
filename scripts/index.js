const infoButtonNode = document.querySelector('.info__button');
const popupNode = document.querySelector('.popup');
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

const popupFullImageNode = document.querySelector('.popup__full-image');
const popupFullTextNode = document.querySelector('.popup__full-text');
const popupFullNode = document.querySelector('.popup_full');
const popupCloseButtonFullNode = document.querySelector('.popup__close-button_full');

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
function openPopup(node) {
  node.classList.add('popup_visible');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByOverlay);
}

function submitHandler(evt) {
  evt.preventDefault();
  infoTitle.textContent = titleInput.value;
  infoSubtitle.textContent = subtitleInput.value;
  closePopup(popupNode);
}

function submitCardHandler(evt) {
  evt.preventDefault();
  addNewCard();
  cardNameInput.value = '';
  cardLinkInput.value = '';
  closePopup(popupCardNode);
}

popupCloseButtonNode.addEventListener('click', () => {
  closePopup(popupNode);
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
  openPopup(popupNode);
});
profileCardAddButtonNode.addEventListener('click', () => {
  openPopup(popupCardNode);
});
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

//Рендер карточек.
function renderCard() {
  const cardsCard = initialCards.map(composeCard);
  cardsContainerElement.append(...cardsCard);
}

//Создание карточки из шаблона.
function composeCard(item) {
  const newCard = templateCard.content.cloneNode(true);
  const cardText = newCard.querySelector('.card__text');
  const cardImage = newCard.querySelector('.card__image');
  cardText.textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  addRemoveListenerToCard(newCard);
  addFullImageClickListenerToCard(item.name, item.link, cardImage);
  //Лайк карточки.
  newCard.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  return newCard;
}

//Добавление новых карточек.
function addNewCard() {
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  const addNewCard = composeCard({ name: cardName, link: cardLink });
  cardsContainerElement.prepend(addNewCard);
}

//Удаление карточки.
function removeCard(evt) {
  evt.target.closest('.card').remove()
}

//Обработчик события удаления карточки.
function addRemoveListenerToCard(item) {
  const deleteButton = item.querySelector('.card__delete');
  deleteButton.addEventListener('click', removeCard);
}

function addFullImageClickListenerToCard(name, link, cardImage) {
  cardImage.addEventListener('click', () => {
    popupFullTextNode.textContent = name;
    popupFullImageNode.src = link;
    popupFullImageNode.alt = name;
    openPopup(popupFullNode);
  });
}

renderCard();
