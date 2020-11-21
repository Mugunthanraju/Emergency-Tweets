module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/twit.js":
/*!*********************!*\
  !*** ./lib/twit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var twit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twit */ \"twit\");\n/* harmony import */ var twit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(twit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst T = new twit__WEBPACK_IMPORTED_MODULE_0___default.a({\n  consumer_key: process.env.TWITTER_CONSUMER_KEY,\n  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,\n  access_token: process.env.TWITTER_ACCESS_TOKEN,\n  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (T);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdHdpdC5qcz9hNjdjIl0sIm5hbWVzIjpbIlQiLCJUd2l0IiwiY29uc3VtZXJfa2V5IiwicHJvY2VzcyIsImVudiIsIlRXSVRURVJfQ09OU1VNRVJfS0VZIiwiY29uc3VtZXJfc2VjcmV0IiwiVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQiLCJhY2Nlc3NfdG9rZW4iLCJUV0lUVEVSX0FDQ0VTU19UT0tFTiIsImFjY2Vzc190b2tlbl9zZWNyZXQiLCJUV0lUVEVSX0FDQ0VTU19UT0tFTl9TRUNSRVQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsQ0FBQyxHQUFHLElBQUlDLDJDQUFKLENBQVM7QUFDakJDLGNBQVksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQURUO0FBRWpCQyxpQkFBZSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsdUJBRlo7QUFHakJDLGNBQVksRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLG9CQUhUO0FBSWpCQyxxQkFBbUIsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPO0FBSmhCLENBQVQsQ0FBVjtBQU9lWCxnRUFBZiIsImZpbGUiOiIuL2xpYi90d2l0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3aXQgZnJvbSAndHdpdCdcblxuY29uc3QgVCA9IG5ldyBUd2l0KHtcbiAgY29uc3VtZXJfa2V5OiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX0tFWSxcbiAgY29uc3VtZXJfc2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCxcbiAgYWNjZXNzX3Rva2VuOiBwcm9jZXNzLmVudi5UV0lUVEVSX0FDQ0VTU19UT0tFTixcbiAgYWNjZXNzX3Rva2VuX3NlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9BQ0NFU1NfVE9LRU5fU0VDUkVUXG59KVxuXG5leHBvcnQgZGVmYXVsdCBUXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/twit.js\n");

/***/ }),

/***/ "./pages/api/new.js":
/*!**************************!*\
  !*** ./pages/api/new.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_twit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/twit */ \"./lib/twit.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  //res.status(200).json({ message: 'Tweet gönderildi :p' })\n  //demo sayfasında benim adıma tweet atamayın diye bu alanı yorumladım.\n  const {\n    tweet\n  } = req.body;\n  if (!tweet) return res.status(400).json({\n    message: 'Tweet cannot be empty!'\n  });\n  _lib_twit__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('statuses/update', {\n    status: tweet\n  }, function (err, data, response) {\n    if (err) {\n      return res.status(400).json({\n        message: 'Ups! An error occured.',\n        err: err\n      });\n    } //\n\n\n    res.status(200).json(data);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LmpzPzcxZmYiXSwibmFtZXMiOlsicmVxIiwicmVzIiwidHdlZXQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJUd2l0IiwicG9zdCIsImVyciIsImRhdGEiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzVCO0FBRUE7QUFFQSxRQUFNO0FBQUVDO0FBQUYsTUFBWUYsR0FBRyxDQUFDRyxJQUF0QjtBQUVBLE1BQUksQ0FBQ0QsS0FBTCxFQUFZLE9BQU9ELEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQXJCLENBQVA7QUFFWkMsbURBQUksQ0FBQ0MsSUFBTCxDQUFVLGlCQUFWLEVBQTZCO0FBQUVKLFVBQU0sRUFBRUY7QUFBVixHQUE3QixFQUFnRCxVQUMvQ08sR0FEK0MsRUFFL0NDLElBRitDLEVBRy9DQyxRQUgrQyxFQUk5QztBQUNELFFBQUlGLEdBQUosRUFBUztBQUNSLGFBQU9SLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRSx3QkFBWDtBQUFxQ0csV0FBRyxFQUFFQTtBQUExQyxPQUFyQixDQUFQO0FBQ0EsS0FIQSxDQUlEOzs7QUFDQVIsT0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJLLElBQXJCO0FBQ0EsR0FWRDtBQVdBLENBcEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0IGZyb20gJy4uLy4uL2xpYi90d2l0J1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcblx0Ly9yZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdUd2VldCBnw7ZuZGVyaWxkaSA6cCcgfSlcblxuXHQvL2RlbW8gc2F5ZmFzxLFuZGEgYmVuaW0gYWTEsW1hIHR3ZWV0IGF0YW1hecSxbiBkaXllIGJ1IGFsYW7EsSB5b3J1bWxhZMSxbS5cblxuXHRjb25zdCB7IHR3ZWV0IH0gPSByZXEuYm9keVxuXG5cdGlmICghdHdlZXQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdUd2VldCBjYW5ub3QgYmUgZW1wdHkhJyB9KVxuXG5cdFR3aXQucG9zdCgnc3RhdHVzZXMvdXBkYXRlJywgeyBzdGF0dXM6IHR3ZWV0IH0sIGZ1bmN0aW9uIChcblx0XHRlcnIsXG5cdFx0ZGF0YSxcblx0XHRyZXNwb25zZVxuXHQpIHtcblx0XHRpZiAoZXJyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnVXBzISBBbiBlcnJvciBvY2N1cmVkLicsIGVycjogZXJyIH0pXG5cdFx0fVxuXHRcdC8vXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcblx0fSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new.js\n");

/***/ }),

/***/ "twit":
/*!***********************!*\
  !*** external "twit" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"twit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0d2l0XCI/MmZiZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0d2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHdpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///twit\n");

/***/ })

/******/ });