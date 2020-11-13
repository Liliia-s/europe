'use strict';

var siteHeader = document.querySelector('.site-header__wrapper-menu');
var buttonMenu = document.querySelector('.site-header__button-menu');
var menu = document.querySelector('.site-header__nav');
var countriesList = document.querySelector('.countries__name-list');
var countriesTabs = document.querySelectorAll('.countries__description-item');
var countriesDescList = document.querySelector('countries__description-list');

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

var hideCoutries = function (tabs) {
  tabs.forEach(function (element) {
    element.classList.add('countries__description-item--hide');
  });
};

hideCoutries(countriesTabs);

var onCountryTabClick = function (evt) {
  if (evt.target.matches(('.countries__name-link') || ('.countries__name-item'))) {
    console.log('привет');
    // var id = evt.target.getAttribute('href').replace('#', '');
    // countriesDescList.getElementById(id).classList.add('countries__description-item--show');
  }
};

// var createIndexForTabs = function (tabs) {
//   tabs.forEach(function (element, index) {
//     element.dataset.index = index;
//   });
// };

// createIndexForTabs(countriesTabs);

countriesList.addEventListener('click', onCountryTabClick);
