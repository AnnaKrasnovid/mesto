export class FormValidator {
  constructor(config, form){
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  enableValidation() {
    this._form.addEventListener('submit', (event) => this._handleSubmit(event));
    this._form.addEventListener('input', () => this._setSubmitButtonType());
  
    this._inputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => this._handleFieldValidation(inputElement))
    })
    
    this._setSubmitButtonType()
  }

  //Проверка кнопки
  _setSubmitButtonType() {
    const button = this._form.querySelector(this._submitButtonSelector);
    button.disabled = !this._form.checkValidity();
    button.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
  }

  //Функция остановки 
  _handleSubmit(event) {
    event.preventDefault()
  }

  //Функция проверки валидности полей
  _handleFieldValidation(input) {
    if(!input.validity.valid) {
      this._showInputError(input)      
    } else {
      this._hideInputError(input)
    }    
  }

  //Функция, которая добавляет класс с ошибкой
  _showInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }

  //Функция, которая удаляет класс с ошибкой
  _hideInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  resetValidation() {
    this._setSubmitButtonType();
    this._inputs.forEach((input) => {
    this._hideInputError(input);
    });
  }
}

