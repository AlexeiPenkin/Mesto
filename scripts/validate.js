const hideInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
};

const showInputError = (formElement, inputElement, errorMessage, { errorClass, inputErrorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};
 
const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  }
};

const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  const isFormValid = formElement.checkValidity();
  buttonElement.disabled = !isFormValid;
  buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
};

const setEventListeners = (formElement, config) => {
  const { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass } = config;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(formElement, buttonElement, inactiveButtonClass);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, { errorClass, inputErrorClass,});
      toggleButtonState(formElement, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = (config) => {
  const { formSelector, ...props } = config;
  const inputList = Array.from(document.querySelectorAll(formSelector));
  inputList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, props);
  });
};

const validationConfig = ({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: ".form__submit-button_disabled",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__input-error_active",
});

enableValidation(validationConfig);