<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
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
<<<<<<< HEAD
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
=======
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
=======
import { api, Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Popup } from '../components/Popup.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
<<<<<<< HEAD
import { api } from '../components/Api.js';
=======
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
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b

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
<<<<<<< HEAD
        name: res.title,
=======
        name: res.name,
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
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
=======
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
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
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
<<<<<<< HEAD
    data,
    handleCardClick,
    '#card-template',
=======
    data, 
    cardSelector, 
    () => {
      imagePopup.open(data.name, data.link)
    },
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
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
=======
<<<<<<< HEAD
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  return card.generateCard()
}
// добавляем карточку в разметку
const renderCard = (data, wrap) => {
<<<<<<< HEAD
=======
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
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
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
<<<<<<< HEAD
  profileAvatarSelector: '.profile__avatar'
=======
  profileAvatarSelector: '[name="url_avatar"]'
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
})