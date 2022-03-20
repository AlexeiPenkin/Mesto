export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpenClass = 'popup_opened';
    this._popupCloseButtonClass = 'popup__close-button';
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  // открываем попап
  open() {
    this._popup.classList.add(this._popupOpenClass);
    document.addEventListener("keyup", this._handleEscClose);
  }
  // закрываем попап
  close() {
    this._popup.classList.remove(this._popupOpenClass);
    document.removeEventListener("keyup", this._handleEscClose);
  }
  // закрываем попап по кнопке Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") { 
      this.close();
    }
  }
  // добавляем слушатель клика иконке закрытия попапа и клика на оверлэй
  setEventListeners() {
    const popupCloseButton = this._popup.querySelector(this._popupCloseButtonClass)
    this._popup.addEventListener('click', (evt) => {
      if(!evt.target.closest('.popup__content') || evt.target === popupCloseButton) {
        this.close()
      }
    })
  }
}