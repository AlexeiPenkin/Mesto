export const formValidation = ({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: ".form__submit-button_disabled",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__input-error_active",
});
export const initialCards = [
  {
    name: "Архангельская область",
    link: "https://sun9-12.userapi.com/impf/c851220/v851220531/104efb/ScYk7ynMvXU.jpg?size=1280x874&quality=96&sign=bab021682a9afacd0853d86a143a39ef&type=album",
  },
  {
    name: "Владивосток",
    link: "https://content.r9cdn.net/rimg/dimg/5a/24/84a52653-city-17546-173323f0b02.jpg?width=1200&height=630&crop=true",
  },
  {
    name: "Красноярский край",
    link: "https://www.avtodispetcher.ru/wp-content/gallery/krasnoyarsky-krai/2.jpg",
  },
  {
    name: "Казань",
    link: "https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhJTIwc2lnaHRzZWVpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1603955129944-7f2dbff89b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1576096945991-8f93bc88e924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
  },
];
export const popupImage = document.querySelector(".popup-image__image");
export const popupImageOpen = document.querySelector(".popup.popup-image");
export const popupImageTitle = document.querySelector(".popup-image__title");
export const popupProfileEdit = document.querySelector(".popup.edit-profile");
export const inputName = document.querySelector("[name='name']");
export const inputJob = document.querySelector("[name='job']");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const profileEditForm = popupProfileEdit.querySelector("[name='form-edit-profile']");
export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileEditCloseButton = document.querySelector(".popup.edit-profile .popup__close-button");
export const formElement = document.querySelector(".form");
export const inputElement = formElement.querySelector(".form__input");
export const submitButton = formElement.querySelector(".form__submit-button");
export const submitPlaceButton = document.querySelector(".form__submit_type_place");
export const cardList = document.querySelector(".card-list");
export const cardTemplateSelector = "#card-template"
export const cardTemplate = document.querySelector("#card-template");
export const cardListItem = document.querySelector(".card");
export const popupAddCard = document.querySelector(".popup.add-card");
export const addCardButton = document.querySelector(".profile__add-button");
export const addCardForm = document.querySelector("[name='form-add-card']");
export const inputCardName = document.querySelector("[name='title']");
export const inputCardLink = document.querySelector("[name='link']");
export const addCardCloseButton = document.querySelector(".popup.add-card .popup__close-button");
export const popup = document.querySelector('.popup');
export const popupImageCloseButton = document.querySelector(".popup.popup-image .popup__close-button");