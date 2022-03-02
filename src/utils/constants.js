export const formValidation = ({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: ".form__submit-button_disabled",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__input-error_active",
});
export const inputCardLink = document.querySelector("[name='link']");
export const inputCardName = document.querySelector("[name='title']");
export const inputJob = document.querySelector("[name='text_job']");
export const inputName = document.querySelector("[name='text_name']");
export const profileEditButton = document.querySelector(".profile__edit-button");
export const popupImageOpen = document.querySelector(".popup.popup-image");
export const popupImage = document.querySelector(".popup-image__image");
export const popupImageTitle = document.querySelector(".popup-image__title");

export const initialCards = [
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1576096945991-8f93bc88e924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1603955129944-7f2dbff89b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Казань",
    link: "https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhJTIwc2lnaHRzZWVpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Красноярский край",
    link: "https://www.avtodispetcher.ru/wp-content/gallery/krasnoyarsky-krai/2.jpg",
  },
  {
    name: "Владивосток",
    link: "https://content.r9cdn.net/rimg/dimg/5a/24/84a52653-city-17546-173323f0b02.jpg?width=1200&height=630&crop=true",
  },
  {
    name: "Архангельская область",
    link: "https://sun9-12.userapi.com/impf/c851220/v851220531/104efb/ScYk7ynMvXU.jpg?size=1280x874&quality=96&sign=bab021682a9afacd0853d86a143a39ef&type=album",
  },
];

// import ArkhangelskRegion from '../images/initialCards/ArkhangelskRegion.jpg'
// import Kazan from '../images/initialCards/Kazan.jpeg'
// import KrasnoyarskRegion from '../images/initialCards/KrasnoyarskRegion.jpg'
// import SaintPetersburg from '../images/initialCards/SaintPetersburg.jpg'
// import Sochi from '../images/initialCards/Sochi.jpg'
// import Vladivostok from '../images/initialCards/Vladivostok.jpg'

// export const initialCards = [
//   {
//     name: "Архангельская область",
//     link: ArkhangelskRegion,
//   },
//   {
//     name: "Казань",
//     link: Kazan,
//   },
//   {
//     name: "Красноярский край",
//     link: KrasnoyarskRegion,
//   },
//   {
//     name: "Санкт-Петербург",
//     link: SaintPetersburg,
//   },
//   {
//     name: "Сочи",
//     link: Sochi,
//   },
//   {
//     name: "Владивосток",
//     link: Vladivostok,
//   },
// ];