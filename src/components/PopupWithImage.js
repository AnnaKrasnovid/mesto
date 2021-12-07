import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPhoto = this._popup.querySelector('.popup-photo__img');
    this._popupFigcaption = this._popup.querySelector('.popup-photo__figcaption');
  }

  open(name, link) {
    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    this._popupFigcaption.textContent = name;
    super.open()
  }
}




