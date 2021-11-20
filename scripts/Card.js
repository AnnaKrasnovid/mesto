const popupPhoto = document.querySelector('.popup-photo');

export class Card {
  constructor(data, cardSelector, openPopup){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
    return cardElement;
  }

  _liked(event) {  
    event.target.classList.toggle('element__like_active');    
  }
  
  _deleteCard(event) {    
    event.target.closest('.element').remove();
  }

  _openPopupPhoto() {
    popupPhoto.querySelector('.popup-photo__img').src = this._link;
    popupPhoto.querySelector('.popup-photo__figcaption').textContent = this._name;
    popupPhoto.querySelector('.popup-photo__img').alt = this._name;
    this._openPopup(popupPhoto);
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', (event) => this._liked(event));
    this._element.querySelector('.element__delete-button').addEventListener('click', (event) => this._deleteCard(event));
    this._element.querySelector('.element__photo').addEventListener('click', () => this._openPopupPhoto());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo').alt = this._name;
    this._setEventListeners();

    return this._element;
  }
} 


