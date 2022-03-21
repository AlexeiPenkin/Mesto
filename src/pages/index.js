import { api, Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Popup } from '../components/Popup.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
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
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      })
      section.addItem(card)
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
})