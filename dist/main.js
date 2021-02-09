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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\n\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://restaurant-odin/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setTabBtnActive(id) {\n\tconst activeTabBtn = document.querySelector(\".active-tab-btn\");\n\tif (activeTabBtn) activeTabBtn.classList.remove(\"active-tab-btn\");\n\tconst tabBtn = document.getElementById(id);\n\ttabBtn.classList.add(\"active-tab-btn\");\n}\n\nfunction createContactSection() {\n    const contactSection = document.createElement('section');\n    contactSection.classList.add('section');\n\n    const title = document.createElement('h2');\n    title.classList.add('section-title');\n    title.textContent = 'Contact Us';\n    contactSection.appendChild(title);\n\n    const para = document.createElement('p');\n    para.classList.add('para');\n    para.textContent = \"If you want to contact us, just shout as loud as you can. Still, we won't answer you :)\"\n    contactSection.appendChild(para);\n\n    return contactSection    \n}\n\nfunction loadContact() {\n    const content = document.getElementById('main');\n    content.textContent = '';\n    const contactContent = createContactSection();\n    setTabBtnActive('contact-tab-btn');\n    content.appendChild(contactContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-odin/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setTabBtnActive(id) {\n\tconst activeTabBtn = document.querySelector(\".active-tab-btn\");\n\tif (activeTabBtn) activeTabBtn.classList.remove(\"active-tab-btn\");\n\tconst tabBtn = document.getElementById(id);\n\ttabBtn.classList.add(\"active-tab-btn\");\n}\n\nfunction createHomeSection() {\n    const homeSection = document.createElement('section');\n    homeSection.classList.add('section');\n\n    const title = document.createElement('h2');\n    title.classList.add('section-title');\n    title.textContent = 'Welcome';\n    homeSection.appendChild(title);\n\n    const para = document.createElement('p');\n    para.classList.add('para');\n    para.textContent = 'Welcome to Guild Wars 2 Gourmet Foods, a informative little corner of the internet with the sole purpose of teaching you about the best and tastier ways to indulge yourself in Tyria'\n    homeSection.appendChild(para);\n\n    return homeSection;   \n}\n\nfunction loadHome() {\n    const content = document.getElementById('main');\n    content.textContent = '';\n    const homeContent = createHomeSection();\n    setTabBtnActive('home-tab-btn');\n    content.appendChild(homeContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-odin/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, text) {\n\tconst header = document.createElement(\"header\");\n\theader.setAttribute(\"id\", id);\n\tconst textLogo = document.createElement(\"h1\");\n\ttextLogo.setAttribute(\"id\", \"textLogo\");\n\ttextLogo.textContent = text;\n\theader.appendChild(textLogo);\n\treturn header;\n}\n\nfunction createTabBtn(id, text) {\n\tconst btn = document.createElement(\"button\");\n\tbtn.setAttribute(\"id\", id);\n\tconst span = document.createElement(\"span\");\n\tbtn.appendChild(span);\n\tspan.textContent = text;\n\tbtn.classList.add(\"tab\");\n\treturn btn;\n}\n\nfunction createNav(id) {\n\tconst nav = document.createElement(\"nav\");\n\tnav.setAttribute(\"id\", id);\n\n\tconst homeTab = createTabBtn(\"home-tab-btn\", \"Home\");\n\tconst menuTab = createTabBtn(\"menu-tab-btn\", \"Menu\");\n\tconst contactTab = createTabBtn(\"contact-tab-btn\", \"Contact\");\n\n\tnav.appendChild(homeTab);\n\tnav.appendChild(menuTab);\n\tnav.appendChild(contactTab);\n\n\treturn nav;\n}\n\nfunction createMain(id) {\n\tconst main = document.createElement(\"main\");\n\tmain.setAttribute(\"id\", id);\n\treturn main;\n}\n\nfunction createFooter(id, text) {\n\tconst footer = document.createElement(\"footer\");\n\tfooter.setAttribute(\"id\", id);\n\tconst h3 = document.createElement(\"h3\");\n\th3.textContent = text;\n\tfooter.appendChild(h3);\n\treturn footer;\n}\n\nfunction loadPage() {\n    const content = document.getElementById('content');\n\n    const header = createHeader('header', 'GW2 Gourmet Selection');\n    content.appendChild(header);\n\n    const nav = createNav('nav');\n    content.appendChild(nav);\n\n    const main = createMain('main');\n    content.appendChild(main);\n\n    const footer = createFooter('footer', 'We Hope You Enjoy Our Food');\n    content.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurant-odin/./src/modules/loadPage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setTabBtnActive(id) {\n\tconst activeTabBtn = document.querySelector(\".active-tab-btn\");\n\tif (activeTabBtn) activeTabBtn.classList.remove(\"active-tab-btn\");\n\tconst tabBtn = document.getElementById(id);\n\ttabBtn.classList.add(\"active-tab-btn\");\n}\n\nfunction createFoodCard(src, alt, name, price) {\n\tconst foodCard = document.createElement(\"div\");\n\tfoodCard.classList.add(\"food-card\");\n\n\tconst img = document.createElement(\"img\");\n\timg.setAttribute(\"src\", src);\n\timg.setAttribute(\"alt\", alt);\n\n\tconst description = document.createElement(\"div\");\n\tdescription.classList.add(\"description\");\n\n\tconst foodName = document.createElement(\"h3\");\n\tfoodName.classList.add(\"food-name\");\n\tfoodName.textContent = name;\n\n\tconst foodPrice = document.createElement(\"h2\");\n\tfoodPrice.classList.add(\"food-price\");\n\tfoodPrice.textContent = price;\n\n\tdescription.appendChild(foodName);\n\tdescription.appendChild(foodPrice);\n\n\tfoodCard.appendChild(img);\n\tfoodCard.appendChild(description);\n\n\treturn foodCard;\n}\n\nfunction loadMenu() {\n\tconst content = document.getElementById(\"main\");\n\tcontent.textContent = \"\";\n\n\tconst menuSection = document.createElement(\"section\");\n\tmenuSection.classList.add(\"menu-section\");\n\tmenuSection.setAttribute(\"id\", \"menu\");\n\n\tsetTabBtnActive(\"menu-tab-btn\");\n\n\tcontent.appendChild(menuSection);\n\n\tconst foods = [\n\t\tcreateFoodCard(\"rice\", \"£9\", \"9\", \"9\"),\n\t\tcreateFoodCard(\"rice\", \"£9\", \"9\", \"9\"),\n\t\tcreateFoodCard(\"rice\", \"£9\", \"9\", \"9\"),\n\t\tcreateFoodCard(\"rice\", \"£9\", \"9\", \"9\"),\n\t\tcreateFoodCard(\"rice\", \"£9\", \"9\", \"9\"),\n\t];\n\n\tfoods.forEach((foodCard) => {\n\t\tmenuSection.appendChild(foodCard);\n\t});\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-odin/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;