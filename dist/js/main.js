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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__.accordeon)();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordeon\": () => (/* binding */ accordeon)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const elements = document.querySelectorAll(\".accordeon .element\");\r\n  const content = document.querySelectorAll(\".accordeon .element-content\");\r\n\r\n  elements.forEach((item, index) => {\r\n    const title = item.querySelector(\".title\");\r\n\r\n    title.addEventListener(\"click\", () => {\r\n      if (content[index].classList.contains(\"open\")) {\r\n        content[index].style.display = \"none\";\r\n      } else {\r\n        content[index].style.display = \"block\";\r\n      }\r\n      content[index].classList.toggle(\"open\");\r\n      item.classList.toggle(\"active\");\r\n\r\n      elements.forEach((item2, index2) => {\r\n        if (index != index2) {\r\n          item2.classList.remove(\"active\");\r\n          content[index2].style.display = \"none\";\r\n          content[index2].classList.remove(\"open\");\r\n        }\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now(); // точка старта анимации\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const btn = document.querySelector(\".callback-btn.fancyboxModal.hidden-xs\");\r\n  const modalCallback = document.querySelector(\".modal-callback\");\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  const btnServices = document.querySelector(\".button-services\");\r\n\r\n  const modalOpen = function (e) {\r\n    e.preventDefault();\r\n    modalCallback.style.display = \"block\";\r\n    modalOverlay.style.display = \"block\";\r\n    let width = document.documentElement.clientWidth;\r\n    if (width > 768) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 1200,\r\n        timing(timeFraction) {\r\n          return Math.pow(timeFraction, 1);\r\n        },\r\n        draw(progress) {\r\n          modalCallback.style.left = progress * 50 + \"%\";\r\n        },\r\n      });\r\n    } else {\r\n      modalCallback.style.left = \"50%\";\r\n    }\r\n  };\r\n\r\n  document.body.addEventListener(\"click\", (e) => {\r\n    if (\r\n      e.target.classList.contains(\"modal-overlay\") ||\r\n      e.target.getAttribute(\"alt\") == \"modal-close\"\r\n    ) {\r\n      modalOverlay.style.display = \"none\";\r\n      modalCallback.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  btn.addEventListener(\"click\", modalOpen);\r\n  btnServices.addEventListener(\"click\", modalOpen);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\r\n  const links = document.querySelectorAll(\".top-menu a\");\r\n  const up = document.querySelector(\".up\");\r\n\r\n  links.forEach((element) => {\r\n    element.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      const id = element.getAttribute(\"href\").substring(1);\r\n      const section = document.getElementById(id);\r\n\r\n      section.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    });\r\n  });\r\n\r\n  const showUp = function () {\r\n    const block = document.getElementById(\"services\");\r\n    const contentHeight = document.documentElement.scrollTop;\r\n    const pageBegin = block.getBoundingClientRect().top;\r\n\r\n    console.log(contentHeight);\r\n    console.log(pageBegin);\r\n\r\n    if (Math.abs(pageBegin) <= contentHeight) {\r\n      up.style.display = \"block\";\r\n    } else {\r\n      up.style.display = \"none\";\r\n    }\r\n  };\r\n\r\n  up.addEventListener(\"click\", () => window.scroll(0, 0));\r\n  window.addEventListener(\"scroll\", showUp);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;