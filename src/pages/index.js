import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';

import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupConfirm} from '../components/PopupConfirm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import {Api} from '../components/Api.js';

import {//initialCards,
  formEdit,
  formAdd,
  formpopupProfileUpdate,
  popupInputName,
  popupInputAbout,
  editbutton,
  addButton,
  profileUpdate,
  popupEdit,
  popupAdd,
  popupConfirmDelete,
  popupProfileUpdate,
  profileName,
  profileAbout,
  elementCard,
  popupPhoto,
  profileAvatar,
  config
} from '../utils/constants.js'

const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorProfileUpdate = new FormValidator(config, formpopupProfileUpdate);
formValidatorProfileUpdate.enableValidation();

const popupImage = new PopupWithImage(popupPhoto);
popupImage.setEventListeners();

const userInfoProfile = new UserInfo({nameUser: profileName, aboutUser: profileAbout, avatarUser: profileAvatar});

const sectionCard = new Section({ 
  renderer: (item) => {  
    const cardItem = createCard(item);
    sectionCard.addItem(cardItem);
  }
},
elementCard);

function handleCardClick (name, link) {
  popupImage.open(name, link)
}

function createCard(item) {
  const card = new Card ({name: item.name, link: item.link}, '.template', handleCardClick, handleDeleteClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
  headers: {
    authorization: '894bd372-66b3-459f-9fd3-803617b1d7d0',
    'Content-Type': 'application/json'
  }
})
//карточки с сервера
api.getInitialCards()
.then((res) => {
  sectionCard.renderItems(res);
  console.log(res)
})
.catch(err => {console.log(err)});
//инфо о пользователе с сервера
api.getProfileInfo()
.then((res) => {
  userInfoProfile.setUserInfo(res) 
  userInfoProfile.setAvatar(res)
  console.log(res)
})
.catch(err => {console.log(err)});

const popupWithFormAdd = new PopupWithForm(popupAdd, {
  submitForm: (data) => {
    api.setNewCard(data)
    .then((res) => {
      const cardItem = createCard({name: data.title, link: data.link});
      sectionCard.addItem(cardItem);
      console.log(res)
      popupWithFormAdd.close()
    })
    .catch(err => {console.log(err)});
  }
});
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm(popupEdit, {
  submitForm: (data) => {
    api.setProfileData(data)
    .then((res) => {
      userInfoProfile.setUserInfo(res);
      console.log(res)
      popupWithFormEdit.close()
    })
    .catch(err => {console.log(err)});
    }
});
popupWithFormEdit.setEventListeners();

const popupWithFormProfileUpdate = new PopupWithForm(popupProfileUpdate, {
  submitForm: (data) => {  
    api.setUserAvatar(data)
    .then((res) => {
      console.log(res)
      userInfoProfile.setAvatar(res)
      popupWithFormProfileUpdate.close()
    })
    .catch(err => {console.log(err)});
  }
});
popupWithFormProfileUpdate.setEventListeners();


const popupWithConfirm = new PopupConfirm(popupConfirmDelete, {
  submitForm: (data) => {   
  }
})
popupWithConfirm.setEventListeners();

function handleDeleteClick() {
  popupWithConfirm.open() 
}

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

profileUpdate.addEventListener('click', () => {
  popupWithFormProfileUpdate.open();  
});