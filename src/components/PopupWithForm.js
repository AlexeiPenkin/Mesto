import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit;
    this.form = this._popup.querySelector('.form');
    this._inputList = Array.from(this.form.querySelectorAll('.form__input'));
  }

  // собираем данные всех полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  // добавляем обработчик клика иконке закрытия и обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners(``);
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log(this._getInputValues());
      this._formSubmit(this._getInputValues());
      this.close();
    })
  }

  // закрываем попап
  close() {
    super.close();
    this.form.reset();
  }
}