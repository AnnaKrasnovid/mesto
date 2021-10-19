const popup = document.querySelector('.popup'); 

const editbutton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');


const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');

const popupInputName = document.querySelector('.popup__input_info_name');
const popupInputAbout = document.querySelector('.popup__input_info_about');
const popupInputTitle = document.querySelector('.popup__input_info_title');
const popupInputLink = document.querySelector('.popup__input_info_link');

const template = document.querySelector('.template').content;
const elementCard = document.querySelector('.elements');




const figcaptionPhoto = document.querySelector('.popup-photo__figcaption');
const titleElement = document.querySelector('.element__title');

const popupPhotoClose = document.querySelector('.popup-photo__close');
const popupPhoto = document.querySelector('.popup-photo');
const elementPhoto = document.querySelector('.element__photo');
const photoBig = document.querySelector('.popup-photo__img');




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

//Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Функция записи полей импута такое же как и в полях name и about
function  inputNameForm() {
  openPopup(popupEdit);
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileAbout.textContent;
}

//Функция сохранения формы Edit
function submitFormEdit(event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileAbout.textContent = popupInputAbout.value;
  closePopup(popupEdit);
}

//Функция создания клона карточки
function createCard(item) {
  const element = template.querySelector('.element').cloneNode(true);  
  element.querySelector('.element__title').textContent = item.name;
  element.querySelector('.element__photo').src = item.link;
  element.querySelector('.element__like').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like_active');//лайк
  })
  element.querySelector('.element__delete-button').addEventListener('click', function(event) {
    event.target.closest('.element').remove();//удаление карточки
  })
  return element;
}

//Функция добавления новой карточки в DOM
function prependCard(item) {
  const element = createCard(item);
  elementCard.prepend(element);
}

initialCards.forEach(prependCard);//для массива применяем метод forEach и добавляем карточки в дом

function submitFormAdd(event) {
  event.preventDefault();
  const name = popupInputTitle.value;
  const link = popupInputLink.value;
  const item = {
    name: name,
    link: link
  }
  prependCard(item);
  event.target.reset();
  closePopup(popupAdd);
}

editbutton.addEventListener('click', inputNameForm);
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);
addButton.addEventListener('click', function() {
    openPopup(popupAdd);
});
popupEditClose.addEventListener('click', function() {
    closePopup(popupEdit)
});
popupAddClose.addEventListener('click', function() {
    closePopup(popupAdd)
});

popupPhotoClose.addEventListener('click', function() {
  closePopup(popupPhoto)
});



elementPhoto.addEventListener('click', function() {
  openPopup(popupPhoto)
})



