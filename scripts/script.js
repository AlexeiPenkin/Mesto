const popup = document.querySelector(".popup");
const popupProfileEdit = document.querySelector(".popup.edit-profile");
const inputName = document.querySelector("[name='form_name']");
const inputJob = document.querySelector("[name='form_job']");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formProfileEdit = popupProfileEdit.querySelector("[name='form-edit-profile']");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(".popup.edit-profile .popup__close-button");

const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");

const cardList = document.querySelector(".card-list");
const cardTemplate = document.querySelector("#card-template");

const popupAddCard = document.querySelector(".popup.add-card");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("[name='card_title']");
const inputCardLink = document.querySelector("[name='card_link']");
const addCardCloseButton = document.querySelector(".popup.add-card .add-card__close-button");

const popupImageOpen = document.querySelector(".popup.popup-image");
const popupImage = document.querySelector(".popup-image__image");
const popupImageTitle = document.querySelector(".popup-image__title");
const popupImageCloseButton = document.querySelector(".popup-image__close-button");

const initialCards = [
  {
    name: "Архангельская область",
    link: "https://images.unsplash.com/photo-1446506123797-f3e3eb4c092d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  },
    {
    name: "Владивосток",
    link: "https://images.unsplash.com/photo-1610897592260-e61cdb60f6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1610&q=80",
  },
  {
    name: "Красноярский край",
    link: "https://images.unsplash.com/photo-1598007827524-ed6b42eb748e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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
  popupImageCloseButton.addEventListener("click", () => {
    closePopup(popupImageOpen);
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
  const newCard = createCard({name, link})

  cardList.prepend(newCard);
}

const cards = initialCards.map(createCard);
cardList.prepend(...cards);

// Функция открытия модального окна (openPopup) //
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

// Функция закрытия модального окна (closePopup) //
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// ProfileEdit - форма редактирования профиля //

profileEditButton.addEventListener("click", () => {
  openProfileEditForm();
});

formProfileEdit.reset();

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

// закрытие формы ProfileEdit по кнопке profileEditCloseButton
profileEditCloseButton.addEventListener("click", () =>
  closePopup(popupProfileEdit)
);

// AddCard - форма добавления карточки //

// открытие формы AddCard
function openAddCardPopup(popupAddCard) {
  openPopup(popupAddCard);
}
addCardButton.addEventListener("click", () => openAddCardPopup(popupAddCard));

// отправка и передача данных из формы AddCard
function submitAddCardForm(evt) {
  evt.preventDefault();

  const nameInputValue = inputCardName.value
  const linkInputValue = inputCardLink.value

  renderCard(nameInputValue, linkInputValue)

  closeAddCardPopup(popupAddCard);
}
popupAddCard.addEventListener("submit", submitAddCardForm);

// ззакрытие формы AddCard по кнопке addCardCloseButton
function closeAddCardPopup(popupAddCard) {
  closePopup(popupAddCard);
}
addCardCloseButton.addEventListener("click", () =>
  closeAddCardPopup(popupAddCard)
);

// Валидация ============================================================= //

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.classList.add('form__input-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
  setEventListeners(formElement); 
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet); 
    })
  });
};

enableValidation();

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('form__submit-button_disabled');
} else {
  buttonElement.classList.remove('form__submit-button_disabled');
  }
}