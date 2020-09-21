// 'use strict';
// // var tabs = function (target) {
// //   target = document.querySelector('.tabs');
// //   // var tab = (target.classList.contains('.tabs') ? document.querySelector(target) : target);
// //   var eventTabsShow;
// //   var tabShow = function (tabTarget) {
// //     var tabsLinks = document.querySelector(tabTarget.getAttribute('href'));
// //     var tabActive = tabTarget.parentElement.querySelector('.countries__name-item--active');
// //     var tabsPaneShow = tabsLinks.parentElement.querySelector('.countries__description-item--show');

// //     if (tabTarget === tabActive) {
// //       return;
// //     }
// //     if (tabActive !== null) {
// //       tabActive.classList.remove('countries__name-item--active');
// //     }
// //     if (tabsPaneShow !== null) {
// //       tabsPaneShow.classList.remove('countries__description-item--show');
// //     }
// //     tabTarget.classList.add('countries__name-item--active');
// //     tabTarget.classList.add('countries__description-item--show');
// //     document.dispatchEvent(eventTabsShow);
// //   };

// //   var tabSwitch = function (tabIndex) {
// //     var tabLinks = target.querySelectorAll('.test');
// //     if (tabLinks.length > 0) {
// //       if (tabIndex > tabLinks.length) {
// //         tabIndex = tabLinks.length;
// //       } else if (tabIndex < 1) {
// //         tabIndex = 1;
// //       }
// //       tabShow(tabLinks[tabIndex - 1]);
// //     }
// //   };

// //   eventTabsShow = new CustomEvent('tab.show', {detail: target});

// //   target.addEventListener('click', function (e) {
// //     var tabTarget = e.target;
// //     if (!tabTarget.classList.contains('test')) {
// //       return;
// //     }
// //     e.preventDefault();
// //     tabShow(tabTarget);
// //   });

// //   return {
// //     tabShow: function () {
// //       tabShow(target);
// //     },
// //     tabSwitch: function (index) {
// //       tabSwitch(index);
// //     }
// //   };
// // };

// // tabs('.tabs');


// var tabs = function (target) {
//   var _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target);
//   var _eventTabsShow;
//   var _showTab = function (tabsLinkTarget) {
//     var tabsPaneTarget;
//     var tabsLinkActive;
//     var tabsPaneShow;
//     tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
//     tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.countries__name-item--active');
//     tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.countries__description-item');
//     // если следующая вкладка равна активной, то завершаем работу
//     if (tabsLinkTarget === tabsLinkActive) {
//       return;
//     }
//     // удаляем классы у текущих активных элементов
//     if (tabsLinkActive !== null) {
//       tabsLinkActive.classList.remove('countries__name-item--active');
//     }
//     if (tabsPaneShow !== null) {
//       tabsPaneShow.classList.remove('countries__description-item');
//     }
//     // добавляем классы к элементам (в завимости от выбранной вкладки)
//     tabsLinkTarget.classList.add('countries__name-item--active');
//     tabsPaneTarget.classList.add('countries__description-item');
//     document.dispatchEvent(_eventTabsShow);
//   };
//   var _switchTabTo = function (tabsLinkIndex) {
//     var tabsLinks = _elemTabs.querySelectorAll('.test');
//     if (tabsLinks.length > 0) {
//       if (tabsLinkIndex > tabsLinks.length) {
//         tabsLinkIndex = tabsLinks.length;
//       } else if (tabsLinkIndex < 1) {
//         tabsLinkIndex = 1;
//       }
//       _showTab(tabsLinks[tabsLinkIndex - 1]);
//     }
//   };

//   _eventTabsShow = new CustomEvent('tab.show', {
//     detail: _elemTabs
//   });

//   _elemTabs.addEventListener('click', function (e) {
//     var tabsLinkTarget = e.target;
//     // завершаем выполнение функции, если кликнули не по ссылке
//     if (!tabsLinkTarget.classList.contains('test')) {
//       return;
//     }
//     // отменяем стандартное действие
//     e.preventDefault();
//     _showTab(tabsLinkTarget);
//   });

//   return {
//     showTab: function () {
//       _showTab(target);
//     },
//     switchTabTo: function (index) {
//       _switchTabTo(index);
//     }
//   };

// };

// tabs('.tabs');
