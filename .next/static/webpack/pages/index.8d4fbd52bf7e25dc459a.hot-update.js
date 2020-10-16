webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BranchList.js":
/*!**********************************!*\
  !*** ./components/BranchList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk */ \"./node_modules/aws-sdk/lib/browser.js\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helper */ \"./utils/helper.js\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../aws-exports */ \"./aws-exports.js\");\n/* harmony import */ var _BranchProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BranchProducts */ \"./components/BranchProducts.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../graphql/subscriptions */ \"./graphql/subscriptions.js\");\n/* harmony import */ var _graphql_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../graphql/mutation */ \"./graphql/mutation.js\");\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\naws_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.config.update({\n  accessKeyId: \"AKIAIF6WKVKSOTQCUREQ\",\n  secretAccessKey: \"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\",\n  region: \"us-east-1\"\n});\nvar cognito = new aws_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.CognitoIdentityServiceProvider();\n\nvar BranchList = function BranchList(_ref) {\n  _s();\n\n  var setBranchId = _ref.setBranchId,\n      branchId = _ref.branchId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      branches = _useState2[0],\n      setBranches = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      branchName = _useState3[0],\n      setBranchName = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      productBranchId = _useState4[0],\n      setProductBranchId = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      newCreatedBranch = _useState5[0],\n      setNewCreatedBranch = _useState5[1];\n\n  var handleChange = function handleChange() {\n    setActive(!active);\n  };\n\n  var fetchBranches = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var getBranches;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_10__[\"listBranchs\"]));\n\n            case 3:\n              getBranches = _context.sent;\n              setBranches(getBranches.data);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function fetchBranches() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var deleteBranch = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {\n      var branchToDelete, transactionsToDelete, productsToDelete, paymentRequestToDelete, deletedBranch;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              branchToDelete = branches.listBranchs.items.filter(function (item) {\n                return item.id === id;\n              })[0];\n              transactionsToDelete = branchToDelete.transactions.items ? branchToDelete.transactions.items.map(function (transaction) {\n                return transaction.id;\n              }) : \"\";\n              productsToDelete = branchToDelete.branchProducts.items ? branchToDelete.branchProducts.items.map(function (product) {\n                return product.id;\n              }) : \"\";\n              paymentRequestToDelete = branchToDelete.branchPaymentRequests.items ? branchToDelete.branchPaymentRequests.items.map(function (paymentRequest) {\n                return paymentRequest.id;\n              }) : \"\";\n              _context2.prev = 4;\n              _context2.next = 7;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"removeBranch\"], {\n                input: {\n                  id: id\n                }\n              }));\n\n            case 7:\n              deletedBranch = _context2.sent;\n              _context2.next = 10;\n              return Promise.all(transactionsToDelete.map(function (transactionId) {\n                aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"deleteTransaction\"], {\n                  input: {\n                    id: transactionId\n                  }\n                }));\n              }))[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 10:\n              _context2.next = 12;\n              return Promise.all(productsToDelete.map(function (productId) {\n                aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"deleteBranchProduct\"], {\n                  input: {\n                    id: productId\n                  }\n                }));\n              }))[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 12:\n              _context2.next = 14;\n              return Promise.all(paymentRequestToDelete.map(function (paymentId) {\n                aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"deletePaymentRequest\"], {\n                  input: {\n                    id: paymentId\n                  }\n                }));\n              }));\n\n            case 14:\n              _context2.next = 19;\n              break;\n\n            case 16:\n              _context2.prev = 16;\n              _context2.t0 = _context2[\"catch\"](4);\n              console.log(_context2.t0);\n\n            case 19:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[4, 16]]);\n    }));\n\n    return function deleteBranch(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var deleteUserFromCognito = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(username) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return cognito.adminDeleteUser({\n                UserPoolId: \"us-east-1_IfrnnzGFR\",\n                Username: username\n              }).promise();\n\n            case 3:\n              _context3.next = 8;\n              break;\n\n            case 5:\n              _context3.prev = 5;\n              _context3.t0 = _context3[\"catch\"](0);\n              console.log(_context3.t0);\n\n            case 8:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 5]]);\n    }));\n\n    return function deleteUserFromCognito(_x2) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetchBranches();\n    var createListener = aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_11__[\"onCreateBranchSubscription\"])).subscribe({\n      next: function next(createdBranch) {\n        setNewCreatedBranch(createdBranch);\n      }\n    });\n    var deleteListener = aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_11__[\"onDeleteBranchSubscription\"])).subscribe({\n      next: function next(deletedBranch) {\n        setNewCreatedBranch(deletedBranch);\n      }\n    });\n    return function () {\n      createListener.unsubscribe();\n      deleteListener.unsubscribe();\n    };\n  }, [newCreatedBranch]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"], {\n    selectable: true,\n    celled: true\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].HeaderCell, null, \"Branch Name\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].HeaderCell, {\n    textAlign: \"center\"\n  }, \"Created At\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].HeaderCell, {\n    textAlign: \"center\"\n  }, \"Actions\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Body, null, branches && branches.listBranchs.items.map(function (item) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Row, {\n      key: item.id\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      primary: true,\n      onClick: function onClick() {\n        setBranchId(item.id);\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n      name: \"code branch\"\n    }), \" \", item.branchName)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Cell, {\n      textAlign: \"center\"\n    }, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_7__[\"formatDate\"])(item.createdAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Table\"].Cell, {\n      textAlign: \"center\",\n      className: \"branch-actions\"\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Popup\"], {\n      content: \"Edit branch\",\n      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n        onClick: function onClick() {\n          setProductBranchId(item.id);\n          setBranchName(item.branchName);\n          handleChange();\n        },\n        className: \"edit-branch\",\n        name: \"edit outline\"\n      })\n    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Popup\"], {\n      content: \"Delete Branch\",\n      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n        className: \"remove-branch\",\n        name: \"trash alternate\",\n        onClick: function onClick() {\n          deleteBranch(item.id);\n          deleteUserFromCognito(item.branchUsername);\n        }\n      })\n    })));\n  }))), __jsx(_BranchProducts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    branchName: branchName,\n    branchId: productBranchId,\n    active: active,\n    handleChange: handleChange\n  }));\n};\n\n_s(BranchList, \"oLUDjR7KPbpwaDVXrguFKhSOWks=\");\n\n_c = BranchList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BranchList);\n\nvar _c;\n\n$RefreshReg$(_c, \"BranchList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmFuY2hMaXN0LmpzP2FjMzgiXSwibmFtZXMiOlsiQVBJIiwiY29uZmlndXJlIiwiY29uZmlnIiwiQVdTIiwidXBkYXRlIiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJyZWdpb24iLCJjb2duaXRvIiwiQ29nbml0b0lkZW50aXR5U2VydmljZVByb3ZpZGVyIiwiQnJhbmNoTGlzdCIsInNldEJyYW5jaElkIiwiYnJhbmNoSWQiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImJyYW5jaGVzIiwic2V0QnJhbmNoZXMiLCJicmFuY2hOYW1lIiwic2V0QnJhbmNoTmFtZSIsInByb2R1Y3RCcmFuY2hJZCIsInNldFByb2R1Y3RCcmFuY2hJZCIsIm5ld0NyZWF0ZWRCcmFuY2giLCJzZXROZXdDcmVhdGVkQnJhbmNoIiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2hCcmFuY2hlcyIsImdyYXBocWwiLCJncmFwaHFsT3BlcmF0aW9uIiwibGlzdEJyYW5jaHMiLCJnZXRCcmFuY2hlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQnJhbmNoIiwiaWQiLCJicmFuY2hUb0RlbGV0ZSIsIml0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInRyYW5zYWN0aW9uc1RvRGVsZXRlIiwidHJhbnNhY3Rpb25zIiwibWFwIiwidHJhbnNhY3Rpb24iLCJwcm9kdWN0c1RvRGVsZXRlIiwiYnJhbmNoUHJvZHVjdHMiLCJwcm9kdWN0IiwicGF5bWVudFJlcXVlc3RUb0RlbGV0ZSIsImJyYW5jaFBheW1lbnRSZXF1ZXN0cyIsInBheW1lbnRSZXF1ZXN0IiwicmVtb3ZlQnJhbmNoIiwiaW5wdXQiLCJkZWxldGVkQnJhbmNoIiwiUHJvbWlzZSIsImFsbCIsInRyYW5zYWN0aW9uSWQiLCJkZWxldGVUcmFuc2FjdGlvbiIsImVyciIsInByb2R1Y3RJZCIsImRlbGV0ZUJyYW5jaFByb2R1Y3QiLCJwYXltZW50SWQiLCJkZWxldGVQYXltZW50UmVxdWVzdCIsImRlbGV0ZVVzZXJGcm9tQ29nbml0byIsInVzZXJuYW1lIiwiYWRtaW5EZWxldGVVc2VyIiwiVXNlclBvb2xJZCIsIlVzZXJuYW1lIiwicHJvbWlzZSIsInVzZUVmZmVjdCIsImNyZWF0ZUxpc3RlbmVyIiwib25DcmVhdGVCcmFuY2hTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJuZXh0IiwiY3JlYXRlZEJyYW5jaCIsImRlbGV0ZUxpc3RlbmVyIiwib25EZWxldGVCcmFuY2hTdWJzY3JpcHRpb24iLCJ1bnN1YnNjcmliZSIsImZvcm1hdERhdGUiLCJjcmVhdGVkQXQiLCJicmFuY2hVc2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0FBLCtDQUFHLENBQUNDLFNBQUosQ0FBY0Msb0RBQWQ7QUFFQUMsOENBQUcsQ0FBQ0QsTUFBSixDQUFXRSxNQUFYLENBQWtCO0FBQ2hCQyxhQUFXLEVBQUUsc0JBREc7QUFFaEJDLGlCQUFlLEVBQUUsMENBRkQ7QUFHaEJDLFFBQU0sRUFBRTtBQUhRLENBQWxCO0FBTUEsSUFBTUMsT0FBTyxHQUFHLElBQUlMLDhDQUFHLENBQUNNLDhCQUFSLEVBQWhCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFdBQTRCLFFBQTVCQSxXQUE0QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDcEJDLHNEQUFRLENBQUMsS0FBRCxDQURZO0FBQUEsTUFDekNDLE1BRHlDO0FBQUEsTUFDakNDLFNBRGlDOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxFQUFELENBRlE7QUFBQSxNQUV6Q0csUUFGeUM7QUFBQSxNQUUvQkMsV0FGK0I7O0FBQUEsbUJBR1pKLHNEQUFRLENBQUMsRUFBRCxDQUhJO0FBQUEsTUFHekNLLFVBSHlDO0FBQUEsTUFH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WEYsQ0FENkI7QUFBQSxHQUEvQixDQUZKLENBUkYsQ0FERixFQXdERSxNQUFDLHVEQUFEO0FBQ0UsY0FBVSxFQUFFNUQsVUFEZDtBQUVFLFlBQVEsRUFBRUUsZUFGWjtBQUdFLFVBQU0sRUFBRU4sTUFIVjtBQUlFLGdCQUFZLEVBQUVVO0FBSmhCLElBeERGLENBREY7QUFpRUQsQ0EvSkQ7O0dBQU1kLFU7O0tBQUFBLFU7QUFpS1NBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CcmFuY2hMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiXG5pbXBvcnQgeyBBUEksIGdyYXBocWxPcGVyYXRpb24gfSBmcm9tIFwiYXdzLWFtcGxpZnlcIlxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIlxuaW1wb3J0IHsgVGFibGUsIFBvcHVwLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2F3cy1leHBvcnRzXCJcbmltcG9ydCBCcmFuY2hQcm9kdWN0cyBmcm9tIFwiLi9CcmFuY2hQcm9kdWN0c1wiXG5pbXBvcnQgeyBsaXN0QnJhbmNocyB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIlxuaW1wb3J0IHsgb25DcmVhdGVCcmFuY2hTdWJzY3JpcHRpb24sIG9uRGVsZXRlQnJhbmNoU3Vic2NyaXB0aW9uIH0gZnJvbSBcIi4uL2dyYXBocWwvc3Vic2NyaXB0aW9uc1wiXG5pbXBvcnQge1xuICByZW1vdmVCcmFuY2gsXG4gIGRlbGV0ZVRyYW5zYWN0aW9uLFxuICBkZWxldGVCcmFuY2hQcm9kdWN0LFxuICBkZWxldGVQYXltZW50UmVxdWVzdCxcbn0gZnJvbSBcIi4uL2dyYXBocWwvbXV0YXRpb25cIlxuXG5BUEkuY29uZmlndXJlKGNvbmZpZylcblxuQVdTLmNvbmZpZy51cGRhdGUoe1xuICBhY2Nlc3NLZXlJZDogXCJBS0lBSUY2V0tWS1NPVFFDVVJFUVwiLFxuICBzZWNyZXRBY2Nlc3NLZXk6IFwib0VNUU5JaURWK1FLM1J4dGZwK0RSUndHUjkwT1djS1ZweWpYZDFKd1wiLFxuICByZWdpb246IFwidXMtZWFzdC0xXCIsXG59KVxuXG5jb25zdCBjb2duaXRvID0gbmV3IEFXUy5Db2duaXRvSWRlbnRpdHlTZXJ2aWNlUHJvdmlkZXIoKVxuXG5jb25zdCBCcmFuY2hMaXN0ID0gKHsgc2V0QnJhbmNoSWQsIGJyYW5jaElkIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYnJhbmNoZXMsIHNldEJyYW5jaGVzXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFticmFuY2hOYW1lLCBzZXRCcmFuY2hOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwcm9kdWN0QnJhbmNoSWQsIHNldFByb2R1Y3RCcmFuY2hJZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbmV3Q3JlYXRlZEJyYW5jaCwgc2V0TmV3Q3JlYXRlZEJyYW5jaF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSlcbiAgfVxuXG4gIGNvbnN0IGZldGNoQnJhbmNoZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdldEJyYW5jaGVzID0gYXdhaXQgQVBJLmdyYXBocWwoZ3JhcGhxbE9wZXJhdGlvbihsaXN0QnJhbmNocykpXG4gICAgICBzZXRCcmFuY2hlcyhnZXRCcmFuY2hlcy5kYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWxldGVCcmFuY2ggPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBicmFuY2hUb0RlbGV0ZSA9IGJyYW5jaGVzLmxpc3RCcmFuY2hzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdXG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbnNUb0RlbGV0ZSA9IGJyYW5jaFRvRGVsZXRlLnRyYW5zYWN0aW9ucy5pdGVtc1xuICAgICAgPyBicmFuY2hUb0RlbGV0ZS50cmFuc2FjdGlvbnMuaXRlbXMubWFwKCh0cmFuc2FjdGlvbikgPT4gdHJhbnNhY3Rpb24uaWQpXG4gICAgICA6IFwiXCJcblxuICAgIGNvbnN0IHByb2R1Y3RzVG9EZWxldGUgPSBicmFuY2hUb0RlbGV0ZS5icmFuY2hQcm9kdWN0cy5pdGVtc1xuICAgICAgPyBicmFuY2hUb0RlbGV0ZS5icmFuY2hQcm9kdWN0cy5pdGVtcy5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpXG4gICAgICA6IFwiXCJcblxuICAgIGNvbnN0IHBheW1lbnRSZXF1ZXN0VG9EZWxldGUgPSBicmFuY2hUb0RlbGV0ZS5icmFuY2hQYXltZW50UmVxdWVzdHMuaXRlbXNcbiAgICAgID8gYnJhbmNoVG9EZWxldGUuYnJhbmNoUGF5bWVudFJlcXVlc3RzLml0ZW1zLm1hcCgocGF5bWVudFJlcXVlc3QpID0+IHBheW1lbnRSZXF1ZXN0LmlkKVxuICAgICAgOiBcIlwiXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVsZXRlZEJyYW5jaCA9IGF3YWl0IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ocmVtb3ZlQnJhbmNoLCB7IGlucHV0OiB7IGlkIH0gfSkpXG5cbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICB0cmFuc2FjdGlvbnNUb0RlbGV0ZS5tYXAoKHRyYW5zYWN0aW9uSWQpID0+IHtcbiAgICAgICAgICBBUEkuZ3JhcGhxbChncmFwaHFsT3BlcmF0aW9uKGRlbGV0ZVRyYW5zYWN0aW9uLCB7IGlucHV0OiB7IGlkOiB0cmFuc2FjdGlvbklkIH0gfSkpXG4gICAgICAgIH0pXG4gICAgICApLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBwcm9kdWN0c1RvRGVsZXRlLm1hcCgocHJvZHVjdElkKSA9PiB7XG4gICAgICAgICAgQVBJLmdyYXBocWwoZ3JhcGhxbE9wZXJhdGlvbihkZWxldGVCcmFuY2hQcm9kdWN0LCB7IGlucHV0OiB7IGlkOiBwcm9kdWN0SWQgfSB9KSlcbiAgICAgICAgfSlcbiAgICAgICkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHBheW1lbnRSZXF1ZXN0VG9EZWxldGUubWFwKChwYXltZW50SWQpID0+IHtcbiAgICAgICAgICBBUEkuZ3JhcGhxbChncmFwaHFsT3BlcmF0aW9uKGRlbGV0ZVBheW1lbnRSZXF1ZXN0LCB7IGlucHV0OiB7IGlkOiBwYXltZW50SWQgfSB9KSlcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVsZXRlVXNlckZyb21Db2duaXRvID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvZ25pdG9cbiAgICAgICAgLmFkbWluRGVsZXRlVXNlcih7XG4gICAgICAgICAgVXNlclBvb2xJZDogXCJ1cy1lYXN0LTFfSWZybm56R0ZSXCIsXG4gICAgICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICB9KVxuICAgICAgICAucHJvbWlzZSgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hCcmFuY2hlcygpXG5cbiAgICBjb25zdCBjcmVhdGVMaXN0ZW5lciA9IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ob25DcmVhdGVCcmFuY2hTdWJzY3JpcHRpb24pKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGNyZWF0ZWRCcmFuY2gpID0+IHtcbiAgICAgICAgc2V0TmV3Q3JlYXRlZEJyYW5jaChjcmVhdGVkQnJhbmNoKVxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgZGVsZXRlTGlzdGVuZXIgPSBBUEkuZ3JhcGhxbChncmFwaHFsT3BlcmF0aW9uKG9uRGVsZXRlQnJhbmNoU3Vic2NyaXB0aW9uKSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkZWxldGVkQnJhbmNoKSA9PiB7XG4gICAgICAgIHNldE5ld0NyZWF0ZWRCcmFuY2goZGVsZXRlZEJyYW5jaClcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjcmVhdGVMaXN0ZW5lci51bnN1YnNjcmliZSgpXG4gICAgICBkZWxldGVMaXN0ZW5lci51bnN1YnNjcmliZSgpXG4gICAgfVxuICB9LCBbbmV3Q3JlYXRlZEJyYW5jaF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRhYmxlIHNlbGVjdGFibGUgY2VsbGVkPlxuICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5CcmFuY2ggTmFtZTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIHRleHRBbGlnbj1cImNlbnRlclwiPkNyZWF0ZWQgQXQ8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5BY3Rpb25zPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkhlYWRlcj5cbiAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAge2JyYW5jaGVzICYmXG4gICAgICAgICAgICBicmFuY2hlcy5saXN0QnJhbmNocy5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlLlJvdyBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRCcmFuY2hJZChpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNvZGUgYnJhbmNoXCIgLz4ge2l0ZW0uYnJhbmNoTmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57Zm9ybWF0RGF0ZShpdGVtLmNyZWF0ZWRBdCl9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIHRleHRBbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT1cImJyYW5jaC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkVkaXQgYnJhbmNoXCJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdEJyYW5jaElkKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5jaE5hbWUoaXRlbS5icmFuY2hOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtYnJhbmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0IG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkRlbGV0ZSBCcmFuY2hcIlxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWJyYW5jaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2ggYWx0ZXJuYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnJhbmNoKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVVzZXJGcm9tQ29nbml0byhpdGVtLmJyYW5jaFVzZXJuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICAgIDxCcmFuY2hQcm9kdWN0c1xuICAgICAgICBicmFuY2hOYW1lPXticmFuY2hOYW1lfVxuICAgICAgICBicmFuY2hJZD17cHJvZHVjdEJyYW5jaElkfVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyYW5jaExpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BranchList.js\n");

/***/ })

})