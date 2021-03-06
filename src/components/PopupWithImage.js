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