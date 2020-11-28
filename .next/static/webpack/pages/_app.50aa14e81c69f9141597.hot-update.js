webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_prism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/prism */ "./styles/prism.js");
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MDXComponents */ "./components/MDXComponents.js");
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../next-seo.config */ "./next-seo.config.js");



var _this = undefined,
    _jsxFileName = "D:\\Level-up\\Web Developer\\Practice\\js-head.dev\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          ", ";\n\n          ::selection {\n            background-color: #47a3f3;\n            color: #fefefe;\n          }\n\n          html {\n            min-width: 360px;\n            scroll-behavior: smooth;\n          }\n\n          #__next {\n            display: flex;\n            flex-direction: column;\n            min-height: 100vh;\n            background: ", ";\n          }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var GlobalStyle = function GlobalStyle(_ref) {
  _s();

  var children = _ref.children;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["CSSReset"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["Global"], {
    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject(), colorMode === 'light' ? _styles_prism__WEBPACK_IMPORTED_MODULE_10__["prismLightTheme"] : _styles_prism__WEBPACK_IMPORTED_MODULE_10__["prismDarkTheme"], colorMode === 'light' ? 'white' : '#171923'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), children);
};

_s(GlobalStyle, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["useColorMode"]];
});

_c = GlobalStyle;

var App = function App(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["ColorModeProvider"], {
    value: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(GlobalStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("meta", {
    content: "IE=edge",
    httpEquiv: "X-UA-Compatible",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx("meta", {
    content: "width=device-width, initial-scale=1",
    name: "viewport",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), __jsx("meta", {
    content: "#ffffff",
    name: "theme-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), __jsx("meta", {
    content: "#ffffff",
    name: "msapplication-TileColor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx("meta", {
    content: "/static/favicons/browserconfig.xml",
    name: "msapplication-config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }), __jsx("meta", {
    content: "14d2e73487fa6c71",
    name: "yandex-verification",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx("meta", {
    content: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    name: "google-site-verification",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__["DefaultSeo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))))));
};

_c2 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNoaWxkcmVuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiY3NzIiwicHJpc21MaWdodFRoZW1lIiwicHJpc21EYXJrVGhlbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIk1EWENvbXBvbmVudHMiLCJTRU8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLHNCQUNkQyxvRUFBWSxFQURFO0FBQUEsTUFDNUJDLFNBRDRCLGlCQUM1QkEsU0FENEI7O0FBR3BDLFNBQ0UsbUVBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9EQUFEO0FBQ0UsVUFBTSxFQUFFQyx5REFBRixvQkFDRkQsU0FBUyxLQUFLLE9BQWQsR0FBd0JFLDhEQUF4QixHQUEwQ0MsNkRBRHhDLEVBaUJZSCxTQUFTLEtBQUssT0FBZCxHQUF3QixPQUF4QixHQUFrQyxTQWpCOUMsQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUF3QkdGLFFBeEJILENBREY7QUE0QkQsQ0EvQkQ7O0dBQU1ELFc7VUFDa0JFLDREOzs7S0FEbEJGLFc7O0FBaUNOLElBQU1PLEdBQUcsR0FBRyxTQUFOQSxHQUFNLFFBQThCO0FBQUEsTUFBM0JDLFNBQTJCLFNBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDeEMsU0FDRSxNQUFDLDZEQUFEO0FBQWUsU0FBSyxFQUFFQyxxREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBYSxjQUFVLEVBQUVDLGtFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFtQixTQUFLLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxXQUFPLEVBQUMsU0FBZDtBQUF3QixhQUFTLEVBQUMsaUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsV0FBTyxFQUFDLHFDQURWO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUU7QUFBTSxXQUFPLEVBQUMsU0FBZDtBQUF3QixRQUFJLEVBQUMsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxXQUFPLEVBQUMsU0FBZDtBQUF3QixRQUFJLEVBQUMseUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQ0UsV0FBTyxFQUFDLG9DQURWO0FBRUUsUUFBSSxFQUFDLHNCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVlFO0FBQU0sV0FBTyxFQUFDLGtCQUFkO0FBQWlDLFFBQUksRUFBQyxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUU7QUFDRSxXQUFPLEVBQUMsNkNBRFY7QUFFRSxRQUFJLEVBQUMsMEJBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBREYsRUFtQkUsTUFBQyxtREFBRCx5RkFBZ0JDLHlEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkJGLEVBb0JFLE1BQUMsU0FBRCx5RkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcEJGLENBREYsQ0FERixDQURGLENBREY7QUE4QkQsQ0EvQkQ7O01BQU1GLEc7QUFpQ1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTBhYTE0ZTgxYzY5ZjkxNDE1OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQge1xuICBUaGVtZVByb3ZpZGVyLFxuICBDU1NSZXNldCxcbiAgQ29sb3JNb2RlUHJvdmlkZXIsXG4gIHVzZUNvbG9yTW9kZVxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcbmltcG9ydCB7IHByaXNtTGlnaHRUaGVtZSwgcHJpc21EYXJrVGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvcHJpc20nO1xuaW1wb3J0IE1EWENvbXBvbmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vbmV4dC1zZW8uY29uZmlnJztcblxuY29uc3QgR2xvYmFsU3R5bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q1NTUmVzZXQgLz5cbiAgICAgIDxHbG9iYWxcbiAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgJHtjb2xvck1vZGUgPT09ICdsaWdodCcgPyBwcmlzbUxpZ2h0VGhlbWUgOiBwcmlzbURhcmtUaGVtZX07XG5cbiAgICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdhM2YzO1xuICAgICAgICAgICAgY29sb3I6ICNmZWZlZmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnd2hpdGUnIDogJyMxNzE5MjMnfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17TURYQ29tcG9uZW50c30+XG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlciB2YWx1ZT1cImxpZ2h0XCI+XG4gICAgICAgICAgPEdsb2JhbFN0eWxlPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJJRT1lZGdlXCIgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgLz5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCIjZmZmZmZmXCIgbmFtZT1cInRoZW1lLWNvbG9yXCIgLz5cbiAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIiNmZmZmZmZcIiBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCIvc3RhdGljL2Zhdmljb25zL2Jyb3dzZXJjb25maWcueG1sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiMTRkMmU3MzQ4N2ZhNmM3MVwiIG5hbWU9XCJ5YW5kZXgtdmVyaWZpY2F0aW9uXCIgLz5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiZVpTZG16QVhsTGtLaE5KemZnd0RxV09SZ2h4bko4cVI5X0NIZEFoNS14d1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8RGVmYXVsdFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvR2xvYmFsU3R5bGU+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICA8L01EWFByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=