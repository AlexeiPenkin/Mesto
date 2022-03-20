import { Popup } from './Popup.js';

export class PopupDeleteCard extends Popup {
  constructor(popupSelector, handleCardDeleteSubmit) {
    super(popupSelector)
    this._handleCardDeleteSubmit = handleCardDeleteSubmit;
    this._submitCardDeleteButton = this._popup.querySelector('.popup__submit');
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitCardDeleteButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleCardDeleteSubmit(evt, this._card);
    })
  }

  open(card) {
    this._card = card;
    super.open();
  }
}