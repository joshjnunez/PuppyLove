webpackHotUpdate("main",{

/***/ "./client/component/PopularLocations.jsx":
/*!***********************************************!*\
  !*** ./client/component/PopularLocations.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _googleMapsReact = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStyles = {\n  width: '60%',\n  height: '60%'\n};\n\nfunction PopularLocations(_ref) {\n  var google = _ref.google,\n      allUsers = _ref.allUsers;\n\n\n  var mapStyles = {\n    width: '60%',\n    height: '60%'\n  };\n  return _react2.default.createElement(\n    _googleMapsReact.Map,\n    {\n      google: google,\n      zoom: 12,\n      style: mapStyles,\n      initialCenter: {\n        lat: 29.971509,\n        lng: -90.103807\n      }\n    },\n    _react2.default.createElement(_googleMapsReact.Marker, { lat: 29.971509, lng: -90.103807, title: 'current', allUsers: allUsers })\n  );\n}\n\nexports.default = (0, _googleMapsReact.GoogleApiWrapper)({\n  apiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'\n})(PopularLocations);\n\n//# sourceURL=webpack:///./client/component/PopularLocations.jsx?");

/***/ })

})