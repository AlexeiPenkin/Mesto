<<<<<<< HEAD
import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)

      this._imageSelector = '.popup-image__image';
      this._image = this._popup.querySelector(this._imageSelector)
      
      this._imageTitlelSelector = '.popup-image__title';
      this._imageTitle = this._popup.querySelector(this._imageTitlelSelector)
  }

    open({ src, title }) {
      super.open();

      this._image.src = src;
      this._image.alt = title;
      this._imageTitle.textContent = title;
    }
}
=======
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
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
