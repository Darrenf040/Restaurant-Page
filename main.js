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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial.js */ \"./src/modules/initial.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\n\n\n(0,_modules_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst menuBtn = document.getElementById(\"menu\");\n\nmenuBtn.addEventListener(\"click\", _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   \"default\": () => (/* binding */ homeLoad),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\nfunction createElement(ele){\n    if(ele == \"div\"){\n        return document.createElement(\"div\");\n    }\n    else if(ele == \"btn\"){\n        return document.createElement(\"button\");\n    }\n    else if(ele == \"p\"){\n        return document.createElement(\"p\");\n    }\n    else if(ele == \"h1\"){\n        return document.createElement(\"h1\");\n    }\n    else if(ele == \"h2\"){\n        return document.createElement(\"h2\");\n    }\n\n}\n\nfunction header(){\n    const headerContainer = createElement(\"div\");\n    \n    const home = createElement(\"btn\");\n    home.textContent = \"Home\";\n    home.id = \"home\";\n\n    const about = createElement(\"btn\");\n    about.textContent = \"Menu\";\n    about.id = \"menu\";\n\n    const reservation = createElement(\"btn\");\n    reservation.textContent = \"Reservation\";\n    reservation.id = \"Reservation\"\n\n    headerContainer.append(home,about,reservation)\n    return headerContainer;\n}\nfunction main(){\n    const mainContainer = createElement(\"div\");\n    \n    const title = createElement(\"h1\");\n    title.textContent = \"Midnight Tacos\";\n    \n    const aboutContainer = createElement(\"div\");\n\n    const aboutHeading = createElement(\"h1\");\n    aboutHeading.textContent = \"Discover Culinary Excellence\";\n    \n    const aboutText = createElement(\"p\");\n    aboutText.textContent = \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure ad qui laborum ipsam ipsum optio aut rerum accusantium, id quae consectetur eaque totam accusamus assumenda ullam perspiciatis necessitatibus saepe?\";\n\n    aboutContainer.append(aboutHeading, aboutText);\n\n    const hoursContainer = createElement(\"div\");\n    const hoursHeading = createElement(\"h1\");\n    hoursHeading.textContent = \"Hours\";\n    \n    const sun = createElement(\"p\");\n    sun.textContent = \"Sunday: Closed\";\n\n    const tue = createElement(\"p\");\n    tue.textContent = \"Tuesday: 6pm-2am\";\n\n    const wed = createElement(\"p\");\n    wed.textContent = \"Wednesday: 6pm-2am\";\n\n    const thu = createElement(\"p\");\n    thu.textContent = \"Thursday: 6pm-2am\";\n\n    const fri = createElement(\"p\")\n    fri.textContent = \"Friday: 6pm-2am\";\n\n    const sat = createElement(\"p\")\n    sat.textContent = \"Saturday: 6pm-2am\";\n\n    hoursContainer.append(hoursHeading,sun,tue,wed,thu,fri,sat);\n\n    mainContainer.append(title,aboutContainer,hoursContainer);\n    return mainContainer;\n}\n\nfunction footer(){\n    const footerContainer = createElement(\"div\");\n\n    const copyright = createElement(\"p\");\n    copyright.textContent = \"Copyright \\u00A9 Midnight Tacos\";\n\n    footerContainer.append(copyright);\n    return footerContainer\n}\n\nfunction homeLoad(){\n    const content = document.getElementById(\"content\")\n    content.append(header(), main(), footer());\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/modules/initial.js\");\n\n\n\nfunction menuContainer(){\n    const menuContainer = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n\n    const title = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\");\n    title.textContent = \"Menu\";\n\n    const tacos = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\");\n    tacos.textContent = \"Tacos\";\n\n    const tacosContainer = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n\n    const taco1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    taco1.textContent = \"Famous Street Taco\";\n    const tacoImg1 = new Image();\n    tacoImg1.src = \"/src/assets/images/taco-image.jpg\";\n    const price1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price1.textContent = \"$12\";\n    const tacoInfo1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    tacoInfo1.textContent = \"Comes with 3 tacos, your choice of beef, chick, or pulled pork, jalepenos and tomatoes\";\n\n    const taco2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    taco2.textContent = \"Plain Jane\";\n    const tacoImg2 = new Image();\n    tacoImg2.src = \"/src/assets/images/taco2-image.jpg\";\n    const price2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price2.textContent = \"$9\";\n    const tacoInfo2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    tacoInfo2.textContent = \"3 Hard shell tacos with your choice of beef or chicken, shredded cheese, and jalepenos\";\n\n    tacosContainer.append(tacos, taco1, tacoImg1, price1, tacoInfo1, taco2, tacoImg2, price2, tacoInfo2);\n\n    const sidesContainer = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n\n    const sides = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\");\n    sides.textContent = \"Sides\";\n\n    const fries = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    fries.textContent = \"Loaded Fries\";\n    const friesImg = new Image();\n    friesImg.src = \"/src/assets/images/fries.jpg\";\n    const price3 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price3.textContent = \"$4\";\n    const friesInfo = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    friesInfo.textContent = \"Loaded fries with melted cheese, bacon, green onion, and chicken\";\n\n\n\n    const nachos = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    nachos.textContent = \"Loaded nachos\";\n    const nachosImg = new Image();\n    nachosImg.src = \"/src/assets/images/nachos.jpg\";\n    const price4 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price4.textContent = \"$6\";\n    const nachosInfo = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    nachosInfo.textContent = \"Loaded nachos with 3 layer cheese\";\n    \n    sidesContainer.append(sides,fries, friesImg, price3, friesInfo, nachos, nachosImg, price4, nachosInfo);\n\n    const bevContainer = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n\n    const drinks = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\");\n    drinks.textContent = \"Drinks\";\n\n    const bev = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    bev.textContent = \"OrangeJuice\";\n    const bevImg = new Image();\n    bevImg.src = \"/src/assets/images/drink.jpg\";\n    const price5 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price5.textContent = \"$2\";\n    const bevInfo = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    bevInfo.textContent = \"Refreshing sunny orange juice\";\n\n    bevContainer.append(drinks, bev, bevImg, price5, bevInfo);\n\n    menuContainer.append(title, tacosContainer,sidesContainer, bevContainer);\n    return menuContainer;\n}\n\nfunction menuLoad(){\n    const menuBtn = document.getElementById(\"menu\");\n    const content = document.getElementById(\"content\");\n    content.innerHTML = '';\n    \n    if(menuBtn){\n        if(menuBtn.classList != \"active\"){\n            menuBtn.classList.add(\"active\");\n            content.append((0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.header)(), menuContainer(), (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.footer)());\n        }\n        else{\n            return;\n        }\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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