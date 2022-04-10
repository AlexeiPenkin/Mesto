export class FormValidator {
  constructor(settings, form) {
    this.form = form
    this._settings = settings

    this._inputList = Array.from(this.form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this.form.querySelector(this._settings.submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const {errorClass, inputErrorClass} = this._settings

    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (inputElement) => {
    const {errorClass, inputErrorClass} = this._settings

    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
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

  _disableSubmitButton = () => {
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
      this._disableSubmitButton(); 
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
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}