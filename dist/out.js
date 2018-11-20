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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nconsole.log('hello');\n\nvar Furry = function Furry(x, y, direction) {\n    _classCallCheck(this, Furry);\n\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nvar Coin = function Coin(x, y) {\n    _classCallCheck(this, Coin);\n\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nvar Game = function () {\n    function Game(board, furry, coin, score, index) {\n        _classCallCheck(this, Game);\n\n        this.board = document.querySelectorAll('#board div');;\n        this.furry = new Furry();\n        this.coin = new Coin();\n        this.score = 0;\n        this.index = function (x, y) {\n            return x + y * 10;\n        };\n    }\n\n    _createClass(Game, [{\n        key: 'showFurry',\n        value: function showFurry() {\n\n            this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n        }\n    }, {\n        key: 'showCoin',\n        value: function showCoin() {\n            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n        }\n    }, {\n        key: 'startGame',\n        value: function startGame() {\n            var _this = this;\n\n            this.idSetInterval = setInterval(function () {\n                _this.moveFurry();\n            }, 250);\n        }\n    }, {\n        key: 'moveFurry',\n        value: function moveFurry() {\n            this.hideVisibleFurry();\n            if (this.furry.direction === \"right\") {\n                this.furry.x = this.furry.x + 1;\n            } else if (this.furry.direction === \"left\") {\n                this.furry.x = this.furry.x - 1;\n            } else if (this.furry.direction === \"up\") {\n                this.furry.y += 1;\n            } else if (this.furry.direction === \"down\") {\n                this.furry.y -= 1;\n            }\n\n            this.showFurry();\n        }\n    }, {\n        key: 'hideVisibleFurry',\n        value: function hideVisibleFurry() {\n            document.querySelector(\".furry\").classList.remove('furry');\n            console.log(document.querySelector(\".furry\"));\n        }\n    }]);\n\n    return Game;\n}();\n\nvar game = new Game();\ngame.showFurry();\ngame.showCoin();\ngame.startGame();\n\n// console.log(new Furry())\n// console.log(new Coin())\n// console.log(new Game())\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });