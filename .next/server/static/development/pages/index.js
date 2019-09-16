module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article.tsx":
/*!********************************!*\
  !*** ./components/Article.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Article.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Article = () => __jsx("section", {
  className: "jsx-2085888330",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2085888330",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "recent articles"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2085888330",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0FydGljbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQiIsImZpbGUiOiIvVXNlcnMvTWVoZGkvbWFyeWFtLXdlYnNpdGUtZnJvbnQvY29tcG9uZW50cy9BcnRpY2xlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFydGljbGUgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5yZWNlbnQgYXJ0aWNsZXM8L2gyPlxuICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iXX0= */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Article.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/Biography.tsx":
/*!**********************************!*\
  !*** ./components/Biography.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Biography.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Biography = () => __jsx("section", {
  className: "jsx-2419126139" + " " + "biography",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("img", {
  src: "../static/images/bio-image.jpg",
  className: "jsx-2419126139",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2419126139" + " " + "biography__content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2419126139",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "maryam tavakkoli"), __jsx("span", {
  className: "jsx-2419126139",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2419126139" + " " + "biography__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-2419126139",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "I am a second-year master student in \"Cloud computing and services\" with minors in \"Entrepreneurship and business\". I am doing my studies in \u201CEIT Digital Master School\u201D, where I will obtain a double-degree from two universities which I have studied in: Aalto University in Finland, and TU Delft in the Netherlands. Currently, I am working at Nokia Bell Labs, in Finland, as a thesis writer. In this position, I am conducting a research study on containerizing of a current telco IoT publish/subscribe application, and suitability of Kubernetes to be used for its deployment. Docker, Kubernetes, Nokia\u2019s cloud environment (NESC), Apache Kafka and GIT are technologies and tools which I am using during my work in Nokia.")), __jsx("div", {
  className: "jsx-2419126139" + " " + "biography__button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "/about",
  className: "jsx-2419126139",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "read more"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2419126139",
  __self: undefined
}, ".biography.jsx-2419126139{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;color:#292b5c;background:#ece9e6;background:-webkit-linear-gradient(to right,#ffffff,#ece9e6);background:linear-gradient(to right,#ffffff,#ece9e6);}.biography.jsx-2419126139>img.jsx-2419126139{height:350px;width:273px;padding:40px;}.biography__content.jsx-2419126139{width:40%;}.biography__content.jsx-2419126139>h2.jsx-2419126139{font-size:1.5rem;font-weight:300;text-transform:capitalize;}.biography__text.jsx-2419126139{width:423px;}.biography__text.jsx-2419126139>p.jsx-2419126139{word-wrap:break-word;overflow-wrap:break-word;font:normal normal normal 18px/1.4em \"times new roman\",times,serif;color:#27223e;line-height:1.4em;}.biography__content.jsx-2419126139>span.jsx-2419126139{display:block;width:116px;height:5px;border-top:2px solid rgba(39,34,62,1);}.biography__button.jsx-2419126139{height:40px;min-height:19px;width:142px;border:2px solid #27223e;color:#27223e;padding:4px 12px;font-size:0.7rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.biography__button.jsx-2419126139>a.jsx-2419126139{-webkit-text-decoration:none;text-decoration:none;text-transform:capitalize;font:normal normal normal 14px/1.4em helvetica-w01-roman, helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;white-space:nowrap;color:initial;}.biography__button.jsx-2419126139:hover{border-color:#ffffff;}.biography__button.jsx-2419126139:hover a.jsx-2419126139{color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0Jpb2dyYXBoeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUdzQixBQVVBLEFBS0gsQUFHTyxBQUtMLEFBR1MsQUFPUCxBQU1GLEFBYVMsQUFRQSxBQUdQLFVBL0NoQixFQVFBLEFBZ0JrQixDQTdCSixDQXVCQSxBQThCZCxHQTdDa0IsSUFRUyxBQWtDM0IsSUFqRGUsQ0F1QkYsRUFNQyxLQXJCYyxJQWdCZSxDQXZCM0MsRUE2QjJCLE1BZDRDLElBeUIzQyxTQWhDNUIsTUFzQmdCLFNBMUNTLENBb0N6QixDQWtCMkQsR0FYeEMsaUJBQ0EsaUJBaEJILEFBaUJDLGNBaEJHLENBaUJMLGlCQWhCZiw0QkE3QnFCLGVBc0RBLGNBUkksS0FTVCxjQUNoQiw2Q0F2RG1CLGlCQUNILGNBQ0ssSUE0Q0EsZUEzQzRDLDZEQUNSLGlCQTJDekQsb0NBMUNBIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0Jpb2dyYXBoeS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCaW9ncmFwaHkgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJpb2dyYXBoeVwiPlxuICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9iaW8taW1hZ2UuanBnXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb2dyYXBoeV9fY29udGVudFwiPlxuICAgICAgPGgyPm1hcnlhbSB0YXZha2tvbGk8L2gyPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9ncmFwaHlfX3RleHRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSSBhbSBhIHNlY29uZC15ZWFyIG1hc3RlciBzdHVkZW50IGluIFwiQ2xvdWQgY29tcHV0aW5nIGFuZCBzZXJ2aWNlc1wiXG4gICAgICAgICAgd2l0aCBtaW5vcnMgaW4gXCJFbnRyZXByZW5ldXJzaGlwIGFuZCBidXNpbmVzc1wiLiBJIGFtIGRvaW5nIG15IHN0dWRpZXNcbiAgICAgICAgICBpbiDigJxFSVQgRGlnaXRhbCBNYXN0ZXIgU2Nob29s4oCdLCB3aGVyZSBJIHdpbGwgb2J0YWluIGEgZG91YmxlLWRlZ3JlZVxuICAgICAgICAgIGZyb20gdHdvIHVuaXZlcnNpdGllcyB3aGljaCBJIGhhdmUgc3R1ZGllZCBpbjogQWFsdG8gVW5pdmVyc2l0eSBpblxuICAgICAgICAgIEZpbmxhbmQsIGFuZCBUVSBEZWxmdCBpbiB0aGUgTmV0aGVybGFuZHMuIEN1cnJlbnRseSwgSSBhbSB3b3JraW5nIGF0XG4gICAgICAgICAgTm9raWEgQmVsbCBMYWJzLCBpbiBGaW5sYW5kLCBhcyBhIHRoZXNpcyB3cml0ZXIuIEluIHRoaXMgcG9zaXRpb24sIElcbiAgICAgICAgICBhbSBjb25kdWN0aW5nIGEgcmVzZWFyY2ggc3R1ZHkgb24gY29udGFpbmVyaXppbmcgb2YgYSBjdXJyZW50IHRlbGNvXG4gICAgICAgICAgSW9UIHB1Ymxpc2gvc3Vic2NyaWJlIGFwcGxpY2F0aW9uLCBhbmQgc3VpdGFiaWxpdHkgb2YgS3ViZXJuZXRlcyB0byBiZVxuICAgICAgICAgIHVzZWQgZm9yIGl0cyBkZXBsb3ltZW50LiBEb2NrZXIsIEt1YmVybmV0ZXMsIE5va2lh4oCZcyBjbG91ZCBlbnZpcm9ubWVudFxuICAgICAgICAgIChORVNDKSwgQXBhY2hlIEthZmthIGFuZCBHSVQgYXJlIHRlY2hub2xvZ2llcyBhbmQgdG9vbHMgd2hpY2ggSSBhbVxuICAgICAgICAgIHVzaW5nIGR1cmluZyBteSB3b3JrIGluIE5va2lhLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvZ3JhcGh5X19idXR0b25cIj5cbiAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiPnJlYWQgbW9yZTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5iaW9ncmFwaHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGNvbG9yOiAjMjkyYjVjO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlOWU2O1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgI2VjZTllNik7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgI2VjZTllNik7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5ID4gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDI3M3B4O1xuICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgfVxuICAgICAgLmJpb2dyYXBoeV9fY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19jb250ZW50ID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X190ZXh0IHtcbiAgICAgICAgd2lkdGg6IDQyM3B4O1xuICAgICAgfVxuICAgICAgLmJpb2dyYXBoeV9fdGV4dCA+IHAge1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE4cHgvMS40ZW0gXCJ0aW1lcyBuZXcgcm9tYW5cIiwgdGltZXMsIHNlcmlmO1xuICAgICAgICBjb2xvcjogIzI3MjIzZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgfVxuICAgICAgLmJpb2dyYXBoeV9fY29udGVudCA+IHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDExNnB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMzksIDM0LCA2MiwgMSk7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIHdpZHRoOiAxNDJweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI3MjIzZTtcbiAgICAgICAgY29sb3I6ICMyNzIyM2U7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5iaW9ncmFwaHlfX2J1dHRvbiA+IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEuNGVtIGhlbHZldGljYS13MDEtcm9tYW4sXG4gICAgICAgICAgaGVsdmV0aWNhLXcwMi1yb21hbiwgaGVsdmV0aWNhLWx0LXcxMC1yb21hbiwgc2Fucy1zZXJpZjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19idXR0b246aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19idXR0b246aG92ZXIgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmlvZ3JhcGh5O1xuIl19 */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Biography.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Biography);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta */ "./components/meta.tsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.tsx");
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return __jsx("div", {
    className: "jsx-1163166551",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1163166551" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("header", {
    className: "jsx-1163166551",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1163166551" + " " + "header__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1163166551",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    className: "jsx-1163166551",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "maryam tavakkoli")), __jsx("span", {
    className: "jsx-1163166551",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "cloud computing"))), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1163166551",
    __self: undefined
  }, "header.jsx-1163166551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:440px;background:#4b6cb7;background-image:url(\"../static/images/header2.jpeg\");background-position:center;background-repeat:no-repeat;background-size:cover;}.header__content.jsx-1163166551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#292b5c;}.header__content.jsx-1163166551>h1.jsx-1163166551{margin:0;}h1.jsx-1163166551>a.jsx-1163166551{-webkit-text-decoration:none;text-decoration:none;padding:0;font:italic normal normal 45px/1.4em \"times new roman\",times,serif;font-weight:600;text-transform:capitalize;color:#292b5c;}.header__content.jsx-1163166551>span.jsx-1163166551{padding:0;font-size:13px;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUd3QixBQVlBLEFBT0osQUFHWSxBQVFYLFNBVlosQ0FXaUIsZUFDVSx5QkFUZixBQVVXLFVBVGdELGNBdkJsRCxBQVlHLHFEQVlOLGdCQUNVLFFBUVgsQ0FwQlEsY0FxQnpCLENBakN5QixFQXlCVCxjQUNoQixvRUFicUIsZUFaUixXQUNFLGFBQ00sbUJBQ21DLG1DQVV4QyxjQUNoQixLQVY2QiwyQkFDQyw0QkFDTixzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlLWZyb250L2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXRhIGZyb20gXCIuL21ldGFcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+bWFyeWFtIHRhdmFra29saTwvYT5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c3Bhbj5jbG91ZCBjb21wdXRpbmc8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0NDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI2Y2I3O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3N0YXRpYy9pbWFnZXMvaGVhZGVyMi5qcGVnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcl9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICMyOTJiNWM7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcl9fY29udGVudCA+IGgxIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDEgPiBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250OiBpdGFsaWMgbm9ybWFsIG5vcm1hbCA0NXB4LzEuNGVtIFwidGltZXMgbmV3IHJvbWFuXCIsIHRpbWVzLCBzZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIGNvbG9yOiAjMjkyYjVjO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJfX2NvbnRlbnQgPiBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  margin: "0 auto",
  padding: 0,
  border: "1px solid #DDD"
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



const Navbar = () => {
  const [fixed, setFixed] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]("");
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return __jsx("nav", {
    id: "myHeader",
    className: "jsx-3321873128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-3321873128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3321873128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3321873128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "About Me")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3321873128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Contact Me"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3321873128",
    __self: undefined
  }, ".sticky.jsx-3321873128{position:fixed;top:0;}nav.jsx-3321873128{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:50px;background-color:#092c59;}nav.jsx-3321873128>ul.jsx-3321873128{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3321873128{-webkit-text-decoration:none;text-decoration:none;color:white;padding:8px 16px;font-size:1rem;}a.jsx-3321873128:hover{color:#dfcfba;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL05hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUcwQixBQUlGLEFBT0EsQUFLUSxBQU1QLGNBQ2hCLENBdEJRLE1BQ1IsNkJBZWMsWUFDSyxZQWJFLEFBT0EsS0FPSixlQUNqQix5RUFkYSxBQVFiLFdBUGMsWUFDYSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlLWZyb250L2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUhlYWRlclwiKTtcbiAgICBjb25zdCBzdGlja3kgPSBoZWFkZXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbENhbGxCYWNrID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreSkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH0pIGFzIGFueTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spIGFzIGFueTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG5hdiBpZD1cIm15SGVhZGVyXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQgTWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGE+Q29udGFjdCBNZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MmM1OTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgPiB1bCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC8vcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RmY2ZiYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19 */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Navbar.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/meta.tsx":
/*!*****************************!*\
  !*** ./components/meta.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/meta.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-2932361920",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-2932361920",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-2932361920",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2932361920",
  __self: undefined
}, "*,*:before,*:after{box-sizing:border-box;}body{margin:0;padding:0;background:#000;color:#fff;height:100vh;font-size:10px;font-family:Arial,Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL21ldGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF1QixBQUsrQixBQUdiLFNBQ0MsVUFDTSxHQUpsQixhQUthLFdBQ0UsYUFDRSxlQUMwQix1Q0FDM0MiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlLWZyb250L2NvbXBvbmVudHMvbWV0YS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKixcbiAgICAgICo6YmVmb3JlLFxuICAgICAgKjphZnRlciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/meta.tsx */")));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Biography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Biography */ "./components/Biography.tsx");
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Article */ "./components/Article.tsx");
var _jsxFileName = "/Users/Mehdi/maryam-website-front/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const App = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_components_Biography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_components_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Mehdi/maryam-website-front/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map