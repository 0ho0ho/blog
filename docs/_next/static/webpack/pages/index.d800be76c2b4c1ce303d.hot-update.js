webpackHotUpdate_N_E("pages/index",{

/***/ "./components/post-preview.tsx":
/*!*************************************!*\
  !*** ./components/post-preview.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-formatter */ \"./components/date-formatter.tsx\");\n/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover-image */ \"./components/cover-image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/younghokim/workspace/github/blog/components/post-preview.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostPreview = function PostPreview(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      slug = _ref.slug;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:shadow-medium transition-shadow duration-200\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"border-solid border rounded-xl border-gray-400 p-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"inline-block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"text-2xl mb-3 leading-snug font-bold text-gray-800\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, title)), __jsx(\"p\", {\n    className: \"text-lg leading-relaxed mb-4 text-gray-700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, excerpt), __jsx(\"div\", {\n    className: \"text-lg mb-4 text-gray-400\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, __jsx(_date_formatter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    dateString: date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    className: \"inline-block w-2/5 relative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(_cover_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slug: slug,\n    title: title,\n    src: coverImage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_c = PostPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcudHN4P2NhNjciXSwibmFtZXMiOlsiUG9zdFByZXZpZXciLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJkYXRlIiwiZXhjZXJwdCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF1RDtBQUFBLE1BQXBEQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q0MsVUFBNkMsUUFBN0NBLFVBQTZDO0FBQUEsTUFBakNDLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQ3pFLFNBQ0UsTUFBQyxnREFBRDtBQUFNLE1BQUUsbUJBQVlBLElBQVosQ0FBUjtBQUE0QixRQUFJLEVBQUMsZUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG9EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUosS0FBSixDQURGLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBQyw0Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLE9BREgsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQWUsY0FBVSxFQUFFRCxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQURGLEVBWUU7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBWSxRQUFJLEVBQUVFLElBQWxCO0FBQXdCLFNBQUssRUFBRUosS0FBL0I7QUFBc0MsT0FBRyxFQUFFQyxVQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQURGLENBREYsQ0FERixDQURGO0FBd0JELENBekJEOztLQUFNRixXO0FBMkJTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9zdC1wcmV2aWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gXCIuL2RhdGUtZm9ybWF0dGVyXCI7XG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tIFwiLi9jb3Zlci1pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi4vdHlwZXMvYXV0aG9yXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvdmVySW1hZ2U6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIGF1dGhvcjogQXV0aG9yO1xuICBzbHVnOiBzdHJpbmc7XG59O1xuXG5jb25zdCBQb3N0UHJldmlldyA9ICh7IHRpdGxlLCBjb3ZlckltYWdlLCBkYXRlLCBleGNlcnB0LCBzbHVnIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3ctbWVkaXVtIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1zb2xpZCBib3JkZXIgcm91bmRlZC14bCBib3JkZXItZ3JheS00MDAgcC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMyBsZWFkaW5nLXNudWcgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00IHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICB7ZXhjZXJwdH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWItNCB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgPERhdGVGb3JtYXR0ZXIgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMi81IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxDb3ZlckltYWdlIHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gc3JjPXtjb3ZlckltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQcmV2aWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-preview.tsx\n");

/***/ })

})