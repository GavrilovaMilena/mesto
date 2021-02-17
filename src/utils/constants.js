// КНОПКИ
export const infoButtonNode = document.querySelector('.info__button');
export const profileCardAddButtonNode = document.querySelector('.profile__add-button');
// попап добавления карточек
export const popupCardFormNode = document.querySelector('.popup__form_card');
export const cardNameInput = document.querySelector('.popup__input_card[name="cardName"]');
export const cardLinkInput = document.querySelector('.popup__input_card[name="cardLink"]');
// попап редактирования данных профиля
export const popupFormNode = document.querySelector('.popup__form');
export const titleInput = document.querySelector('.popup__input[name="infoTitle"]');
export const subtitleInput = document.querySelector('.popup__input[name="infoSubtitle"]');
export const profileName = '.info__title';
export const profileAbout = '.info__subtitle';

export const cardsContainerElement = document.querySelector('.cards');
export const template = document.querySelector('.template');

export const initialCards = [
    {
        name: 'Рик Санчес',
        image: 'https://3.bp.blogspot.com/-799som6I9oY/XMJuTj5HhEI/AAAAAABCen4/h8HHT9fbn0oI0LRmEDDsIiTC4VInfwFMgCLcBGAs/s1600/Rick_and_Morty-Season1-Episode1-70.jpg'
    },
    {
        name: 'Цитадель Риков',
        image: 'https://wallpaperscave.ru/images/original/18/05-08/tv-series-rick-and-morty-49243.jpg'
    },
    {
        name: 'Морти Смит',
        image: 'https://s4.hostingkartinok.com/uploads/images/2014/03/5e230afe8948331280d63a62cd1167ea.jpg'
    },
    {
        name: 'Измерение J19ζ7',
        image: 'https://2x2tv.ru/upload/setka-editor/19e/19e2da8299de58fed12301eb19895aeb.jpg'
    },
    {
        name: 'Галактическая Федерация',
        image: 'https://pbs.twimg.com/media/Ck775J5W0AAknjx.jpg:large'
    },
    {
        name: 'Мистер Мисикс',
        image: 'https://slovnet.ru/wp-content/uploads/2019/04/8-10.png'
    }
]

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputInvalidClass: 'popup__input_state-invalid',
    buttonInvalidClass: 'popup__button_invalid',
};



