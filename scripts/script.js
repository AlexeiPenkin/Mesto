const popupeditProfile = document.querySelector('.popup.edit-Profile');
const inputName = document.querySelector('[name="form_name"]');
const inputJob = document.querySelector('[name="form_job"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = popupeditProfile.querySelector('[name="form-edit-Profile"]')  // popup
const openButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup.edit-Profile .popup__close-button');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
const elementTitle = document.querySelector('.element__title');
const elementImg = document.querySelector('.element__image');

const popupAddCard = document.querySelector('.popup.add-Card');
const addButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('[name="card_title"]');
const cardLink = document.querySelector('[name="card_link"]');
const closeAddCard = document.querySelector('.add-Card__close');
const formAddCard = document.querySelector('[name="form-add-Card"]')

const popupImageOpen = document.querySelector('.popup-Image');
const popupImage = document.querySelector('.popup-Image__image');
const popupImageTitle = document.querySelector('.popup-Image__title');
const popupImageClose = document.querySelector('.popup-Image__close-button');

// открытие popup
function popupOpen (popupeditProfile, callback) {
  popupeditProfile.classList.add('popup_opened');
  if (typeof callback === 'function') {
    callback();
  }
}

// закрытие popup
function popupClose (popupeditProfile) {
  popupeditProfile.classList.remove('popup_opened')
}

// колбэк открытия попапа редактирования формы // передача значений в форму
function editProfilePopupOpenCB() { 
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent
}

// отправка формы редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupClose(popupeditProfile);
}

// передача данных из формы
formElement.addEventListener('submit', formSubmitHandler);

// открытие попапа редактирования профиля
function popupOpenEditProfile (){
  popupOpen(popupeditProfile, editProfilePopupOpenCB);
}
openButton.addEventListener('click', () => 
  popupOpen(popupeditProfile, editProfilePopupOpenCB)
);

// закрытие попапа редактирования профиля
function popupCloseEditProfile(){
  popupClose(popupeditProfile);
}
closeButton.addEventListener('click', popupCloseEditProfile);

// добавление новых карточек
const initialCards = [
  {
    name: 'Сейдозеро, Мурманская область',
    link: 'https://images.unsplash.com/photo-1624719634789-d30a375d4d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Красноярский край',
    link: 'https://images.unsplash.com/photo-1554481644-50d52b6fe742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhJTIwc2lnaHRzZWVpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Башкортостан',
    link: 'https://images.unsplash.com/photo-1630390769820-fc0dd4e3caa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJ1c3NpYSUyMHNpZ2h0c2VlaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1605551440214-fd53c8ac9adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1591254252635-3696f89b972f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
  }
]; 
initialCards.forEach(item => {
  addCard(item.name, item.link)
});


// создание новой карточки
// функция - клонирует шаблон, заполняет поля и возвращает карточку
function createNewCard(name, link) {
  const element = document.querySelector(".elements");
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  return element;
};

// добавление карточки
function addCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = `${name}`;
  elementImage.title = name;

  elements.prepend(element);

// открытие картинки из карточки
function openPopupImage (name, link) {
  popupImage.src = elementImage.src;
  popupImage.alt = elementImage.alt;
  popupImageTitle.textContent = elementImage.title;
  }
  
  elementImage.addEventListener('click', function popupOpenImage () {
    popupOpen(popupImageOpen, openPopupImage)
})

  element.querySelector('.element__title').textContent = name;

// обработчик лайков
element.querySelector('.element__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like-button_active');
  });

// удаление карточки
const deleteElement = element.querySelector('.element__delete-button');
deleteElement.addEventListener('click', function (evt) {
  const elementItem = evt.target.closest('.element');
  elementItem.remove();
  }); 
}

// закрытие картинки
function popupCloseImg() {
  popupClose(popupImageOpen);
}
popupImageClose.addEventListener('click', popupCloseImg);

// колбэк очищения полей формы добавления карточки
function clearValueCard () {
  cardTitle.value = '';
  cardLink.value = '';
};

// отправка формы добавления карточки
function formSubmitAddCard(evt) {
  evt.preventDefault();
  addCard(cardTitle.value, cardLink.value);
  popupClose(popupAddCard);
}

// передача данных из формы добавления карточки
formAddCard.addEventListener('submit', formSubmitAddCard);

// открытие попапа добавления новой карточки
function popupOpenAddCard(){
  popupOpen(popupAddCard, clearValueCard)
}
addButton.addEventListener('click', popupOpenAddCard);

// закрытие попапа добавления новой карточки
function popupCloseAddCard(){
  popupClose(popupAddCard);
}
closeAddCard.addEventListener('click', popupCloseAddCard);