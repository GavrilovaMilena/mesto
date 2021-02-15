// index.js
import './index.css'; // добавьте импорт главного файла стилей

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"

import {
  validationConfig,
  initialCards,
  template,
  cardsContainerElement,
  popupFullNode,
  profileAbout,
  profileName,
  subtitleInput,
  titleInput,
  popupFormNode,
  popupProfileNode,
  cardLinkInput,
  cardNameInput,
  popupCardFormNode,
  popupCardNode,
  profileCardAddButtonNode,
  infoButtonNode
} from "../utils/constants.js"

const cardValidation = new FormValidator(validationConfig, popupCardFormNode);
const profileValidation = new FormValidator(validationConfig, popupFormNode);
const full = new PopupWithImage(popupFullNode);
const profileInfo = new UserInfo(profileName, profileAbout);

//получения карточки
const createCard = (item) => {
  const card = new Card({
    card: item,
    openPopupFull: () => full.open(card)
  }, template);
  return card
}

// экземпляр класса Section
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
},
cardsContainerElement
);

// экземпляр класса PopupWithForm профиля 
const popupProfile = new PopupWithForm({
  popupSelector: popupProfileNode,
  handleForm: () => {
    profileInfo.setUserInfo(titleInput, subtitleInput);
    popupProfile.close();
  }
})

// экземпляр класса PopupWithForm карточек
const popupCard = new PopupWithForm({
  popupSelector: popupCardNode,
  handleForm: () => {
    const card = createCard({image: cardLinkInput.value, name: cardNameInput.value});
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    popupCard.close();
  }
});

// кнопка добавления карточки
profileCardAddButtonNode.addEventListener('click', () => {
  popupCard.open();
});

// кнопка редактирования профиля
infoButtonNode.addEventListener('click', () => {
  const userData = profileInfo.getUserInfo();
  titleInput.value = userData.name;
  subtitleInput.value = userData.about;
  popupProfile.open();
});

full.setEventListeners();
cardList.renderItems();
popupProfile.setEventListeners();
popupCard.setEventListeners();
cardValidation.enableValidation();
profileValidation.enableValidation();