export class Card {
  constructor(data, cardSelector, handleCardClick){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', (event) => this._liked(event));
    this._element.querySelector('.element__delete-button').addEventListener('click', (event) => this._deleteCard(event));
    this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick(this._name, this._link));
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


