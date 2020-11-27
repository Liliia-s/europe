'use strict';

var countriesList = document.querySelector('.countries__name-list');
var countriesTabs = document.querySelectorAll('.countries__description-item');
var countriesDescList = document.querySelector('.countries__description-list');
var countriesCards = countriesDescList.querySelectorAll('.countries__description-item');
var placesList = document.querySelector('.places__list');

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

var showCountryCard = function (evt) {
  if (evt.target.matches('.countries__name-link, .places__button')) {
    var data = evt.target.getAttribute('data-country');

    hideActiveTab();
    hideActiveCard();

    if (evt.target.matches('.countries__name-link')) {
      evt.target.classList.add('countries__name-link--orange');
    }

    for (var i = 0; i < countriesCards.length; i++) {
      var test = countriesCards[i].getAttribute('id');
      if (test === data) {
        countriesCards[i].classList.add('countries__description-item--show');
        break;
      }
    }
  }
};

var onCountryTabClick = function (evt) {
  evt.preventDefault();
  showCountryCard(evt);
};

var onCountryListClick = function (evt) {
  showCountryCard(evt);
};

countriesList.addEventListener('click', onCountryTabClick);
placesList.addEventListener('click', onCountryListClick);
