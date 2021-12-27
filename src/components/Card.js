export class Card {
  constructor(data, cardSelector, handleCardClick, {handleDeleteIconClick, putLike, deleteLike}, userId) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
    this._likesId = data.likes._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._putLike = putLike;
    this._deleteLike = deleteLike
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
    return cardElement;
  }
  
  deleteCard() {
    this._element.remove();
    this._element = null
  }

  _setliked() {     
    if (!this._buttonLike.classList.contains('element__like_active')) {
      this._buttonLike.classList.add('element__like_active');
      this._putLike(this._likesId);
    } else {
      this._buttonLike.classList.remove('element__like_active');
      this._deleteLike(this._likesId);
    }
  }

  counter(data) {
    this._countLike.textContent = data.likes.length
  }
  
  _setEventListeners() {    
    this._buttonLike.addEventListener('click', () => this._setliked());
    this._element.querySelector('.element__delete-button').addEventListener('click', () => this._handleDeleteIconClick(this));
    this._photo.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  generateCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector('.element__title').textContent = this._name;
    this._buttonLike = this._element.querySelector('.element__like')       
    this._countLike = this._element.querySelector('.element__like-counter');
    this._photo = this._element.querySelector('.element__photo');
    this._deleteButton = this._element.querySelector('.element__delete-button');
       
    this._photo.alt = this._name;
    this._photo.src = this._link;    
    this._countLike.textContent = this._likes.length
    this._setEventListeners();
    
    if (this._userId !== this._ownerId){
      this._deleteButton.remove()
    }
    
    this._likes.forEach(like => { 
      if (like._id === this._userId){
        this._buttonLike.classList.add('element__like_active');
      }       
    })    
    
    return this._element;
  }
} 

