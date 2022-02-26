export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  // клонируем шаблон
  _getTemplate() {
    const cardListItem = document.querySelector(this._cardSelector).content.cloneNode(true);

    return cardListItem;
  }

  // создание новой карточки
  generateCard() {
    // создаем карточку из клонированного шаблона
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    // передаем данные в создаваемую карточку //////////////// ДАННЫЕ В НОВУЮ КАРТОЧКУ НЕ ПЕРЕДАЮТСЯ!!!!!!!
    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография: ${this._name}`;
    this._cardImage.title = this._name;
    this._element.querySelector('.card__name').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  // обрабатываем лайк
  _likeCard(evt) {
    evt.target.classList.toggle('card__button_like_active');
  }

  // удаляем карточку
  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  // открываем фото из карточки
  _popupImageOpen() {
    this._handleCardClick({
      src: this._cardImage.src,
      title: this._cardImage.title
    })
  }

  //установка слушателей
  _setEventListeners() {
    // открываем фото из карточки
    this._cardImage.addEventListener('click', () => {
      this._popupImageOpen();
    });

    // удаляем карточку
    this._element.querySelector('.card__button_delete').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    // ставим лайк
    this._element.querySelector('.card__button_like').addEventListener('click', (evt) => {
      this._likeCard(evt);
    });
  }
}