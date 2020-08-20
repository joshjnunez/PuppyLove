webpackHotUpdate("main",{

/***/ "./client/component/PopularLocations.jsx":
/*!***********************************************!*\
  !*** ./client/component/PopularLocations.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PopularLocations = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _googleMapsReact = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar mapStyles = {\n  width: '100%',\n  height: '100%'\n};\n\nvar PopularLocations = exports.PopularLocations = function (_Component) {\n  _inherits(PopularLocations, _Component);\n\n  function PopularLocations() {\n    _classCallCheck(this, PopularLocations);\n\n    return _possibleConstructorReturn(this, (PopularLocations.__proto__ || Object.getPrototypeOf(PopularLocations)).apply(this, arguments));\n  }\n\n  _createClass(PopularLocations, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_googleMapsReact.Map, {\n        google: this.props.google,\n        zoom: 14,\n        style: mapStyles,\n        initialCenter: {\n          lat: -1.2884,\n          lng: 36.8233\n        }\n      });\n    }\n  }]);\n\n  return PopularLocations;\n}(_react.Component);\n\nexports.default = (0, _googleMapsReact.GoogleApiWrapper)({\n  apiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'\n})(PopularLocations);\n\n//# sourceURL=webpack:///./client/component/PopularLocations.jsx?");

/***/ })

})