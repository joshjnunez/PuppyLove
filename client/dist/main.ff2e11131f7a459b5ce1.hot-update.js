webpackHotUpdate("main",{

/***/ "./client/component/App.jsx":
/*!**********************************!*\
  !*** ./client/component/App.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Sidebar = __webpack_require__(/*! ./Sidebar.jsx */ \"./client/component/Sidebar.jsx\");\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _Choice = __webpack_require__(/*! ./Choice.jsx */ \"./client/component/Choice.jsx\");\n\nvar _Choice2 = _interopRequireDefault(_Choice);\n\nvar _Login = __webpack_require__(/*! ./Login.jsx */ \"./client/component/Login.jsx\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _MyProfile = __webpack_require__(/*! ./MyProfile.jsx */ \"./client/component/MyProfile.jsx\");\n\nvar _MyProfile2 = _interopRequireDefault(_MyProfile);\n\nvar _DogProfile = __webpack_require__(/*! ./DogProfile.jsx */ \"./client/component/DogProfile.jsx\");\n\nvar _DogProfile2 = _interopRequireDefault(_DogProfile);\n\nvar _PopularLocations = __webpack_require__(/*! ./PopularLocations.jsx */ \"./client/component/PopularLocations.jsx\");\n\nvar _PopularLocations2 = _interopRequireDefault(_PopularLocations);\n\nvar _SignUp = __webpack_require__(/*! ./SignUp.jsx */ \"./client/component/SignUp.jsx\");\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction App(props) {\n   var _useState = (0, _react.useState)(''),\n       _useState2 = _slicedToArray(_useState, 2),\n       lat = _useState2[0],\n       setLat = _useState2[1];\n\n   var _useState3 = (0, _react.useState)(''),\n       _useState4 = _slicedToArray(_useState3, 2),\n       lng = _useState4[0],\n       setLng = _useState4[1];\n\n   var _useState5 = (0, _react.useState)(''),\n       _useState6 = _slicedToArray(_useState5, 2),\n       sessUser = _useState6[0],\n       setSessUser = _useState6[1];\n\n   var _useState7 = (0, _react.useState)(''),\n       _useState8 = _slicedToArray(_useState7, 2),\n       sessDog = _useState8[0],\n       setSessDog = _useState8[1];\n\n   var _useState9 = (0, _react.useState)(''),\n       _useState10 = _slicedToArray(_useState9, 2),\n       dogViews = _useState10[0],\n       setDogViews = _useState10[1];\n\n   var _useState11 = (0, _react.useState)(''),\n       _useState12 = _slicedToArray(_useState11, 2),\n       allDogs = _useState12[0],\n       setAllDogs = _useState12[1];\n\n   var _useState13 = (0, _react.useState)(''),\n       _useState14 = _slicedToArray(_useState13, 2),\n       friends = _useState14[0],\n       setFriends = _useState14[1];\n\n   var _useState15 = (0, _react.useState)(0),\n       _useState16 = _slicedToArray(_useState15, 2),\n       index = _useState16[0],\n       setIndex = _useState16[1];\n\n   var _useState17 = (0, _react.useState)(''),\n       _useState18 = _slicedToArray(_useState17, 2),\n       dogDisplayInfo = _useState18[0],\n       setDogDisplayInfo = _useState18[1];\n\n   var _userState = userState(''),\n       _userState2 = _slicedToArray(_userState, 2),\n       allUsers = _userState2[0],\n       setAllUsers = _userState2[1];\n\n   (0, _react.useEffect)(function () {\n      _axios2.default.get('/session').then(function (response) {\n         setSessUser(response.data);\n      }).catch(function (err) {\n         return console.error(err);\n      });\n   }, []);\n\n   // useEffect(() => {\n   //    axios.get('/users').then(response => \n   //       // setAllUsers(response.data)\n   //       response.data\n   //    ).catch(err => console.log(err))\n   // }, []);\n\n\n   // useEffect(() => {\n   //    axios.get('/myProfileInfo')\n   //       .then(response => setSessUser(response.data[0]))\n   //       .catch(err => console.log(16, err));\n   // }, [])\n\n   (0, _react.useEffect)(function () {\n      _axios2.default.get('/currentDog').then(function (response) {\n         return setSessDog(response.data[0]);\n      }).catch(function (err) {\n         return console.error('could not set session dog: ', err);\n      });\n   }, []);\n\n   (0, _react.useEffect)(function () {\n      _axios2.default.get('/dogs').then(function (response) {\n         setAllDogs(response.data);\n         setDogDisplayInfo(response.data[0]);\n      }).catch(function (err) {\n         return console.error(err, 'Could not get all dogs.');\n      });\n   }, []);\n\n   (0, _react.useEffect)(function () {\n      _axios2.default.get('/dogs').then(function (response) {\n         return response.data.map(function (option) {\n            return _react2.default.createElement(\n               'div',\n               { id: 'choice-box', key: option.id, style: { backgroundImage: 'url(\\'' + option.image + '\\')' } },\n               _react2.default.createElement(\n                  'div',\n                  { id: 'title' },\n                  option.dog_name\n               ),\n               _react2.default.createElement(\n                  'div',\n                  { id: 'breed' },\n                  option.breed\n               ),\n               _react2.default.createElement(\n                  'div',\n                  { id: 'age' },\n                  option.age + ' Years Old'\n               )\n            );\n         });\n      }).then(function (choices) {\n         return setDogViews(choices);\n      }).catch(function (err) {\n         return console.error(err, 'Could not get all dogs.');\n      });\n   }, []);\n\n   (0, _react.useEffect)(function () {\n      var showPosition = function showPosition(position) {\n         setLng(position.coords.longitude);\n         setLat(position.coords.latitude);\n      };\n\n      if (navigator.geolocation) {\n         navigator.geolocation.getCurrentPosition(showPosition);\n      } else {\n         console.log(\"Geolocation is not supported by this browser....\");\n      }\n   }, []);\n\n   var open = function open() {\n      document.getElementById(\"mySidenav\").style.width = \"280px\";\n   };\n\n   var getFriends = function getFriends(dogId) {\n      // console.log('hit getFriends', dogId);\n      // axios.post('/dogFriends', { doggyId: dogId })\n      // .then(response => setFriends(response.data))\n      // .catch(() => console.error('We could not get this dog\\'s friends'));\n   };\n\n   var getSessDog = function getSessDog() {\n      _axios2.default.get('/currentDog').then(function (response) {\n         return setSessDog(response.data[0]);\n      }).catch(function (err) {\n         return console.error('could not set session dog: ', err);\n      });\n   };\n\n   return _react2.default.createElement(\n      _reactRouterDom.BrowserRouter,\n      null,\n      _react2.default.createElement(_Sidebar2.default, { sessUser: sessUser, sessDog: sessDog, getFriends: getFriends, allDogs: allDogs }),\n      _react2.default.createElement(\n         'div',\n         { className: 'App' },\n         _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {\n                  return _react2.default.createElement(_Choice2.default, { open: open, sessUser: sessUser, sessDog: sessDog, dogViews: dogViews, allDogs: allDogs, getFriends: getFriends, index: index, setIndex: setIndex, dogDisplayInfo: dogDisplayInfo, setDogDisplayInfo: setDogDisplayInfo });\n               } }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', render: function render() {\n                  return _react2.default.createElement(_Login2.default, null);\n               } }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/myprofile', render: function render() {\n                  return _react2.default.createElement(_MyProfile2.default, { open: open, sessUser: sessUser, sessDog: sessDog });\n               } }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/dogprofile', render: function render() {\n                  return _react2.default.createElement(_DogProfile2.default, { open: open, sessUser: sessUser, sessDog: sessDog, allDogs: allDogs, friends: friends, getFriends: getFriends });\n               } }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/popular', render: function render() {\n                  return _react2.default.createElement(_PopularLocations2.default, { sessUser: sessUser, sessDog: sessDog, google: props.google, open: open, center: { lat: 29.9511, lng: 90.0715 }, zoom: 10 });\n               } }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/signUp', render: function render() {\n                  return _react2.default.createElement(_SignUp2.default, { sessUser: sessUser, sessDog: sessDog, getSessDog: getSessDog });\n               } })\n         )\n      )\n   );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/component/App.jsx?");

/***/ })

})