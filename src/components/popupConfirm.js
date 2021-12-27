import {Popup} from './Popup.js';

export class PopupConfirm extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmitCallback()
    })    
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }
}