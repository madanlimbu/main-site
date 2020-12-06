webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! showdown */ \"./node_modules/showdown/dist/showdown.js\");\n/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/madanlimbu/personal/madanlimbu/maindomain/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar user = 'madanlimbu';\nvar repo = 'gitbook';\nvar branch = 'master';\n\nvar pageToUrl = function pageToUrl(pageName) {\n  return \"https://raw.githubusercontent.com/\".concat(user, \"/\").concat(repo, \"/\").concat(branch).concat(pageName);\n};\n\nfunction IndexPage(_ref) {\n  _s();\n\n  var name = _ref.name,\n      summary = _ref.summary;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      menu = _useState2[0],\n      setMenu = _useState2[1];\n\n  var show = new showdown__WEBPACK_IMPORTED_MODULE_4___default.a.Converter();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var path = router.asPath;\n\n  var updatePage = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(path) {\n      var res, pageText, pageHtml;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"path\", pageToUrl(path));\n              _context.next = 3;\n              return fetch(pageToUrl(path));\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.text();\n\n            case 6:\n              pageText = _context.sent;\n              pageHtml = show.makeHtml(pageText);\n              setPage(pageHtml);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function updatePage(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    setMenu(show.makeHtml(summary));\n  }, [summary]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    updatePage(path);\n  }, [path]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"script\", {\n        \"data-ad-client\": \"ca-pub-7420131458491934\",\n        async: true,\n        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }, this), name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: \"Test home page.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: menu\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: page\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(IndexPage, \"pD3rs4gJGkvM3sPt63vmXrH42pA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlciIsInJlcG8iLCJicmFuY2giLCJwYWdlVG9VcmwiLCJwYWdlTmFtZSIsIkluZGV4UGFnZSIsIm5hbWUiLCJzdW1tYXJ5IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsIm1lbnUiLCJzZXRNZW51Iiwic2hvdyIsInNob3dkb3duIiwiQ29udmVydGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aCIsImFzUGF0aCIsInVwZGF0ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJyZXMiLCJ0ZXh0IiwicGFnZVRleHQiLCJwYWdlSHRtbCIsIm1ha2VIdG1sIiwidXNlRWZmZWN0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsSUFBSSxHQUFHLFlBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBYjtBQUNBLElBQU1DLE1BQU0sR0FBRyxRQUFmOztBQUNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFFBQUQsRUFBc0I7QUFDcEMscURBQTRDSixJQUE1QyxjQUFvREMsSUFBcEQsY0FBNERDLE1BQTVELFNBQXFFRSxRQUFyRTtBQUNILENBRkQ7O0FBV0EsU0FBU0MsU0FBVCxPQUFvRDtBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCOztBQUFBLGtCQUN4QkMsc0RBQVEsQ0FBQyxFQUFELENBRGdCO0FBQUEsTUFDekNDLElBRHlDO0FBQUEsTUFDbkNDLE9BRG1DOztBQUFBLG1CQUV4QkYsc0RBQVEsQ0FBQyxFQUFELENBRmdCO0FBQUEsTUFFekNHLElBRnlDO0FBQUEsTUFFbkNDLE9BRm1DOztBQUdoRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsU0FBYixFQUFiO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRyxNQUFwQjs7QUFFQSxNQUFNQyxVQUFVO0FBQUEsaU1BQUcsaUJBQU9GLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZHLHFCQUFPLENBQUNDLEdBQVIsU0FBb0JuQixTQUFTLENBQUNlLElBQUQsQ0FBN0I7QUFEZTtBQUFBLHFCQUVHSyxLQUFLLENBQUNwQixTQUFTLENBQUNlLElBQUQsQ0FBVixDQUZSOztBQUFBO0FBRVRNLGlCQUZTO0FBQUE7QUFBQSxxQkFHUUEsR0FBRyxDQUFDQyxJQUFKLEVBSFI7O0FBQUE7QUFHVEMsc0JBSFM7QUFLVEMsc0JBTFMsR0FLRWQsSUFBSSxDQUFDZSxRQUFMLENBQWNGLFFBQWQsQ0FMRjtBQU1maEIscUJBQU8sQ0FBQ2lCLFFBQUQsQ0FBUDs7QUFOZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWUCxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQVNBUyx5REFBUyxDQUFDLFlBQU07QUFDWmpCLFdBQU8sQ0FBQ0MsSUFBSSxDQUFDZSxRQUFMLENBQWNyQixPQUFkLENBQUQsQ0FBUDtBQUNILEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUlBc0IseURBQVMsQ0FBQyxZQUFNO0FBQ1pULGNBQVUsQ0FBQ0YsSUFBRCxDQUFWO0FBQ0gsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0k7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDhCQUNBO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQyxTQUFzRCxPQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFRLDBCQUFlLHlCQUF2QjtBQUFpRCxhQUFLLE1BQXREO0FBQXVELFdBQUcsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFLQ1osSUFMRCxlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSTtBQUFLLDZCQUF1QixFQUFFO0FBQUV3QixjQUFNLEVBQUVuQjtBQUFWO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJO0FBQUssNkJBQXVCLEVBQUU7QUFBRW1CLGNBQU0sRUFBRXJCO0FBQVY7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUEsa0JBREo7QUFZSDs7R0FyQ1FKLFM7VUFJVVkscUQ7OztLQUpWWixTOztBQXVDTUEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgU1NMX09QX05FVFNDQVBFX0NIQUxMRU5HRV9CVUcgfSBmcm9tICdjb25zdGFudHMnO1xuXG5jb25zdCB1c2VyID0gJ21hZGFubGltYnUnO1xuY29uc3QgcmVwbyA9ICdnaXRib29rJztcbmNvbnN0IGJyYW5jaCA9ICdtYXN0ZXInO1xuY29uc3QgcGFnZVRvVXJsID0gKHBhZ2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS8ke3VzZXJ9LyR7cmVwb30vJHticmFuY2h9JHtwYWdlTmFtZX1gO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXRoIH0pIHtcbiAgICBjb25zdCBzdW1tYXJ5RGF0YSA9IGF3YWl0IGZldGNoKHBhZ2VUb1VybCgnL1NVTU1BUlkubWQnKSk7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHN1bW1hcnlEYXRhLnRleHQoKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IG5hbWU6ICdtYWRhbicsIHN1bW1hcnkgfSB9XG59XG5cbmZ1bmN0aW9uIEluZGV4UGFnZSh7IG5hbWUsIHN1bW1hcnkgfSk6IFJlYWN0RWxlbWVudCB7XG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBzaG93ID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcigpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHBhdGggPSByb3V0ZXIuYXNQYXRoO1xuXG4gICAgY29uc3QgdXBkYXRlUGFnZSA9IGFzeW5jIChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBwYXRoYCwgcGFnZVRvVXJsKHBhdGgpKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocGFnZVRvVXJsKHBhdGgpKTtcbiAgICAgICAgY29uc3QgcGFnZVRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGFnZUh0bWwgPSBzaG93Lm1ha2VIdG1sKHBhZ2VUZXh0KTtcbiAgICAgICAgc2V0UGFnZShwYWdlSHRtbCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TWVudShzaG93Lm1ha2VIdG1sKHN1bW1hcnkpKVxuICAgIH0sIFtzdW1tYXJ5XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1cGRhdGVQYWdlKHBhdGgpO1xuICAgIH0sIFtwYXRoXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IHBhZ2UgdGl0bGVcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDxzY3JpcHQgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNzQyMDEzMTQ1ODQ5MTkzNFwiIGFzeW5jIHNyYz1cImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8ZGl2PlRlc3QgaG9tZSBwYWdlLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lbnV9fSAvPlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBhZ2V9fSAvPlxuICAgICAgICA8Lz5cbiAgICAgICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})