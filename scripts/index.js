const popup = document.querySelector('.popup'); //форма попап
const popupCloseButton = document.querySelector('.popup__close');//кнопка закрыть
const editbutton = document.querySelector('.profile__edit-button');//кнопка редактировать карандаш
const form = document.querySelector('.popup__form');//форма с полями
const profileName = document.querySelector('.profile__name');//имя профиля
const profileAbout = document.querySelector('.profile__about');// о себе в профиле
const popupInputName = document.querySelector('.popup__input_info_name');//инпут имя
const popupInputAbout = document.querySelector('.popup__input_info_about');//инпут о себе
//новое:
const popupEdit = document.querySelector('.popup_type_edit');//попап редактировать имя, о себе
const popupAdd = document.querySelector('.popup_type_add');//попап добавить карточку
const addButton = document.querySelector('.profile__add-button');//кнопка добавить +
const popupInputTitle = document.querySelector('.popup__input_info_title');
const popupInputLink = document.querySelector('.popup__input_info_link');
const elementTitle = document.querySelector('.element__title');
const popupEditClose = document.querySelector('.popup__close-edit');
const popupAddClose = document.querySelector('.popup__close-add');
//const formEdit = document.querySelector('popup__form-edit');
const formAdd = document.querySelector('popup__form-add');

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
}//при открытии попапа добавляется класс

//Функция закрытия попапа
function closePopup() {
    popup.classList.remove('popup_opened');
}//при закрытии формы класс удаляется




//Функция записи полей импута такое же как и в полях name и about
function  inputNameForm() {
    openPopup(popupEdit);//добавила аргумент
    popupInputName.value = profileName.textContent;
    popupInputAbout.value = profileAbout.textContent;
}

//Функция сохранения формы 
function submitForm(event) {
    event.preventDefault();//отменяем стандартное действие, страница не перезагрузиться при нажатии кнопки
    profileName.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopup();
}





//Функция записи полей импута такое же как и в полях title и link
function inputTitleForm() {
    openPopup(popupAdd);
    popupInputTitle.value = elementTitle.textContent;
       //добавить ссылку в поле импут
}


//Функция coхранения создания новой карточки
function submitFormAdd(event) {
    event.preventDefault();

    closePopup();//не работает
}

popupCloseButton.addEventListener('click', closePopup);
editbutton.addEventListener('click', inputNameForm);
form.addEventListener('submit', submitForm);

//новое:
addButton.addEventListener('click', inputTitleForm);


const template = document.querySelector('.template').content; //получаем доступ к тегу template
const elementCard = document.querySelector('.elements');//добавили список ul для карточек из html в DOM

/*
//Функция которая клонирует карточку element и добавляет name и link из массива initialCards
function renderElement(item) {
    const element = template.querySelector('.element').cloneNode(true);  //из тега template получаем карточку и клонируем
    element.querySelector('.element__title').textContent = item.name;   //текст заголовка карточки=значению name из объекта массива initialCards
    element.querySelector('.element__photo').src = item.link;   //ссылка = значению link из объекта массива initialCards
    elementCard.prepend(element);   //в список ul добавляем в начало элементы   
}

initialCards.forEach(renderElement);//перебираем все элементы массива и на каждом элементе массива применяем функцию()*/

//Функция создания новой карточки
function createCard(item) {
    const element = template.querySelector('.element').cloneNode(true);  //из тега template получаем карточку и клонируем
    element.querySelector('.element__title').textContent = item.name;   //текст заголовка карточки=значению name из объекта массива initialCards
    element.querySelector('.element__photo').src = item.link;
    return element;
}

//Функция добавления новой карточки 
function prependCard(item) {
    const element = createCard(item);
    elementCard.prepend(element);
}

initialCards.forEach(prependCard);