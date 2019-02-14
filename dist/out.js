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
eval("\n\nvar _game = __webpack_require__(/*! ./game */ \"./js/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var _this = this;\n\n    document.querySelector('#start button').addEventListener('click', function (e) {\n\n        document.querySelector('#start').classList.add('invisible');\n        document.querySelector('#score').classList.remove('invisible');\n        document.querySelector('#board').classList.remove('invisible');\n        var game = new _game.Game();\n        game.showFurry();\n        game.showCarrot();\n        game.showFoxInterval();\n        game.startGame();\n\n        document.addEventListener('keydown', function (event) {\n            game.turnFurry(event);\n        });\n    });\n\n    document.querySelector('#over button').addEventListener('click', function (e) {\n        _this.score = 0;\n        document.querySelector(\"#score strong\").innerText = _this.score;\n        document.querySelector('#over').classList.add('invisible');\n        var game = new _game.Game();\n        game.showFurry();\n        game.showCarrot();\n        game.showFoxInterval();\n        game.startGame();\n\n        document.addEventListener('keydown', function (event) {\n            game.turnFurry(event);\n        });\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/carrot.js":
/*!**********************!*\
  !*** ./js/carrot.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Carrot = function Carrot(x, y) {\n    _classCallCheck(this, Carrot);\n\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nexports.Carrot = Carrot;\n\n//# sourceURL=webpack:///./js/carrot.js?");

/***/ }),

/***/ "./js/fox.js":
/*!*******************!*\
  !*** ./js/fox.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Fox = function Fox(x, y) {\n    _classCallCheck(this, Fox);\n\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nexports.Fox = Fox;\n\n//# sourceURL=webpack:///./js/fox.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Furry = function Furry(x, y, direction) {\n    _classCallCheck(this, Furry);\n\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nexports.Furry = Furry;\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Game = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _furry = __webpack_require__(/*! ./furry */ \"./js/furry.js\");\n\nvar _carrot = __webpack_require__(/*! ./carrot */ \"./js/carrot.js\");\n\nvar _fox = __webpack_require__(/*! ./fox */ \"./js/fox.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n    function Game(board, furry, carrot, score, index) {\n        _classCallCheck(this, Game);\n\n        this.board = document.querySelectorAll('#board div');\n        this.furry = new _furry.Furry();\n        this.carrot = new _carrot.Carrot();\n        this.fox = new _fox.Fox();\n        this.score = 0;\n        this.index = function (x, y) {\n            return x + y * 10;\n        };\n\n        var self = this;\n    }\n\n    _createClass(Game, [{\n        key: 'hideVisibleFurry',\n        value: function hideVisibleFurry() {\n            var hideFurry = document.querySelector(\".furry\");\n            if (hideFurry !== null) {\n                hideFurry.classList.remove('furry');\n            }\n        }\n    }, {\n        key: 'hideVisibleFox',\n        value: function hideVisibleFox() {\n            var hideFox = document.querySelector(\".fox\");\n            if (hideFox !== null) {\n                hideFox.classList.remove('fox');\n            }\n        }\n    }, {\n        key: 'showFurry',\n        value: function showFurry() {\n            this.hideVisibleFurry();\n            this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n        }\n    }, {\n        key: 'showCarrot',\n        value: function showCarrot() {\n            this.board[this.index(this.carrot.x, this.carrot.y)].classList.add('carrot');\n        }\n    }, {\n        key: 'showFox',\n        value: function showFox() {\n            this.board[this.index(this.fox.x, this.fox.y)].classList.add('fox');\n        }\n    }, {\n        key: 'showFoxInterval',\n        value: function showFoxInterval() {\n            var _this = this;\n\n            this.foxInterval = setInterval(function () {\n                // console.log(this.fox)\n                setTimeout(function () {\n                    _this.fox = new _fox.Fox();\n                    _this.showFox();\n                }, 0);\n\n                setTimeout(function () {\n                    return _this.hideVisibleFox();\n                }, 3500);\n            }, 7000);\n        }\n    }, {\n        key: 'startGame',\n        value: function startGame() {\n            var _this2 = this;\n\n            this.idSetInterval = setInterval(function () {\n                _this2.moveFurry();\n            }, 250);\n        }\n    }, {\n        key: 'checkCarrotCollision',\n        value: function checkCarrotCollision() {\n            if (this.furry.x === this.carrot.x && this.furry.y === this.carrot.y) {\n                console.log(\"to samo miejsce\");\n                this.board[this.index(this.carrot.x, this.carrot.y)].classList.remove('carrot');\n                this.score++;\n                document.querySelector(\"#score strong\").innerText = this.score;\n                this.carrot = new _carrot.Carrot();\n                this.showCarrot();\n            }\n        }\n    }, {\n        key: 'moveFurry',\n        value: function moveFurry() {\n\n            if (this.furry.direction === \"right\") {\n                this.furry.x += 1;\n            } else if (this.furry.direction === \"left\") {\n                this.furry.x -= 1;\n            } else if (this.furry.direction === \"up\") {\n                this.furry.y += 1;\n            } else if (this.furry.direction === \"down\") {\n                this.furry.y -= 1;\n            }\n\n            // this.gameOver();\n            if (!this.gameOver()) {\n                this.showFurry();\n                this.checkCarrotCollision();\n            }\n        }\n    }, {\n        key: 'turnFurry',\n        value: function turnFurry(event) {\n            console.log(\"Działą\");\n            console.log(event);\n            switch (event.which) {\n                case 37:\n                    this.furry.direction = 'left';\n                    break;\n                case 38:\n                    this.furry.direction = \"down\";\n                    break;\n                case 39:\n                    this.furry.direction = \"right\";\n                    break;\n                case 40:\n                    this.furry.direction = \"up\";\n                    break;\n            }\n        }\n    }, {\n        key: 'gameOver',\n        value: function gameOver() {\n            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9 || this.furry.x === this.fox.x && this.furry.y === this.fox.y) {\n                console.log(\"ałt\");\n                clearInterval(this.idSetInterval);\n                clearInterval(this.foxInterval);\n                this.hideVisibleFurry();\n                this.hideVisibleFox();\n                var pre = document.querySelector('#over pre');\n                pre.innerText = \"Your score:\" + this.score;\n                over.classList.remove('invisible');\n                document.querySelector('.carrot').classList.remove('carrot');\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }]);\n\n    return Game;\n}();\n\nexports.Game = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });