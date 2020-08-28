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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Card = /*#__PURE__*/function () {\n  function Card(item, cardSelector) {\n    var _this = this;\n\n    _classCallCheck(this, Card);\n\n    _defineProperty(this, \"_toggleDisplay\", function (evt) {\n      _this._addButton.classList.toggle('card__display-none');\n\n      _this._likesText.classList.toggle('card__display-none');\n\n      _this._messagesText.classList.toggle('card__display-none');\n\n      if (!_this._addButton.classList.contains('card__display-none')) {\n        _this._priceText.style.color = \"#8c84f9\";\n      } else {\n        _this._priceText.style.color = \"#333333\";\n      }\n    });\n\n    this._link = item.link;\n    this._text = item.text;\n    this._price = item.price;\n    this._likes = item.likes;\n    this._messages = item.messages;\n    this._cardSelector = cardSelector;\n  }\n\n  _createClass(Card, [{\n    key: \"_getTemplate\",\n    value: function _getTemplate() {\n      var cardTemplate = document.querySelector(this._cardSelector).content;\n      var newTemplate = cardTemplate.cloneNode(true);\n      return newTemplate;\n    }\n  }, {\n    key: \"generateCard\",\n    value: function generateCard() {\n      this._element = this._getTemplate();\n      this._priceText = this._element.querySelector('.card__price');\n      this._addButton = this._element.querySelector('.card__add-button');\n      this._likesText = this._element.querySelector('.card__likes');\n      this._messagesText = this._element.querySelector('.card__messages');\n      this._element.querySelector('.card__image').src = this._link;\n      this._element.querySelector('.card__title').textContent = this._text;\n      this._priceText.textContent = this._price;\n      this._likesText.textContent = this._likes;\n      this._messagesText.textContent = this._messages;\n\n      this._addButton.classList.toggle('card__display-none');\n\n      this._likesText.classList.toggle('card__display-none');\n\n      this._messagesText.classList.toggle('card__display-none');\n\n      this._setEventListeners();\n\n      return this._element;\n    }\n  }, {\n    key: \"_setEventListeners\",\n    value: function _setEventListeners() {\n      this._card = this._element.querySelector('.card');\n\n      this._card.addEventListener('mouseover', this._toggleDisplay);\n\n      this._card.addEventListener('mouseout', this._toggleDisplay);\n    }\n  }]);\n\n  return Card;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/Card.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/index.css?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ \"./src/components/Card.js\");\n\n\n //функция для отрисовки карточек\n\nfunction renderCards(cards, containerSelector) {\n  cards.forEach(function (item) {\n    var cardList = document.querySelector(containerSelector);\n    var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](item, '.card__template');\n    var cardElement = card.generateCard();\n    cardList.append(cardElement);\n  });\n} //отрисовка карточек с сумками на странице\n\n\nrenderCards(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"cardBags\"], '.cards'); //отрисовка карточек с часами на странице\n\nrenderCards(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"watches\"], '.watches__cards'); //массив со всеми товарами\n\nvar allCards = [_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"watches\"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"mobile\"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"toys\"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"cloth\"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"fashion\"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"furniture\"]];\nvar navList = document.querySelectorAll('.watches__nav-item'); //отрисовка карточек по ховеру на нужную категорию товаров\n\nnavList.forEach(function (item) {\n  item.addEventListener('mouseover', function () {\n    document.querySelector('.watches__nav-item-watches').classList.remove('watches__nav-item_type_active');\n    item.classList.add('watches__nav-item_type_active');\n    var name = item.textContent;\n    allCards.forEach(function (list) {\n      var type = list[0].type;\n\n      if (type === name) {\n        document.querySelector('.watches__cards').innerHTML = '';\n        renderCards(list, '.watches__cards');\n      }\n    });\n  });\n  item.addEventListener('mouseout', function () {\n    item.classList.remove('watches__nav-item_type_active');\n  });\n});\n\n//# sourceURL=webpack:///./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: cardBags, watches, mobile, toys, cloth, fashion, furniture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardBags\", function() { return cardBags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watches\", function() { return watches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mobile\", function() { return mobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toys\", function() { return toys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloth\", function() { return cloth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fashion\", function() { return fashion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furniture\", function() { return furniture; });\nvar cardBags = [{\n  link: \"https://elite-lombard.ru/upload/medialibrary/a78/a78d992de55f4740f7a5f074a0cc452b.jpg\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230\n}, {\n  link: \"https://elite-lombard.ru/upload/medialibrary/a78/a78d992de55f4740f7a5f074a0cc452b.jpg\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230\n}, {\n  link: \"http://fashionpro.me/wp-content/uploads/2016/06/91kCgu3u5L._UL1500_.jpg\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$35.45\",\n  likes: 55,\n  messages: 35\n}, {\n  link: \"https://elite-lombard.ru/upload/medialibrary/a78/a78d992de55f4740f7a5f074a0cc452b.jpg\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$43.55\",\n  likes: 410,\n  messages: 45\n}, {\n  link: \"http://fashionpro.me/wp-content/uploads/2016/06/91kCgu3u5L._UL1500_.jpg\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$35.45\",\n  likes: 55,\n  messages: 35\n}, {\n  link: \"http://fashionpro.me/wp-content/uploads/2016/06/91kCgu3u5L._UL1500_.jpg\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$22.55\",\n  likes: 210,\n  messages: 50\n}];\nvar watches = [{\n  link: \"https://static.price.ru/images/models/-/naruchnie-chasi/stuhrling-3913.3/c93113de608444639713d80ad1be0b20.JPEG\",\n  text: \"Fashion Genuine Chain Watch\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Watches\"\n}, {\n  link: \"https://static.price.ru/images/models/-/naruchnie-chasi/stuhrling-3913.3/c93113de608444639713d80ad1be0b20.JPEG\",\n  text: \"Fashion Genuine Chain Watch\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Watches\"\n}, {\n  link: \"https://static.price.ru/images/models/-/naruchnie-chasi/stuhrling-3913.3/c93113de608444639713d80ad1be0b20.JPEG\",\n  text: \"Fashion Genuine Chain Watch\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Watches\"\n}, {\n  link: \"https://static.price.ru/images/models/-/naruchnie-chasi/stuhrling-3913.3/c93113de608444639713d80ad1be0b20.JPEG\",\n  text: \"Fashion Genuine Chain Watch\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Watches\"\n}, {\n  link: \"https://static.price.ru/images/models/-/naruchnie-chasi/stuhrling-3913.3/c93113de608444639713d80ad1be0b20.JPEG\",\n  text: \"Fashion Genuine Chain Watch\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Watches\"\n}, {\n  link: \"https://static.price.ru/images/models/-/naruchnie-chasi/stuhrling-3913.3/c93113de608444639713d80ad1be0b20.JPEG\",\n  text: \"Black Genuine Leather Bags\",\n  price: \"$22.55\",\n  likes: 210,\n  messages: 50,\n  type: \"Watches\"\n}];\nvar mobile = [{\n  link: \"https://cache3.youla.io/files/images/780_780/5a/29/5a298a1aaaab2866e13ef856.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Mobile\"\n}, {\n  link: \"https://cache3.youla.io/files/images/780_780/5a/29/5a298a1aaaab2866e13ef856.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Mobile\"\n}, {\n  link: \"https://cache3.youla.io/files/images/780_780/5a/29/5a298a1aaaab2866e13ef856.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Mobile\"\n}, {\n  link: \"https://cache3.youla.io/files/images/780_780/5a/29/5a298a1aaaab2866e13ef856.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Mobile\"\n}, {\n  link: \"https://cache3.youla.io/files/images/780_780/5a/29/5a298a1aaaab2866e13ef856.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Mobile\"\n}, {\n  link: \"https://cache3.youla.io/files/images/780_780/5a/29/5a298a1aaaab2866e13ef856.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Mobile\"\n}];\nvar toys = [{\n  link: \"https://sc01.alicdn.com/kf/HTB1wEIKX.zrK1RjSspmq6AOdFXaf/52-Inch-Giant-Big-Huge-Toys-doll.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Toys\"\n}, {\n  link: \"https://sc01.alicdn.com/kf/HTB1wEIKX.zrK1RjSspmq6AOdFXaf/52-Inch-Giant-Big-Huge-Toys-doll.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Toys\"\n}, {\n  link: \"https://sc01.alicdn.com/kf/HTB1wEIKX.zrK1RjSspmq6AOdFXaf/52-Inch-Giant-Big-Huge-Toys-doll.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Toys\"\n}, {\n  link: \"https://sc01.alicdn.com/kf/HTB1wEIKX.zrK1RjSspmq6AOdFXaf/52-Inch-Giant-Big-Huge-Toys-doll.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Toys\"\n}, {\n  link: \"https://sc01.alicdn.com/kf/HTB1wEIKX.zrK1RjSspmq6AOdFXaf/52-Inch-Giant-Big-Huge-Toys-doll.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Toys\"\n}, {\n  link: \"https://sc01.alicdn.com/kf/HTB1wEIKX.zrK1RjSspmq6AOdFXaf/52-Inch-Giant-Big-Huge-Toys-doll.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Toys\"\n}];\nvar cloth = [{\n  link: \"https://a.lmcdn.ru/product/W/A/WA007EWEAZ69_1_v1.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Cloth\"\n}, {\n  link: \"https://a.lmcdn.ru/product/W/A/WA007EWEAZ69_1_v1.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Cloth\"\n}, {\n  link: \"https://a.lmcdn.ru/product/W/A/WA007EWEAZ69_1_v1.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Cloth\"\n}, {\n  link: \"https://a.lmcdn.ru/product/W/A/WA007EWEAZ69_1_v1.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Cloth\"\n}, {\n  link: \"https://a.lmcdn.ru/product/W/A/WA007EWEAZ69_1_v1.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Cloth\"\n}, {\n  link: \"https://a.lmcdn.ru/product/W/A/WA007EWEAZ69_1_v1.jpg\",\n  text: \"Fashion Genuine Mobile\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Cloth\"\n}];\nvar fashion = [{\n  link: \"https://cdn1.ozone.ru/multimedia/1031235678.jpg\",\n  text: \"Fashion Genuine jewellery\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Fashion\"\n}, {\n  link: \"https://cdn1.ozone.ru/multimedia/1031235678.jpg\",\n  text: \"Fashion Genuine jewellery\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Fashion\"\n}, {\n  link: \"https://cdn1.ozone.ru/multimedia/1031235678.jpg\",\n  text: \"Fashion Genuine jewellery\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Fashion\"\n}, {\n  link: \"https://cdn1.ozone.ru/multimedia/1031235678.jpg\",\n  text: \"Fashion Genuine jewellery\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Fashion\"\n}, {\n  link: \"https://cdn1.ozone.ru/multimedia/1031235678.jpg\",\n  text: \"Fashion Genuine jewellery\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Fashion\"\n}, {\n  link: \"https://cdn1.ozone.ru/multimedia/1031235678.jpg\",\n  text: \"Fashion Genuine jewellery\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Fashion\"\n}];\nvar furniture = [{\n  link: \"https://belmebelcrimea.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/premium_3370s.jpg\",\n  text: \"Fashion Genuine Furniture\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Furniture\"\n}, {\n  link: \"https://belmebelcrimea.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/premium_3370s.jpg\",\n  text: \"Fashion Genuine Furniture\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Furniture\"\n}, {\n  link: \"https://belmebelcrimea.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/premium_3370s.jpg\",\n  text: \"Fashion Genuine Furniture\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Furniture\"\n}, {\n  link: \"https://belmebelcrimea.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/premium_3370s.jpg\",\n  text: \"Fashion Genuine Furniture\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Furniture\"\n}, {\n  link: \"https://belmebelcrimea.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/premium_3370s.jpg\",\n  text: \"Fashion Genuine Furniture\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Furniture\"\n}, {\n  link: \"https://belmebelcrimea.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/premium_3370s.jpg\",\n  text: \"Fashion Genuine Furniture\",\n  price: \"$10.55\",\n  likes: 110,\n  messages: 230,\n  type: \"Furniture\"\n}];\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ })

/******/ });