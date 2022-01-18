/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider_benefits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider-benefits */ \"./src/modules/slider-benefits.js\");\n/* harmony import */ var _modules_modal_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal-img */ \"./src/modules/modal-img.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider_benefits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_modal_img__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('30 januar 2022')\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal-img.js":
/*!**********************************!*\
  !*** ./src/modules/modal-img.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalImg = () => {\r\n  const documents = document.querySelector('#documents')\r\n  const documentContainer = documents.querySelectorAll('.text-center div')\r\n  const img = documents.querySelectorAll('.sertificate-document')\r\n  const documentOverlay = documents.querySelectorAll('.document-overlay')\r\n  const overlay = document.querySelector('.overlay')\r\n\r\n  let newImg = document.createElement('img')\r\n  let arrModals = []\r\n\r\n  const newElem = (elem, arrItem) => {\r\n    elem.classList.add('modal-img') \r\n    elem.style.cssText = `position: fixed;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      left: 50%;\r\n      height: 90%;\r\n      z-index: 9999;\r\n    `\r\n    elem.src = arrItem.href\r\n    documents.append(elem)\r\n  }\r\n\r\n  const getArr = (arr, newArr) => {\r\n    arr.forEach((item) => {\r\n      if (item.className.match(/col/gi)) {\r\n        newArr.push(item)\r\n      }\r\n    })\r\n  }\r\n\r\n  getArr(documentContainer, arrModals)\r\n\r\n  arrModals.forEach((modal, indexModal) => {\r\n\r\n    modal.addEventListener('mouseenter', (e) => {\r\n      e.preventDefault()\r\n      documentOverlay.forEach((item, index) => {\r\n        if (indexModal === index) {\r\n          item.style.opacity = 0.5\r\n        }\r\n      })\r\n    })\r\n\r\n    modal.addEventListener('mouseleave', (e) => {\r\n      e.preventDefault()\r\n      documentOverlay.forEach((item, index) => {\r\n        if (indexModal === index) {\r\n          item.style.opacity = 0\r\n        }\r\n      })\r\n    })\r\n  })\r\n\r\n  img.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      e.preventDefault()\r\n      newElem(newImg, item)\r\n      overlay.style.display = 'block'\r\n    })\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalImg);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal-img.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalHeader = document.querySelector('.header-modal')\r\n  const overlay = document.querySelector('.overlay')\r\n  const modalServices = document.querySelector('.services-modal')\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.matches('#header .button a')) {\r\n      e.preventDefault()\r\n      modalHeader.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.phone-icon')) {\r\n      e.preventDefault()\r\n      modalHeader.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.header-modal__close')) {\r\n      modalHeader.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    } else if (e.target.matches('.service-button a')) {\r\n      e.preventDefault()\r\n      modalServices.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.services-modal__close')) {\r\n      modalServices.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    }  else if (e.target.matches('.overlay')) {\r\n      modalHeader.style.display = 'none'\r\n      modalServices.style.display = 'none'\r\n      document.querySelector('.modal-img').style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\r\n  const smoothScroll = document.querySelector('.smooth-scroll')\r\n  const header = document.querySelector('#header')\r\n  const navigation = document.querySelector('#navigation')\r\n  const offer = document.querySelector('#offer')\r\n\r\n  smoothScroll.style.cursor = 'pointer'\r\n  smoothScroll.style.display = 'none'\r\n  smoothScroll.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    header.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n            })\r\n  })\r\n\r\n  document.addEventListener('scroll', () => {\r\n    let heightBlock = header.offsetHeight + navigation.offsetHeight + offer.offsetHeight\r\n    let scrollY = window.scrollY\r\n    if (scrollY < heightBlock) {\r\n      smoothScroll.style.display = 'none'\r\n    } else {\r\n      smoothScroll.style.display = 'flex'\r\n    }\r\n  })\r\n\r\n}\r\n\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/slider-benefits.js":
/*!****************************************!*\
  !*** ./src/modules/slider-benefits.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderBenefits = () => {\r\n  const benefits = document.querySelector('#benefits')\r\n  const benefitsInner = benefits.querySelector('.benefits-wrap')\r\n  const benefitsItem = benefits.querySelectorAll('.benefits__item')\r\n\r\n  let offsetWidth\r\n  let currentSlide = 0\r\n\r\n  const getBlockHidden = (arr) => {\r\n    arr.forEach((item, index) => {\r\n      offsetWidth = document.documentElement.offsetWidth\r\n      if (offsetWidth > 576) {\r\n        if (index >= 0 && index <= 2) {\r\n          item.style.display = 'block'\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      } else if (offsetWidth < 576) {\r\n        benefitsInner.style.justifyContent = 'center'\r\n        if (index === 0) {\r\n          item.style.display = 'block'\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      } \r\n    })\r\n  }\r\n\r\n  const prevSlide = (elems, index) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    if (offsetWidth > 576) {\r\n      elems[index].style.display = 'none'\r\n      index++\r\n      elems[index].style.display = 'none'\r\n      index++\r\n      elems[index].style.display = 'none'\r\n      index--\r\n      elems[index].style.display = 'none'\r\n    } else if (offsetWidth < 576) {\r\n      elems[index].style.display = 'none'\r\n      index++\r\n    }\r\n  }\r\n\r\n  const nextSlide = (elems, index) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    if (offsetWidth > 576) {\r\n      elems[index].style.display = 'block'\r\n      index++\r\n      elems[index].style.display = 'block'\r\n      index++\r\n      elems[index].style.display = 'block'\r\n    } else if (offsetWidth < 576) {\r\n      elems[index].style.display = 'block'\r\n      index--\r\n    }\r\n  }\r\n\r\n  benefits.addEventListener('click', (e) => {\r\n    \r\n    offsetWidth = document.documentElement.offsetWidth\r\n    e.preventDefault()\r\n    prevSlide(benefitsItem, currentSlide)\r\n    \r\n    if(e.target.closest('.benefits__arrow--left')) {\r\n      currentSlide--\r\n    } else if (e.target.closest('.benefits__arrow--right')) {\r\n      currentSlide++\r\n    }\r\n\r\n    if (offsetWidth > 576) {\r\n      if (currentSlide >= benefitsItem.length-2) {\r\n        currentSlide = 0\r\n      }\r\n    } else if (offsetWidth < 576) {\r\n      if (currentSlide >= benefitsItem.length) {\r\n        currentSlide = 0\r\n      }\r\n    }\r\n\r\n\r\n    if (offsetWidth > 576) {\r\n      if (currentSlide < 0) {\r\n        currentSlide = benefitsItem.length-3\r\n      }\r\n    } else if (offsetWidth < 576) {\r\n      if (currentSlide < 0) {\r\n        currentSlide = benefitsItem.length-1\r\n      }\r\n    }\r\n\r\n    nextSlide(benefitsItem, currentSlide)\r\n  })\r\n\r\n  getBlockHidden(benefitsItem)\r\n  window.addEventListener('resize', () => {\r\n    getBlockHidden(benefitsItem)\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderBenefits);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider-benefits.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const services = document.querySelector('#services')\r\n  const sliderContainer = services.querySelector('.row')\r\n  const sliderItems = sliderContainer.querySelectorAll('div')\r\n\r\n  let offsetWidth\r\n  const arrItems = []\r\n  let currentSlide = 0\r\n\r\n  sliderItems.forEach((item) => {\r\n    if (item.className.match(/col/gi)) {\r\n      arrItems.push(item)\r\n    }\r\n  })\r\n\r\n  const getBlockHidden = (arr) => {\r\n    arr.forEach((item, index) => {\r\n      offsetWidth = document.documentElement.offsetWidth\r\n      if (offsetWidth > 576) {\r\n        if (index === 0 || index === 1) {\r\n          item.style.display = 'block'\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      } else if (offsetWidth < 576) {\r\n        if (index === 0) {\r\n          item.style.display = 'block'\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      } \r\n    })\r\n  }\r\n\r\n  const prevSlide = (elems, index) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    if (offsetWidth > 576) {\r\n      elems[index].style.display = 'none'\r\n      index++\r\n      elems[index].style.display = 'none'\r\n      index--\r\n      elems[index].style.display = 'none'\r\n    } else if (offsetWidth < 576) {\r\n      elems[index].style.display = 'none'\r\n      index++\r\n    }\r\n  }\r\n\r\n  const nextSlide = (elems, index) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    if (offsetWidth > 576) {\r\n      elems[index].style.display = 'block'\r\n      index++\r\n      elems[index].style.display = 'block'\r\n      index--\r\n    } else if (offsetWidth < 576) {\r\n      elems[index].style.display = 'block'\r\n      index++\r\n    }\r\n  }\r\n  \r\n  sliderContainer.addEventListener('click', (e) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    e.preventDefault()\r\n    prevSlide(arrItems, currentSlide)\r\n    \r\n    if(e.target.closest('.services__arrow--left')) {\r\n      currentSlide--\r\n    } else if (e.target.closest('.services__arrow--right')) {\r\n      currentSlide++\r\n    }\r\n\r\n    if (offsetWidth > 576) {\r\n      if (currentSlide >= arrItems.length-1) {\r\n        currentSlide = 0\r\n      }\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = arrItems.length-2\r\n      }\r\n    } else if (offsetWidth < 576) {\r\n\r\n      if (currentSlide > arrItems.length-1) {\r\n        currentSlide = 0\r\n      }\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = arrItems.length-1\r\n      }\r\n    }\r\n\r\n    nextSlide(arrItems, currentSlide)\r\n  })\r\n\r\n  getBlockHidden(arrItems)\r\n  window.addEventListener('resize', () => {\r\n    getBlockHidden(arrItems)\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const orders = document.querySelectorAll('.order')\r\n  orders.forEach(order => {\r\n\r\n    const timerDays = order.querySelector('.count_1 span')\r\n    const timerHours = order.querySelector('.count_2 span')\r\n    const timerMinutes = order.querySelector('.count_3 span')\r\n    const timerSeconds = order.querySelector('.count_4 span')\r\n    let timeId\r\n\r\n    const getTimeRemaining = () => {\r\n      let dateStop = new Date(deadline).getTime()\r\n      let dateNow = new Date().getTime()\r\n      let timeRemaining = (dateStop - dateNow) / 1000\r\n      let days = Math.floor(timeRemaining / 60 / 60 / 24) \r\n      let hours = Math.floor(timeRemaining / 60 / 60)\r\n      let minutes = Math.floor((timeRemaining / 60) % 60)\r\n      let seconds = Math.floor(timeRemaining % 60)\r\n      return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const addZero = (num) =>  {\r\n      if (num < 10) {\r\n        return num = '0' + num\r\n      } else {\r\n        return num\r\n      }\r\n    }\r\n\r\n    const updateClock = () => {\r\n      let getTime = getTimeRemaining()\r\n      if (getTime.timeRemaining > 0) {\r\n        timerDays.textContent = addZero(getTime.days)\r\n        timerHours.textContent = addZero(getTime.hours)\r\n        timerMinutes.textContent = addZero(getTime.minutes)\r\n        timerSeconds.textContent = addZero(getTime.seconds)\r\n      } else {\r\n        timerDays.textContent = '00'\r\n        timerHours.textContent = '00'\r\n        timerMinutes.textContent = '00'\r\n        timerSeconds.textContent = '00'\r\n        clearInterval(timeId)\r\n      }\r\n    }\r\n    updateClock()\r\n    timeId = setInterval(updateClock, 1000)\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;