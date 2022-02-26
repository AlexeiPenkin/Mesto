export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpenClass = 'popup_opened';
    this._popupCloseButtonClass = 'popup__close-button';
  }

  open() {
    this._popup.classList.add(this._popupOpenClass);
    document.addEventListener("keydown", this._handleEscClosePopup);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClosePopup);
  }

  _handleEscClosePopup() {
    if (evt.key === "Escape") {
      // const openedPopup = document.querySelector(".popup_opened")
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(this._popupOpenClass)) {
        this.close();
      }
      if (evt.target.classList.contains(this._popupCloseButtonClass)) {
        this.close();
      }
    })
  }
}