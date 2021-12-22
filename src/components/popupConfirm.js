import {Popup} from './Popup.js';

export class PopupConfirm extends Popup {
  constructor(popup,{submitForm}) {
    super(popup);
    this._submitForm = submitForm;
  }

  open(){
    super.open()
  }
}