// import { Card } from './Card_1.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { openPopup } from './utils.js'
import { 
  formValidation, 
  initialCards, 
  popupImage, 
  popupImageOpen, 
  popupImageTitle,
} from './constants.js'
import {
  addCardButton,
  addCardCloseButton,
  addCardForm,
  cardList,
  cardListItem,
  // cardTemplate,
  cardTemplateSelector,
  formElement,
  inputCardLink,
  inputCardName,
  inputElement,
  inputJob,
  inputName,
  popup,
  popupAddCard,
  popupImageCloseButton,
  popupProfileEdit,
  profileEditButton,
  profileEditCloseButton,
  profileEditForm,
  profileJob,
  profileName,
  submitButton,
  submitPlaceButton,
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

// const cards = initialCards.map(createCard);
// cardList.prepend(...cards);

initialCards.forEach((data) => {
  renderCard(data, cardList)
})

// Функция закрытия модального окна нажатием на Esc //
export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened")
    closePopup(openedPopup);
  }
}

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
  disableSubmitButton(submitPlaceButton);
});

// отправка формы AddCard
function submitAddCardForm(evt) {
  evt.preventDefault();
  const nameInputValue = inputCardName.value;
  const linkInputValue = inputCardLink.value;
  renderCard(nameInputValue, linkInputValue);
  closePopup(popupAddCard);

  inputCardLink.value = "";
  inputCardName.value = "";
}
popupAddCard.addEventListener("submit", submitAddCardForm);

function disableSubmitButton (submitButton) {
  submitButton.setAttribute("disabled", true);
  submitButton.classList.add("form__submit-button_disabled");
}