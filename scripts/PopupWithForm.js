import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit;
    this.form = this._popup.querySelector('.form');
    this.inputs = Array.from(this.form.querySelectorAll('.form__input'));
  }

  // собираем данные всех полей формы
  _getInputValues() {
    const formValues = {};
    this.inputs.forEach((input) => {
      formValues[input.name] = input.name;
    });
    return formValues;
  }

  // добавляем обработчик клика иконке закрытия и обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
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