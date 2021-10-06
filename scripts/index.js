const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editbutton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupInputName = document.querySelector('.popup__input_info_name');
const popupInputAbout = document.querySelector('.popup__input_info_about');

//Функция открытия попапа
function openPopup() {
    popup.classList.add('popup_opened')
}

//Функция закрытия попапа
function closePopup() {
    popup.classList.remove('popup_opened')
}

//Функция записи полей импута такое же как и в полях name и about
function  inputNameForm() {
    openPopup()
    popupInputName.value = profileName.textContent;
    popupInputAbout.value = profileAbout.textContent;
}

//Функция сохранения формы 
function submitForm(event) {
    event.preventDefault();
    profileName.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopup();
}

popupCloseButton.addEventListener('click', closePopup);
editbutton.addEventListener('click', inputNameForm);
form.addEventListener('submit', submitForm);


