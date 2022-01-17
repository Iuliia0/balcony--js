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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider_benefits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider-benefits */ \"./src/modules/slider-benefits.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider_benefits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalHeader = document.querySelector('.header-modal')\r\n  const overlay = document.querySelector('.overlay')\r\n  const modalServices = document.querySelector('.services-modal')\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.matches('#header .button a')) {\r\n      e.preventDefault()\r\n      modalHeader.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.phone-icon')) {\r\n      e.preventDefault()\r\n      modalHeader.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.header-modal__close')) {\r\n      modalHeader.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    } else if (e.target.matches('.service-button a')) {\r\n      e.preventDefault()\r\n      modalServices.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.services-modal__close')) {\r\n      modalServices.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    }  else if (e.target.matches('.overlay')) {\r\n      modalHeader.style.display = 'none'\r\n      modalServices.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const services = document.querySelector('#services')\r\n  const sliderContainer = services.querySelector('.row')\r\n  const sliderItems = sliderContainer.querySelectorAll('div')\r\n\r\n  let offsetWidth\r\n  const arrItems = []\r\n  let currentSlide = 0\r\n\r\n  sliderItems.forEach((item) => {\r\n    if (item.className.match(/col/gi)) {\r\n      arrItems.push(item)\r\n    }\r\n  })\r\n\r\n  const getBlockHidden = (arr) => {\r\n    arr.forEach((item, index) => {\r\n      offsetWidth = document.documentElement.offsetWidth\r\n      if (offsetWidth > 576) {\r\n        if (index === 0 || index === 1) {\r\n          item.style.display = 'block'\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      } else if (offsetWidth < 576) {\r\n        if (index === 0) {\r\n          item.style.display = 'block'\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      } \r\n    })\r\n  }\r\n\r\n  const prevSlide = (elems, index) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    if (offsetWidth > 576) {\r\n      elems[index].style.display = 'none'\r\n      index++\r\n      elems[index].style.display = 'none'\r\n      index--\r\n      elems[index].style.display = 'none'\r\n    } else if (offsetWidth < 576) {\r\n      elems[index].style.display = 'none'\r\n      index++\r\n    }\r\n  }\r\n\r\n  const nextSlide = (elems, index) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    if (offsetWidth > 576) {\r\n      elems[index].style.display = 'block'\r\n      index++\r\n      elems[index].style.display = 'block'\r\n    } else if (offsetWidth < 576) {\r\n      elems[index].style.display = 'block'\r\n      index--\r\n    }\r\n  }\r\n  \r\n  sliderContainer.addEventListener('click', (e) => {\r\n    offsetWidth = document.documentElement.offsetWidth\r\n    e.preventDefault()\r\n    prevSlide(arrItems, currentSlide)\r\n    \r\n    if(e.target.closest('.services__arrow--left')) {\r\n      currentSlide--\r\n    } else if (e.target.closest('.services__arrow--right')) {\r\n      currentSlide++\r\n    }\r\n\r\n    if (currentSlide >= arrItems.length-1) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (offsetWidth > 576) {\r\n      if (currentSlide < 0) {\r\n        currentSlide = arrItems.length-2\r\n      }\r\n    } else if (offsetWidth < 576) {\r\n      if (currentSlide < 0) {\r\n        currentSlide = arrItems.length-1\r\n      }\r\n    }\r\n\r\n    nextSlide(arrItems, currentSlide)\r\n  })\r\n\r\n  getBlockHidden(arrItems)\r\n  window.addEventListener('resize', () => {\r\n    getBlockHidden(arrItems)\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

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