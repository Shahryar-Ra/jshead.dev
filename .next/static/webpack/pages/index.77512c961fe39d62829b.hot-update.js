webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Date */ "./components/Date.js");
var _this = undefined,
    _jsxFileName = "D:\\Level-up\\Web Developer\\Practice\\js-head.dev\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Index = function Index(_ref) {
  _s();

  var allPostsData = _ref.allPostsData;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    as: "main",
    spacing: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    m: "0 auto 4rem auto",
    maxWidth: "700px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "700px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    letterSpacing: "tight",
    mb: 2,
    as: "h1",
    size: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Hey, I\u2019m Shahryar Rajabpoor"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: secondaryTextColor[colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "I\u2019m a Frontend Engineer, Musician and Songwriter. You\u2019ve found my personal slice of the internet \u2013 everything you want to know and more is here.")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "700px",
    mt: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "700px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    letterSpacing: "tight",
    mb: 5,
    as: "h1",
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Latest Articles"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "blog/".concat(id),
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      mb: "40px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h4",
      size: "md",
      fontWeight: "bold",
      mb: 2,
      letterSpacing: "tighter",
      _hover: {
        fontColor: '#12a'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }, title), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    })))));
  })))));
};

_s(Index, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useColorMode"]];
});

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0c0RhdGEiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJzZWNvbmRhcnlUZXh0Q29sb3IiLCJsaWdodCIsImRhcmsiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImZvbnRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxzQkFDWkMsb0VBQVksRUFEQTtBQUFBLE1BQzFCQyxTQUQwQixpQkFDMUJBLFNBRDBCOztBQUVsQyxNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsU0FBSyxFQUFFLFVBRGtCO0FBRXpCQyxRQUFJLEVBQUU7QUFGbUIsR0FBM0I7QUFLQSxTQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxNQUFFLEVBQUMsTUFETDtBQUVFLFdBQU8sRUFBRSxDQUZYO0FBR0Usa0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxZQUpiO0FBS0UsS0FBQyxFQUFDLGtCQUxKO0FBTUUsWUFBUSxFQUFDLE9BTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsb0RBQUQ7QUFDRSxpQkFBYSxFQUFDLFFBRGhCO0FBRUUsa0JBQWMsRUFBQyxZQUZqQjtBQUdFLGNBQVUsRUFBQyxZQUhiO0FBSUUsWUFBUSxFQUFDLE9BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsdURBQUQ7QUFBUyxpQkFBYSxFQUFDLE9BQXZCO0FBQStCLE1BQUUsRUFBRSxDQUFuQztBQUFzQyxNQUFFLEVBQUMsSUFBekM7QUFBOEMsUUFBSSxFQUFDLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBTkYsRUFTRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFRixrQkFBa0IsQ0FBQ0QsU0FBRCxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVLQVRGLENBUkYsRUF1QkUsTUFBQyxvREFBRDtBQUNFLGlCQUFhLEVBQUMsUUFEaEI7QUFFRSxrQkFBYyxFQUFDLFlBRmpCO0FBR0UsY0FBVSxFQUFDLFlBSGI7QUFJRSxZQUFRLEVBQUMsT0FKWDtBQUtFLE1BQUUsRUFBRSxDQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsRUE4QkUsTUFBQyxvREFBRDtBQUNFLGlCQUFhLEVBQUMsUUFEaEI7QUFFRSxrQkFBYyxFQUFDLFlBRmpCO0FBR0UsY0FBVSxFQUFDLFlBSGI7QUFJRSxZQUFRLEVBQUMsT0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx1REFBRDtBQUFTLGlCQUFhLEVBQUMsT0FBdkI7QUFBK0IsTUFBRSxFQUFFLENBQW5DO0FBQXNDLE1BQUUsRUFBQyxJQUF6QztBQUE4QyxRQUFJLEVBQUMsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixFQVNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixZQUFZLENBQUNNLEdBQWIsQ0FBaUI7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFNBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxXQUNoQixNQUFDLGdEQUFEO0FBQU0sVUFBSSxpQkFBVUYsRUFBVixDQUFWO0FBQTBCLFNBQUcsRUFBRUEsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQVUsUUFBRSxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFDRSxRQUFFLEVBQUMsSUFETDtBQUVFLFVBQUksRUFBQyxJQUZQO0FBR0UsZ0JBQVUsRUFBQyxNQUhiO0FBSUUsUUFBRSxFQUFFLENBSk47QUFLRSxtQkFBYSxFQUFDLFNBTGhCO0FBTUUsWUFBTSxFQUFFO0FBQ05HLGlCQUFTLEVBQUU7QUFETCxPQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVR0QsS0FWSCxDQURGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBTSxnQkFBVSxFQUFFRCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FkRixDQURGLENBREYsQ0FEZ0I7QUFBQSxHQUFqQixDQURILENBVEYsQ0E5QkYsQ0FERixDQURGO0FBdUVELENBOUVEOztHQUFNVCxLO1VBQ2tCRSw0RDs7O0tBRGxCRixLOztBQWdGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzc1MTJjOTYxZmUzOWQ2MjgyOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICB1c2VDb2xvck1vZGUsXG4gIEhlYWRpbmcsXG4gIFRleHQsXG4gIEZsZXgsXG4gIFN0YWNrLFxuICBMaXN0LFxuICBCb3gsXG4gIExpc3RJdGVtXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRlJztcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cyc7XG5cbmNvbnN0IEluZGV4ID0gKHsgYWxsUG9zdHNEYXRhIH0pID0+IHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBzZWNvbmRhcnlUZXh0Q29sb3IgPSB7XG4gICAgbGlnaHQ6ICdncmF5LjcwMCcsXG4gICAgZGFyazogJ2dyYXkuNDAwJ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdGFja1xuICAgICAgICBhcz1cIm1haW5cIlxuICAgICAgICBzcGFjaW5nPXs4fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgbT1cIjAgYXV0byA0cmVtIGF1dG9cIlxuICAgICAgICBtYXhXaWR0aD1cIjcwMHB4XCJcbiAgICAgID5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBtYXhXaWR0aD1cIjcwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkaW5nIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiIG1iPXsyfSBhcz1cImgxXCIgc2l6ZT1cIjJ4bFwiPlxuICAgICAgICAgICAgSGV5LCBJ4oCZbSBTaGFocnlhciBSYWphYnBvb3JcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgY29sb3I9e3NlY29uZGFyeVRleHRDb2xvcltjb2xvck1vZGVdfT5cbiAgICAgICAgICAgIEnigJltIGEgRnJvbnRlbmQgRW5naW5lZXIsIE11c2ljaWFuIGFuZCBTb25nd3JpdGVyLiBZb3XigJl2ZSBmb3VuZCBteVxuICAgICAgICAgICAgcGVyc29uYWwgc2xpY2Ugb2YgdGhlIGludGVybmV0IOKAkyBldmVyeXRoaW5nIHlvdSB3YW50IHRvIGtub3cgYW5kXG4gICAgICAgICAgICBtb3JlIGlzIGhlcmUuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3MDBweFwiXG4gICAgICAgICAgbXQ9ezh9XG4gICAgICAgID48L0ZsZXg+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3MDBweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGluZyBsZXR0ZXJTcGFjaW5nPVwidGlnaHRcIiBtYj17NX0gYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgTGF0ZXN0IEFydGljbGVzXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGJsb2cvJHtpZH1gfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBtYj1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwidGlnaHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMTJhJ1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhXG4gICAgfVxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==