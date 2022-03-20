export class Card {
  constructor(data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document // cardElement = cardListItem
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }
  
  _setEventListeners() {
    this._element.querySelector('.card__button_like').
      addEventListener('click', () => this.handleLikeClick(this._id));
    
    this._element.querySelector('.card__button_delete').
      addEventListener('click', () => this._handleDeleteClick(this._id));

    this._element.querySelector('.card__image').
      addEventListener('click', () => this._handleCardClick());
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }
 
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikes(newLikes) {
    this._likes = newLikes
    const likeCountElement = this._element.querySelector('.card__like-count')
    likeCountElement.textContent = this._likes.length
      if(this.isLiked()) {
        this._fillLike()
    } else {
      this._clearLike()
    }
  }

  _fillLike() {
    this._element.querySelector('.card__button_like').
    classList.add('.card__button_like_active');
  }

  _clearLike() {
    this._element.querySelector('.card__button_like').
    classList.remove('.card__button_like_active');
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.card__name').textContent = this._text;
    
    this.setLikes(this._likes)

    if(this._ownerId !== this._userId) {
      this._element.querySelector('.card__button_delete').style.display = 'none'
    }

    return this._element;
  }
}