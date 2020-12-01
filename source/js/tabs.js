'use strict';

var countriesList = document.querySelector('.countries__name-list');
var countriesName = countriesList.querySelectorAll('.countries__name-link');
var countriesTabs = document.querySelectorAll('.countries__description-item');
var countriesDescList = document.querySelector('.countries__description-list');
var countriesCards = countriesDescList.querySelectorAll('.countries__description-item');
var placesList = document.querySelector('.places__list');
var classShow = 'countries__description-item--show';
var classOrange = 'countries__name-link--orange';
var idCountry = 'data-country';
var idCardCountry = 'id';

var hideCoutries = function (tab) {
  tab.forEach(function (element) {
    element.classList.add('countries__description-item--hide');
  });
};

hideCoutries(countriesTabs);

var hideActiveTab = function () {
  var countryNameOrange = countriesList.querySelector('.countries__name-link--orange');

  if (countryNameOrange) {
    countryNameOrange.classList.remove('countries__name-link--orange');
  }
};

var hideActiveCard = function () {
  var countryCard = countriesDescList.querySelector('.countries__description-item--show');

  if (countryCard) {
    countryCard.classList.remove('countries__description-item--show');
  }
};

var findCountry = function (countries, evt, className, idName) {
  var data = evt.target.getAttribute('data-country');

  for (var i = 0; i < countries.length; i++) {
    var countryCard = countries[i].getAttribute(idName);
    if (countryCard === data) {
      countries[i].classList.add(className);
      break;
    }
  }
};

var onCountryTabClick = function (evt) {
  evt.preventDefault();
  if (evt.target.matches('.countries__name-link')) {
    hideActiveTab();
    hideActiveCard();
    evt.target.classList.add(classOrange);
    findCountry(countriesCards, evt, classShow, idCardCountry);
  }
};

var onCountryListClick = function (evt) {
  if (evt.target.matches('.places__button')) {
    hideActiveTab();
    hideActiveCard();
    findCountry(countriesName, evt, classOrange, idCountry);
    findCountry(countriesCards, evt, classShow, idCardCountry);
  }
};

countriesList.addEventListener('click', onCountryTabClick);
placesList.addEventListener('click', onCountryListClick);
