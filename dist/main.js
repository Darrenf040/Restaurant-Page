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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    margin: 0;\n    box-sizing: border-box;\n}\np, h1, h2{\n    margin: 0;\n}\n.home-page{\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    gap: 80px;\n}\n.header{\n    display: flex;\n    flex-direction: column;\n    gap: 35px;\n    padding-top: 10px ;\n    align-items:center ;\n    background-color: black;\n    color: white;\n}\n.header h1{\n    font-size: 60px;\n}\n.links{\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n}\n.links button{\n    padding: 10px 20px;\n    width: 150px;\n    background-color: transparent;\n    border-style: none;\n    color: white;\n    font-size: 20px;\n}\nbutton:hover{\n    background-color: gray;\n}\n.main{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n.about-us{\n    width: 900px;\n    display: flex;\n    gap: 20px;\n    height: 400px;\n}\n.image-container{\n    width: 50%;\n}\n.image-container img{\n    width: 100%;\n    height: 100%;\n}\n.text-content{\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.text-content h1{\n    font-size: 40px;\n\n}\n.text-content p{\n    font-size: 28px;\n}\nfooter{\n    text-align: center;\n    background-color: black;\n    color: white;\n    padding: 20px 0;\n    font-size: 20px;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 60px;\n    padding: 40px 0;\n}\n.menu h2{\n    font-size: 40px;\n}\n.menu p {\n    font-size: 25px;\n}\n.img-container{\n    width: 640px;\n}\n.menu img{\n    width: 100%;\n}\n.menu-info{\n    width: 640px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.reservation-section{\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n.reservation-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n\n}\n\n.contact-container{\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n\n.contact-container p{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\n.contact-container h1, .contact-container h2{\n    font-size: 35px;\n}\n\ninput{\n    display: block;\n    height: 30px;\n}\n.reservation{\n    display: flex;\n    gap: 125px;\n}\n\n.form-container{\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n.form-container button{\n    color: white;\n    background-color: black;\n    border-style: none;\n    align-self: flex-start;\n    font-size: 1.5rem;\n    padding: 10px;\n    border-radius: 5px;\n}\n.form-container button:hover{\n    opacity: 80%;\n}\nbutton{\n    cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial.js */ \"./src/modules/initial.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\n\n\n(0,_modules_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _modules_initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/initial.js */ \"./src/modules/initial.js\");\n\n\nfunction load(){\n    const content = document.getElementById(\"content\");\n    content.innerHTML = '';\n\n    (0,_modules_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   \"default\": () => (/* binding */ homeLoad),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation.js */ \"./src/modules/reservation.js\");\n\n\n\n\n\nfunction createElement(ele){\n    if(ele == \"div\"){\n        return document.createElement(\"div\");\n    }\n    else if(ele == \"btn\"){\n        return document.createElement(\"button\");\n    }\n    else if(ele == \"p\"){\n        return document.createElement(\"p\");\n    }\n    else if(ele == \"h1\"){\n        return document.createElement(\"h1\");\n    }\n    else if(ele == \"h2\"){\n        return document.createElement(\"h2\");\n    }\n    else if(ele == 'footer'){\n        return document.createElement(\"footer\");\n    }\n\n}\n\nfunction header(){\n    const headerContainer = createElement(\"div\");\n    headerContainer.classList.add(\"header\");\n\n    const title = createElement(\"h1\");\n    title.textContent = \"Midnight Tacos\";\n\n    const home = createElement(\"btn\");\n    home.textContent = \"Home\";\n    home.id = \"home\";\n    home.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n    const menu = createElement(\"btn\");\n    menu.textContent = \"Menu\";\n    menu.id = \"menu\";\n    menu.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n    const reservation = createElement(\"btn\");\n    reservation.textContent = \"Reservation\";\n    reservation.id = \"Reservation\"\n    reservation.addEventListener(\"click\", _reservation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    const links = createElement(\"div\");\n    links.classList.add(\"links\");\n    links.append(home,menu,reservation);\n\n    headerContainer.append(title, links)\n    return headerContainer;\n}\nfunction main(){\n    const mainContainer = createElement(\"div\");\n    mainContainer.classList.add(\"main\");\n    \n    \n    const aboutContainer = createElement(\"div\");\n    aboutContainer.classList.add(\"about-us\");\n\n    const imageContainer = createElement(\"div\");\n    imageContainer.classList.add(\"image-container\")\n    const aboutImg = new Image();\n    aboutImg.src = '/src/assets/images/about.jpg';\n    imageContainer.append(aboutImg);\n\n    const aboutHeading = createElement(\"h1\");\n    aboutHeading.textContent = \"Discover Culinary Excellence\";\n    const aboutText = createElement(\"p\");\n    aboutText.textContent = \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure ad qui laborum ipsam ipsum optio aut rerum accusantium, id quae consectetur eaque totam accusamus assumenda ullam perspiciatis necessitatibus saepe?\";\n\n    const textContent = createElement(\"div\");\n    textContent.append(aboutHeading,aboutText)\n    textContent.classList.add(\"text-content\");\n\n    aboutContainer.append(textContent, imageContainer);\n\n    mainContainer.append(aboutContainer);\n    return mainContainer;\n}\n\nfunction footer(){\n    const footerContainer = createElement(\"footer\");\n\n    const copyright = createElement(\"p\");\n    copyright.textContent = \"Copyright \\u00A9 Midnight Tacos\";\n\n    footerContainer.append(copyright);\n    return footerContainer\n}\n\nfunction homePage(){\n\n    const allContent = createElement(\"div\");\n\n    allContent.classList.add(\"home-page\");\n    allContent.append(header(),main(),footer());\n    return allContent\n}\n\nfunction homeLoad(){\n    const content = document.getElementById(\"content\")\n\n\n    content.append(homePage());\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/modules/initial.js\");\n\n\n\nfunction menuContainer(){\n    const menuContainer = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    menuContainer.classList.add(\"menu\");\n\n\n    const tacoCard1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    tacoCard1.classList.add(\"card\");\n\n    \n    const taco1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    taco1.textContent = \"Famous Street Taco\";\n    const tacoImg1 = new Image();\n    tacoImg1.src = \"/src/assets/images/taco-image.jpg\";\n    const imgContainer1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    imgContainer1.append(tacoImg1)\n    imgContainer1.classList.add(\"img-container\");\n    const taco1left = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    taco1left.append(taco1,imgContainer1)\n\n    const taco1right = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    const price1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price1.textContent = \"$12\";\n    const tacoInfo1 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    tacoInfo1.textContent = \"Comes with 3 tacos, your choice of beef, chick, or pulled pork, jalepenos and tomatoes\";\n    taco1right.append(price1, tacoInfo1);\n    taco1right.classList.add(\"menu-info\");\n    \n    tacoCard1.append(taco1left,taco1right);\n\n    const tacoCard2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    tacoCard2.classList.add(\"card\");\n\n    const taco2left = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    const taco2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    taco2.textContent = \"Plain Jane\";\n    const tacoImg2 = new Image();\n    tacoImg2.src = \"/src/assets/images/taco2-image.jpg\";\n    const imgContainer2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    imgContainer2.append(tacoImg2);\n    imgContainer2.classList.add(\"img-container\");\n    taco2left.append(taco2, imgContainer2);\n\n    const taco2right = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    const price2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price2.textContent = \"$9\";\n    const tacoInfo2 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    tacoInfo2.textContent = \"3 Hard shell tacos with your choice of beef or chicken, shredded cheese, and jalepenos\";\n    taco2right.append(price2,tacoInfo2);\n    taco2right.classList.add(\"menu-info\");\n\n\n    tacoCard2.append(taco2left,taco2right);\n\n\n\n    const friesCard = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    friesCard.classList.add(\"card\");\n\n    const fries = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    fries.textContent = \"Loaded Fries\";\n    const friesImg = new Image();\n    friesImg.src = \"/src/assets/images/fries.jpg\";\n    const imgContainer3 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    imgContainer3.append(friesImg);\n    imgContainer3.classList.add(\"img-container\");\n    const friesLeft = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    friesLeft.append(fries,imgContainer3);\n\n    const price3 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price3.textContent = \"$4\";\n    const friesInfo = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    friesInfo.textContent = \"Loaded fries with melted cheese, bacon, green onion, and chicken\";\n    const friesRight = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    friesRight.append(price3, friesInfo);\n    friesRight.classList.add(\"menu-info\");\n\n    friesCard.append(friesLeft,friesRight);\n\n    const nachosCard = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    nachosCard.classList.add(\"card\");\n\n    const nachos = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    nachos.textContent = \"Loaded nachos\";\n    const nachosImg = new Image();\n    nachosImg.src = \"/src/assets/images/nachos.jpg\";\n    const imgContainer4 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    imgContainer4.append(nachosImg);\n    imgContainer4.classList.add(\"img-container\");\n    const nachosLeft = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    nachosLeft.append(nachos,imgContainer4);\n\n    const price4 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price4.textContent = \"$6\";\n    const nachosInfo = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    nachosInfo.textContent = \"Loaded nachos with 3 layer cheese\";\n    const nachosRight = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    nachosRight.append(price4,nachosInfo)\n    nachosRight.classList.add(\"menu-info\");\n\n\n    nachosCard.append(nachosLeft,nachosRight);\n\n    const drinkCard = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    drinkCard.classList.add(\"card\");\n\n    const bev = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\");\n    bev.textContent = \"Apple Soda\";\n    const bevImg = new Image();\n    bevImg.src = \"/src/assets/images/drink.jpg\";\n    const imgContainer5 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    imgContainer5.append(bevImg);\n    imgContainer5.classList.add(\"img-container\");\n    const bevLeft = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    bevLeft.append(bev, imgContainer5)\n\n    const price5 = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    price5.textContent = \"$2\";\n    const bevInfo = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n    bevInfo.textContent = \"Refreshing Apple Soda\";\n    const bevRight = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    bevRight.append(price5,bevInfo);\n    bevRight.classList.add(\"menu-info\");\n    \n    drinkCard.append(bevLeft,bevRight);\n\n\n    menuContainer.append(tacoCard1, tacoCard2,friesCard, nachosCard,drinkCard);\n    \n    return menuContainer;\n}\n\nfunction menuLoad(){\n    const content = document.getElementById(\"content\");\n    content.innerHTML = '';\n    \n    content.append((0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.header)(), menuContainer(), (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.footer)());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resrvationLoad)\n/* harmony export */ });\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/modules/initial.js\");\n\n\nfunction reservationSection(){\n    const content = document.getElementById(\"content\");\n\n    const reserve = document.createElement(\"div\");\n    reserve.className = \"reservation-container\"\n    reserve.innerHTML = `\n    <div class=\"reservation\">\n        <form action=\"\">\n            <div class=\"form-container\">\n                <h1>Make A Reservation</h1>\n                <input type=\"date\" id=\"date\" />\n                <input type=\"time\">\n                <input type=\"number\" name=\"\" id=\"\" placeholder=\"How many People\">\n                <button type=\"submit\">Reserve Table</button>\n            </div>\n        </form>\n        <div class=\"contact-container\">\n        <h1>Contact Us</h1>\n            <div>\n                <h2>123456 elms street drive</h2>\n                <p>123-456-7890</p>\n                <p>mrbeast@gmail.com</p>\n            </div>\n            <div>\n                <h2>Hours of operation</h2>\n                <p>Monday-Saturday</p>\n                <p>6am to 2am</p>\n                <p>Sundays</p>\n                <p>Closed</p>\n            </div>\n        </div>\n    </div>`;    \n\n    return reserve;\n}\n\nfunction resrvationLoad(){\n    const content = document.getElementById(\"content\");\n\n    content.innerHTML = '';\n    const wrapper = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    wrapper.className = \"reservation-section\";\n    content.append(wrapper);\n    wrapper.append((0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.header)(), reservationSection(), (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.footer)());\n\n    //update date input values with current date by default\n    const myDate = document.getElementById(\"date\");\n    const today = new Date();\n    const format = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;\n    myDate.value = format;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/reservation.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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