webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BranchData.js":
/*!**********************************!*\
  !*** ./components/BranchData.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge/actions */ \"./node_modules/@shopify/app-bridge/actions/index.js\");\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris-icons */ \"./node_modules/@shopify/polaris-icons/dist/index.mjs\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper */ \"./utils/helper.js\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../aws-exports */ \"./aws-exports.js\");\n/* harmony import */ var _components_PaymentRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PaymentRequest */ \"./components/PaymentRequest.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../graphql/subscriptions */ \"./graphql/subscriptions.js\");\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"API\"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\nvar BranchData = function BranchData(_ref) {\n  _s();\n\n  var user = _ref.user,\n      updateUser = _ref.updateUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      branchInfo = _useState[0],\n      setBranchInfo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      searchValue = _useState2[0],\n      setSearchValue = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      newCreatedTransaction = _useState3[0],\n      setNewCreatedTransaction = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showPaymentRequest = _useState4[0],\n      setShowPaymentRequest = _useState4[1];\n\n  var handleSearchInput = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (newValue) {\n    return setSearchValue(newValue);\n  }, []);\n  var app = createApp({\n    apiKey: \"3b01063bac3031d13101100ef3e44fd5\",\n    shopOrigin: \"transactions-avanta.myshopify.com\"\n  });\n  var redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"].create(app);\n\n  var getBranch = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var fetchBranch;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"graphqlOperation\"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_10__[\"branchByAdminId\"], {\n                adminId: user.attributes.sub\n              }));\n\n            case 3:\n              fetchBranch = _context.sent;\n              setBranchInfo(fetchBranch.data.branchByAdminId.items[0]);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function getBranch() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getBranch();\n    var createListener = aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_11__[\"onCreateTransaction\"])).subscribe({\n      next: function next(createdTransaction) {\n        return setNewCreatedTransaction(createdTransaction);\n      }\n    });\n    var deleteListener = aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_11__[\"onDeleteTransaction\"])).subscribe({\n      next: function next(deletedTransaction) {\n        return setNewCreatedTransaction(deletedTransaction);\n      }\n    });\n    return function () {\n      createListener.unsubscribe();\n      deleteListener.unsubscribe();\n    };\n  }, [newCreatedTransaction]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, showPaymentRequest ? __jsx(_components_PaymentRequest__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    setShowPaymentRequest: setShowPaymentRequest,\n    branchId: branchInfo ? branchInfo.id : \"\"\n  }) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Page\"], {\n    title: branchInfo && branchInfo.branchName\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], {\n    label: \"Search Product\",\n    value: searchValue,\n    onChange: handleSearchInput,\n    prefix: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], {\n      source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__[\"SearchMajorMonotone\"]\n    }),\n    placeholder: \"Search by Customer phone number\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, {\n    fill: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    id: \"Accept-Payment\",\n    onClick: function onClick() {\n      return setShowPaymentRequest(true);\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], {\n    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__[\"BalanceMajorMonotone\"]\n  }), \" Accept Payment\")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    id: \"Create-Transaction\",\n    primary: true,\n    onClick: function onClick() {\n      return redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"].Action.REMOTE, {\n        // url: `https://dev.d3ivgpkzuz6hkr.amplifyapp.com?adminId=${user.attributes.sub}`,\n        url: \"http://localhost:3001/transactions/\".concat(user.attributes.sub),\n        newContext: true\n      });\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], {\n    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__[\"TransactionMajorMonotone\"]\n  }), \" Create transaction\")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    primary: true,\n    id: \"Logout\",\n    onClick: function onClick() {\n      aws_amplify__WEBPACK_IMPORTED_MODULE_3__[\"Auth\"].signOut();\n      updateUser(null);\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], {\n    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__[\"LogOutMinor\"]\n  }), \" Logout\"))), branchInfo && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"DataTable\"], {\n    columnContentTypes: [\"text\", \"text\", \"text\", \"text\"],\n    headings: [\"Customer phone number\", \"TotalPrice\", \"TotalBonusAmount\", \"Minus from Bonus Amount\", \"CreatedAt\"],\n    rows: branchInfo && branchInfo.transactions.items.filter(function (transaction) {\n      if (searchValue == null) {\n        return transaction;\n      } else if (transaction.customer[0].phone.toLowerCase().includes(searchValue.toLowerCase())) {\n        return transaction;\n      }\n    }).sort(function (a, b) {\n      return new Date(b.createdAt) - new Date(a.createdAt);\n    }).map(function (transaction) {\n      return [__jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n        primary: true,\n        onClick: function onClick() {\n          return redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"].Action.ADMIN_PATH, {\n            path: \"/customers/\".concat(transaction.customer[0].id),\n            newContext: true\n          });\n        }\n      }, transaction.customer[0].phone), Object(_utils_helper__WEBPACK_IMPORTED_MODULE_7__[\"toCurrency\"])(Number(transaction.totalPrice)), Object(_utils_helper__WEBPACK_IMPORTED_MODULE_7__[\"toCurrency\"])(Number(transaction.totalBonusAmount)), transaction.note === null ? \"\" : Object(_utils_helper__WEBPACK_IMPORTED_MODULE_7__[\"toCurrency\"])(Object(_utils_helper__WEBPACK_IMPORTED_MODULE_7__[\"extractNumbersFromString\"])(transaction.note)), Object(_utils_helper__WEBPACK_IMPORTED_MODULE_7__[\"formatDate\"])(transaction.createdAt)];\n    })\n  }))));\n};\n\n_s(BranchData, \"7w2e+JiyWF+Vi5N4SVBaEP0ibW4=\");\n\n_c = BranchData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BranchData);\n\nvar _c;\n\n$RefreshReg$(_c, \"BranchData\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmFuY2hEYXRhLmpzPzc1YTMiXSwibmFtZXMiOlsiQVBJIiwiY29uZmlndXJlIiwiY29uZmlnIiwiQnJhbmNoRGF0YSIsInVzZXIiLCJ1cGRhdGVVc2VyIiwidXNlU3RhdGUiLCJicmFuY2hJbmZvIiwic2V0QnJhbmNoSW5mbyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJuZXdDcmVhdGVkVHJhbnNhY3Rpb24iLCJzZXROZXdDcmVhdGVkVHJhbnNhY3Rpb24iLCJzaG93UGF5bWVudFJlcXVlc3QiLCJzZXRTaG93UGF5bWVudFJlcXVlc3QiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJhcHAiLCJjcmVhdGVBcHAiLCJhcGlLZXkiLCJzaG9wT3JpZ2luIiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImdldEJyYW5jaCIsImdyYXBocWwiLCJncmFwaHFsT3BlcmF0aW9uIiwiYnJhbmNoQnlBZG1pbklkIiwiYWRtaW5JZCIsImF0dHJpYnV0ZXMiLCJzdWIiLCJmZXRjaEJyYW5jaCIsImRhdGEiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjcmVhdGVMaXN0ZW5lciIsIm9uQ3JlYXRlVHJhbnNhY3Rpb24iLCJzdWJzY3JpYmUiLCJuZXh0IiwiY3JlYXRlZFRyYW5zYWN0aW9uIiwiZGVsZXRlTGlzdGVuZXIiLCJvbkRlbGV0ZVRyYW5zYWN0aW9uIiwiZGVsZXRlZFRyYW5zYWN0aW9uIiwidW5zdWJzY3JpYmUiLCJpZCIsImJyYW5jaE5hbWUiLCJTZWFyY2hNYWpvck1vbm90b25lIiwiQmFsYW5jZU1ham9yTW9ub3RvbmUiLCJkaXNwYXRjaCIsIkFjdGlvbiIsIlJFTU9URSIsInVybCIsIm5ld0NvbnRleHQiLCJUcmFuc2FjdGlvbk1ham9yTW9ub3RvbmUiLCJBdXRoIiwic2lnbk91dCIsIkxvZ091dE1pbm9yIiwidHJhbnNhY3Rpb25zIiwiZmlsdGVyIiwidHJhbnNhY3Rpb24iLCJjdXN0b21lciIsInBob25lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJtYXAiLCJBRE1JTl9QQVRIIiwicGF0aCIsInRvQ3VycmVuY3kiLCJOdW1iZXIiLCJ0b3RhbFByaWNlIiwidG90YWxCb251c0Ftb3VudCIsIm5vdGUiLCJleHRyYWN0TnVtYmVyc0Zyb21TdHJpbmciLCJmb3JtYXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsK0NBQUcsQ0FBQ0MsU0FBSixDQUFjQyxvREFBZDs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ3BDQyxVQURvQztBQUFBLE1BQ3hCQyxhQUR3Qjs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUVwQ0csV0FGb0M7QUFBQSxNQUV2QkMsY0FGdUI7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BR3BDSyxxQkFIb0M7QUFBQSxNQUdiQyx3QkFIYTs7QUFBQSxtQkFJU04sc0RBQVEsQ0FBQyxLQUFELENBSmpCO0FBQUEsTUFJcENPLGtCQUpvQztBQUFBLE1BSWhCQyxxQkFKZ0I7O0FBTTNDLE1BQU1DLGlCQUFpQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFFBQUQ7QUFBQSxXQUFjUCxjQUFjLENBQUNPLFFBQUQsQ0FBNUI7QUFBQSxHQUFELEVBQXlDLEVBQXpDLENBQXJDO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxTQUFTLENBQUM7QUFDcEJDLFVBQU0s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QSxhQUFVLElBQUlDLElBQUosQ0FBU0QsQ0FBQyxDQUFDRSxTQUFYLElBQXdCLElBQUlELElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxTQUFYLENBQWxDO0FBQUEsS0FaUixFQWFHQyxHQWJILENBYU8sVUFBQ1YsV0FBRDtBQUFBLGFBQWlCLENBQ3BCLE1BQUMsdURBQUQ7QUFDRSxlQUFPLE1BRFQ7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFDUHhDLFFBQVEsQ0FBQzZCLFFBQVQsQ0FBa0I1QixvRUFBUSxDQUFDNkIsTUFBVCxDQUFnQnFCLFVBQWxDLEVBQThDO0FBQzVDQyxnQkFBSSx1QkFBZ0JaLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixDQUFyQixFQUF3QmhCLEVBQXhDLENBRHdDO0FBRTVDUSxzQkFBVSxFQUFFO0FBRmdDLFdBQTlDLENBRE87QUFBQTtBQUZYLFNBUUdPLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixDQUFyQixFQUF3QkMsS0FSM0IsQ0FEb0IsRUFXcEJXLGdFQUFVLENBQUNDLE1BQU0sQ0FBQ2QsV0FBVyxDQUFDZSxVQUFiLENBQVAsQ0FYVSxFQVlwQkYsZ0VBQVUsQ0FBQ0MsTUFBTSxDQUFDZCxXQUFXLENBQUNnQixnQkFBYixDQUFQLENBWlUsRUFhcEJoQixXQUFXLENBQUNpQixJQUFaLEtBQXFCLElBQXJCLEdBQ0ksRUFESixHQUVJSixnRUFBVSxDQUFDSyw4RUFBd0IsQ0FBQ2xCLFdBQVcsQ0FBQ2lCLElBQWIsQ0FBekIsQ0FmTSxFQWdCcEJFLGdFQUFVLENBQUNuQixXQUFXLENBQUNTLFNBQWIsQ0FoQlUsQ0FBakI7QUFBQSxLQWJQO0FBWEosSUFERixDQXpDSixDQVBKLENBREY7QUFvR0QsQ0EvSUQ7O0dBQU1wRSxVOztLQUFBQSxVO0FBaUpTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnJhbmNoRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBdXRoLCBBUEksIGdyYXBocWxPcGVyYXRpb24gfSBmcm9tIFwiYXdzLWFtcGxpZnlcIlxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCJcbmltcG9ydCB7IENhcmQsIERhdGFUYWJsZSwgQnV0dG9uLCBQYWdlLCBUZXh0RmllbGQsIEljb24sIFN0YWNrIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIlxuaW1wb3J0IHtcbiAgU2VhcmNoTWFqb3JNb25vdG9uZSxcbiAgVHJhbnNhY3Rpb25NYWpvck1vbm90b25lLFxuICBCYWxhbmNlTWFqb3JNb25vdG9uZSxcbiAgTG9nT3V0TWlub3IsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzLWljb25zXCJcbmltcG9ydCB7IHRvQ3VycmVuY3ksIGZvcm1hdERhdGUsIGV4dHJhY3ROdW1iZXJzRnJvbVN0cmluZyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIlxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vYXdzLWV4cG9ydHNcIlxuaW1wb3J0IFBheW1lbnRSZXF1ZXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1BheW1lbnRSZXF1ZXN0XCJcbmltcG9ydCB7IGJyYW5jaEJ5QWRtaW5JZCB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIlxuaW1wb3J0IHsgb25DcmVhdGVUcmFuc2FjdGlvbiwgb25EZWxldGVUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi9ncmFwaHFsL3N1YnNjcmlwdGlvbnNcIlxuXG5BUEkuY29uZmlndXJlKGNvbmZpZylcblxuY29uc3QgQnJhbmNoRGF0YSA9ICh7IHVzZXIsIHVwZGF0ZVVzZXIgfSkgPT4ge1xuICBjb25zdCBbYnJhbmNoSW5mbywgc2V0QnJhbmNoSW5mb10gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtuZXdDcmVhdGVkVHJhbnNhY3Rpb24sIHNldE5ld0NyZWF0ZWRUcmFuc2FjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbc2hvd1BheW1lbnRSZXF1ZXN0LCBzZXRTaG93UGF5bWVudFJlcXVlc3RdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHNldFNlYXJjaFZhbHVlKG5ld1ZhbHVlKSwgW10pXG5cbiAgY29uc3QgYXBwID0gY3JlYXRlQXBwKHtcbiAgICBhcGlLZXk6IFwiM2IwMTA2M2JhYzMwMzFkMTMxMDExMDBlZjNlNDRmZDVcIixcbiAgICBzaG9wT3JpZ2luOiBcInRyYW5zYWN0aW9ucy1hdmFudGEubXlzaG9waWZ5LmNvbVwiLFxuICB9KVxuXG4gIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcClcblxuICBjb25zdCBnZXRCcmFuY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoQnJhbmNoID0gYXdhaXQgQVBJLmdyYXBocWwoXG4gICAgICAgIGdyYXBocWxPcGVyYXRpb24oYnJhbmNoQnlBZG1pbklkLCB7IGFkbWluSWQ6IHVzZXIuYXR0cmlidXRlcy5zdWIgfSlcbiAgICAgIClcbiAgICAgIHNldEJyYW5jaEluZm8oZmV0Y2hCcmFuY2guZGF0YS5icmFuY2hCeUFkbWluSWQuaXRlbXNbMF0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QnJhbmNoKClcblxuICAgIGNvbnN0IGNyZWF0ZUxpc3RlbmVyID0gQVBJLmdyYXBocWwoZ3JhcGhxbE9wZXJhdGlvbihvbkNyZWF0ZVRyYW5zYWN0aW9uKSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChjcmVhdGVkVHJhbnNhY3Rpb24pID0+IHNldE5ld0NyZWF0ZWRUcmFuc2FjdGlvbihjcmVhdGVkVHJhbnNhY3Rpb24pLFxuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVMaXN0ZW5lciA9IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ob25EZWxldGVUcmFuc2FjdGlvbikpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoZGVsZXRlZFRyYW5zYWN0aW9uKSA9PiBzZXROZXdDcmVhdGVkVHJhbnNhY3Rpb24oZGVsZXRlZFRyYW5zYWN0aW9uKSxcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNyZWF0ZUxpc3RlbmVyLnVuc3Vic2NyaWJlKClcbiAgICAgIGRlbGV0ZUxpc3RlbmVyLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gIH0sIFtuZXdDcmVhdGVkVHJhbnNhY3Rpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93UGF5bWVudFJlcXVlc3QgPyAoXG4gICAgICAgIDxQYXltZW50UmVxdWVzdFxuICAgICAgICAgIHNldFNob3dQYXltZW50UmVxdWVzdD17c2V0U2hvd1BheW1lbnRSZXF1ZXN0fVxuICAgICAgICAgIGJyYW5jaElkPXticmFuY2hJbmZvID8gYnJhbmNoSW5mby5pZCA6IFwiXCJ9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8UGFnZSB0aXRsZT17YnJhbmNoSW5mbyAmJiBicmFuY2hJbmZvLmJyYW5jaE5hbWV9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIFByb2R1Y3RcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaElucHV0fVxuICAgICAgICAgICAgcHJlZml4PXs8SWNvbiBzb3VyY2U9e1NlYXJjaE1ham9yTW9ub3RvbmV9IC8+fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgQ3VzdG9tZXIgcGhvbmUgbnVtYmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJBY2NlcHQtUGF5bWVudFwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXltZW50UmVxdWVzdCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPEljb24gc291cmNlPXtCYWxhbmNlTWFqb3JNb25vdG9uZX0gLz4gQWNjZXB0IFBheW1lbnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwiQ3JlYXRlLVRyYW5zYWN0aW9uXCJcbiAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFJlZGlyZWN0LkFjdGlvbi5SRU1PVEUsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXJsOiBgaHR0cHM6Ly9kZXYuZDNpdmdwa3p1ejZoa3IuYW1wbGlmeWFwcC5jb20/YWRtaW5JZD0ke3VzZXIuYXR0cmlidXRlcy5zdWJ9YCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDozMDAxL3RyYW5zYWN0aW9ucy8ke3VzZXIuYXR0cmlidXRlcy5zdWJ9YCxcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29udGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBzb3VyY2U9e1RyYW5zYWN0aW9uTWFqb3JNb25vdG9uZX0gLz4gQ3JlYXRlIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgaWQ9XCJMb2dvdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIEF1dGguc2lnbk91dCgpXG4gICAgICAgICAgICAgICAgICB1cGRhdGVVc2VyKG51bGwpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEljb24gc291cmNlPXtMb2dPdXRNaW5vcn0gLz4gTG9nb3V0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAge2JyYW5jaEluZm8gJiYgKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgICAgICBjb2x1bW5Db250ZW50VHlwZXM9e1tcInRleHRcIiwgXCJ0ZXh0XCIsIFwidGV4dFwiLCBcInRleHRcIl19XG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgIFwiQ3VzdG9tZXIgcGhvbmUgbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICBcIlRvdGFsUHJpY2VcIixcbiAgICAgICAgICAgICAgICAgIFwiVG90YWxCb251c0Ftb3VudFwiLFxuICAgICAgICAgICAgICAgICAgXCJNaW51cyBmcm9tIEJvbnVzIEFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgXCJDcmVhdGVkQXRcIixcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHJvd3M9e1xuICAgICAgICAgICAgICAgICAgYnJhbmNoSW5mbyAmJlxuICAgICAgICAgICAgICAgICAgYnJhbmNoSW5mby50cmFuc2FjdGlvbnMuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmN1c3RvbWVyWzBdLnBob25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKCh0cmFuc2FjdGlvbikgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFJlZGlyZWN0LkFjdGlvbi5BRE1JTl9QQVRILCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYC9jdXN0b21lcnMvJHt0cmFuc2FjdGlvbi5jdXN0b21lclswXS5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbnRleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLmN1c3RvbWVyWzBdLnBob25lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgICB0b0N1cnJlbmN5KE51bWJlcih0cmFuc2FjdGlvbi50b3RhbFByaWNlKSksXG4gICAgICAgICAgICAgICAgICAgICAgdG9DdXJyZW5jeShOdW1iZXIodHJhbnNhY3Rpb24udG90YWxCb251c0Ftb3VudCkpLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm5vdGUgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0b0N1cnJlbmN5KGV4dHJhY3ROdW1iZXJzRnJvbVN0cmluZyh0cmFuc2FjdGlvbi5ub3RlKSksXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RGF0ZSh0cmFuc2FjdGlvbi5jcmVhdGVkQXQpLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhZ2U+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyYW5jaERhdGFcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BranchData.js\n");

/***/ })

})