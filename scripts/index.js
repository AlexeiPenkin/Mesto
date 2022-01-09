const popupCloseButton = document.querySelector(".popup__close-button");

const popupProfileEdit = document.querySelector(".popup.edit-profile");
const inputName = document.querySelector("[name='name']");
const inputJob = document.querySelector("[name='job']");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formProfileEdit = popupProfileEdit.querySelector("[name='form-edit-profile']");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".popup.edit-profile .popup__close-button");

const formElement = document.querySelector(".form");
const inputElement = formElement.querySelector(".form__input");
const submitButton = formElement.querySelector(".form__submit-button");
// const submitEditButton = document.querySelector(".form__submit_type_edit");
const submitPlaceButton = document.querySelector(".form__submit_type_place");

const cardList = document.querySelector(".card-list");
const cardTemplate = document.querySelector("#card-template");

const popupAddCard = document.querySelector(".popup.add-card");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("[name='title']");
const inputCardLink = document.querySelector("[name='link']");
const addCardCloseButton = document.querySelector(".popup.add-card .popup__close-button");

const popupImageOpen = document.querySelector(".popup.popup-image");
const popupImage = document.querySelector(".popup-image__image");
const popupImageTitle = document.querySelector(".popup-image__title");
const popupImageCloseButton = document.querySelector(".popup.popup-image .popup__close-button");

// Переборр массива - вставка начальных карточек - создание новой карточки //

const createCard = (cardInfo) => {
  const cardListItem = cardTemplate.content.querySelector(".card").cloneNode(true);
  cardListItem.querySelector(".card__name").textContent = cardInfo.name;
  cardListItem.querySelector(".card__image").alt = cardInfo.name;
  cardListItem.querySelector(".card__image").src = cardInfo.link;

  cardListItem.querySelector(".card__image").addEventListener("click", () => {
    openPopup(popupImageOpen);
    popupImageTitle.textContent = cardInfo.name;
    popupImage.src = cardInfo.link;
  });

  const deleteButton = cardListItem.querySelector(".card__button_delete");
  deleteButton.addEventListener("click", () => {
    cardListItem.remove();
  });

  const likeButton = cardListItem.querySelector(".card__button_like");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__button_like_active");
  });

  return cardListItem;
};

const renderCard = (name, link) => {
  const newCard = createCard({ name, link });

  cardList.prepend(newCard);
};

const cards = initialCards.map(createCard);
cardList.prepend(...cards);

// Функция открытия модального окна (openPopup) //
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

// Функция закрытия модального окна (closePopup) //
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

// Функция закрытия модального окна нажатием на Esc //
function closeByEscape(evt) {
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
  // disableSubmitButton(submitEditButton);
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
formProfileEdit.addEventListener("submit", submitProfileEditForm);

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