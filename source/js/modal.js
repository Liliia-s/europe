'use strict';

var KEY_CODE_ESC = 27;
var modalForm = document.querySelector('.modal--hide');
var buyLinks = document.querySelectorAll('.button__link--buy');
var overlay = document.querySelector('.overlay');
var btnClose = document.querySelector('.modal__button-close');
var phone = modalForm.querySelector('#text-tel-popup');
var mail = modalForm.querySelector('#text-email-popup');
var storageTel = '';
var storageEmail = '';

var hideElements = function () {
  modalForm.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
  document.body.classList.remove('overflow-hidden');
  document.body.removeAttribute('class');
};

var onBuyLinkClick = function (evt) {
  evt.preventDefault();
  modalForm.classList.add('modal--show');
  overlay.classList.add('overlay--show');
  document.body.classList.add('overflow-hidden');

  if (localStorage.getItem('mail') === true && localStorage.getItem('phone') === true) {
    phone.value = storageTel;
    mail.value = storageEmail;
  } else {
    phone.focus();
  }
};

buyLinks.forEach(function (link) {
  link.addEventListener('click', onBuyLinkClick);
});

var onBtnCloseClick = function (evt) {
  evt.preventDefault();
  hideElements();
};

var onOverlayClick = function (evt) {
  evt.preventDefault();
  hideElements();
};

var modalEscKeydown = function (evt) {
  if (evt.keyCode === KEY_CODE_ESC) {
    evt.preventDefault();
    if (modalForm.classList.contains('modal--show')) {
      hideElements();
    }
  }
};

btnClose.addEventListener('click', onBtnCloseClick);
overlay.addEventListener('click', onOverlayClick);
document.addEventListener('keydown', modalEscKeydown);

