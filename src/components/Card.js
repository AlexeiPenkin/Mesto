export class Card {
<<<<<<< HEAD
  constructor(data, handleCardClick, cardSelector, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
=======
<<<<<<< HEAD
  constructor(data, handleCardClick, cardSelector, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
=======
  constructor(data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._text = data.name;
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._cardSelector = cardSelector;
<<<<<<< HEAD
    this._handleCardClick = handleCardClick; 
=======
<<<<<<< HEAD
    this._handleCardClick = handleCardClick; 
=======
    this._handleCardClick = handleCardClick;
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

<<<<<<< HEAD
  // клонируем шаблон
  _getTemplate() {
    const cardListItem = document
=======
<<<<<<< HEAD
  // клонируем шаблон
  _getTemplate() {
    const cardListItem = document
=======
  _getTemplate() {
    const cardElement = document // cardElement = cardListItem
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

<<<<<<< HEAD
    return cardListItem;
=======
<<<<<<< HEAD
    return cardListItem;
  }

  //установка слушателей
  _setEventListeners() {
    // ставим лайк
    this._element.querySelector('.card__like-button')
    .addEventListener('click', () => this._handleLikeClick(this._id));
    // удаляем карточку
    this._element.querySelector('.card__delete-button')
    .addEventListener('click', (evt) => this._handleDeleteClick(this._id));
    // открываем фото из карточки
    this._cardImage.addEventListener('click', () => this._popupImageOpen());
=======
    return cardElement;
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  }

<<<<<<< HEAD
  //установка слушателей
  _setEventListeners() {
    // ставим лайк
    this._element.querySelector('.card__like-button')
    .addEventListener('click', () => this._handleLikeClick(this._id));
    // удаляем карточку
    this._element.querySelector('.card__delete-button')
    .addEventListener('click', (evt) => this._handleDeleteClick(this._id));
    // открываем фото из карточки
    this._cardImage.addEventListener('click', () => this._popupImageOpen());
=======
    this._element.querySelector('.card__image').
      addEventListener('click', () => this._handleCardClick());
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
 
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikes(newLikes) {
    this._likes = newLikes
    const likeCountElement = this._element.querySelector('.card__like-count')
    likeCountElement.textContent = this._likes.length
<<<<<<< HEAD

    if(this.isLiked()) {
      this._colorLike()
=======
<<<<<<< HEAD

    if(this.isLiked()) {
      this._colorLike()
    } else {
      this._uncolorLike()
    }
  }

  _colorLike() {
    this._element.querySelector('.card__like-button').
      classList.add('card__like-button_active');
  }

  _uncolorLike() {
    this._element.querySelector('.card__like-button').
      classList.remove('card__like-button_active');
  }

  _popupImageOpen() {
    this._handleCardClick({
      src: this._cardImage.src,
      title: this._cardImage.title
    })
  }

  generateCard() {
    // создаем карточку из клонированного шаблона
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография: ${this._name}`;
    this._cardImage.title = this._name;
    this._element.querySelector('.card__name').textContent = this._name;
  
    this._setEventListeners();
  
    this.setLikes(this._likes)

    if(this._ownerId !== this._userId) {
      this._element.querySelector('.card__delete-button').style.display = 'none'
    }

    return this._element;
    }
=======
      if(this.isLiked()) {
        this._fillLike()
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
    } else {
      this._uncolorLike()
    }
  }

  _colorLike() {
    this._element.querySelector('.card__like-button').
      classList.add('card__like-button_active');
  }

  _uncolorLike() {
    this._element.querySelector('.card__like-button').
      classList.remove('card__like-button_active');
  }

  _popupImageOpen() {
    this._handleCardClick({
      src: this._cardImage.src,
      title: this._cardImage.title
    })
  }

  generateCard() {
    // создаем карточку из клонированного шаблона
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография: ${this._name}`;
    this._cardImage.title = this._name;
    this._element.querySelector('.card__name').textContent = this._name;
  
    this._setEventListeners();
  
    this.setLikes(this._likes)

    if(this._ownerId !== this._userId) {
      this._element.querySelector('.card__delete-button').style.display = 'none'
    }

    return this._element;
<<<<<<< HEAD
    }
=======
  }
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
}