webpackHotUpdate("main",{

/***/ "./client/component/PopularLocations.jsx":
/*!***********************************************!*\
  !*** ./client/component/PopularLocations.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _googleMapsReact = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, { Component } from 'react';\n// import Geocode from 'react-geocode';\n// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from \"react-google-maps\";\n// import Autocomplete from 'react-google-autocomplete';\n// import axios from 'axios';\n// Geocode.setApiKey( \"AIzaSyAIShYGz5mXtO2XtWhaOHlrmDz33fKCnmE\" );\n// Geocode.enableDebug();\n\nvar PopularLocations = function (_Component) {\n  _inherits(PopularLocations, _Component);\n\n  function PopularLocations(props) {\n    _classCallCheck(this, PopularLocations);\n\n    return _possibleConstructorReturn(this, (PopularLocations.__proto__ || Object.getPrototypeOf(PopularLocations)).call(this, props));\n  }\n\n  return PopularLocations;\n}(Component);\n\n(function () {\n  var hello = 1;\n  return React.createElement(_googleMapsReact.Map, {\n    google: undefined.props.google,\n    zoom: 8,\n    style: mapStyles,\n    initialCenter: { lat: 47.444, lng: -122.176 }\n  });\n});\n\nexports.default = PopularLocations({\n  apiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'\n})(MapContainer);\n\n//# sourceURL=webpack:///./client/component/PopularLocations.jsx?");

/***/ })

})