export class Card {
  constructor({name, link}, cardSelector, handleCardClick, handleDeleteClick){
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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
   // this._element.querySelector('.element__like').addEventListener('click', (event) => this._liked(event));
    this._element.querySelector('.element__like').addEventListener('click', () => {this._countLike()});
    this._element.querySelector('.element__delete-button').addEventListener('click', () => this._handleDeleteClick());
    this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  _countLike(event) {
    let count;
    if(this._element.classList.contains('element__like_active')){
      this._element.classList.remove('element__like_active')
      count -= 1
    } else {
      this._element.classList.add('element__like_active')
      count += 1
    }    
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


