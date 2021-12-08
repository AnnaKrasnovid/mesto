import {Popup} from './Popup.js';

export class PopupWithForm extends Popup{
  constructor(popup, {submitForm}){
    super(popup);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues(){
    const inputValue = {}
    this._inputsList.forEach((input) => {
      inputValue[input.name] = input.value;
    });
     
    return inputValue;    
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
      this. close();
    });    
  }

  close() {
    this._form.reset();
    super.close();
  }
}

