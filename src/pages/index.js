import {
  formValidation,
  initialCards, 
  profileEditButton
} from '../utils/constants.js'

import '../pages/index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

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
  const dataUser = userInfo.getUserInfo()
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
  return card.generateCard()
}

// добавляем карточку в разметку
function renderCard(data) {
  const element = createCard(data);
  return element
}

//создаем новый экземпляр Section и размещаем начальный массив данных/карточек
const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '.card-list');

section.setItem();

// AddCard - форма добавления карточки ================================================= //
const popupAddCardForm = new PopupWithForm('#popupAddCard', ({ card_title, card_link }) => {
  const data = {
    name: card_title,
    link: card_link
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