// index.js
import './index.css'; // добавьте импорт главного файла стилей

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Api from "../components/Api.js"
import PopupWithSubmit from "../components/PopupWithSubmit.js"

import {
  infoButtonNode,
  popupFormNode,
  popupCardFormNode,
  popupAvatarFormNode,
  profileCardAddButtonNode,
  titleInput,
  subtitleInput,
  validationConfig,
  avatarButtonCardNode,
  profileAvatar,
  profileAbout,
  profileName
} from "../utils/constants.js"

//**API**
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '525a9253-bff1-4ef9-85d2-df3d4a503fec',
    'Content-Type': 'application/json'
  }
});

//валидация
const cardValidation = new FormValidator(validationConfig, popupCardFormNode);
cardValidation.enableValidation();

const profileValidation = new FormValidator(validationConfig, popupFormNode);
profileValidation.enableValidation();

const avatarValidation = new FormValidator(validationConfig, popupAvatarFormNode);
avatarValidation.enableValidation();


//экземпляр UserInfo
const profileInfo = new UserInfo(profileName, profileAbout, profileAvatar);

//экземпляр PopupWithImage
const full = new PopupWithImage('.popup_full');
full.setEventListeners();

//профиль
const submitProfile = (data) => {
  renderLoading('.popup_profile', true);
  const newUserInfo = profileInfo.getUserInfo();
  api.setUserInfo(newUserInfo.name, newUserInfo.about)
    .then(() => {
      profileInfo.setUserInfo(data);
      renderLoading('.popup_profile', false)
    })
    .catch((err) => {
      console.log(err)
    })
  profilePopup.close();
};

//карточки
const submitCard = (data) => {
  renderLoading('.popup_card', true);
  api.addCard(data.cardName, data.cardLink)
    .then((res) => {
      cardList.addItem(createCard(res));
      renderLoading('.popup_card', false);
    })
    .catch((err) => {
      console.log(err)
    })
  cardPopup.close();
};

const submitAvatar = (data) => {
  renderLoading('.popup_avatar', true);
  api.updateAvatarImage(data.avatar)
    .then(() => {
      profileInfo.setAvatar(data);
      renderLoading('.popup_avatar', false);

    })
    .catch((err) => {
      console.log(err)
    })
  avatarPopup.close();
};

//экземпляр PopupWithForm профиля
const profilePopup = new PopupWithForm('.popup_profile', submitProfile);
profilePopup.setEventListeners();


//экземпляр PopupWithForm карточки
const cardPopup = new PopupWithForm('.popup_card', submitCard);
cardPopup.setEventListeners();

//экземпляр PopupWithForm аватара
const avatarPopup = new PopupWithForm('.popup_avatar', submitAvatar);
avatarPopup.setEventListeners();

//кнопка редактирования данных профия
infoButtonNode.addEventListener('click', () => {git 
  const userInfo = profileInfo.getUserInfo();
  titleInput.value = userInfo.name;
  subtitleInput.value = userInfo.about;
  profilePopup.open();
});

//кнопка добавления карточек
profileCardAddButtonNode.addEventListener('click', () => {
  cardPopup.open()
});

//кнопка редактирования аватара
avatarButtonCardNode.addEventListener('click', () => {
  avatarPopup.open();
})

//большая картинка
const openPopupFull = (img, name) => {
  full.open(img, name);
}


const popupDeleteCard = new PopupWithSubmit('.popup_delete-card');
const cardList = new Section((item) => {
  cardList.addItem(createCard(item));
}, '.cards')


api.getInitialCards()
  .then(res => {
    console.log(res);
    cardList.renderItems(res)
  })
  .catch((err) => {
    console.log(err)
  })

api.getUserInfo()
  .then(res => {
    profileInfo.setInitialInfo(res.name, res.about, res.avatar);
    profileInfo.setUserId(res._id);
  })
  .catch((err) => {
    console.log(err)
  })

//удаление карточки
const removeCard = (card) => {
  return () => {

    api.deleteCard(card.returnCardId())
      .then(() => {
        popupDeleteCard.close();
        card.removeCard();
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

function createCard(data) {
  const card = new Card(data, profileInfo.returnUserId(), '.template', openPopupFull, () => {
    popupDeleteCard.setEventListeners(removeCard(card));
    popupDeleteCard.open();
  }, () => {
    api.addLike(card.returnCardId())
      .then(res => card.changeLikesCounter(res.likes.length))
  }, () => {
    api.removeLike(card.returnCardId())
      .then(res => card.changeLikesCounter(res.likes.length))
  });
  return card.generateCard();
}


function renderLoading(popupSelector, isLoading) {
  const buttonElement = document.querySelector(popupSelector).querySelector('.popup__button ');
  if (isLoading) {
      buttonElement.textContent = 'Сохранение...';
  } else {
      if (popupSelector === '.popup_card') {
          buttonElement.textContent = 'Создать';

      } else {
          buttonElement.textContent = 'Сохранить';

      }
  }
}