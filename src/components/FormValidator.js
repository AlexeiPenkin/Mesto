export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  };

  _showInputError = (inputElement, errorMessage) => {
    const {errorClass, inputErrorClass} = this._settings
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (inputElement) => {
    const {errorClass, inputErrorClass} = this._settings
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  };
  
  _checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  disableSubmitButton = () => {
    const { inactiveButtonClass } = this._settings
    this._buttonElement.classList.add(inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton = () => {
    const { inactiveButtonClass } = this._settings
    this._buttonElement.classList.remove(inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton(); 
    }
      else {
        this._enableSubmitButton();
      } 
  };
  
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
<<<<<<< HEAD:src/components/FormValidator.js
    this.form.addEventListener('submit', (evt) => {
=======
    this._form.addEventListener('submit', (evt) => {
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6:scripts/FormValidator.js
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}