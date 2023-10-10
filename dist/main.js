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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\nfunction createElement(ele){\n    if(ele == \"div\"){\n        return document.createElement(\"div\");\n    }\n    if(ele == \"a\"){\n        return document.createElement(\"a\");\n    }\n    if(ele == \"p\"){\n        return document.createElement(\"p\");\n    }\n    if(ele == \"h1\"){\n        return document.createElement(\"h1\");\n    }\n}\n\nfunction header(){\n    const headerContainer = createElement(\"div\");\n    \n    const home = createElement(\"a\");\n    home.textContent = \"Home\";\n\n    const about = createElement(\"a\");\n    about.textContent = \"Menu\";\n\n    const reservation = createElement(\"a\");\n    reservation.textContent = \"Reservation\";\n\n    headerContainer.append(home,about,reservation)\n    return headerContainer;\n}\nfunction main(){\n    const mainContainer = createElement(\"div\");\n    \n    const title = createElement(\"h1\");\n    title.textContent = \"Midnight Tacos\";\n    \n    const aboutContainer = createElement(\"div\");\n\n    const aboutHeading = createElement(\"h1\");\n    aboutHeading.textContent = \"Discover Culinary Excellence\";\n    \n    const aboutText = createElement(\"p\");\n    aboutText.textContent = \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure ad qui laborum ipsam ipsum optio aut rerum accusantium, id quae consectetur eaque totam accusamus assumenda ullam perspiciatis necessitatibus saepe?\";\n\n    aboutContainer.append(aboutHeading, aboutText);\n\n    const hoursContainer = createElement(\"div\");\n    const hoursHeading = createElement(\"h1\");\n    hoursHeading.textContent = \"Hours\";\n    \n    const sun = createElement(\"p\");\n    sun.textContent = \"Sunday: Closed\";\n\n    const tue = createElement(\"p\");\n    tue.textContent = \"Tuesday: 6pm-2am\";\n\n    const wed = createElement(\"p\");\n    wed.textContent = \"Wednesday: 6pm-2am\";\n\n    const thu = createElement(\"p\");\n    thu.textContent = \"Thursday: 6pm-2am\";\n\n    const fri = createElement(\"p\")\n    fri.textContent = \"Friday: 6pm-2am\";\n\n    const sat = createElement(\"p\")\n    sat.textContent = \"Saturday: 6pm-2am\";\n\n    hoursContainer.append(hoursHeading,sun,tue,wed,thu,fri,sat);\n\n    mainContainer.append(title,aboutContainer,hoursContainer);\n    return mainContainer;\n}\n\nfunction footer(){\n    const footerContainer = createElement(\"div\");\n\n    const copyright = createElement(\"p\");\n    copyright.textContent = \"Copyright \\u00A9 Midnight Tacos\";\n\n    footerContainer.append(copyright);\n    return footerContainer\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nconst content = document.getElementById(\"content\");\ncontent.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.header)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.main)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.footer)());\n\nconsole.log((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.header)());\nconsole.log((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.main)());\nconsole.log((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.footer)());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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