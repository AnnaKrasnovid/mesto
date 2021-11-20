import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

const initialCards = [
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

const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');

const popupInputName = document.querySelector('.popup__input_info_name');
const popupInputAbout = document.querySelector('.popup__input_info_about');

const popupInputTitle = document.querySelector('.popup__input_info_title');
const popupInputLink = document.querySelector('.popup__input_info_link');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');
const popupPhotoClose = document.querySelector('.popup-photo__close');

const editbutton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const elementCard = document.querySelector('.elements');

const closePopupList = Array.from(document.querySelectorAll('.popup'));
const popupPhoto = document.querySelector('.popup-photo');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);  
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

//Функция закрытия попапа нажатием на overlay
function closePopupOverlays(event) {
  if (event.target.classList.contains('popup'))
    closePopup(event.target);
}

function closePopupEscape(event){
  if (event.key === "Escape") {
    const openPopup = document.querySelector('.popup_opened')
    closePopup(openPopup)
  }
}

function  inputNameForm() {
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileAbout.textContent;
  formValidatorEdit.resetValidation();
  openPopup(popupEdit);
}

function submitFormEdit(event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileAbout.textContent = popupInputAbout.value;  
  closePopup(popupEdit);
}

function submitFormAdd(event) {
  event.preventDefault();

  const name = popupInputTitle.value;
  const link = popupInputLink.value;
  const item = {
    name: name,
    link: link
  }

  createCard(item);
  event.target.reset();
  closePopup(popupAdd);
}

function resetInputFormAdd() {
  openPopup(popupAdd);
  formValidatorAdd.resetValidation();
  formAdd.reset();
}

//Перебираем массив попапов и каждому добавляем слушатель
closePopupList.forEach((popup) => {
  popup.addEventListener('mouseup', closePopupOverlays)
});

formAdd.addEventListener('submit', submitFormAdd);
formEdit.addEventListener('submit', submitFormEdit);
editbutton.addEventListener('click', inputNameForm);
addButton.addEventListener('click', resetInputFormAdd);
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));
popupEditClose.addEventListener('click', () => closePopup(popupEdit));

//для массива применяем метод forEach и добавляем карточки в дом
initialCards.forEach(item => {
  createCard(item);
});

function createCard(item) {
  elementCard.prepend(getCard(item))
}

function getCard(item) {
  const card = new Card(item, '.template', openPopup);
  const cardElement = card.generateCard(); 
  return cardElement;
} 

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
}

const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();



