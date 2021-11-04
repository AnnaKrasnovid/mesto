const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
}

//Функция, которая находит все формы и перебирает их
function enableValidation(validationConfig) {
  //Находим все элементы формы, обращаемся к config который придет и выбираем ключ
  const forms = [...document.querySelectorAll(validationConfig.formSelector)];
  forms.forEach((form) => setFormListeners(form, validationConfig))
}

//Функция которая добавляет всем полям формы обработчики
function setFormListeners(form, config) {
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', () => setSubmitButtonType(form, config));
  const inputs = [...form.querySelectorAll(config.inputSelector)];

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => handleFieldValidation(inputElement, form, config))
  })

  setSubmitButtonType(form, config)
}

//проверка кнопки
function setSubmitButtonType(form, config){
  const button = form.querySelector(config.submitButtonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
}

//Функция остановки 
function handleSubmit(event) {
  event.preventDefault()
}

//Функция проверки валидности полей
function handleFieldValidation(input, form, config) {
  if(!input.validity.valid) {
    showInputError(input, form, config)
  } else {
    hideInputError(input, form, config)
  }    
}

//Функция, которая добавляет класс с ошибкой
function showInputError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

//Функция, которая удаляет класс с ошибкой
function hideInputError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

enableValidation(config);
