<<<<<<< HEAD
import {
  formValidation,
  initialCards, 
  profileEditButton,
  titleInputValue,
  descriptionInputValue,
  profileName,
  profileJob,
  avatarPopupButton,
  avatarInputValue,
  avatarImage
} from '../utils/constants.js'
import '../pages/index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
=======
import { api, Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Popup } from '../components/Popup.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
<<<<<<< HEAD
import { api } from '../components/Api.js';

let userId

// API ==================================================================== //

Promise.all([api.getCards(), api.getProfile()])
  .then(([cards, userData]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar)
    userId = userData._id

    cards.forEach(data => {
      const card = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      })
        section.addItem(card)
    })
  })
  .catch((err) => {
    console.log(err);
  })



// ФОРМА ProfileEdit ==================================================================== //

// создаем попап формы редактирования профиля ProfileEdit
const popupProfileEditForm = new PopupWithForm('#popupEditProfile', (data) => {
  // console.log('data', data)
  popupProfileEditForm.loading(true);
  const { name, about } = data
  api.editProfile(data.name, data.about)
    .then(() => {
      // userInfo.setUserInfo(data.name, data.about)
      profileName.textContent = name;
      profileJob.textContent = about;
      // console.log('name', data.name, 'about', data.about)
      popupProfileEditForm.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileEditForm.loading(false);
    })
});
popupProfileEditForm.setEventListeners();

const profileEditValidator = new FormValidator(formValidation, popupProfileEditForm.form);
profileEditValidator.enableValidation();

profileEditButton.addEventListener('click', () => {
  // const { name, about } = userInfo.getUserInfo(name, about)
  titleInputValue.value = profileName.textContent;
  descriptionInputValue.value = profileJob.textContent;
  popupProfileEditForm.open()
})



// ОТКРЫВАЕМ preview фото из зкарточки ================================================== //
const openPopupImage = new PopupWithImage('.popup-image')
openPopupImage.setEventListeners();



// СОЗДАЕМ новый экземпляр Section и размещаем начальный массив данных/карточек
const section = new Section({ items: [], renderer: renderCard }, '.card-list');
section.setItem();



// ПОДТВЕРЖДАЕМ удаление карточки ======================================================= //

const confirmPopup = new PopupWithForm('.popup_delete-confirm')
confirmPopup.setEventListeners();


 
// МЕНЯЕМ аватар ======================================================= //

const avatarPopup = new PopupWithForm('#popupUpdateAvatar', (data) => {
  // console.log('data', data)
  avatarPopup.loading(true);
  const { avatar } = data
  api.updateAvatar(data.avatar)
    .then(() => {
      // userInfo.setUserInfo(data.avatar)
      avatarImage.src = avatar;
      // console.log('avatar', data.avatar)
      avatarPopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.loading(false);
    })
});
avatarPopup.setEventListeners();

const updateAvatarValidator = new FormValidator(formValidation, avatarPopup.form);
updateAvatarValidator.enableValidation();

avatarPopupButton.addEventListener('click', () => {
  avatarInputValue.value = avatarImage.src
  avatarPopup.open();
})



// ФОРМА AddCard ================================================= //

const popupAddCardForm = new PopupWithForm('#popupAddCard', (data) => {
  // console.log('data', data)
  popupAddCardForm.loading(true);
  const { title, link } = data
  api.addCard(title, link)
    .then((res) => {
      const card = createCard({
        name: res.title,
=======
import { initialCards, validationConfig } from '../utils/constants.js';
import './index.css';

let userId;

api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    userId = res._id
  })

api.getCards()
.then(placeWrap => {
  placeWrap.forEach(data => {
    const card = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id
    });
    section.addItem(card);
  })
})

const placeWrap = document.querySelector('.card-list');
// placeWrap = cardList // '.place__list' = '.card-list' //
const editFormModalWindow = document.querySelector('.popup.edit-profile');
// editFormModalWindow = popupProfileEdit / '.popup_type_edit' = '.popup.edit-profile' //
const cardFormModalWindow = document.querySelector('.popup.add-card');
// cardFormModalWindow = popupAddCard // '.popup_type_new-card' = '.popup.add-card' //
const imageModalWindow = document.querySelector('.popup.popup-image'); 
// imageModalWindow = popupImageOpen // '.popup_type_image' = '.popup.popup-image' //
const openEditFormButton = document.querySelector('.profile__edit-button');
// openEditFormButton = profileEditButton //'.profile_-edit-button' = ".profile__edit-button" //
const openCardFormButton = document.querySelector('.profile__add-button');
// openCardFormButton = addCardButton // '.profile__add-button' = ".profile__add-button" //
const profileTitle = document.querySelector('.profile__name');
// profileTitle = profileName // '.profile__title' = ".profile__name" //
const profileDescription = document.querySelector('.profile__job');
// profileDescription = profileJob // '.profile__description' = ".profile__job" //
const titleInputValue = editFormModalWindow.querySelector('[name="text_name"]');
// titleInputValue = inputName // '.popup__input_type_name' = '.text_name' //
const descriptionInputValue = editFormModalWindow.querySelector('[name="text_job"]');
// descriptionInputValue = inputJob // '.popup__input_type_description' = '.text_job'//
const cardNameInputValue = cardFormModalWindow.querySelector('.card_title');
// cardNameInputValue = inputCardName // '.popup__input_type_card-name' = '.card_title' //
const cardLinkInputValue = cardFormModalWindow.querySelector('.card_link');
// cardLinkInputValue = inputCardLink // '.popup__input_type_url' = '.card_link //
const openAvatarFormButton = document.querySelector('.profile__avatar-update');

const cardSelector = '#card-template'

const editForm = editFormModalWindow.querySelector('.form')
const addCardForm = cardFormModalWindow.querySelector('.form')
const avatarUpdateForm = document.querySelector('.form')

const editFormValidator = new FormValidator(validationConfig, editForm);
const cardFormValidator = new FormValidator(validationConfig, addCardForm);
const avatarFormValidator = new FormValidator(validationConfig, avatarUpdateForm);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const handleProfileFormSubmit = (data) => {
  const { name, description } = data // about => description

  api.editProfile(name, about)
  .then(() => {
    userInfo.setUserInfo(name, description) // about => description
    editProfilePopup.close()
  })
};

const handleCardFormSubmit = (data) => {
  api.addCard(data['.card__name'], data.link) // удалить
    .then(res => {
      const card = createCard({
        name: res.name,
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      })
      section.addItem(card)
<<<<<<< HEAD
      // console.log('data', data)
      popupAddCardForm.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCardForm.loading(false);
    })
});
popupAddCardForm.setEventListeners();
// создаем карточку
const createCard = (data) => {
  const handleCardClick = openPopupImage.open.bind(openPopupImage);
  const card = new Card(
    data,
    handleCardClick,
    '#card-template',
=======
      addCardPopup.close()
    })
};

const createCard = (data) => {
  const card = new Card(
    data, 
    cardSelector, 
    () => {
      imagePopup.open(data.name, data.link)
    },
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
    (id) => {
      confirmPopup.open()
      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(res => {
            card.deleteCard()
            confirmPopup.close()
          })
      })
    },
    (id) => {
      if(card.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
      } else {
        api.addLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
      }
    },
  );
<<<<<<< HEAD
  return card.generateCard()
}
// добавляем карточку в разметку
const renderCard = (data, wrap) => {
  const card = createCard(data);
  wrap.prepend(card);
}
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

const userInfo = new UserInfo({ 
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profileAvatarSelector: '.profile__avatar'
=======
  return card.getView();
};

const renderCard = (data, wrap) => { // line 89 (inidex.js-4) // wrap = placeWrap ?
  const card = createCard(data);
  wrap.prepend(card);
};

openEditFormButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo()
  titleInputValue.value = name;
  descriptionInputValue.value = job;
  editProfilePopup.open()
});

openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  addCardPopup.open()
});

openAvatarFormButton.addEventListener('click', () => {
  avatarFormValidator.disableSubmitButton();
  avatarPopup.open()
});

const section = new Section({items: [], renderer: renderCard}, '.card-list')
const imagePopup = new PopupWithImage('.popup.popup-image')
const editProfilePopup = new PopupWithForm('.popup.edit-profile', handleProfileFormSubmit)
const addCardPopup = new PopupWithForm('.popup.add-card', handleCardFormSubmit)
const confirmPopup = new PopupWithForm('.popup_delete-confirm')
const avatarPopup = new PopupWithForm('.update-avatar', () => {
  api.updateAvatar()
    .then(res => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      avatarPopup.close()
    })
})

imagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()
confirmPopup.setEventListeners()
avatarPopup.setEventListeners()

section.renderItems()

const userInfo = new UserInfo({ 
  profileNameSelector: '.profile__name', 
  profileJobSelector: '.profile__job',
  profileAvatarSelector: '[name="url_avatar"]'
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
})