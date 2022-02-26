import {
  initialCards, 
  profileEditButton,
  formValidation
} from './constants.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import Section from './Section.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'
import UserInfo from "./UserInfo.js";

// ProfileEdit - форма редактирования профиля ========================================== //

// получаем инфо пользователя
const userInfo = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__job'
});

// создаем попап формы редактирования профиля ProfileEdit
const popupProfileEditForm = new PopupWithForm('#popupEditProfile', (data) => {
  userInfo.setUserInfo(data);
});
popupProfileEditForm.setEventListeners();

// валидация формы ProfileEdit
const profileEditValidator = new FormValidator(formValidation, popupProfileEditForm.form);
profileEditValidator.enableValidation();

// передаем user info в форму ProfileEdit
const openProfileEditHandler = () => {
  const data = userInfo.getUserInfo()
  // проходимся циклом по ключам объекта, чтобы получить их значения
  for (let key in data) {
    popupProfileEditForm.form.cards[key].value = data[key]; // !!!!! НЕ РАБОТАЕТ = undefined !!!!! //
  }
  profileEditValidator.resetValidation();
  popupProfileEditForm.open()
}
// слушатель кнопки открытия формы ProfileEdit
profileEditButton.addEventListener('click', openProfileEditHandler)

// Открытие preview фото из зкарточки ================================================== //
const popupImageOpen = new PopupWithImage('.popup-image')
popupImageOpen.setEventListeners();

// Создание новой карточки ============================================================= //

// создаем карточку
function createCard(data) {
  const handleCardClick = popupImageOpen.open.bind(popupImageOpen);
  const card = new Card({ data, handleCardClick }, '#card-template');
  return card.generateCard() // или card.createCard(data)
}

// добавляем карточку в разметку
function renderCard(data) {
  const element = createCard(data);
  return element
}

//создаем новую карточку
const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '.card-list');

section.setItem();

// AddCard - форма добавления карточки ================================================= //
const popupAddCardForm = new PopupWithForm('#popupAddCard', ({title, src}) => {
  const data = {
    name: title,
    link: src
  };
  section.addItem(renderCard(data))
});
popupAddCardForm.setEventListeners();

// валидация формы AddCard
const addCardValidator = new FormValidator(formValidation, popupAddCardForm.form);
addCardValidator.enableValidation();
// определяем кнопку открытия формы AddCard
const addCardButton = document.querySelector('.profile__add-button');
// ставим сулшателя кнопке открытия AddCard
addCardButton.addEventListener('click', () => {
  addCardValidator.resetValidation();
  popupAddCardForm.open();
})