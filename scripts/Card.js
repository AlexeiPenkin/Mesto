import { openPopup } from "./utils.js";
import { popupImageOpen, popupImage, popupImageTitle } from "./constants.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._alt = data.alt;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  // клонируем шаблон
  _getTemplate() {
    const cardListItem = document.querySelector(this._cardSelector).content.cloneNode(true);

    return cardListItem;
  }

  createCard() {
    // создаем карточку из клонированного шаблона
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    
    // передаем данные в создаваемую карточку
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__name').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

    //установка слушателей
    _setEventListeners() {
      // открываем фото из карточки
      this._element.querySelector('.card__image').addEventListener('click', () => {
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

    // открываем фото из карточки
    _popupImageOpen() {
      popupImageTitle.textContent = this._name;
      popupImage.src = this._link;
      popupImage.alt = ('Фотография' + ': ' + this._name);
      openPopup(popupImageOpen);
    }
    // удаляем карточку
    _deleteCard(evt) {
      evt.target.closest('.card').remove();
    }
    // обрабатываем лайк
    _likeCard(evt) {
      evt.target.classList.toggle('card__button_like_active');
    }
}