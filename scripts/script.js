const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const profile = document.querySelector('profile');
const navButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__heading');
let profileProfession = document.querySelector('.profile__text');


function togglePopup() {
    popupElement.classList.toggle('hidden');
}

function openPopup() {
    popupElement.classList.remove('hidden');
}

function showProfile() {
    profileName.classList.add('profile__heading');
   
    profileProfession.classList.add('profile__text');
    
    console.log('profileName');
    
    console.log('profileProfession');
    
    showProfile();
}

function closePopup() {
    popupElement.classList.add('hidden');
}
navButton.addEventListener('click', openPopup)

closeButton.addEventListener('click', closePopup)

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
        closePopup();
    }
});

// profile.addEventListener('click', () => { debugger }, true);
popupElement.classList.toggle('hidden');


