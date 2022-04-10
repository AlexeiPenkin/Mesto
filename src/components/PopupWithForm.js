<<<<<<< HEAD
import { Popup } from './Popup.js'
=======
<<<<<<< HEAD
import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit;
    this.form = this._popup.querySelector('.form');
    this._popupButton = this._popup.querySelector('.form__submit-button');
    this._popupButtonText = this._popupButton.textContent;
  }

  _getInputValues() {
    const inputs = [...this.form.querySelectorAll('.form__input')];
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value
    })
    return values
=======
import { Popup } from "./Popup.js";
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector)
    this._handleSubmit = handleSubmit;
    this.form = this._popup.querySelector('.form');
    this._popupButton = this._popup.querySelector('.form__submit-button');
    this._popupButtonText = this._popupButton.textContent;
  }

  _getInputValues() {
    const inputs = [...this.form.querySelectorAll('.form__input')];
    const values = {};
    inputs.forEach((input) => {
<<<<<<< HEAD
      values[input.name] = input.value
    })
    return values
=======
      values[input.name] = input.value;
    });
    return values;
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======

>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
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
<<<<<<< HEAD
}
=======
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
