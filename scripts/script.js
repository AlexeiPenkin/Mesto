const popupProfileEdit = document.querySelector(".popup.edit-profile");
const inputName = document.querySelector("[name='form_name']");
const inputJob = document.querySelector("[name='form_job']");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formProfileEdit = popupProfileEdit.querySelector(
  "[name='form-edit-profile']"
);
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(
  ".popup.edit-profile .popup__close-button"
);

const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");
const formError = formElement.querySelector(`.${formInput.id}-error`);

const cardList = document.querySelector(".card-list");
const cardTemplate = document.querySelector("#card-template");
const cardListItem = cardTemplate.querySelector(".card");
const cardName = cardTemplate.querySelector(".card__name");
const cardImage = cardTemplate.querySelector(".card__image");

const popupAddCard = document.querySelector(".popup.add-card");
const addCardButton = document.querySelector(".profile__add-button");
const formAddCard = document.querySelector("[name='form-add-card']");
const inputCardName = document.querySelector("[name='card_title']");
const inputCardLink = document.querySelector("[name='card_link']");
const addCardCloseButton = document.querySelector(
  ".popup.add-card .add-card__close-button"
);
const addCardSubmitButton = document.querySelector(
  ".popup.add-card .form__submit-button"
);

const popupImageOpen = document.querySelector(".popup.popup-image");
const popupImage = document.querySelector(".popup-image__image");
const popupImageTitle = document.querySelector(".popup-image__title");
const popupImageCloseButton = document.querySelector(
  ".popup-image__close-button"
);

const initialCards = [
  {
    name: "Сейдозеро, Мурманская область",
    link: "https://images.unsplash.com/photo-1624719634789-d30a375d4d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Красноярский край",
    link: "https://images.unsplash.com/photo-1554481644-50d52b6fe742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
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
    link: "https://images.unsplash.com/photo-1605551440214-fd53c8ac9adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Владивосток",
    link: "https://images.unsplash.com/photo-1591254252635-3696f89b972f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
  },
];

// Переборр массива - вставка начальных карточек - создание новой карточки ========================= //

const createCard = (cardInfo) => {
  const cardListItem = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
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

const result = initialCards.map((cardInfo) => {
  return createCard(cardInfo);
});

cardList.prepend(...result);

// Функция открытия модального окна (openPopup) =================================== //
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

// Функция закрытия модального окна (closePopup) =================================== //
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// ProfileEdit - форма редактирования профиля =================================== //

// открытие формы ProfileEdit
function openProfileEditPopup(popupProfileEdit) {
  openPopup(popupProfileEdit);
}

profileEditButton.addEventListener("click", () => {
  openPopup(popupProfileEdit);
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

// AddCard - форма добавления карточки =================================== //

// открытие формы AddCard
function openAddCardPopup(popupAddCard) {
  popupAddCard.classList.add("popup_opened");
}
addCardButton.addEventListener("click", () => openAddCardPopup(popupAddCard));

// отправка и передача данных из формы AddCard
function submitAddCardForm(evt) {
  evt.preventDefault();
  addCard(evt);
  closeAddCardPopup(popupAddCard);
}
popupAddCard.addEventListener("submit", submitAddCardForm);

// Добавление новой карточки
function addCard(evt) {
  evt.preventDefault();
  const cardListItem = cardTemplate.content.querySelector(".card").cloneNode(true);
  cardListItem.querySelector(".card__image").src = inputCardLink.value;
  cardListItem.querySelector(".card__name").textContent = inputCardName.value;

  // очистка полей ввода данных
  inputCardLink.value = "";
  inputCardName.value = "";

  // добавление новой карточки на страницу
  cardList.prepend(cardListItem);

  // Открытие фото из карточки
  cardListItem.querySelector(".card__image").addEventListener("click", () => {
    popupImageOpen.classList.add("popup_opened");
    popupImageTitle.textContent =
      cardListItem.querySelector(".card__name").textContent;
    popupImage.src = cardListItem.querySelector(".card__image").src;
  });
  popupImageCloseButton.addEventListener("click", () => {
    popupImageOpen.classList.remove("popup_opened");
  });

  // кнопка удаление карточки
  const deleteButton = cardListItem.querySelector(".card__button_delete");
  deleteButton.addEventListener("click", () => {
    cardListItem.remove();
  });

  // кнопка like карточки
  const likeButton = cardListItem.querySelector(".card__button_like");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__button_like_active");
  });
}

// ззакрытие формы AddCard по кнопке addCardCloseButton
function closeAddCardPopup(popupAddCard) {
  popupAddCard.classList.remove("popup_opened");
}
addCardCloseButton.addEventListener("click", () =>
  closeAddCardPopup(popupAddCard)
);

// // AddCard - форма добавления карточки =================================== //

// // открытие формы AddCard
// function openAddCardPopup(popupAddCard) {
//   openPopup(popupAddCard);
// }
// addCardButton.addEventListener("click", () => openPopup(popupAddCard));

// // отправка и передача данных из формы AddCard
// function submitAddCardForm(evt) {
//   evt.preventDefault();
//   const name = inputCardName.value;
//   const link = inputCardLink.value;

//   renderCard(name, link);
// };
//   closePopup(popupAddCard);

// popupAddCard.addEventListener("submit", submitAddCardForm);

// // очистка полей ввода данных
// inputCardLink.value = "";
// inputCardName.value = ""

// function createCard(name, link) {
//   newCard.querySelector(".card__name").textContent = name;
//   newCard.querySelector(".card__image").src = link;
//   newCard.querySelector(".card__image").alt = name;

//   return newCard;
// }

// function renderCard(name, link) {
//   newCard = createCard(name, link);
// }

// // добавление новой карточки на страницу
// cardList.prepend(newCard);

// // Открытие фото из карточки
// cardListItem.querySelector(".card__image").addEventListener("click", () => {
//   openPopup(popupImageOpen);
//   popupImageTitle.textContent = cardListItem.querySelector(".card__name").textContent;
//   popupImage.src = cardListItem.querySelector(".card__image").src;
// });
// popupImageCloseButton.addEventListener("click", () => closePopup(popupImageOpen));

// // кнопка удаление карточки
//   const deleteButton = cardListItem.querySelector(".card__button_delete");
//   deleteButton.addEventListener("click", () => {
//     cardListItem.remove();
//   });

//   // кнопка like карточки
//   const likeButton = cardListItem.querySelector(".card__button_like");
//   likeButton.addEventListener("click", function (evt) {
//     evt.target.classList.toggle("card__button_like_active");
//   });

// // ззакрытие формы AddCard по кнопке addCardCloseButton
// // function closeAddCardPopup(popupAddCard) {
// //   popupAddCard.classList.remove("popup_opened");
// // }
// addCardCloseButton.addEventListener("click", () => closePopup(popupAddCard));
