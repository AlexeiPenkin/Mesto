// import { openPopup } from './utils.js'
// import { popupImage, popupImageOpen, popupImageTitle } from './constants.js'

// export class Card {
//   constructor(data, cardTemplateSelector) {
//     this._name = data.name
//     this._link = data.link
//     this._cardTemplateSelector = cardTemplateSelector
//   }

//   // _getTemplate = () => { +++
//   //   document.querySelector(this._cardTemplateSelector).
//   //     content.querySelector(".card");
//   // }
  
//   // _handlePopupImageOpen = () => { +++
//   //   this._likeButton.classList.toggle("card__button_like_active");
//   // };

//   // _handleDeleteButton = () => { +++
//   //   this._cardListItem.remove();
//   // }

//   // _handlePopupImageOpen = () => {
//   //   popupImageTitle.textContent = this._name;
//   //   popupImage.src = this._link;
//   //   popupImage.alt = ('Фотография' + ': ' + this._name);
//   //   openPopup(popupImageOpen);
//   // }

//    //установка слушателей +++
//   // _setEventListeners() {
//   //   this._likeButton.addEventListener("click", this._handleLikeButton);
//   //   deleteButton.addEventListener("click", this._handleDeleteButton);
//   //   cardImage.addEventListener("click", this._handlePopupImageOpen);
//   // }

//   // _fillCard() { +++
//   //   this._cardImage.querySelector(".card__image").src = this._link;
//   //   this._cardListItem.querySelector(".card__name").textContent = this._name;
//   //   this._cardListItem.querySelector(".card__image").alt = this._name;
//   // }

//   createCard = () => {
//     this._cardListItem = this._getTemplate.cloneNode(true);

//     this._likeButton = this._cardListItem.querySelector(".card__button_like");
//     this._deleteButton = this._cardListItem.querySelector(".card__button_delete");
//     // this._cardImage = this._cardListItem.querySelector(".card__image"); +++

//     // this._fillCard() +++

//     // this._setEventListeners() +++

//     // return cardListItem; +++
//   };
// }