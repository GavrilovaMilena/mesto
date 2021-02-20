// **КНОПКИ**
export const infoButtonNode = document.querySelector('.info__button');
export const profileCardAddButtonNode = document.querySelector('.profile__add-button');
export const avatarButtonCardNode = document.querySelector('.profile__avatar-button');
// **попап добавления карточек**
export const popupCardFormNode = document.querySelector('.popup__form_card');
export const cardNameInput = document.querySelector('.popup__input_card[name="cardName"]');
export const cardLinkInput = document.querySelector('.popup__input_card[name="cardLink"]');
// **попап редактирования данных профиля**
export const popupFormNode = document.querySelector('.popup__form');
export const titleInput = document.querySelector('.popup__input[name="infoTitle"]');
export const subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
// **попап редактирования аватара**
export const popupAvatarFormNode = document.querySelector('.popup__form_avatar');
export const avatarInput = document.querySelector('.popup__input_avatar[name="avatar"]');
// **попап удаления карточки**
export const popupDeleteCardNode = document.querySelector('.popup_delete-card');

export const profileName = '.info__title';
export const profileAbout = '.info__subtitle';
export const profileAvatar = '.profile__avatar';

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputInvalidClass: 'popup__input_state-invalid',
    buttonInvalidClass: 'popup__button_invalid',
};


