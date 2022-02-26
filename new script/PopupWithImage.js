export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)

    this._popupImageSelector = '.popup-image__image';
    this._popupImage = this._popup.querySelector(this._popupImageSelector);
    this._popupImageTitleSelector = '.popup-image__title';
    this._popupImageTitle = this._popup.querySelector(this._popupImageTitle);
  }

  open({name, src}) {
    super.open();

    this._popupImageTitle.textContent = name;
    this._popupImage.src = src;
    this._popupImage.alt = ('Фотография' + ': ' + name);
  }
}