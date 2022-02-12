import { openPopup, closePopup } from './utils.js'
import { popupImageOpen, popupImage, popupImageTitle } from './constants.js'

export class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._alt = data.alt;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() { /* +++ */
    this._cardListItem = document.querySelector(this._cardTemplateSelector).content.querySelector('.card');
    /* const cardListItem = document.querySelector(this._cardTemplateSelector).content.cloneNode(true); */
    // const cardDeleteButton = cardListItem.querySelector('.card__button_delete'); +++
    // const cardLikeButton = cardListItem.querySelector('.card__button_like'); +++

    return this._cardListItem;
  }

      // открываем фото из карточки +++
      _handlePopupImageOpen() {
        this._likeButton.classList.toggle("card__button_like_active");
        openPopup(popupImageOpen);
      }
      // закрываем фото
      _handlePopupImageCLose() {
        closePopup(popupImageOpen);
      }
      // удаляем карточку +++
      _handleDeleteButton() {
        this._cardListItem.remove();
      }
      // обрабатываем лайк
      _likeCard(evt) {
        evt.target.classList.toggle('card__button_like_active');
    }



  //установка слушателей +++
    _setEventListeners() {
      // открываем фото из карточки
      this._cardImage.addEventListener("click", this._handlePopupImageOpen);
      // this._element.querySelector('.card__image').addEventListener('click', () => {
      //   this._popupImageOpen();
      // });

      // закрываем фото
      this._element.querySelector('.popup__close-button').addEventListener('click', () => {
        this._popupImageCLose();
      });

      // удаляем карточку
      deleteButton.addEventListener("click", this._handleDeleteButton);
      // this._element.querySelector('.card__button_delete').addEventListener('click', (evt) => {
      //   this._deleteCard(evt);
      // });

      // ставим лайк
      this._likeButton.addEventListener("click", this._handleLikeButton);
      // this._element.querySelector('.card__button_like').addEventListener('click', (evt) => {
      //   this._likeCard(evt);
      // });
    }

    // заполнение карточки +++
    _fillCard() {
      this._cardImage.textContent = this._name;
      this._cardImage.src = this._link;
      this._cardImage.alt = ('Фотография' + ': ' + this._name);
    }

    createCard() {
      // создаем карточку из клонированного шаблона
      this._element = this._getTemplate();
      this._cardImage = this._element.querySelector('.card__image'); /* +++ */
      
      // передаем данные в создаваемую карточку
      this._cardImage.src = this._link;
      this._cardImage.textContent = this._name;
      this._cardImage.alt = this._name; /* this._cardImage.querySelector('.card__name').alt = this._name; */
  
      this._fillCard() /* +++ */

      this._setEventListeners(); /* +++ */
  
      return this._element; /* +++ */
    }
}