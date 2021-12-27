import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';

import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupConfirm} from '../components/PopupConfirm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import {Api} from '../components/Api.js';

import {
  formEdit,
  formAdd,
  formAvatar,
  popupInputName,
  popupInputAbout,
  editbutton,
  addButton,
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

let userId = null;

const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorformAvatar = new FormValidator(config, formAvatar);
formValidatorformAvatar.enableValidation();

const popupImage = new PopupWithImage(popupPhoto);
popupImage.setEventListeners();

const userInfoProfile = new UserInfo({nameUser: profileName, aboutUser: profileAbout});

const popupWithConfirm = new PopupConfirm(popupConfirmDelete);

const sectionCard = new Section({ 
  renderer: (item) => {  
    const cardItem = createCard(item);
    sectionCard.addItem(cardItem);
  }
},
elementCard);

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
  userId = res._id;
  //console.log(res)  
  //console.log(userId)
})
.catch(err => {console.log(err)})

function handleCardClick (name, link) {
  popupImage.open(name, link)
}

function createCard(data) {
  const card = new Card (data, '.template', handleCardClick, {

    handleDeleteIconClick: (card) => {
      popupWithConfirm.open();
      popupWithConfirm.setSubmitAction(() => {       
        api.removeCard(data)
        .then((res) => {
          card.deleteCard(res);          
          popupWithConfirm.close()
        })        
        .catch(err => {console.log(err)});
      })
    },

    putLike: () =>{
      api.putLike(data)
      .then((data) => {
        card.counter(data)       
        console.log(data)            
      })
     .catch(err => {console.log(err)});
    },

    deleteLike: () => {
      api.deleteLike(data)
      .then((data) => {
        card.counter(data)
        console.log(data)            
      })
     .catch(err => {console.log(err)});
    }

  }, userId)
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithFormAdd = new PopupWithForm(popupAdd, {
  submitForm: (data) => {
    popupWithFormAdd.renderLoading(true);
    api.setNewCard(data)
    .then((res) => {
      const cardItem = createCard(res);
      sectionCard.addItem(cardItem);
      console.log(res)
      popupWithFormAdd.close()
    })
    .catch(err => {console.log(err)})
    .finally(() => {
      popupWithFormAdd.renderLoading(false)
    }) 
  }
})

const popupWithFormEdit = new PopupWithForm(popupEdit, {
  submitForm: (data) => {
    popupWithFormEdit.renderLoading(true);
    api.setProfileInfo(data)
    .then((res) => {
      userInfoProfile.setUserInfo(res);
      popupWithFormEdit.close()
      console.log(res)
    })
    .catch(err => {console.log(err)})    
    .finally(() => {
      popupWithFormEdit.renderLoading(false)
    }) 
  }}
)

const popupWithFormProfileUpdate = new PopupWithForm(popupProfileUpdate, {
  submitForm: (data) => { 
    popupWithFormProfileUpdate.renderLoading(true);
    api.setUserAvatar(data)
    .then((res) => {
      console.log(res)
      userInfoProfile.setAvatar(res)
      popupWithFormProfileUpdate.close()
    })
    .catch(err => {console.log(err)})
    .finally(() => {
      popupWithFormProfileUpdate.renderLoading(false)
    })     
  }
});

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

profileAvatar.addEventListener('click', () => {
  popupWithFormProfileUpdate.open();  
});

popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormProfileUpdate.setEventListeners();
popupWithConfirm.setEventListeners();