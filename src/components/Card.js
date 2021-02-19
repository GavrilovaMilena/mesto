export default class Card {
  constructor(data, userId, cardSelector, openPopupFull, deleteHandler, addLike, removeLike) {
    this._name = data.name;
    this._img = data.link;
    this._cardSelector = document.querySelector(cardSelector);
    this._openPopupFull = openPopupFull;
    this._ownerId = data.owner._id;
    this._imageId = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._deleteHandler = deleteHandler;
    this._addLike = addLike;
    this._removeLike = removeLike;
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
    if (!evt.target.classList.contains('card__like_active')) {
      this._element.querySelector('.card__like').classList.add('card__like_active');
      this._addLike();
    } else {
      this._element.querySelector('.card__like').classList.remove('card__like_active');
      this._removeLike();
    }
  }

  //отображение корзины
  _handleTrashButton(item) {
    item.remove();
    item = null;
  }

  _сardOwner() {
    if (this._data.owner._id !== this._ownerId) {
      this._handleTrashButton(this._delete);
    } else {
      return;
    }
  }

  //счетчик лайков
  setLikesCounter(data) {
    this._likesCounter.textContent = String(data.likes.length);
  }

  // сгенерируем и подготовим карточку к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._deleteButton = this._element.querySelector('.card__delete');
    this._cardImage = this._element.querySelector('.card__image');
    this._element.querySelector('.card__text').textContent = this._name;
    this._cardImage.src = this._img;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__like-counter').textContent = this._likes.length;
    this._likes.forEach((item) => {
      if (item._id === this._userId) {
        this._element.querySelector('.card__like').classList.add('card__like_active');
      }
    });
    this._setEventListeners();
    this.checkId();
  
    return this._element;
  }

  checkId() {
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }
  }

  removeCard() {
    this._element.remove();
  }

  returnCardId() {
    return this._imageId;
  }

  changeLikesCounter(counter) {
    this._element.querySelector('.card__like-counter').textContent = counter;
  }

  //слушатели кликов
  _setEventListeners() {
    //большое изображение
    this._cardImage.addEventListener('click', () => { 
      this._openPopupFull(this._img, this._name);
    });
    //лайк
    this._element.querySelector('.card__like').addEventListener('click', (evt)=>{
      this._cardLikeToggle(evt);
    });
    //удаление
    this._deleteButton.addEventListener('click', (evt)=>{
      this._deleteHandler(evt);
    });
  }
}