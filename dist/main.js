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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalHeader = document.querySelector('.header-modal')\r\n  const overlay = document.querySelector('.overlay')\r\n  const modalServices = document.querySelector('.services-modal')\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.matches('#header .button a')) {\r\n      e.preventDefault()\r\n      modalHeader.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.phone-icon')) {\r\n      e.preventDefault()\r\n      modalHeader.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.header-modal__close')) {\r\n      modalHeader.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    } else if (e.target.matches('.service-button a')) {\r\n      e.preventDefault()\r\n      modalServices.style.display = 'flex'\r\n      overlay.style.display = 'block'\r\n    } else if (e.target.matches('.services-modal__close')) {\r\n      modalServices.style.display = 'none'\r\n      overlay.style.display = 'none'\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\r\n  const smoothScroll = document.querySelector('.smooth-scroll')\r\n  const header = document.querySelector('#header')\r\n  const navigation = document.querySelector('#navigation')\r\n  const offer = document.querySelector('#offer')\r\n\r\n  smoothScroll.style.cursor = 'pointer'\r\n  smoothScroll.style.display = 'none'\r\n  smoothScroll.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    header.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n            })\r\n  })\r\n\r\n  document.addEventListener('scroll', () => {\r\n    let heightBlock = header.offsetHeight + navigation.offsetHeight + offer.offsetHeight\r\n    let crollY = window.scrollY\r\n    if (crollY < heightBlock) {\r\n      smoothScroll.style.display = 'none'\r\n    } else {\r\n      smoothScroll.style.display = 'flex'\r\n    }\r\n    \r\n  })\r\n\r\n}\r\n\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scrollUp.js?");

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