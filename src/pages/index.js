import { api, Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards } from '../utils/constants.js'; //closePopup, openPopup,
import { validationConfig } from '../utils/constants.js';
import '../pages/index.css';

let userId

api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about);

    userId = res._id
  })

api.getCards()
.then(cardList => {
  cardList.forEach(data => {
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

// const initialCards = [
//   {
//     name: "Сочи",
//     link: "https://images.unsplash.com/photo-1576096945991-8f93bc88e924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
//   },
//   {
//     name: "Санкт-Петербург",
//     link: "https://images.unsplash.com/photo-1603955129944-7f2dbff89b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     name: "Казань",
//     link: "https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhJTIwc2lnaHRzZWVpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     name: "Красноярский край",
//     link: "https://www.avtodispetcher.ru/wp-content/gallery/krasnoyarsky-krai/2.jpg",
//   },
//   {
//     name: "Владивосток",
//     link: "https://content.r9cdn.net/rimg/dimg/5a/24/84a52653-city-17546-173323f0b02.jpg?width=1200&height=630&crop=true",
//   },
//   {
//     name: "Архангельская область",
//     link: "https://sun9-12.userapi.com/impf/c851220/v851220531/104efb/ScYk7ynMvXU.jpg?size=1280x874&quality=96&sign=bab021682a9afacd0853d86a143a39ef&type=album",
//   },
// ];

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
const titleInputValue = editFormModalWindow.querySelector('.text_name');
// titleInputValue = inputName // '.popup__input_type_name' = '.text_name' //
const descriptionInputValue = editFormModalWindow.querySelector('.text_job');
// descriptionInputValue = inputJob // '.popup__input_type_description' = '.text_job'//
const cardNameInputValue = cardFormModalWindow.querySelector('.card_title');
// cardNameInputValue = inputCardName // '.popup__input_type_card-name' = '.card_title' //
const cardLinkInputValue = cardFormModalWindow.querySelector('.card_link');
// cardLinkInputValue = inputCardLink // '.popup__input_type_url' = '.card_link //

const cardSelector = '#card-template'

const editForm = editFormModalWindow.querySelector('.form')
const addCardForm = cardFormModalWindow.querySelector('.form')

const editFormValidator = new FormValidator(validationConfig, editForm);
const cardFormValidator = new FormValidator(validationConfig, addCardForm);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const handleProfileFormSubmit = (data) => {
  const { name, description } = data

  api.editProfile(name, description)
  .then(() => {
    userInfo.setUserInfo(name, description)
    editProfilePopup.close()
  })
};

const handleCardFormSubmit = (data) => {
  api.addCard(data['.card__name'], data.link)
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

const renderCard = (data, cardList) => { // line 89 (inidex.js-4) // wrap = cardList
  const card = createCard(data);
  cardList.prepend(card);
};

openEditFormButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo()
  titleInputValue.value = name;
  descriptionInputValue.value = job;
  addCardPopup.open()
});

openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  addCardPopup.open()
});

const section = new Section({items: initialCards, renderer: renderCard}, '.card-list')
const imagePopup = new PopupWithImage('.popup.popup-image')
const addCardPopup = new PopupWithForm('.popup.add-card', handleCardFormSubmit)
const editProfilePopup = new PopupWithForm('.popup.edit-profile', handleProfileFormSubmit)
const confirmPopup = new PopupWithForm('.popup_delete-confirm')
// const avatarPopup = new PopupWithForm('.update-avatar', () => { // примерный код обновления аватара
//   api.updateAvatar()
//   .then(res => {
//     userInfo.setUserInfo(res.name, res.abjout, res.avatar)
//     avatarPopup.close()
//   })
// })



imagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()
confirmPopup.setEventListeners()
// avatarPopup.setEventListeners()  // примерный код обновления аватара

section.renderItems()

const userInfo = new UserInfo({ 
  profileNameSelector: '.profile__name', 
  profileJobSelector: '.profile__job',
  // profileAvatarSelector: '...' // примерный код обновления аватара
})