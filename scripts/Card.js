import {openPopup, closePopup, closeByEscape, renderCard, popups} from './index.js'

const initialCards = [
  {
    name: "Архангельская область",
    link: "https://sun9-12.userapi.com/impf/c851220/v851220531/104efb/ScYk7ynMvXU.jpg?size=1280x874&quality=96&sign=bab021682a9afacd0853d86a143a39ef&type=album",
  },
  {
    name: "Владивосток",
    link: "https://content.r9cdn.net/rimg/dimg/5a/24/84a52653-city-17546-173323f0b02.jpg?width=1200&height=630&crop=true",
  },
  {
    name: "Красноярский край",
    link: "https://www.avtodispetcher.ru/wp-content/gallery/krasnoyarsky-krai/2.jpg",
  },
  {
    name: "Казань",
    link: "https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhJTIwc2lnaHRzZWVpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1603955129944-7f2dbff89b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1576096945991-8f93bc88e924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
  },
];

const cardList = document.querySelector(".card-list");
const cardTemplate = document.querySelector("#card-template");
const cardListItem = document.querySelector(".card");
const popup = document.querySelector('.popup');
const popupImageOpen = document.querySelector(".popup.popup-image");
const popupImage = document.querySelector(".popup-image__image");
const popupImageTitle = document.querySelector(".popup-image__title");
const popupImageCloseButton = document.querySelector(".popup.popup-image .popup__close-button");

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._alt = data.alt;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardListItem = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardListItem;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__name').textContent = this._name;
    this._element.querySelector('.card__name').alt = this._name;

    return this._element;
  }

    _setEventListeners() {
      this._element.addEventListener('click', () => {
        this._popupImageOpen();
      });

      popupImageCloseButton.addEventListener('click', () => {
        this._popupImageCLose();
      });

      cardDeleteButton.addEventListener("click", () => {
        this._cardDelete();
      });

      // cardLikeButton.addEventListener("click", () => {
      //   this._cardLike();
      // });
    }

    _popupImageOpen() {
      popupImageTitle.textContent = this._name;
      popupImage.src = this._link;
      popupImage.alt = ('Фотография' + ': ' + this._name);
      openPopup(popupImageOpen);
    }

    _popupImageCLose() {
      // popupImageTitle.textContent = '';
      // popupImage.src = '';
      // popupImage.alt = '';
      closePopup(popupImageOpen);
    }

    _cardDelete() {
      const cardDeleteButton = Card.querySelector(".card__button_delete");
        cardDeleteButton.addEventListener("click", () => {
          cardListItem.remove();
      });
    }
    
    // _cardLike(evt) {
    //   const cardLikeButton = Card.querySelector(".card__button_like");
    //     cardLikeButton.addEventListener("click", (evt) => {
    //       evt.target.classList.toggle("card__button_like_active");
    //   });
    // }
}

initialCards.forEach((item) => {
  const card = new Card(item, '#card-template');
  const cardListItem = card.createCard();

  cardList.append(cardListItem);
});