(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._inputErrorClass=e.inputErrorClass,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(t){return e._handleSubmit(t)})),this._form.addEventListener("input",(function(){return e._setSubmitButtonType()})),this._inputs.forEach((function(t){t.addEventListener("input",(function(){return e._handleFieldValidation(t)}))})),this._setSubmitButtonType()}},{key:"_setSubmitButtonType",value:function(){this._button.disabled=!this._form.checkValidity(),this._button.classList.toggle(this._inactiveButtonClass,!this._form.checkValidity())}},{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_handleFieldValidation",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonType(),this._inputs.forEach((function(t){e._hideInputError(t)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i){var u=o.handleDeleteIconClick,a=o.putLike,c=o.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._ownerId=t.owner._id,this._likes=t.likes,this._userId=i,this._likesId=t.likes._id,this._cardSelector=n,this._handleCardClick=r,this._handleDeleteIconClick=u,this._putLike=a,this._deleteLike=c}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setliked",value:function(){this._buttonLike.classList.contains("element__like_active")?(this._buttonLike.classList.remove("element__like_active"),this._deleteLike(this._likesId)):(this._buttonLike.classList.add("element__like_active"),this._putLike(this._likesId))}},{key:"counter",value:function(e){this._countLike.textContent=e.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){return e._setliked()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){return e._handleDeleteIconClick(e)})),this._photo.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name,this._buttonLike=this._element.querySelector(".element__like"),this._countLike=this._element.querySelector(".element__like-counter"),this._photo=this._element.querySelector(".element__photo"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._photo.alt=this._name,this._photo.src=this._link,this._countLike.textContent=this._likes.length,this._setEventListeners(),this._userId!==this._ownerId&&this._deleteButton.remove(),this._likes.forEach((function(t){t._id===e._userId&&e._buttonLike.classList.add("element__like_active")})),this._element}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlaysClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mouseup",(function(t){return e._handleOverlaysClose(t)})),this._popup.querySelector(".popup__close").addEventListener("click",(function(t){return e.close(t)}))}}])&&o(t.prototype,n),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhoto=t._popup.querySelector(".popup-photo__img"),t._popupFigcaption=t._popup.querySelector(".popup-photo__figcaption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupPhoto.src=t,this._popupPhoto.alt=e,this._popupFigcaption.textContent=e,c(p(u.prototype),"open",this).call(this)}}])&&a(t.prototype,n),u}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputsList=Array.from(n._form.querySelectorAll(".popup__input")),n._buttonSubmit=n._popup.querySelector(".popup__button"),n._buttonSave=n._buttonSubmit.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputsList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;y(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){this._form.reset(),y(k(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this._buttonSave}}])&&d(t.prototype,n),u}(i);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;E(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}}])&&w(t.prototype,n),u}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.nameUser,r=t.aboutUser;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=n,this._aboutUser=r,this._avatarUser=document.querySelector(".profile__avatar")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,about:this._aboutUser.textContent}}},{key:"setUserInfo",value:function(e){this._nameUser.textContent=e.name,this._aboutUser.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatarUser.src=e.avatar}}])&&I(t.prototype,n),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&U(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B,x=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._responseStatus)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._responseStatus)}},{key:"setProfileInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._responseStatus)}},{key:"setNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then(this._responseStatus)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._responseStatus)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._responseStatus)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._responseStatus)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._responseStatus)}},{key:"_responseStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&R(t.prototype,n),e}(),A=document.querySelector(".popup__form-edit"),D=document.querySelector(".popup__form-add"),V=document.querySelector(".popup__form-update"),F=document.querySelector(".popup__input_info_name"),N=document.querySelector(".popup__input_info_about"),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_type_edit"),z=document.querySelector(".popup_type_add"),$=document.querySelector(".popup_type_confirm"),G=document.querySelector(".popup_type_profile-update"),K=document.querySelector(".profile__name"),Q=document.querySelector(".profile__about"),W=document.querySelector(".elements"),X=document.querySelector(".popup-photo"),Y=document.querySelector(".profile__avatar-button"),Z={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled"};function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=new t(Z,D);te.enableValidation();var ne=new t(Z,A);ne.enableValidation(),new t(Z,V).enableValidation();var re=new h(X);re.setEventListeners();var oe=new q({nameUser:K,aboutUser:Q}),ie=new j($),ue=new T({renderer:function(e){var t=se(e);ue.addItem(t)}},W),ae=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-32",headers:{authorization:"894bd372-66b3-459f-9fd3-803617b1d7d0","Content-Type":"application/json"}});function ce(e,t){re.open(e,t)}function se(e){var t=new r(e,".template",ce,{handleDeleteIconClick:function(t){ie.open(),ie.setSubmitAction((function(){ae.removeCard(e).then((function(e){t.deleteCard(e),ie.close()})).catch((function(e){console.log(e)}))}))},putLike:function(){ae.putLike(e).then((function(e){t.counter(e),console.log(e)})).catch((function(e){console.log(e)}))},deleteLike:function(){ae.deleteLike(e).then((function(e){t.counter(e),console.log(e)})).catch((function(e){console.log(e)}))}},B);return t.generateCard()}Promise.all([ae.getProfileInfo(),ae.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];oe.setUserInfo(o),oe.setAvatar(o),B=o._id,ue.renderItems(i)})).catch((function(e){console.log(e)}));var le=new S(z,{submitForm:function(e){le.renderLoading(!0),ae.setNewCard(e).then((function(e){var t=se(e);ue.addItem(t),console.log(e),le.close()})).catch((function(e){console.log(e)})).finally((function(){le.renderLoading(!1)}))}}),fe=new S(M,{submitForm:function(e){fe.renderLoading(!0),ae.setProfileInfo(e).then((function(e){oe.setUserInfo(e),fe.close(),console.log(e)})).catch((function(e){console.log(e)})).finally((function(){fe.renderLoading(!1)}))}}),pe=new S(G,{submitForm:function(e){pe.renderLoading(!0),ae.setUserAvatar(e).then((function(e){console.log(e),oe.setAvatar(e),pe.close()})).catch((function(e){console.log(e)})).finally((function(){pe.renderLoading(!1)}))}});J.addEventListener("click",(function(){fe.open(),ne.resetValidation();var e=oe.getUserInfo();F.value=e.name,N.value=e.about})),H.addEventListener("click",(function(){le.open(),te.resetValidation()})),Y.addEventListener("click",(function(){pe.open()})),le.setEventListeners(),fe.setEventListeners(),pe.setEventListeners(),ie.setEventListeners()})();