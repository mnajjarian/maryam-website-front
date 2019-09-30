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

/***/ "../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

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

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

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

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

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

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/Biography.tsx":
/*!**********************************!*\
  !*** ./components/Biography.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionLayout */ "./components/SectionLayout.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Biography = () => __jsx(_SectionLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  imgUrl: "../static/images/bio-image.jpg",
  title: "maryam tavakkoli",
  href: "/about-me",
  btnText: "read more",
  flexDirect: "row",
  borderRadius: "50%",
  text: "I am a second-year master student in \"Cloud computing and services\" with minors in \"Entrepreneurship and business\". I am doing my studies in \u201CEIT Digital Master School\u201D, where I will obtain a double-degree from two universities which I have studied in: Aalto University in Finland, and TU Delft in the Netherlands. Currently, I am working at Nokia Bell Labs, in Finland, as a thesis writer. In this position, I am conducting a research study on containerizing of a current telco IoT publish/subscribe application..."
});

/* harmony default export */ __webpack_exports__["default"] = (Biography);

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("section", {
  className: "jsx-57937871" + " " + "footer"
}, __jsx("h2", {
  className: "jsx-57937871"
}, "Contact"), __jsx("ul", {
  className: "jsx-57937871"
}, __jsx("li", {
  className: "jsx-57937871"
}, __jsx("a", {
  href: "https://www.linkedin.com/in/maryam-tavakoli/",
  target: "_blank",
  className: "jsx-57937871"
}, __jsx("div", {
  className: "jsx-57937871" + " " + "linkedin"
}))), __jsx("li", {
  className: "jsx-57937871"
}, __jsx("a", {
  href: "https://www.facebook.com/maryam.tavakkoli.39566",
  target: "_blank",
  className: "jsx-57937871"
}, __jsx("div", {
  className: "jsx-57937871" + " " + "facebook"
})))), __jsx("span", {
  className: "jsx-57937871"
}, "site by", ' ', __jsx("a", {
  href: "https://github.com/mnajjarian",
  target: "_blank",
  className: "jsx-57937871"
}, "mahdi najjarian")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "57937871"
}, ".footer.jsx-57937871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;background:#000046;background:-webkit-linear-gradient( to right, #1cb5e0, #000046 );background:linear-gradient(to right,#1cb5e0,#000046);}ul.jsx-57937871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style-type:none;margin:0;padding:0;}ul.jsx-57937871>li.jsx-57937871{padding:0 10px;-webkit-animation:bounce-jsx-57937871 1s ease infinite alternate;animation:bounce-jsx-57937871 1s ease infinite alternate;}.linkedin.jsx-57937871{width:50px;height:50px;-webkit-mask:url('../static/icons/linkedin.svg') no-repeat center;-webkit-mask:url('../static/icons/linkedin.svg') no-repeat center;mask:url('../static/icons/linkedin.svg') no-repeat center;background-color:white;background-position:center;background-repeat:no-repeat;}.linkedin.jsx-57937871:hover{background-color:var(--light-french);}.facebook.jsx-57937871{width:50px;height:50px;-webkit-mask:url('../static/icons/facebook.svg') no-repeat center;-webkit-mask:url('../static/icons/facebook.svg');mask:url('../static/icons/facebook.svg');background-color:white;background-position:center;background-repeat:no-repeat;}.facebook.jsx-57937871:hover{background-color:var(--light-french);}span.jsx-57937871{font-size:0.7rem;text-transform:capitalize;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin:20px;color:white;word-spacing:3px;}a.jsx-57937871{-webkit-text-decoration:none;text-decoration:none;color:var(--light-french);word-spacing:0;}h2.jsx-57937871{font-size:2rem;-webkit-letter-spacing:10px;-moz-letter-spacing:10px;-ms-letter-spacing:10px;letter-spacing:10px;text-shadow:3px 6px 3px rgba(0,0,0,0.1);font-variant:small-caps;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHc0IsQUFjQSxBQVFFLEFBSUosQUFVMEIsQUFHMUIsQUFVMEIsQUFHcEIsQUFRSSxBQUtOLFdBdENILEFBYUEsSUFqQmdDLEFBMkN4QixFQWJNLE1BeEJsQixBQWFBLGNBTFYsQUFhQSxNQUlzQixPQU9NLHdCQTVESixBQWNDLEVBK0NSLGFBaEMyQyxBQWFqQixFQW9CM0MscUJBSTZDLEdBWi9CLFlBQ0EsVUFoQ2QsRUFpQ21CLGFBdkRNLEFBa0VDLElBVjFCLGlCQTFDcUIsR0FxRHJCLEdBekJ5Qix1QkFDSSxXQWRKLGdCQWVLLE9BZEQsZUE3QlIsTUE0Q3JCLE1BZDhCLEdBaEJQLHFCQUNaLElBZ0JYLEtBZlksVUFDWixzQ0FoQmUsYUFDTSxtQkFLbEIsaUVBQ3NELHFEQUN6RCIsImZpbGUiOiIvVXNlcnMvTWVoZGkvbWFyeWFtLXdlYnNpdGUvc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgPGgyPkNvbnRhY3Q8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hcnlhbS10YXZha29saS9cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tYXJ5YW0udGF2YWtrb2xpLjM5NTY2XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHNwYW4+XG4gICAgICBzaXRlIGJ5eycgJ31cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbW5hamphcmlhblwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBtYWhkaSBuYWpqYXJpYW5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDQ2O1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAjMWNiNWUwLFxuICAgICAgICAgICMwMDAwNDZcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWNiNWUwLCAjMDAwMDQ2KTtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgdWwgPiBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICB9XG4gICAgICAubGlua2VkaW4ge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAtd2Via2l0LW1hc2s6IHVybCgnLi4vc3RhdGljL2ljb25zL2xpbmtlZGluLnN2ZycpIG5vLXJlcGVhdFxuICAgICAgICAgIGNlbnRlcjtcbiAgICAgICAgbWFzazogdXJsKCcuLi9zdGF0aWMvaWNvbnMvbGlua2VkaW4uc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIC5saW5rZWRpbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWZyZW5jaCk7XG4gICAgICB9XG4gICAgICAuZmFjZWJvb2sge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAtd2Via2l0LW1hc2s6IHVybCgnLi4vc3RhdGljL2ljb25zL2ZhY2Vib29rLnN2ZycpIG5vLXJlcGVhdFxuICAgICAgICAgIGNlbnRlcjtcbiAgICAgICAgbWFzazogdXJsKCcuLi9zdGF0aWMvaWNvbnMvZmFjZWJvb2suc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAuZmFjZWJvb2s6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1mcmVuY2gpO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3b3JkLXNwYWNpbmc6IDNweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1mcmVuY2gpO1xuICAgICAgICB3b3JkLXNwYWNpbmc6IDA7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Mehdi/maryam-website/src/components/Footer.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const links = [{
  title: "home",
  href: "/"
}, {
  title: "about",
  href: "/about-me"
}, {
  title: "blog",
  href: "/blog"
}];

const Header = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("header", {
    className: "jsx-2875370274"
  }, __jsx("div", {
    className: "jsx-2875370274"
  }, __jsx("h1", {
    className: "jsx-2875370274"
  }, __jsx("a", {
    href: "/",
    className: "jsx-2875370274"
  }, "maryam tavakkoli")), __jsx("span", {
    className: "jsx-2875370274"
  }, "cloud engineer"))), __jsx("div", {
    className: "jsx-2875370274" + " " + "nav__wrapper"
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    links: links
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2875370274"
  }, "header.jsx-2875370274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:440px;background:var(--main-bg-color);background-image:url(\"../static/images/header2.jpeg\");background-position:center;background-repeat:no-repeat;background-size:cover;}header.jsx-2875370274>div.jsx-2875370274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--main-dark-color);}h1.jsx-2875370274{margin:0;}a.jsx-2875370274{-webkit-text-decoration:none;text-decoration:none;padding:0;font:italic normal normal 45px/1.4em \"times new roman\",times,serif;font-weight:600;text-transform:capitalize;color:var(--main-dark-color);}span.jsx-2875370274{padding:0;font-size:13px;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;cursor:pointer;}@media (max-width:768px){.nav__wrapper.jsx-2875370274{height:0px;}header.jsx-2875370274{height:300px;}a.jsx-2875370274{font-size:1.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHd0IsQUFZQSxBQU9KLEFBR1ksQUFRWCxBQVFHLEFBR0UsQUFHSSxTQXhCckIsQ0FXaUIsQ0FRZixFQUdBLElBR0EsUUFieUIseUJBVGYsQUFVVyxVQVRnRCxjQXZCbEQsQUFZRyxxREFZTixnQkFDVSxRQVFYLENBcEJRLGNBcUJ6QixDQWpDeUIsRUF5Qk0sNkJBQy9CLHFEQWJxQixlQVpSLFdBQ0UsYUFDbUIsZ0NBQ3NCLHNCQVV6Qiw2QkFDL0IsR0FWNkIsMkJBQ0MsNEJBQ04sc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IHRpdGxlOiBcImhvbWVcIiwgaHJlZjogXCIvXCIgfSxcbiAgeyB0aXRsZTogXCJhYm91dFwiLCBocmVmOiBcIi9hYm91dC1tZVwiIH0sXG4gIHsgdGl0bGU6IFwiYmxvZ1wiLCBocmVmOiBcIi9ibG9nXCIgfVxuXTtcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+bWFyeWFtIHRhdmFra29saTwvYT5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxzcGFuPmNsb3VkIGVuZ2luZWVyPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3dyYXBwZXJcIj5cbiAgICAgICAgPE5hdmJhciBsaW5rcz17bGlua3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0NDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zdGF0aWMvaW1hZ2VzL2hlYWRlcjIuanBlZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlciA+IGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250OiBpdGFsaWMgbm9ybWFsIG5vcm1hbCA0NXB4LzEuNGVtIFwidGltZXMgbmV3IHJvbWFuXCIsIHRpbWVzLCBzZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAubmF2X193cmFwcGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/Mehdi/maryam-website/src/components/Header.tsx */"));
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
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta */ "./components/meta.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx("div", null, __jsx(_meta__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));

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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




const Nav = props => {
  const {
    toggle,
    links
  } = props;
  return __jsx("nav", {
    id: "nav",
    className: "jsx-3961553255" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      show: !toggle
    }) || "")
  }, __jsx("ul", {
    className: "jsx-3961553255"
  }, links.map(link => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.href,
    key: link.title
  }, __jsx("li", {
    className: "jsx-3961553255"
  }, __jsx("a", {
    className: "jsx-3961553255"
  }, link.title))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3961553255"
  }, ".sticky.jsx-3961553255{position:fixed;top:0;}nav.jsx-3961553255{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:50px;background:#4b6cb7;background:-webkit-linear-gradient(to right,#182848,#4b6cb7);background:linear-gradient(to right,#182848,#4b6cb7);z-index:33;}ul.jsx-3961553255{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3961553255{-webkit-text-decoration:none;text-decoration:none;text-transform:capitalize;color:white;padding:8px 16px;font-size:1rem;cursor:pointer;}a.jsx-3961553255:hover{color:#d1cc73;}@media (max-width:768px){.show.jsx-3961553255{display:none;}.sticky.jsx-3961553255{display:none;}nav.jsx-3961553255{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:30%;height:300px;}ul.jsx-3961553255{padding:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHMEIsQUFJRixBQVVHLEFBTUssQUFRUCxBQUlDLEFBR0EsQUFHVSxBQVNiLFVBQ1ksR0FmeEIsQUFHQSxDQVBGLENBNUJRLENBY08sS0FiZiw2QkFtQjRCLHdCQWhCUCxFQWlCUCxZQUNLLEFBMEJRLEVBakNOLFNBdUJDLE1BZkwsWUFnQlAsR0FmTyxHQWdCTixPQUNHLEtBaEJkLEtBaUJpQixhQUNmLGNBdENXLFdBQ0MsS0FVZCxPQVRxQixPQTBDbkIsWUF6QytELDZEQUNSLHFEQUM1QyxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG50eXBlIExpbmtUeXBlID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59O1xudHlwZSBOYXZiYXJQcm9wcyA9IHtcbiAgbGlua3M6IExpbmtUeXBlW107XG59O1xuXG50eXBlIE5hdlByb3BzID0ge1xuICBsaW5rczogTGlua1R5cGVbXTtcbiAgdG9nZ2xlOiBib29sZWFuO1xufTtcbmNvbnN0IE5hdiA9IChwcm9wczogTmF2UHJvcHMpID0+IHtcbiAgY29uc3QgeyB0b2dnbGUsIGxpbmtzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBpZD1cIm5hdlwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICBzaG93OiAhdG9nZ2xlXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8dWw+XG4gICAgICAgIHtsaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfSBrZXk9e2xpbmsudGl0bGV9PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT57bGluay50aXRsZX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI2Y2I3O1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTgyODQ4LCAjNGI2Y2I3KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxODI4NDgsICM0YjZjYjcpO1xuICAgICAgICAgIHotaW5kZXg6IDMzO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2QxY2M3MztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuc2hvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufTtcbmNvbnN0IE5hdmJhciA9IChwcm9wczogTmF2YmFyUHJvcHMpID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbiAgICBjb25zdCBzdGlja3kgPSBuYXYub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbENhbGxCYWNrID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreSkge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH0pIGFzIGFueTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spIGFzIGFueTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X193cmFwcGVyXCI+XG4gICAgICAgIDxOYXYgdG9nZ2xlPXt0b2dnbGV9IGxpbmtzPXtwcm9wcy5saW5rc30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgbWVudV9fYnV0dG9uOiB0cnVlLFxuICAgICAgICAgIGNoYW5nZTogdG9nZ2xlXG4gICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnVfX2J1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3dyYXBwZXIge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51X19idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVfX2J1dHRvbiA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFuZ2UgPiA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1mcmVuY2gpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZSA+IDpudGgtY2hpbGQoMikge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZSA+IDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWZyZW5jaCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAubWVudV9fYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgei1pbmRleDogNDQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/Users/Mehdi/maryam-website/src/components/Navbar.tsx */"));
};

const Navbar = props => {
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    const nav = document.getElementById("nav");
    const sticky = nav.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-576268430"
  }, __jsx("div", {
    className: "jsx-576268430" + " " + "nav__wrapper"
  }, __jsx(Nav, {
    toggle: toggle,
    links: props.links
  })), __jsx("div", {
    onClick: () => setToggle(!toggle),
    className: "jsx-576268430" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      menu__button: true,
      change: toggle
    }) || "")
  }, __jsx("div", {
    className: "jsx-576268430"
  }), __jsx("div", {
    className: "jsx-576268430"
  }), __jsx("div", {
    className: "jsx-576268430"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "576268430"
  }, ".menu__button.jsx-576268430{display:none;}.nav__wrapper.jsx-576268430{height:50px;}.menu__button.jsx-576268430{position:absolute;top:10px;left:10px;cursor:pointer;}.menu__button.jsx-576268430>div.jsx-576268430{width:35px;height:5px;background-color:white;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}.change.jsx-576268430>.jsx-576268430:nth-child(1){background-color:var(--light-french);-webkit-transform:rotate(-45deg) translate(-9px,6px);-ms-transform:rotate(-45deg) translate(-9px,6px);transform:rotate(-45deg) translate(-9px,6px);}.change.jsx-576268430>.jsx-576268430:nth-child(2){opacity:0;}.change.jsx-576268430>.jsx-576268430:nth-child(3){background-color:var(--light-french);-webkit-transform:rotate(45deg) translate(-8px,-8px);-ms-transform:rotate(45deg) translate(-8px,-8px);transform:rotate(45deg) translate(-8px,-8px);}@media (max-width:768px){.menu__button.jsx-576268430{display:block;z-index:44;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIa0IsQUFHd0IsQUFJRCxBQUlNLEFBTVAsQUFPMEIsQUFJM0IsQUFHMkIsQUFLckIsVUFQbEIsQ0FYYSxDQVZiLENBSkEsQ0FpQ2UsSUF6QkosSUFPYyxHQW1CdkIsRUF6QlUsVUFDSyxBQVcrQixBQU9BLFFBWmpDLE9BTGYsTUFNa0Isd0NBQ2xCLHNGQUlBLEFBT0EiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgTGlua1R5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG50eXBlIE5hdmJhclByb3BzID0ge1xuICBsaW5rczogTGlua1R5cGVbXTtcbn07XG5cbnR5cGUgTmF2UHJvcHMgPSB7XG4gIGxpbmtzOiBMaW5rVHlwZVtdO1xuICB0b2dnbGU6IGJvb2xlYW47XG59O1xuY29uc3QgTmF2ID0gKHByb3BzOiBOYXZQcm9wcykgPT4ge1xuICBjb25zdCB7IHRvZ2dsZSwgbGlua3MgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGlkPVwibmF2XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgIHNob3c6ICF0b2dnbGVcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDx1bD5cbiAgICAgICAge2xpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9IGtleT17bGluay50aXRsZX0+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPntsaW5rLnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zdGlja3kge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0YjZjYjc7XG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxODI4NDgsICM0YjZjYjcpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE4Mjg0OCwgIzRiNmNiNyk7XG4gICAgICAgICAgei1pbmRleDogMzM7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZDFjYzczO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3kge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuY29uc3QgTmF2YmFyID0gKHByb3BzOiBOYXZiYXJQcm9wcykgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuICAgIGNvbnN0IHN0aWNreSA9IG5hdi5vZmZzZXRUb3A7XG4gICAgY29uc3Qgc2Nyb2xsQ2FsbEJhY2sgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5KSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gICAgICB9XG4gICAgfSkgYXMgYW55O1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjaykgYXMgYW55O1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3dyYXBwZXJcIj5cbiAgICAgICAgPE5hdiB0b2dnbGU9e3RvZ2dsZX0gbGlua3M9e3Byb3BzLmxpbmtzfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICBtZW51X19idXR0b246IHRydWUsXG4gICAgICAgICAgY2hhbmdlOiB0b2dnbGVcbiAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudV9fYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdl9fd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnVfX2J1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9fYnV0dG9uID4gZGl2IHtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZSA+IDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWZyZW5jaCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhbmdlID4gOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhbmdlID4gOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZnJlbmNoKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5tZW51X19idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB6LWluZGV4OiA0NDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Mehdi/maryam-website/src/components/Navbar.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/SectionLayout.tsx":
/*!**************************************!*\
  !*** ./components/SectionLayout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


const SectionLayout = props => __jsx("section", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}, __jsx("img", {
  src: props.imgUrl,
  alt: "biography image",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}), __jsx("article", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}, __jsx("h2", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}, props.title), __jsx("span", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}), __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}, props.text), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}, __jsx("a", {
  href: props.href,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3621531948", [props.flexDirect, props.borderRadius]]])
}, props.btnText))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3621531948",
  dynamic: [props.flexDirect, props.borderRadius]
}, `section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:${props.flexDirect};-ms-flex-direction:${props.flexDirect};flex-direction:${props.flexDirect};-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;min-height:100vh;color:var(--main-dark-color);background:url('../static/images/Light-blue.jpg') fixed;background-position:center;background-repeat:no-repeat;background-size:cover;}img.__jsx-style-dynamic-selector{height:400px;width:350px;border-radius:${props.borderRadius};padding:40px;}article.__jsx-style-dynamic-selector{width:40%;}h2.__jsx-style-dynamic-selector{margin:0;text-transform:capitalize;}p.__jsx-style-dynamic-selector{line-height:1.65;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;font-size:1.1rem;}span.__jsx-style-dynamic-selector{display:block;margin-bottom:10px;width:116px;height:5px;border-top:2px solid rgba(39,34,62,1);}div.__jsx-style-dynamic-selector{height:40px;min-height:19px;width:142px;border:2px solid var(--main-dark-color);color:var(--main-dark-color);padding:4px 12px;font-size:0.7rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;text-transform:capitalize;font-size:1rem;white-space:nowrap;color:initial;}div.__jsx-style-dynamic-selector:hover{border-color:var(--light-french);}div.__jsx-style-dynamic-selector:hover a.__jsx-style-dynamic-selector{color:var(--light-french);}@media (max-width:768px){section.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}article.__jsx-style-dynamic-selector{width:100%;margin:0 auto;padding:20px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9TZWN0aW9uTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBR3NCLEFBYUEsQUFNSCxBQUdELEFBS1EsQUFNSCxBQU9GLEFBYVMsQUFPWSxBQUdQLEFBSUYsQUFHWCxTQS9DYSxDQUg1QixDQW1Ea0IsQ0E5QkEsQ0EzQkosQ0FvQk8sR0FORSxRQWJzQixBQXlENUIsQ0FSakIsRUF0QmMsS0FQQSxBQTBCZCxFQXJDQSxHQWlERSxFQTlCd0MsS0FQN0IsS0FrQmUsTUFqQmUsWUFyQjVCLE1BZitCLEVBc0Q3QixFQWFmLEVBeEI2QixDQTNCL0IsVUF1Q3FCLEdBbEJyQixlQU9tQixDQVlILFFBNUJHLE1BNkJuQixFQVptQixTQWhCbkIsUUFpQmlCLGVBQ0YsNERBOUNVLGNBK0NBLHFGQTlDSixjQStDQSwrRUE5Q1IsV0FDTSxHQThDbkIsY0E3QytCLDZCQUMyQix3REFDN0IsMkJBQ0MsNEJBQ04sc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9TZWN0aW9uTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgaW1nVXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgYnRuVGV4dDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGZsZXhEaXJlY3Q6IHN0cmluZztcbiAgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XG59O1xuY29uc3QgU2VjdGlvbkxheW91dCA9IChwcm9wczogUHJvcHMpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGltZyBzcmM9e3Byb3BzLmltZ1VybH0gYWx0PVwiYmlvZ3JhcGh5IGltYWdlXCIgLz5cbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cbiAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9Pntwcm9wcy5idG5UZXh0fTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdH07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9pbWFnZXMvTGlnaHQtYmx1ZS5qcGcnKSBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzLmJvcmRlclJhZGl1c307XG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMTZweDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDM5LCAzNCwgNjIsIDEpO1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxOXB4O1xuICAgICAgICB3aWR0aDogMTQycHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tZGFyay1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBjb2xvcjogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIGRpdjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZnJlbmNoKTtcbiAgICAgIH1cbiAgICAgIGRpdjpob3ZlciBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWZyZW5jaCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uTGF5b3V0O1xuIl19 */
/*@ sourceURL=/Users/Mehdi/maryam-website/src/components/SectionLayout.tsx */`));

/* harmony default export */ __webpack_exports__["default"] = (SectionLayout);

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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Meta = () => __jsx("div", {
  className: "jsx-1306101676"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-1306101676"
}, "Maryam Tavakkoli"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  className: "jsx-1306101676"
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-1306101676"
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Lato%7CMerriweather%7CMontserrat%7COpen+Sans&display=swap",
  rel: "stylesheet",
  className: "jsx-1306101676"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1306101676"
}, "html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}:root{--dark-light:#777;--main-bg-color:#4b6cb7;--main-dark-color:#292b5c;--light-french:#d1b873;--blog-bg-color:#ff8300;}body{margin:0;padding:0;background:#000046;color:#0b0500;height:100vh;font-size:16px;line-height:1.5;font-family:Lato,Sans-Serif;}::selection{color:#fff;background:#0b0500;text-shadow:none;}section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}img{max-width:100%;border:0;-ms-interpolation-mode:bicubic;vertical-align:bottom;}p{margin-top:0.25rem;margin-bottom:1rem;}h1{font-size:3.5rem;font-weight:700;line-height:1.3;font-family:Montserrat,Sans-serif;}h2{font-size:2.5rem;font-weight:700;font-family:Montserrat,Sans-serif;}@media (max-width:768px){h2{font-size:1.7rem;margin-bottom:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9tZXRhLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCLEFBRytCLEFBS0gsQUFHRCxBQVFULEFBVUUsQUFLRSxBQUtFLEFBTUksQUFJRixBQVFBLEFBUUUsU0E3Q1QsRUFVUyxJQVVWLEVBVU8sQUFRQSxBQVFFLENBdERNLENBSDFCLEFBWXFCLEFBeUJBLEdBMUNyQixFQXFDaUMsTUFWZCxHQW9CRCxBQVFtQixBQVFuQyxLQTdDYyxBQXlCaEIsSUFsQzRCLEtBbUI1QixFQXNCcUMsR0EvQnRCLEdBbUJTLFVBbEJQLEVBb0NqQixDQTlDeUIsTUFxQk4sR0FRbkIsR0FsQmtCLEdBOEJsQixRQXhDMEIsS0FXSyxtQkFWL0IsU0FXQSxhQVNBIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9tZXRhLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IE1ldGEgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TWFyeWFtIFRhdmFra29saTwvdGl0bGU+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiXG4gICAgICAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byU3Q01lcnJpd2VhdGhlciU3Q01vbnRzZXJyYXQlN0NPcGVuK1NhbnMmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAqLFxuICAgICAgKjo6YmVmb3JlLFxuICAgICAgKjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgOnJvb3Qge1xuICAgICAgICAtLWRhcmstbGlnaHQ6ICM3Nzc7XG4gICAgICAgIC0tbWFpbi1iZy1jb2xvcjogIzRiNmNiNztcbiAgICAgICAgLS1tYWluLWRhcmstY29sb3I6ICMyOTJiNWM7XG4gICAgICAgIC0tbGlnaHQtZnJlbmNoOiAjZDFiODczO1xuICAgICAgICAtLWJsb2ctYmctY29sb3I6ICNmZjgzMDA7XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwNDY7XG4gICAgICAgIGNvbG9yOiAjMGIwNTAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBTYW5zLVNlcmlmO1xuICAgICAgfVxuICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzBiMDUwMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAvL21hcmdpbi10b3A6IDA7XG4gICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIFNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgU2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGE7XG4iXX0= */\n/*@ sourceURL=/Users/Mehdi/maryam-website/src/components/meta.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

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
/* harmony import */ var _components_Biography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Biography */ "./components/Biography.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IndexPage = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_Biography__WEBPACK_IMPORTED_MODULE_1__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Mehdi/maryam-website/src/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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