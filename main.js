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
/***/ (() => {

eval("\nconst content = document.querySelector('#content');\nfunction makeNavigator() {\n\tconst nav = document.createElement('nav');\n\tfor(let i = 0; i < 3; i++) {\n\t\tlet btn = document.createElement('button');\n\t\tbtn.addEventListener('click', changePage);\n\t\tnav.appendChild(btn);\n\t};\n\tnav.childNodes[0].innerText = 'Home';\n\tnav.childNodes[1].innerText = 'Menu';\n\tnav.childNodes[2].innerText = 'Contact';\n\n\tcontent.appendChild(nav);\n}\n\nfunction changePage(e) {\n\tlet next_page = e.target.innerText;\n\tconsole.log(next_page);\n}\n\nmakeNavigator();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;