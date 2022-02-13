// Функция открытия модального окна (openPopup) //
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

// Функция закрытия модального окна (closePopup) //
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

// Функция закрытия модального окна нажатием на Esc //
export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened")
    closePopup(openedPopup);
  }
}