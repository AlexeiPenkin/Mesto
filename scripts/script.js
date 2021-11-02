const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const profile = document.querySelector('profile');
const navButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__heading');
let profileProfession = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__profile-edit-form');
let nameInput = formElement.querySelector('.popup__form-name');
let jobInput = formElement.querySelector('.popup__form-job');


function togglePopup() {
    popupElement.classList.toggle('hidden');
}

function openPopup() {
    popupElement.classList.remove('hidden');
    
    nameInput.value = profileName.textContent('popup__form-name');
   
    jobInput.value = profileName.textContent('popup__form-job');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    // Вставьте новые значения с помощью textContent
    
    let jobInput = formElement.querySelector('.popup__form-job');

    let nameInput = formElement.querySelector('.popup__form-name');
    
    jobInput.value = profileName.textContent('popup__form-job');

    nameInput.value = profileName.textContent('popup__form-name');

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

// profile.addEventListener('click', () => { debugger }, true);
popupElement.classList.toggle('hidden');


