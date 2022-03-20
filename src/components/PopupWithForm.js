import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit;
    this.form = this._popup.querySelector('.form');
  }
  // собираем данные всех полей формы
  _getInputValues() {
    const inputs = [this.form.querySelectorAll('.form__input')]
    const values = {}
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler
  }

  // добавляем обработчик клика иконке закрытия и обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmit(this._getInputValues)
    })
  }
  // закрываем попап
  close() {
    super.close();
    this.form.reset();
  }
}