export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formEdit = document.querySelector('.popup__form-edit');
export const formAdd = document.querySelector('.popup__form-add');
  
export const popupInputName = document.querySelector('.popup__input_info_name');
export const popupInputAbout = document.querySelector('.popup__input_info_about');
  
export const editbutton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
  
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
  
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
  
export const elementCard = document.querySelector('.elements');
  
export const popupPhoto = document.querySelector('.popup-photo');

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
}