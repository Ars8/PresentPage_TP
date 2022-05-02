/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/progress */ "./src/js/modules/progress.js");
/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buttons */ "./src/js/modules/buttons.js");
/* harmony import */ var _modules_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/color */ "./src/js/modules/color.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_progress__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_buttons__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_color__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/buttons.js":
/*!***********************************!*\
  !*** ./src/js/modules/buttons.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const buttons = () => {
  function addEventOnButton(triggerSelector) {
    const trigger = document.querySelector(triggerSelector);
    trigger.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
        console.log(`btn ${triggerSelector} was pressed`);
      } else {
        console.log('btn was pressed');
      }
    });
  }

  ;
  addEventOnButton('.header__prev__btn');
  addEventOnButton('.header__next__btn');
  addEventOnButton('.header__down__btn');
  addEventOnButton('.header__group__btn');
  addEventOnButton('.main__progress__status__btn');
};

/* harmony default export */ __webpack_exports__["default"] = (buttons);

/***/ }),

/***/ "./src/js/modules/color.js":
/*!*********************************!*\
  !*** ./src/js/modules/color.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const color = () => {
  function changeColor(titleSelector) {
    const title = document.querySelector(titleSelector);

    if (+title.innerHTML < 100) {
      title.style.color = "red";
    } else if (+title.innerHTML === 100) {
      title.style.color = "yellow";
    } else if (+title.innerHTML > 100) {
      title.style.color = "#36C496";
    }

    ;
  }

  ;
  changeColor('.main__statistic__value__result');
};

/* harmony default export */ __webpack_exports__["default"] = (color);

/***/ }),

/***/ "./src/js/modules/progress.js":
/*!************************************!*\
  !*** ./src/js/modules/progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const move = () => {
  const plan = document.querySelector('#plan');
  const fact = document.querySelector('#fact');
  const elem = document.querySelector('#myBar');

  function calc() {
    if (+fact.value > +plan.value) {
      elem.style.width = 0 + "%";
      alert('Слишком много!');
      fact.value = '';
    } else {
      let factPercent = fact.value / plan.value * 100;
      elem.style.width = factPercent + "%";
    }
  }

  fact.addEventListener('input', calc);
  console.log(plan.value);
  console.log(fact.value);
  console.log(elem);
};

/* harmony default export */ __webpack_exports__["default"] = (move);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map