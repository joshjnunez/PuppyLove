webpackHotUpdate("main",{

/***/ "./client/component/PopularLocations.jsx":
/*!***********************************************!*\
  !*** ./client/component/PopularLocations.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _googleMapsReact = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStyles = {\n\t\twidth: '60%',\n\t\theight: '60%'\n};\n\nfunction PopularLocations(_ref) {\n\t\tvar google = _ref.google,\n\t\t    allUsers = _ref.allUsers;\n\n\t\t(0, _react.useEffect)(function () {\n\t\t\t\taxios.get('/users').then(function (response) {\n\t\t\t\t\t\tsetAllUsers(response.data);\n\t\t\t\t\t\t// response.data\n\t\t\t\t}).catch(function (err) {\n\t\t\t\t\t\treturn console.log(err);\n\t\t\t\t});\n\t\t}, []);\n\n\t\tvar mapStyles = {\n\t\t\t\twidth: '60%',\n\t\t\t\theight: '60%'\n\t\t};\n\t\treturn _react2.default.createElement(\n\t\t\t\t_googleMapsReact.Map,\n\t\t\t\t{\n\t\t\t\t\t\tgoogle: google,\n\t\t\t\t\t\tzoom: 12,\n\t\t\t\t\t\tstyle: mapStyles,\n\t\t\t\t\t\tinitialCenter: {\n\t\t\t\t\t\t\t\tlat: 29.971509,\n\t\t\t\t\t\t\t\tlng: -90.103807\n\t\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t_react2.default.createElement(_googleMapsReact.Marker, { lat: 29.971509, lng: -90.103807, title: 'current', data: allUsers })\n\t\t);\n}\n\nexports.default = (0, _googleMapsReact.GoogleApiWrapper)({\n\t\tapiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'\n})(PopularLocations);\n\n//# sourceURL=webpack:///./client/component/PopularLocations.jsx?");

/***/ })

})