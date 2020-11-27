'use strict';

var siteHeader = document.querySelector('.site-header__wrapper-menu');
var buttonMenu = document.querySelector('.site-header__button-menu');
var menu = document.querySelector('.site-header__nav');

var hideMenu = function () {
  siteHeader.classList.toggle('site-header__wrapper-menu--indent');
  buttonMenu.classList.add('site-header__button-menu--open');
  menu.classList.toggle('site-header__nav--hide');
};

var onButtonMenuClick = function () {
  hideMenu();
  buttonMenu.classList.toggle('site-header__button-menu--close');
};

buttonMenu.addEventListener('click', onButtonMenuClick);
hideMenu();
