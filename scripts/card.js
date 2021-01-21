import {openPopup} from './index.js'
import {popupFullImageNode} from './index.js'
import {popupFullTextNode} from './index.js'
import {popupFullNode} from './index.js'

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  //Возьмем разметку из HTML
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    //вернём DOM-элемент карточки
    return cardElement;
  }

  //открытие предпросмотра изображения
  _openFullPopup() {
    popupFullImageNode.src = this._link;
    popupFullImageNode.alt = this._name;
    popupFullTextNode.textContent = this._name;
    openPopup(popupFullNode);
  }

  //лайк карточки
  _cardLikeToggle(evt) {
    evt.target.classList.toggle('card__like_active');
  }

  //удаление карточки
  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  //слушатели кликов
  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._openFullPopup();
    })
    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      this._cardLikeToggle(evt);
    })
    this._element.querySelector('.card__delete').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    })
  }

  // подготовим карточку к публикации
  generateCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;

    this._setEventListeners();
    
    return this._element;
  }
}

