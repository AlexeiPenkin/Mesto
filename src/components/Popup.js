export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpenClass = 'popup_opened';
    this._popupCloseButtonClass = 'popup__close-button';
    this._handleClosePopup = this._handleEscClosePopup.bind(this)
  }

  // открываем попап
  open() {
    this._popup.classList.add(this._popupOpenClass);
    document.addEventListener("keydown", this._handleClosePopup);
  }

  // закрываем попап
  close() {
    this._popup.classList.remove(this._popupOpenClass);
    document.removeEventListener("keydown", this._handleClosePopup);
  }

  // закрываем попап по кнопке Esc
  _handleEscClosePopup(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // добавляем слушатель клика иконке закрытия попапа и клика на оверлэй
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      // закрываем попап при клике на затемнённую область вокруг формы
      if (evt.target.classList.contains(this._popupOpenClass)) {
        this.close();
      }
      // закрываем попап при клике на иконку закрытия попапа
      if (evt.target.classList.contains(this._popupCloseButtonClass)) {
        this.close();
      }
    })
  }
}