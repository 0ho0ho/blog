webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ \"./components/more-stories.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(_ref) {\n  var allPosts = _ref.allPosts;\n  var posts = allPosts;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"blog\"), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdn.boomcdn.com/libs/instafeed-js/1.4.1/instafeed.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: \"var feed = new Instafeed({\\n              accessToken:\\n                \\\"IGQVJXTXkxcm96SjFXRGw4dXlKOHNtUmR6SE5lQ3M0d1A0dW9BRDdJTVN2eTliTFRhQUxfT2Q1a2EwZATJ6bEwwRHVRZAzVjTmswRFNPTVUwLWI0Xy02M3dDdnliTXZAodnczclZAsNTJR\\\"\\n              })\\n                feed.run()\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    id: \"instafeed\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    posts: posts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsInBvc3RzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQU1BLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUNyQyxNQUFNQyxLQUFLLEdBQUdELFFBQWQ7QUFFQSxTQUNFLG1FQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsT0FBRyxFQUFDLGtFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1FO0FBQ0UsMkJBQXVCLEVBQUU7QUFDdkJFLFlBQU07QUFEaUIsS0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsRUFpQkU7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLEVBa0JFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBYSxTQUFLLEVBQUVELEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixDQURGLENBREY7QUEwQkQsQ0E3QkQ7O0tBQU1GLEs7O0FBK0JTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uL3R5cGVzL3Bvc3RcIjtcbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W107XG59O1xuXG5jb25zdCBJbmRleCA9ICh7IGFsbFBvc3RzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYWxsUG9zdHM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPmJsb2c8L3RpdGxlPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uYm9vbWNkbi5jb20vbGlicy9pbnN0YWZlZWQtanMvMS40LjEvaW5zdGFmZWVkLm1pbi5qc1wiXG4gICAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYHZhciBmZWVkID0gbmV3IEluc3RhZmVlZCh7XG4gICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOlxuICAgICAgICAgICAgICAgIFwiSUdRVkpYVFhreGNtOTZTakZYUkd3NGRYbEtPSE50VW1SNlNFNWxRM00wZDFBMGRXOUJSRGRKVFZOMmVUbGlURlJoUVV4ZlQyUTFhMkV3WkFUSjZiRXd3UkhWUlpBelZqVG1zd1JGTlBUVlV3TFdJMFh5MDJNM2REZG5saVRYWkFvZG5jemNsWkFzTlRKUlwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZmVlZC5ydW4oKWAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBpZD1cImluc3RhZmVlZFwiPjwvZGl2PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxNb3JlU3RvcmllcyBwb3N0cz17cG9zdHN9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcInRpdGxlXCIsIFwiZGF0ZVwiLCBcInNsdWdcIiwgXCJleGNlcnB0XCJdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})