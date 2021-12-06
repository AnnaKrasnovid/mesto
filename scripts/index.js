import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';
import {Section} from './Section.js'

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

const editbutton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const elementCard = document.querySelector('.elements');

const popupPhoto = document.querySelector('.popup-photo');

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

const popupImage = new PopupWithImage(popupPhoto);
popupImage.setEventListeners();

function handleCardClick (name, link) {
  popupImage.open(name, link)
}

const sectionCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item, '.template', handleCardClick);
    const cardElement = card.generateCard();
    sectionCard.addItem(cardElement);
  }
},
elementCard);
sectionCard.renderItems();

editbutton.addEventListener('click', () => {
  popupWithFormEdit.open();
  formValidatorEdit.resetValidation();
  popupInputName.value = userInfoProfile.getUserInfo().name;// profileName.textContent;
  popupInputAbout.value = userInfoProfile.getUserInfo().about; //profileAbout.textContent;
});

addButton.addEventListener('click', () => {
  popupWithFormAdd.open();
  formValidatorAdd.resetValidation();
});

const popupWithFormAdd = new PopupWithForm(popupAdd, {
  submitForm: () => {
  const name = popupInputTitle.value;
  const link = popupInputLink.value;
  const item = {
    name: name,
    link: link
  }  
  const card = new Card (item, '.template', handleCardClick);
  const cardElement = card.generateCard();
  sectionCard.addItem(cardElement);  
  popupWithFormAdd.close(item);
  }
});
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm(popupEdit, {
  submitForm: (data) => {
    userInfoProfile.setUserInfo(data)
    popupWithFormEdit.close();
  }
});
popupWithFormEdit.setEventListeners();

const userInfoProfile = new UserInfo({nameUser: profileName, aboutUser: profileAbout});

