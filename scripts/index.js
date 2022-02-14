import { Card } from './Card.js'

import { FormValidator } from './FormValidator.js'

import { openPopup, closePopup } from './utils.js'

import {
  addCardButton,
  addCardForm,
  cardList,
  cardTemplateSelector,
  formValidation, 
  initialCards, 
  inputCardLink,
  inputCardName,
  inputJob,
  inputName,
  popupAddCard,
  popupProfileEdit,
  profileEditButton,
  profileEditForm,
  profileJob,
  profileName
} from './constants.js'

//валидация формы редактирования профиля
const editFormValidator = new FormValidator(formValidation, profileEditForm);
editFormValidator.enableValidation();

//валидация формы добавления новой карточки
const addCardFormValidator = new FormValidator(formValidation, addCardForm);
addCardFormValidator.enableValidation();

const renderCard = (data) => {
  const card = new Card(data, cardTemplateSelector)
  const cardListItem = card.createCard()

  cardList.prepend(cardListItem);
};

initialCards.forEach((data) => {
  renderCard(data, cardList)
})

// Функция закрытия модального окна нажатием на Overlay + Close Button //
const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup)
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup)
    }
  })
})

// ProfileEdit - форма редактирования профиля ================== //

// открытие формы ProfileEdit
profileEditButton.addEventListener("click", () => {
  openProfileEditForm();
});

// передача значений в форму ProfileEdit
function openProfileEditForm() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfileEdit);
}

// отправка формы ProfileEdit
function submitProfileEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfileEdit);
}
profileEditForm.addEventListener("submit", submitProfileEditForm);

// AddCard - форма добавления карточки ======================== //

// открытие формы AddCard
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

// отправка формы AddCard
function submitAddCardForm(evt) {
  evt.preventDefault();
  const nameInputValue = inputCardName.value;
  const linkInputValue = inputCardLink.value;
  renderCard({name: nameInputValue, link: linkInputValue});
  closePopup(popupAddCard);

  inputCardLink.value = "";
  inputCardName.value = "";
}
popupAddCard.addEventListener("submit", submitAddCardForm);