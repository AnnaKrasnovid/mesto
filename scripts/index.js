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
const popupPhotoClose = document.querySelector('.popup-photo__close');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImg = document.querySelector('.popup-photo__img');

const closePopupList = Array.from(document.querySelectorAll('.popup'));

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

//Функция создания карточки
function createCard(item) {
  const element = template.querySelector('.element').cloneNode(true);
  const photo = element.querySelector('.element__photo');
  const title = element.querySelector('.element__title');
  
  photo.src = item.link;
  title.textContent = item.name; 
  photo.setAttribute('alt', item.name);

  liked(element);
  deleteCard(element);
  photo.addEventListener('click', () => openPopupPhoto(item));
  
  return element;
}

//Увеличение фотографии popup-photo
function openPopupPhoto(item) {
  popupPhotoImg.src = item.link;
  figcaptionPhoto.textContent = item.name;
  popupPhotoImg.setAttribute('alt', item.name);
  openPopup(popupPhoto);
}

//Функция сохранения формы 
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

//Функция добавления лайка
function liked(element) {  
  element.querySelector('.element__like').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like_active');
  })
}

//Функция удаления карточки
function deleteCard(element) { 
  element.querySelector('.element__delete-button').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })
}

//Функция добавления новой карточки в DOM
function prependCard(item) {
  const element = createCard(item);
  elementCard.prepend(element);
}

//для массива применяем метод forEach и добавляем карточки в дом
initialCards.forEach(prependCard);

//Функция закрытия попапа нажатием на overlay
function closePopupOverlays(event) {
  const openPopup = document.querySelector('.popup_opened');  
  if (event.target.classList.contains('popup') === true)
    closePopup(openPopup);
 }

//Перебираем массив попапов и каждому добавляем слушатель
closePopupList.forEach((popup) => {
  popup.addEventListener('mouseup', closePopupOverlays)
});

//Функция закрытия попапа Escape
function closePopupEscape(event){
  const openPopup = document.querySelector('.popup_opened')
  if (event.key === "Escape") {
    closePopup(openPopup)
  }
}

document.addEventListener('keydown', closePopupEscape);
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

