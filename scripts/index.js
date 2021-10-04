const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editbutton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputAbout = document.querySelector('.popup__input_about');


//Функция открытия попапа
function openPopup() {
    popup.classList.add('popup_opened')
}

editbutton.addEventListener('click', openPopup);

//Функция закрытия попапа
function closePopup() {
    popup.classList.remove('popup_opened')
}

popupCloseButton.addEventListener('click', closePopup);

function  inputNameForm() {
    openPopup()
    popupInputName.value = profileName.textContent;
    popupInputAbout.value = profileAbout.textContent;
}

editbutton.addEventListener('click', inputNameForm);

//Функция сохранения формы 
function submitForm(event) {
    event.preventDefault();
    profileName.textContent = popupInputName.value;
    profileAbout.textContent = popupInputAbout.value;
    closePopup();
}

form.addEventListener('submit', submitForm);

//Функция закрытия попапа кликом мыши в любом месте, кроме самого окна попапа
function popupClickHandler(event) {
    if (event.target.classList.contains('popup')) {
        closePopup();
    }
}

popup.addEventListener('mouseup', popupClickHandler);


