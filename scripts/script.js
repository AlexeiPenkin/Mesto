const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const profile = document.querySelector('profile');
const navButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__heading');
let profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.input-form__name');
let jobInput = formElement.querySelector('.input-form__job');


function openPopup() {
    popupElement.classList.remove('hidden');
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 

function closePopup() {
    popupElement.classList.add('hidden');
}
navButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
document.addEventListener('keyup', (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});