export default class Card {
  constructor({ card, openPopupFull }, cardSelector) {
    this._name = card.name;
    this._image = card.image;
    this._openPopupFull = openPopupFull;
    this._cardSelector = cardSelector;
  }

  //Возьмем разметку из HTML
  _getTemplate() {
    const template = this._cardSelector
      .content
      .querySelector('.card')
      .cloneNode(true);
    //вернём DOM-элемент карточки
    return template;
  }

  //лайк карточки
  _cardLikeToggle(evt) {
    evt.target.classList.toggle('card__like_active');
  }

  //удаление карточки
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }


  // сгенерируем и подготовим карточку к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardImage = this._element.querySelector('.card__image');
    this._cardText = this._element.querySelector('.card__text');

    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;

    return this._element;
  }

  //слушатели кликов
  _setEventListeners() {
    this._cardImage = this._element.querySelector('.card__image');
    this._cardLike = this._element.querySelector('.card__like');
    this._delete = this._element.querySelector('.card__delete');

    //большое изображение
    this._cardImage.addEventListener('click', () => { this._openPopupFull(this._element) });
    //лайк
    this._cardLike.addEventListener('click', (evt) => { this._cardLikeToggle(evt) });
    //удаление
    this._delete.addEventListener('click', (evt) => { this._deleteCard(evt) })
  }
}
