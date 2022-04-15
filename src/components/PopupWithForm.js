import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit;
    this.form = this._popup.querySelector('.form');
    this._popupButton = this._popup.querySelector('.form__submit-button');
    this._popupButtonText = this._popupButton.textContent;
    this._inputs = [...this.form.querySelectorAll('.form__input')];
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value
    })
    return values
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }
  // добавляем обработчик клика иконке закрытия и обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    })
  }
  // закрываем попап
  close() {
    super.close();
    this.form.reset();
  }

  loading(isLoading, message = 'Сохранение...') {
    if(isLoading) {
        this._popupButton.textContent = message
    } else {
        this._popupButton.textContent = this._popupButtonText
    }
}
}