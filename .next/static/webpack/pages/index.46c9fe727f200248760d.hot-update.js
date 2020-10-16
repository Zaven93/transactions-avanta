webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BranchProducts.js":
/*!**************************************!*\
  !*** ./components/BranchProducts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../aws-exports */ \"./aws-exports.js\");\n/* harmony import */ var _BranchRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BranchRow */ \"./components/BranchRow.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _graphql_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../graphql/mutation */ \"./graphql/mutation.js\");\n/* harmony import */ var _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../graphql/subscriptions */ \"./graphql/subscriptions.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\nvar ProductsList = function ProductsList(_ref) {\n  _s();\n\n  var active = _ref.active,\n      handleChange = _ref.handleChange,\n      branchId = _ref.branchId;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_11__[\"listProducts\"]),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      branchProductSubscription = _useState[0],\n      setBranchProductSubscription = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      rowId = _useState2[0],\n      setRowId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    products: []\n  }),\n      state = _useState3[0],\n      setState = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      branchInfo = _useState4[0],\n      setBranchInfo = _useState4[1];\n\n  var getBranch = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var branch;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_11__[\"getBranchById\"], {\n                id: branchId\n              }));\n\n            case 3:\n              branch = _context.sent;\n              setBranchInfo(branch.data.getBranch);\n              setRowId([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rowId), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(branch.data.getBranch.branchProducts.items.map(function (item) {\n                return item.productId;\n              }))));\n              setState({\n                products: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.products), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(branch.data.getBranch.branchProducts.items.map(function (product) {\n                  return {\n                    id: product.productId\n                  };\n                })))\n              });\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function getBranch() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    getBranch();\n    var createListener = aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_13__[\"onCreateBranchProduct\"])).subscribe({\n      next: function next(createdBranchProduct) {\n        return setBranchProductSubscription(createdBranchProduct);\n      }\n    });\n    var updateListener = aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_13__[\"onUpdateBranchProduct\"])).subscribe({\n      next: function next(updatedBranchProduct) {\n        return setBranchProductSubscription(updatedBranchProduct);\n      }\n    });\n    var deleteListener = aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_13__[\"onDeleteBranchProduct\"])).subscribe({\n      next: function next(deletedBranchProduct) {\n        return setBranchProductSubscription(deletedBranchProduct);\n      }\n    });\n    return function () {\n      createListener.unsubscribe();\n      updateListener.unsubscribe();\n      deleteListener.unsubscribe();\n    };\n  }, [branchId, branchProductSubscription]);\n\n  if (loading) {\n    return __jsx(\"div\", null, \"Loading products...\");\n  }\n\n  if (error) {\n    return __jsx(\"div\", null, \"Some error occured\");\n  }\n\n  var deleteProductsFromBranch = function deleteProductsFromBranch() {\n    var productsToDeleteFromBranch = branchInfo.branchProducts.items.filter(function (branchProduct) {\n      return !state.products.map(function (product) {\n        return product.id;\n      }).includes(branchProduct.productId);\n    });\n    Promise.all(productsToDeleteFromBranch.map(function (deleteProduct) {\n      aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"deleteBranchProduct\"], {\n        input: {\n          id: deleteProduct.id\n        }\n      }));\n    }))[\"catch\"](function (err) {\n      return console.log(err);\n    });\n    return;\n  };\n\n  var addProductsToBranch = function addProductsToBranch() {\n    Promise.all(state.products.map(function (product) {\n      var updatedProduct = branchInfo.branchProducts.items.filter(function (branchProduct) {\n        return branchProduct.productId === product.id;\n      })[0];\n\n      if (updatedProduct) {\n        aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"updateBranchProduct\"], {\n          input: {\n            id: updatedProduct.id,\n            tags: product.tags\n          }\n        }));\n      } else {\n        aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_5__[\"graphqlOperation\"])(_graphql_mutation__WEBPACK_IMPORTED_MODULE_12__[\"createBranchProduct\"], {\n          input: {\n            id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__[\"v4\"])(),\n            branchId: branchId,\n            productId: product.id,\n            tags: product.tags\n          }\n        }));\n      }\n    }))[\"catch\"](function (err) {\n      return console.log(err);\n    });\n    return;\n  };\n\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Modal\"], {\n    open: active,\n    onClose: function onClose() {\n      return handleChange();\n    },\n    title: \"Choose products\",\n    primaryAction: {\n      content: \"Save changes\",\n      onAction: function onAction() {\n        addProductsToBranch();\n        deleteProductsFromBranch();\n        handleChange();\n      }\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Modal\"].Section, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"], {\n    celled: true,\n    striped: true,\n    selectable: true\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].HeaderCell, null, \"Products\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].HeaderCell, {\n    textAlign: \"center\"\n  }, \"Price\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].HeaderCell, null, \"Bonus Percentage\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Body, null, data && branchInfo && data.products.edges.map(function (product) {\n    return __jsx(_BranchRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      rowId: rowId,\n      setRowId: setRowId,\n      branchInfo: branchInfo,\n      branchId: branchId,\n      product: product,\n      state: state,\n      setState: setState\n    });\n  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Footer, {\n    fullWidth: true\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Table\"].Row, null)))));\n};\n\n_s(ProductsList, \"x2cmyMrch9QxuRhWvthVBlbL7mg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n_c = ProductsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmFuY2hQcm9kdWN0cy5qcz8zZTc1Il0sIm5hbWVzIjpbIkFQSSIsImNvbmZpZ3VyZSIsImNvbmZpZyIsIlByb2R1Y3RzTGlzdCIsImFjdGl2ZSIsImhhbmRsZUNoYW5nZSIsImJyYW5jaElkIiwidXNlUXVlcnkiLCJsaXN0UHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlU3RhdGUiLCJicmFuY2hQcm9kdWN0U3Vic2NyaXB0aW9uIiwic2V0QnJhbmNoUHJvZHVjdFN1YnNjcmlwdGlvbiIsInJvd0lkIiwic2V0Um93SWQiLCJwcm9kdWN0cyIsInN0YXRlIiwic2V0U3RhdGUiLCJicmFuY2hJbmZvIiwic2V0QnJhbmNoSW5mbyIsImdldEJyYW5jaCIsImdyYXBocWwiLCJncmFwaHFsT3BlcmF0aW9uIiwiZ2V0QnJhbmNoQnlJZCIsImlkIiwiYnJhbmNoIiwiYnJhbmNoUHJvZHVjdHMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0SWQiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImNyZWF0ZUxpc3RlbmVyIiwib25DcmVhdGVCcmFuY2hQcm9kdWN0Iiwic3Vic2NyaWJlIiwibmV4dCIsImNyZWF0ZWRCcmFuY2hQcm9kdWN0IiwidXBkYXRlTGlzdGVuZXIiLCJvblVwZGF0ZUJyYW5jaFByb2R1Y3QiLCJ1cGRhdGVkQnJhbmNoUHJvZHVjdCIsImRlbGV0ZUxpc3RlbmVyIiwib25EZWxldGVCcmFuY2hQcm9kdWN0IiwiZGVsZXRlZEJyYW5jaFByb2R1Y3QiLCJ1bnN1YnNjcmliZSIsImRlbGV0ZVByb2R1Y3RzRnJvbUJyYW5jaCIsInByb2R1Y3RzVG9EZWxldGVGcm9tQnJhbmNoIiwiZmlsdGVyIiwiYnJhbmNoUHJvZHVjdCIsImluY2x1ZGVzIiwiUHJvbWlzZSIsImFsbCIsImRlbGV0ZVByb2R1Y3QiLCJkZWxldGVCcmFuY2hQcm9kdWN0IiwiaW5wdXQiLCJlcnIiLCJhZGRQcm9kdWN0c1RvQnJhbmNoIiwidXBkYXRlZFByb2R1Y3QiLCJ1cGRhdGVCcmFuY2hQcm9kdWN0IiwidGFncyIsImNyZWF0ZUJyYW5jaFByb2R1Y3QiLCJ1dWlkdjQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJlZGdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQU1BQSwrQ0FBRyxDQUFDQyxTQUFKLENBQWNDLG9EQUFkOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLE1BQXFDLFFBQXJDQSxNQUFxQztBQUFBLE1BQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzFCQywrREFBUSxDQUFDQyw4REFBRCxDQURrQjtBQUFBLE1BQ25EQyxPQURtRCxhQUNuREEsT0FEbUQ7QUFBQSxNQUMxQ0MsS0FEMEMsYUFDMUNBLEtBRDBDO0FBQUEsTUFDbkNDLElBRG1DLGFBQ25DQSxJQURtQzs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVwREMseUJBRm9EO0FBQUEsTUFFekJDLDRCQUZ5Qjs7QUFBQSxtQkFHakNGLHNEQUFRLENBQUMsRUFBRCxDQUh5QjtBQUFBLE1BR3BERyxLQUhvRDtBQUFBLE1BRzdDQyxRQUg2Qzs7QUFBQSxtQkFJakNKLHNEQUFRLENBQUM7QUFDakNLLFlBQVEsRUFBRTtBQUR1QixHQUFELENBSnlCO0FBQUEsTUFJcERDLEtBSm9EO0FBQUEsTUFJN0NDLFFBSjZDOztBQUFBLG1CQU92QlAsc0RBQVEsQ0FBQyxFQUFELENBUGU7QUFBQSxNQU9wRFEsVUFQb0Q7QUFBQSxNQU94Q0MsYUFQd0M7O0FBUzNELE1BQU1DLFNBQVM7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LFFBRlo7QUFHRSxnQkFBVSxFQUFFSSxVQUhkO0FBSUUsY0FBUSxFQUFFZCxRQUpaO0FBS0UsYUFBTyxFQUFFMkIsT0FMWDtBQU1FLFdBQUssRUFBRWYsS0FOVDtBQU9FLGNBQVEsRUFBRUM7QUFQWixNQURzQjtBQUFBLEdBQXhCLENBSEosQ0FSRixFQXVCRSxNQUFDLHVEQUFELENBQU8sTUFBUDtBQUFjLGFBQVM7QUFBdkIsS0FDRSxNQUFDLHVEQUFELENBQU8sR0FBUCxPQURGLENBdkJGLENBREYsQ0FaRixDQURGO0FBNENELENBdEpEOztHQUFNaEIsWTtVQUM2QkksdUQ7OztLQUQ3QkosWTtBQXdKU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0JyYW5jaFByb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCB7IEFQSSwgZ3JhcGhxbE9wZXJhdGlvbiB9IGZyb20gXCJhd3MtYW1wbGlmeVwiXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2F3cy1leHBvcnRzXCJcbmltcG9ydCBCcmFuY2hSb3cgZnJvbSBcIi4vQnJhbmNoUm93XCJcbmltcG9ydCB7IGxpc3RQcm9kdWN0cywgZ2V0QnJhbmNoQnlJZCB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIlxuaW1wb3J0IHtcbiAgY3JlYXRlQnJhbmNoUHJvZHVjdCxcbiAgcHJvZHVjdFVwZGF0ZSxcbiAgdXBkYXRlQnJhbmNoUHJvZHVjdCxcbiAgZGVsZXRlQnJhbmNoUHJvZHVjdCxcbn0gZnJvbSBcIi4uL2dyYXBocWwvbXV0YXRpb25cIlxuaW1wb3J0IHtcbiAgb25DcmVhdGVCcmFuY2hQcm9kdWN0LFxuICBvblVwZGF0ZUJyYW5jaFByb2R1Y3QsXG4gIG9uRGVsZXRlQnJhbmNoUHJvZHVjdCxcbn0gZnJvbSBcIi4uL2dyYXBocWwvc3Vic2NyaXB0aW9uc1wiXG5cbkFQSS5jb25maWd1cmUoY29uZmlnKVxuXG5jb25zdCBQcm9kdWN0c0xpc3QgPSAoeyBhY3RpdmUsIGhhbmRsZUNoYW5nZSwgYnJhbmNoSWQgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShsaXN0UHJvZHVjdHMpXG4gIGNvbnN0IFticmFuY2hQcm9kdWN0U3Vic2NyaXB0aW9uLCBzZXRCcmFuY2hQcm9kdWN0U3Vic2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtyb3dJZCwgc2V0Um93SWRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgfSlcbiAgY29uc3QgW2JyYW5jaEluZm8sIHNldEJyYW5jaEluZm9dID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBnZXRCcmFuY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24oZ2V0QnJhbmNoQnlJZCwgeyBpZDogYnJhbmNoSWQgfSkpXG4gICAgICBzZXRCcmFuY2hJbmZvKGJyYW5jaC5kYXRhLmdldEJyYW5jaClcbiAgICAgIHNldFJvd0lkKFtcbiAgICAgICAgLi4ucm93SWQsXG4gICAgICAgIC4uLmJyYW5jaC5kYXRhLmdldEJyYW5jaC5icmFuY2hQcm9kdWN0cy5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkKSxcbiAgICAgIF0pXG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXG4gICAgICAgICAgLi4uYnJhbmNoLmRhdGEuZ2V0QnJhbmNoLmJyYW5jaFByb2R1Y3RzLml0ZW1zLm1hcCgocHJvZHVjdCkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LnByb2R1Y3RJZCxcbiAgICAgICAgICB9KSksXG4gICAgICAgIF0sXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEJyYW5jaCgpXG5cbiAgICBjb25zdCBjcmVhdGVMaXN0ZW5lciA9IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ob25DcmVhdGVCcmFuY2hQcm9kdWN0KSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChjcmVhdGVkQnJhbmNoUHJvZHVjdCkgPT4gc2V0QnJhbmNoUHJvZHVjdFN1YnNjcmlwdGlvbihjcmVhdGVkQnJhbmNoUHJvZHVjdCksXG4gICAgfSlcbiAgICBjb25zdCB1cGRhdGVMaXN0ZW5lciA9IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ob25VcGRhdGVCcmFuY2hQcm9kdWN0KSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICh1cGRhdGVkQnJhbmNoUHJvZHVjdCkgPT4gc2V0QnJhbmNoUHJvZHVjdFN1YnNjcmlwdGlvbih1cGRhdGVkQnJhbmNoUHJvZHVjdCksXG4gICAgfSlcbiAgICBjb25zdCBkZWxldGVMaXN0ZW5lciA9IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ob25EZWxldGVCcmFuY2hQcm9kdWN0KSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkZWxldGVkQnJhbmNoUHJvZHVjdCkgPT4gc2V0QnJhbmNoUHJvZHVjdFN1YnNjcmlwdGlvbihkZWxldGVkQnJhbmNoUHJvZHVjdCksXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjcmVhdGVMaXN0ZW5lci51bnN1YnNjcmliZSgpXG4gICAgICB1cGRhdGVMaXN0ZW5lci51bnN1YnNjcmliZSgpXG4gICAgICBkZWxldGVMaXN0ZW5lci51bnN1YnNjcmliZSgpXG4gICAgfVxuICB9LCBbYnJhbmNoSWQsIGJyYW5jaFByb2R1Y3RTdWJzY3JpcHRpb25dKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBwcm9kdWN0cy4uLjwvZGl2PlxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+U29tZSBlcnJvciBvY2N1cmVkPC9kaXY+XG4gIH1cblxuICBjb25zdCBkZWxldGVQcm9kdWN0c0Zyb21CcmFuY2ggPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHNUb0RlbGV0ZUZyb21CcmFuY2ggPSBicmFuY2hJbmZvLmJyYW5jaFByb2R1Y3RzLml0ZW1zLmZpbHRlcihcbiAgICAgIChicmFuY2hQcm9kdWN0KSA9PlxuICAgICAgICAhc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKS5pbmNsdWRlcyhicmFuY2hQcm9kdWN0LnByb2R1Y3RJZClcbiAgICApXG5cbiAgICBQcm9taXNlLmFsbChcbiAgICAgIHByb2R1Y3RzVG9EZWxldGVGcm9tQnJhbmNoLm1hcCgoZGVsZXRlUHJvZHVjdCkgPT4ge1xuICAgICAgICBBUEkuZ3JhcGhxbChncmFwaHFsT3BlcmF0aW9uKGRlbGV0ZUJyYW5jaFByb2R1Y3QsIHsgaW5wdXQ6IHsgaWQ6IGRlbGV0ZVByb2R1Y3QuaWQgfSB9KSlcbiAgICAgIH0pXG4gICAgKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBhZGRQcm9kdWN0c1RvQnJhbmNoID0gKCkgPT4ge1xuICAgIFByb21pc2UuYWxsKFxuICAgICAgc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0ID0gYnJhbmNoSW5mby5icmFuY2hQcm9kdWN0cy5pdGVtcy5maWx0ZXIoXG4gICAgICAgICAgKGJyYW5jaFByb2R1Y3QpID0+IGJyYW5jaFByb2R1Y3QucHJvZHVjdElkID09PSBwcm9kdWN0LmlkXG4gICAgICAgIClbMF1cbiAgICAgICAgaWYgKHVwZGF0ZWRQcm9kdWN0KSB7XG4gICAgICAgICAgQVBJLmdyYXBocWwoXG4gICAgICAgICAgICBncmFwaHFsT3BlcmF0aW9uKHVwZGF0ZUJyYW5jaFByb2R1Y3QsIHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpZDogdXBkYXRlZFByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgdGFnczogcHJvZHVjdC50YWdzLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVBJLmdyYXBocWwoXG4gICAgICAgICAgICBncmFwaHFsT3BlcmF0aW9uKGNyZWF0ZUJyYW5jaFByb2R1Y3QsIHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICB0YWdzOiBwcm9kdWN0LnRhZ3MsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBvcGVuPXthY3RpdmV9XG4gICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoKX1cbiAgICAgIHRpdGxlPVwiQ2hvb3NlIHByb2R1Y3RzXCJcbiAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgY29udGVudDogXCJTYXZlIGNoYW5nZXNcIixcbiAgICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICBhZGRQcm9kdWN0c1RvQnJhbmNoKClcbiAgICAgICAgICBkZWxldGVQcm9kdWN0c0Zyb21CcmFuY2goKVxuICAgICAgICAgIGhhbmRsZUNoYW5nZSgpXG4gICAgICAgIH0sXG4gICAgICB9fT5cbiAgICAgIDxNb2RhbC5TZWN0aW9uPlxuICAgICAgICA8VGFibGUgY2VsbGVkIHN0cmlwZWQgc2VsZWN0YWJsZT5cbiAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+UHJvZHVjdHM8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIHRleHRBbGlnbj1cImNlbnRlclwiPlByaWNlPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Cb251cyBQZXJjZW50YWdlPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICBicmFuY2hJbmZvICYmXG4gICAgICAgICAgICAgIGRhdGEucHJvZHVjdHMuZWRnZXMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgPEJyYW5jaFJvd1xuICAgICAgICAgICAgICAgICAgcm93SWQ9e3Jvd0lkfVxuICAgICAgICAgICAgICAgICAgc2V0Um93SWQ9e3NldFJvd0lkfVxuICAgICAgICAgICAgICAgICAgYnJhbmNoSW5mbz17YnJhbmNoSW5mb31cbiAgICAgICAgICAgICAgICAgIGJyYW5jaElkPXticmFuY2hJZH1cbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgICBzdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgICAgICBzZXRTdGF0ZT17c2V0U3RhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Gb290ZXIgZnVsbFdpZHRoPlxuICAgICAgICAgICAgPFRhYmxlLlJvdz48L1RhYmxlLlJvdz5cbiAgICAgICAgICA8L1RhYmxlLkZvb3Rlcj5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvTW9kYWwuU2VjdGlvbj5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BranchProducts.js\n");

/***/ }),

/***/ "./graphql/mutation.js":
/*!*****************************!*\
  !*** ./graphql/mutation.js ***!
  \*****************************/
/*! exports provided: completeOrder, updatePaymentRequest, createBranch, removeBranch, deleteTransaction, deleteBranchProduct, deletePaymentRequest, createBranchProduct, productUpdate, updateBranchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completeOrder\", function() { return completeOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePaymentRequest\", function() { return updatePaymentRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBranch\", function() { return createBranch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeBranch\", function() { return removeBranch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTransaction\", function() { return deleteTransaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteBranchProduct\", function() { return deleteBranchProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePaymentRequest\", function() { return deletePaymentRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBranchProduct\", function() { return createBranchProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productUpdate\", function() { return productUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBranchProduct\", function() { return updateBranchProduct; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject11() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation updateBranchProduct($input: UpdateBranchProductInput!) {\\n    updateBranchProduct(input: $input) {\\n      id\\n      tags\\n      branchId\\n      productId\\n    }\\n  }\\n\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation productUpdate($input: ProductInput!) {\\n    productUpdate(input: $input) {\\n      product {\\n        id\\n        metafields(first: 100) {\\n          edges {\\n            node {\\n              namespace\\n              key\\n              value\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation createBranchProduct($input: CreateBranchProductInput!) {\\n    createBranchProduct(input: $input) {\\n      id\\n      branchId\\n      productId\\n      tags\\n    }\\n  }\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation deletePaymentRequest($input: DeletePaymentRequestInput!) {\\n    deletePaymentRequest(input: $input) {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation deleteBranchProduct($input: DeleteBranchProductInput!) {\\n    deleteBranchProduct(input: $input) {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation deleteTransaction($input: DeleteTransactionInput!) {\\n    deleteTransaction(input: $input) {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation deleteBranch($input: DeleteBranchInput!) {\\n    deleteBranch(input: $input) {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation createBranch($input: CreateBranchInput!) {\\n    createBranch(input: $input) {\\n      id\\n      adminId\\n      branchName\\n    }\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {\\n    updatePaymentRequest(input: $input) {\\n      bonusAmount\\n      customerId\\n      id\\n      orderId\\n      status\\n      products {\\n        originalUnitPrice\\n        quantity\\n        variantId\\n      }\\n      createdAt\\n      updatedAt\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation CompleteOrder($id: ID!) {\\n    draftOrderComplete(id: $id, paymentPending: true) {\\n      draftOrder {\\n        customer {\\n          id\\n        }\\n        email\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation CreateOrder($input: DraftOrderInput!) {\\n    draftOrderCreate(input: $input) {\\n      draftOrder {\\n        id\\n        customer {\\n          id\\n        }\\n        email\\n        lineItems(first: 10) {\\n          edges {\\n            node {\\n              title\\n              quantity\\n              originalUnitPrice\\n              variant {\\n                id\\n                price\\n                title\\n                product {\\n                  tags\\n                  title\\n                  images(first: 5) {\\n                    edges {\\n                      node {\\n                        originalSrc\\n                      }\\n                    }\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar createDraftOrder = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nvar completeOrder = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());\nvar updatePaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());\nvar createBranch = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());\nvar removeBranch = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());\nvar deleteTransaction = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());\nvar deleteBranchProduct = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject7());\nvar deletePaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject8());\nvar createBranchProduct = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject9());\nvar productUpdate = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject10());\nvar updateBranchProduct = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject11());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9tdXRhdGlvbi5qcz83NzY5Il0sIm5hbWVzIjpbImNyZWF0ZURyYWZ0T3JkZXIiLCJncWwiLCJjb21wbGV0ZU9yZGVyIiwidXBkYXRlUGF5bWVudFJlcXVlc3QiLCJjcmVhdGVCcmFuY2giLCJyZW1vdmVCcmFuY2giLCJkZWxldGVUcmFuc2FjdGlvbiIsImRlbGV0ZUJyYW5jaFByb2R1Y3QiLCJkZWxldGVQYXltZW50UmVxdWVzdCIsImNyZWF0ZUJyYW5jaFByb2R1Y3QiLCJwcm9kdWN0VXBkYXRlIiwidXBkYXRlQnJhbmNoUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBdUNPLElBQU1DLGFBQWEsR0FBR0Qsa0RBQUgsb0JBQW5CO0FBY0EsSUFBTUUsb0JBQW9CLEdBQUdGLGtEQUFILG9CQUExQjtBQWtCQSxJQUFNRyxZQUFZLEdBQUdILGtEQUFILG9CQUFsQjtBQVVBLElBQU1JLFlBQVksR0FBR0osa0RBQUgsb0JBQWxCO0FBUUEsSUFBTUssaUJBQWlCLEdBQUdMLGtEQUFILG9CQUF2QjtBQVFBLElBQU1NLG1CQUFtQixHQUFHTixrREFBSCxvQkFBekI7QUFRQSxJQUFNTyxvQkFBb0IsR0FBR1Asa0RBQUgsb0JBQTFCO0FBUUEsSUFBTVEsbUJBQW1CLEdBQUdSLGtEQUFILG9CQUF6QjtBQVdBLElBQU1TLGFBQWEsR0FBR1Qsa0RBQUgscUJBQW5CO0FBbUJBLElBQU1VLG1CQUFtQixHQUFHVixrREFBSCxxQkFBekIiLCJmaWxlIjoiLi9ncmFwaHFsL211dGF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuXG5jb25zdCBjcmVhdGVEcmFmdE9yZGVyID0gZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVPcmRlcigkaW5wdXQ6IERyYWZ0T3JkZXJJbnB1dCEpIHtcbiAgICBkcmFmdE9yZGVyQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGRyYWZ0T3JkZXIge1xuICAgICAgICBpZFxuICAgICAgICBjdXN0b21lciB7XG4gICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgICAgICBlbWFpbFxuICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDEwKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICAgIG9yaWdpbmFsVW5pdFByaWNlXG4gICAgICAgICAgICAgIHZhcmlhbnQge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgdGFnc1xuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIGltYWdlcyhmaXJzdDogNSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgY29tcGxldGVPcmRlciA9IGdxbGBcbiAgbXV0YXRpb24gQ29tcGxldGVPcmRlcigkaWQ6IElEISkge1xuICAgIGRyYWZ0T3JkZXJDb21wbGV0ZShpZDogJGlkLCBwYXltZW50UGVuZGluZzogdHJ1ZSkge1xuICAgICAgZHJhZnRPcmRlciB7XG4gICAgICAgIGN1c3RvbWVyIHtcbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICAgIGVtYWlsXG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheW1lbnRSZXF1ZXN0ID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVQYXltZW50UmVxdWVzdCgkaW5wdXQ6IFVwZGF0ZVBheW1lbnRSZXF1ZXN0SW5wdXQhKSB7XG4gICAgdXBkYXRlUGF5bWVudFJlcXVlc3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgYm9udXNBbW91bnRcbiAgICAgIGN1c3RvbWVySWRcbiAgICAgIGlkXG4gICAgICBvcmRlcklkXG4gICAgICBzdGF0dXNcbiAgICAgIHByb2R1Y3RzIHtcbiAgICAgICAgb3JpZ2luYWxVbml0UHJpY2VcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgdmFyaWFudElkXG4gICAgICB9XG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJyYW5jaCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlQnJhbmNoKCRpbnB1dDogQ3JlYXRlQnJhbmNoSW5wdXQhKSB7XG4gICAgY3JlYXRlQnJhbmNoKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGlkXG4gICAgICBhZG1pbklkXG4gICAgICBicmFuY2hOYW1lXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCByZW1vdmVCcmFuY2ggPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJyYW5jaCgkaW5wdXQ6IERlbGV0ZUJyYW5jaElucHV0ISkge1xuICAgIGRlbGV0ZUJyYW5jaChpbnB1dDogJGlucHV0KSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgZGVsZXRlVHJhbnNhY3Rpb24gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZVRyYW5zYWN0aW9uKCRpbnB1dDogRGVsZXRlVHJhbnNhY3Rpb25JbnB1dCEpIHtcbiAgICBkZWxldGVUcmFuc2FjdGlvbihpbnB1dDogJGlucHV0KSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgZGVsZXRlQnJhbmNoUHJvZHVjdCA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlQnJhbmNoUHJvZHVjdCgkaW5wdXQ6IERlbGV0ZUJyYW5jaFByb2R1Y3RJbnB1dCEpIHtcbiAgICBkZWxldGVCcmFuY2hQcm9kdWN0KGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBkZWxldGVQYXltZW50UmVxdWVzdCA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlUGF5bWVudFJlcXVlc3QoJGlucHV0OiBEZWxldGVQYXltZW50UmVxdWVzdElucHV0ISkge1xuICAgIGRlbGV0ZVBheW1lbnRSZXF1ZXN0KGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCcmFuY2hQcm9kdWN0ID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVCcmFuY2hQcm9kdWN0KCRpbnB1dDogQ3JlYXRlQnJhbmNoUHJvZHVjdElucHV0ISkge1xuICAgIGNyZWF0ZUJyYW5jaFByb2R1Y3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgaWRcbiAgICAgIGJyYW5jaElkXG4gICAgICBwcm9kdWN0SWRcbiAgICAgIHRhZ3NcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RVcGRhdGUgPSBncWxgXG4gIG11dGF0aW9uIHByb2R1Y3RVcGRhdGUoJGlucHV0OiBQcm9kdWN0SW5wdXQhKSB7XG4gICAgcHJvZHVjdFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBwcm9kdWN0IHtcbiAgICAgICAgaWRcbiAgICAgICAgbWV0YWZpZWxkcyhmaXJzdDogMTAwKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIG5hbWVzcGFjZVxuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJyYW5jaFByb2R1Y3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUJyYW5jaFByb2R1Y3QoJGlucHV0OiBVcGRhdGVCcmFuY2hQcm9kdWN0SW5wdXQhKSB7XG4gICAgdXBkYXRlQnJhbmNoUHJvZHVjdChpbnB1dDogJGlucHV0KSB7XG4gICAgICBpZFxuICAgICAgdGFnc1xuICAgICAgYnJhbmNoSWRcbiAgICAgIHByb2R1Y3RJZFxuICAgIH1cbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/mutation.js\n");

/***/ }),

/***/ "./graphql/subscriptions.js":
/*!**********************************!*\
  !*** ./graphql/subscriptions.js ***!
  \**********************************/
/*! exports provided: onUpdatePaymentSubscription, paymentSubscription, onCreateTransaction, onDeleteTransaction, onCreateBranchSubscription, onDeleteBranchSubscription, onCreateBranchProduct, onUpdateBranchProduct, onDeleteBranchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUpdatePaymentSubscription\", function() { return onUpdatePaymentSubscription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paymentSubscription\", function() { return paymentSubscription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onCreateTransaction\", function() { return onCreateTransaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDeleteTransaction\", function() { return onDeleteTransaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onCreateBranchSubscription\", function() { return onCreateBranchSubscription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDeleteBranchSubscription\", function() { return onDeleteBranchSubscription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onCreateBranchProduct\", function() { return onCreateBranchProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUpdateBranchProduct\", function() { return onUpdateBranchProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDeleteBranchProduct\", function() { return onDeleteBranchProduct; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onDeleteBranchProduct {\\n    onDeleteBranchProduct {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onUpdateBranchProduct {\\n    onUpdateBranchProduct {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onCreateBranchProduct {\\n    onCreateBranchProduct {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onDeleteBranch {\\n    onDeleteBranch {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onCreateBranch {\\n    onCreateBranch {\\n      adminId\\n      branchName\\n      id\\n      createdAt\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onDeleteTransaction {\\n    onDeleteTransaction {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onCreateTransaction {\\n    onCreateTransaction {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription paymentRequest {\\n    onCreatePaymentRequest {\\n      bonusAmount\\n      createdAt\\n      customerId\\n      id\\n      orderId\\n      status\\n      updatedAt\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  subscription onUpdatePaymentRequest {\\n    onUpdatePaymentRequest {\\n      id\\n      status\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar onUpdatePaymentSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nvar paymentSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());\nvar onCreateTransaction = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());\nvar onDeleteTransaction = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());\nvar onCreateBranchSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());\nvar onDeleteBranchSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());\nvar onCreateBranchProduct = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject7());\nvar onUpdateBranchProduct = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject8());\nvar onDeleteBranchProduct = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject9());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9zdWJzY3JpcHRpb25zLmpzPzRhNDciXSwibmFtZXMiOlsib25VcGRhdGVQYXltZW50U3Vic2NyaXB0aW9uIiwiZ3FsIiwicGF5bWVudFN1YnNjcmlwdGlvbiIsIm9uQ3JlYXRlVHJhbnNhY3Rpb24iLCJvbkRlbGV0ZVRyYW5zYWN0aW9uIiwib25DcmVhdGVCcmFuY2hTdWJzY3JpcHRpb24iLCJvbkRlbGV0ZUJyYW5jaFN1YnNjcmlwdGlvbiIsIm9uQ3JlYXRlQnJhbmNoUHJvZHVjdCIsIm9uVXBkYXRlQnJhbmNoUHJvZHVjdCIsIm9uRGVsZXRlQnJhbmNoUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSwyQkFBMkIsR0FBR0Msa0RBQUgsbUJBQWpDO0FBU0EsSUFBTUMsbUJBQW1CLEdBQUdELGtEQUFILG9CQUF6QjtBQWNBLElBQU1FLG1CQUFtQixHQUFHRixrREFBSCxvQkFBekI7QUFRQSxJQUFNRyxtQkFBbUIsR0FBR0gsa0RBQUgsb0JBQXpCO0FBUUEsSUFBTUksMEJBQTBCLEdBQUdKLGtEQUFILG9CQUFoQztBQVdBLElBQU1LLDBCQUEwQixHQUFHTCxrREFBSCxvQkFBaEM7QUFPQSxJQUFNTSxxQkFBcUIsR0FBR04sa0RBQUgsb0JBQTNCO0FBT0EsSUFBTU8scUJBQXFCLEdBQUdQLGtEQUFILG9CQUEzQjtBQVFBLElBQU1RLHFCQUFxQixHQUFHUixrREFBSCxvQkFBM0IiLCJmaWxlIjoiLi9ncmFwaHFsL3N1YnNjcmlwdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5cbmV4cG9ydCBjb25zdCBvblVwZGF0ZVBheW1lbnRTdWJzY3JpcHRpb24gPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBvblVwZGF0ZVBheW1lbnRSZXF1ZXN0IHtcbiAgICBvblVwZGF0ZVBheW1lbnRSZXF1ZXN0IHtcbiAgICAgIGlkXG4gICAgICBzdGF0dXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IHBheW1lbnRTdWJzY3JpcHRpb24gPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBwYXltZW50UmVxdWVzdCB7XG4gICAgb25DcmVhdGVQYXltZW50UmVxdWVzdCB7XG4gICAgICBib251c0Ftb3VudFxuICAgICAgY3JlYXRlZEF0XG4gICAgICBjdXN0b21lcklkXG4gICAgICBpZFxuICAgICAgb3JkZXJJZFxuICAgICAgc3RhdHVzXG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IG9uQ3JlYXRlVHJhbnNhY3Rpb24gPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBvbkNyZWF0ZVRyYW5zYWN0aW9uIHtcbiAgICBvbkNyZWF0ZVRyYW5zYWN0aW9uIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBvbkRlbGV0ZVRyYW5zYWN0aW9uID0gZ3FsYFxuICBzdWJzY3JpcHRpb24gb25EZWxldGVUcmFuc2FjdGlvbiB7XG4gICAgb25EZWxldGVUcmFuc2FjdGlvbiB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3Qgb25DcmVhdGVCcmFuY2hTdWJzY3JpcHRpb24gPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBvbkNyZWF0ZUJyYW5jaCB7XG4gICAgb25DcmVhdGVCcmFuY2gge1xuICAgICAgYWRtaW5JZFxuICAgICAgYnJhbmNoTmFtZVxuICAgICAgaWRcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3Qgb25EZWxldGVCcmFuY2hTdWJzY3JpcHRpb24gPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBvbkRlbGV0ZUJyYW5jaCB7XG4gICAgb25EZWxldGVCcmFuY2gge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBvbkNyZWF0ZUJyYW5jaFByb2R1Y3QgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBvbkNyZWF0ZUJyYW5jaFByb2R1Y3Qge1xuICAgIG9uQ3JlYXRlQnJhbmNoUHJvZHVjdCB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYFxuZXhwb3J0IGNvbnN0IG9uVXBkYXRlQnJhbmNoUHJvZHVjdCA9IGdxbGBcbiAgc3Vic2NyaXB0aW9uIG9uVXBkYXRlQnJhbmNoUHJvZHVjdCB7XG4gICAgb25VcGRhdGVCcmFuY2hQcm9kdWN0IHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBvbkRlbGV0ZUJyYW5jaFByb2R1Y3QgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBvbkRlbGV0ZUJyYW5jaFByb2R1Y3Qge1xuICAgIG9uRGVsZXRlQnJhbmNoUHJvZHVjdCB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/subscriptions.js\n");

/***/ }),

/***/ "./node_modules/graphql/error/formatError.mjs":
false,

/***/ "./node_modules/graphql/error/index.mjs":
false,

/***/ "./node_modules/graphql/error/locatedError.mjs":
false,

/***/ "./node_modules/graphql/execution/execute.mjs":
false,

/***/ "./node_modules/graphql/execution/index.mjs":
false,

/***/ "./node_modules/graphql/execution/values.mjs":
false,

/***/ "./node_modules/graphql/graphql.mjs":
false,

/***/ "./node_modules/graphql/index.mjs":
false,

/***/ "./node_modules/graphql/jsutils/Path.mjs":
false,

/***/ "./node_modules/graphql/jsutils/didYouMean.mjs":
false,

/***/ "./node_modules/graphql/jsutils/identityFunc.mjs":
false,

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isCollection.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
false,

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
false,

/***/ "./node_modules/graphql/jsutils/printPathArray.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
false,

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/toObjMap.mjs":
false,

/***/ "./node_modules/graphql/language/index.mjs":
false,

/***/ "./node_modules/graphql/language/predicates.mjs":
false,

/***/ "./node_modules/graphql/polyfills/arrayFrom.mjs":
false,

/***/ "./node_modules/graphql/polyfills/find.mjs":
false,

/***/ "./node_modules/graphql/polyfills/flatMap.mjs":
false,

/***/ "./node_modules/graphql/polyfills/isFinite.mjs":
false,

/***/ "./node_modules/graphql/polyfills/isInteger.mjs":
false,

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
false,

/***/ "./node_modules/graphql/polyfills/objectValues.mjs":
false,

/***/ "./node_modules/graphql/subscription/index.mjs":
false,

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
false,

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
false,

/***/ "./node_modules/graphql/type/definition.mjs":
false,

/***/ "./node_modules/graphql/type/directives.mjs":
false,

/***/ "./node_modules/graphql/type/index.mjs":
false,

/***/ "./node_modules/graphql/type/introspection.mjs":
false,

/***/ "./node_modules/graphql/type/scalars.mjs":
false,

/***/ "./node_modules/graphql/type/schema.mjs":
false,

/***/ "./node_modules/graphql/type/validate.mjs":
false,

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
false,

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
false,

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/coerceInputValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
false,

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
false,

/***/ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
false,

/***/ "./node_modules/graphql/utilities/index.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/printSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
false,

/***/ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
false,

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
false,

/***/ "./node_modules/graphql/validation/index.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs":
false,

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
false,

/***/ "./node_modules/graphql/validation/validate.mjs":
false,

/***/ "./node_modules/graphql/version.mjs":
false

})