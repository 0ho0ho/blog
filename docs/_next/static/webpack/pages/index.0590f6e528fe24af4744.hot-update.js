webpackHotUpdate_N_E("pages/index",{

/***/ "./components/insta.jsx":
/*!******************************!*\
  !*** ./components/insta.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"./node_modules/next/dist/next-server/lib/runtime-config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/components/insta.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),\n    publicRuntimeConfig = _getConfig.publicRuntimeConfig;\n\nvar Insta = function Insta() {\n  _s();\n\n  console.log(1, publicRuntimeConfig.ACCESS_TOKEN);\n  console.log(2, process.env.ACCESS_TOKEN);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var feed = new Instafeed({\n      accessToken: publicRuntimeConfig.ACCESS_TOKEN,\n      template: '<a href=\"{{link}}\"><img style=\"width: 100px; height: 100px; display: inline-block;\" src={{image}} /></a>'\n    });\n    feed.run();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"script\", {\n    src: \"https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"instafeed\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Insta, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Insta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insta);\n\nvar _c;\n\n$RefreshReg$(_c, \"Insta\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnN0YS5qc3g/MDQ3MCJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiSW5zdGEiLCJjb25zb2xlIiwibG9nIiwiQUNDRVNTX1RPS0VOIiwicHJvY2VzcyIsImVudiIsInVzZUVmZmVjdCIsImZlZWQiLCJJbnN0YWZlZWQiLCJhY2Nlc3NUb2tlbiIsInRlbXBsYXRlIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2lCQUdnQ0Esa0RBQVMsRTtJQUFqQ0MsbUIsY0FBQUEsbUI7O0FBRVIsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWixFQUFlSCxtQkFBbUIsQ0FBQ0ksWUFBbkM7QUFDQUYsU0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWixFQUFlRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBM0I7QUFDQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsSUFBSSxHQUFHLElBQUlDLFNBQUosQ0FBYztBQUN6QkMsaUJBQVcsRUFBRVYsbUJBQW1CLENBQUNJLFlBRFI7QUFFekJPLGNBQVEsRUFBRTtBQUZlLEtBQWQsQ0FBYjtBQUlBSCxRQUFJLENBQUNJLEdBQUw7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBQyx1RkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFTRCxDQXBCRDs7R0FBTVgsSzs7S0FBQUEsSztBQXNCU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2luc3RhLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcblxuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG5jb25zdCBJbnN0YSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coMSwgcHVibGljUnVudGltZUNvbmZpZy5BQ0NFU1NfVE9LRU4pO1xuICBjb25zb2xlLmxvZygyLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU4pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZlZWQgPSBuZXcgSW5zdGFmZWVkKHtcbiAgICAgIGFjY2Vzc1Rva2VuOiBwdWJsaWNSdW50aW1lQ29uZmlnLkFDQ0VTU19UT0tFTixcbiAgICAgIHRlbXBsYXRlOiAnPGEgaHJlZj1cInt7bGlua319XCI+PGltZyBzdHlsZT1cIndpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiIHNyYz17e2ltYWdlfX0gLz48L2E+J1xuICAgIH0pO1xuICAgIGZlZWQucnVuKCk7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3N0ZXZlbnNjaG9iZXJ0L2luc3RhZmVlZC5qc0AyLjAuMHJjMS9zcmMvaW5zdGFmZWVkLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cImluc3RhZmVlZFwiPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/insta.jsx\n");

/***/ })

})