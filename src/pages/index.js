import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';

import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js'

import {initialCards,
  formEdit,
  formAdd,
  popupInputName,
  popupInputAbout,
  editbutton,
  addButton,
  popupEdit,
  popupAdd,
  profileName,
  profileAbout,
  elementCard,
  popupPhoto,
  config
} from '../utils/constants.js'

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
    const cardItem = createCard(item);
    sectionCard.addItem(cardItem);
  }
},
elementCard);
sectionCard.renderItems();

editbutton.addEventListener('click', () => {
  popupWithFormEdit.open();
  formValidatorEdit.resetValidation();
  
  const infoProfile = userInfoProfile.getUserInfo();
  popupInputName.value = infoProfile.name;
  popupInputAbout.value = infoProfile.about;
});

addButton.addEventListener('click', () => {
  popupWithFormAdd.open();
  formValidatorAdd.resetValidation();
});

function createCard(item) {
  const card = new Card (item, '.template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithFormAdd = new PopupWithForm(popupAdd, {
  submitForm: (data) => {
  const cardItem = createCard({name: data.title, link: data.link});
  sectionCard.addItem(cardItem);
  }
});
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm(popupEdit, {
  submitForm: (data) => {
    userInfoProfile.setUserInfo(data);
  }
});
popupWithFormEdit.setEventListeners();

const userInfoProfile = new UserInfo({nameUser: profileName, aboutUser: profileAbout});

