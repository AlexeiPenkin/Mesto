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
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

let userId

// API ================================================================================== //

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
  popupProfileEditForm.loading(true);
  const { name, about, avatar } = data
  api.editProfile(data.name, data.about, data.avatar)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
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

// ФОРМА UpdateAvatar ============================================ //
const avatarPopup = new PopupWithForm('#popupUpdateAvatar', (data) => {
  avatarPopup.loading(true);
  const { avatar } = data
  api.updateAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);;
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
  // console.log(data)
  popupAddCardForm.loading(true);
  const { title, link } = data 
  api.addCard(title, link)
    .then((res) => {
      const card = createCard({
        name: title,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      })
      console.log(res)
      section.addItem(card)
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
  const card = new Card(data, handleCardClick,'#card-template',
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
  return card.generateCard()
}
// добавляем карточку в разметку
const renderCard = (data, cardList) => {
  const card = createCard(data);
  cardList.prepend(card);
}
// валидация формы AddCard
const addCardValidator = new FormValidator(formValidation, popupAddCardForm.form);
addCardValidator.enableValidation();
// определяем кнопку открытия формы AddCard
const addCardButton = document.querySelector('.profile__add-button');
// ставим сулшателя кнопке открытия AddCard
addCardButton.addEventListener('click', () => {
  // addCardValidator.resetValidation();
  popupAddCardForm.open();
})

const userInfo = new UserInfo({ 
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profileAvatarSelector: '.profile__avatar'
})