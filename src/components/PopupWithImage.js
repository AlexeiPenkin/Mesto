import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(text, link) {
    const image = this._popup.querySelector(".popup-image__image");
    const caption = this._popup.querySelector(".popup-image__title");

    image.src = link;
    caption.textContent = text;

    super.open();
  }
}
