webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BranchConsole.js":
/*!*************************************!*\
  !*** ./components/BranchConsole.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _core_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/hooks */ \"./core/hooks/index.js\");\n/* harmony import */ var _ProductsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductsList */ \"./components/ProductsList.js\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/helper */ \"./utils/helper.js\");\n/* harmony import */ var _BranchProducts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BranchProducts */ \"./components/BranchProducts.js\");\n/* harmony import */ var _BranchList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BranchList */ \"./components/BranchList.js\");\n/* harmony import */ var _AdminBranchInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AdminBranchInfo */ \"./components/AdminBranchInfo.js\");\n/* harmony import */ var _graphql_mutation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../graphql/mutation */ \"./graphql/mutation.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar BranchConsole = function BranchConsole(_ref) {\n  _s();\n\n  var updateUser = _ref.updateUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      branchName = _useState2[0],\n      setBranchName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      username = _useState3[0],\n      setUsername = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      email = _useState4[0],\n      setEmail = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      password = _useState5[0],\n      setPassword = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      code = _useState6[0],\n      setCode = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"signUp\"),\n      formType = _useState7[0],\n      setFormType = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      userSub = _useState8[0],\n      setUserSub = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      branches = _useState9[0],\n      setBranches = _useState9[1];\n\n  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      branchId = _useState10[0],\n      setBranchId = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    branchNameError: \"\"\n  }),\n      error = _useState11[0],\n      setError = _useState11[1];\n\n  var _useSignUp = Object(_core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useSignUp\"])(),\n      signUserUp = _useSignUp.signUserUp,\n      data = _useSignUp.data;\n\n  var _useConfirmSignUp = Object(_core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useConfirmSignUp\"])(),\n      confirmSignUp = _useConfirmSignUp.confirmSignUp;\n\n  var _useCreateBranch = Object(_core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useCreateBranch\"])(),\n      createBranch = _useCreateBranch.createBranch,\n      createdBranch = _useCreateBranch.data;\n\n  var _useListBranches = Object(_core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useListBranches\"])(),\n      branchesData = _useListBranches.data,\n      listBranches = _useListBranches.refetch;\n\n  var onChangeBranchName = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (newValue) {\n    setBranchName(newValue);\n  }, []);\n  var onChangeUsername = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (newValue) {\n    setUsername(newValue);\n  }, []);\n  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (newValue) {\n    setPassword(newValue);\n  }, []);\n  var onChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (newValue) {\n    setEmail(newValue);\n  }, []);\n  var onChangeCode = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (newValue) {\n    setCode(newValue);\n  }, []);\n\n  var handleChange = function handleChange() {\n    setActive(!active);\n  };\n\n  var signUp = function signUp(e) {\n    e.preventDefault();\n\n    if (!branchName) {\n      setError(_objectSpread(_objectSpread({}, error), {}, {\n        branchNameError: \"Branch name is required!\"\n      }));\n      return;\n    }\n\n    try {\n      signUserUp({\n        username: username,\n        password: password,\n        attributes: {\n          email: email\n        }\n      });\n      setFormType(\"confirm\");\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setUserSub(data && data.userSub);\n  }, [data]);\n\n  var confirm = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n\n              try {\n                confirmSignUp({\n                  username: username,\n                  code: code\n                });\n                createBranch({\n                  userSub: userSub,\n                  username: username,\n                  branchName: branchName\n                });\n                setFormType(\"signUp\");\n                handleChange();\n              } catch (error) {\n                console.log(error);\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function confirm(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    listBranches();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setBranches(branchesData && branchesData.data);\n  }, [branchesData]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, branchId && __jsx(_AdminBranchInfo__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    setBranchId: setBranchId,\n    branchId: branchId\n  }), !branchId && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Stack\"].Item, {\n    fill: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    onClick: handleChange,\n    primary: true\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n    name: \"code branch\"\n  }), \" Create branch\")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    primary: true,\n    id: \"Logout\",\n    onClick: function onClick() {\n      aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"Auth\"].signOut();\n      updateUser(null);\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n    name: \"sign out\"\n  }), \" Logout\"))), __jsx(_BranchList__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    setBranchId: setBranchId\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Modal\"], {\n    open: active,\n    onClose: handleChange,\n    title: \"Fill in Branch info\"\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Modal\"].Section, null, formType === \"signUp\" && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Form\"], {\n    onSubmit: signUp\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n    value: branchName,\n    onChange: onChangeBranchName,\n    label: \"Branch Name\"\n  }), error.branchNameError && __jsx(\"p\", null, error.branchNameError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n    value: username,\n    onChange: onChangeUsername,\n    label: \"Branch admin username\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n    value: email,\n    onChange: onChangeEmail,\n    label: \"Branch admin email\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n    type: \"password\",\n    value: password,\n    onChange: onChangePassword,\n    label: \"Branch admin password\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    primary: true,\n    submit: true\n  }, \"Create Branch\"))), formType === \"confirm\" && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Form\"], {\n    onSubmit: confirm\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n    value: username,\n    onChange: onChangeUsername,\n    label: \"Branch admin username\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n    value: code,\n    onChange: onChangeCode,\n    label: \"Confirmation code\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    primary: true,\n    submit: true\n  }, \"Confirm\")))))));\n};\n\n_s(BranchConsole, \"0INIjJVVFS519wLttwMCZcUKF2A=\", false, function () {\n  return [_core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useSignUp\"], _core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useConfirmSignUp\"], _core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useCreateBranch\"], _core_hooks__WEBPACK_IMPORTED_MODULE_9__[\"useListBranches\"]];\n});\n\n_c = BranchConsole;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BranchConsole);\n\nvar _c;\n\n$RefreshReg$(_c, \"BranchConsole\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmFuY2hDb25zb2xlLmpzPzFkYzMiXSwibmFtZXMiOlsiQnJhbmNoQ29uc29sZSIsInVwZGF0ZVVzZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImJyYW5jaE5hbWUiLCJzZXRCcmFuY2hOYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29kZSIsInNldENvZGUiLCJmb3JtVHlwZSIsInNldEZvcm1UeXBlIiwidXNlclN1YiIsInNldFVzZXJTdWIiLCJicmFuY2hlcyIsInNldEJyYW5jaGVzIiwiYnJhbmNoSWQiLCJzZXRCcmFuY2hJZCIsImJyYW5jaE5hbWVFcnJvciIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTaWduVXAiLCJzaWduVXNlclVwIiwiZGF0YSIsInVzZUNvbmZpcm1TaWduVXAiLCJjb25maXJtU2lnblVwIiwidXNlQ3JlYXRlQnJhbmNoIiwiY3JlYXRlQnJhbmNoIiwiY3JlYXRlZEJyYW5jaCIsInVzZUxpc3RCcmFuY2hlcyIsImJyYW5jaGVzRGF0YSIsImxpc3RCcmFuY2hlcyIsInJlZmV0Y2giLCJvbkNoYW5nZUJyYW5jaE5hbWUiLCJ1c2VDYWxsYmFjayIsIm5ld1ZhbHVlIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZUVtYWlsIiwib25DaGFuZ2VDb2RlIiwiaGFuZGxlQ2hhbmdlIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXR0cmlidXRlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjb25maXJtIiwiQXV0aCIsInNpZ25PdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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REFBRDtBQUFRLFdBQU8sTUFBZjtBQUFnQixVQUFNO0FBQXRCLGVBUEYsQ0FERixDQTdCSixDQURGLENBcEJGLENBSEosQ0FERjtBQTBFRCxDQWhLRDs7R0FBTTVDLGE7VUFleUIwQixxRCxFQUNIRyw0RCxFQUNvQkUsMkQsRUFDUUcsMkQ7OztLQWxCbERsQyxhO0FBa0tTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnJhbmNoQ29uc29sZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEF1dGgsIEFQSSwgZ3JhcGhxbE9wZXJhdGlvbiB9IGZyb20gXCJhd3MtYW1wbGlmeVwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXG5pbXBvcnQgeyBQYWdlLCBCdXR0b24sIE1vZGFsLCBGb3JtLCBGb3JtTGF5b3V0LCBUZXh0RmllbGQsIEJhZGdlLCBTdGFjayB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCJcbmltcG9ydCB7IFRhYmxlLCBQb3B1cCwgSGVhZGVyLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcbmltcG9ydCB7IHVzZUNvbmZpcm1TaWduVXAsIHVzZVNpZ25VcCwgdXNlQ3JlYXRlQnJhbmNoLCB1c2VMaXN0QnJhbmNoZXMgfSBmcm9tIFwiLi4vY29yZS9ob29rc1wiXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4vUHJvZHVjdHNMaXN0XCJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCJcbmltcG9ydCBCcmFuY2hQcm9kdWN0cyBmcm9tIFwiLi9CcmFuY2hQcm9kdWN0c1wiXG5pbXBvcnQgQnJhbmNoTGlzdCBmcm9tIFwiLi9CcmFuY2hMaXN0XCJcbmltcG9ydCBBZG1pbkJyYW5jaEluZm8gZnJvbSBcIi4vQWRtaW5CcmFuY2hJbmZvXCJcbmltcG9ydCB7IGNyZWF0ZUJyYW5jaCB9IGZyb20gXCIuLi9ncmFwaHFsL211dGF0aW9uXCJcbmltcG9ydCB7IGxpc3RCcmFuY2hzIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllc1wiXG5cbmNvbnN0IEJyYW5jaENvbnNvbGUgPSAoeyB1cGRhdGVVc2VyIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYnJhbmNoTmFtZSwgc2V0QnJhbmNoTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZm9ybVR5cGUsIHNldEZvcm1UeXBlXSA9IHVzZVN0YXRlKFwic2lnblVwXCIpXG4gIGNvbnN0IFt1c2VyU3ViLCBzZXRVc2VyU3ViXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFticmFuY2hlcywgc2V0QnJhbmNoZXNdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2JyYW5jaElkLCBzZXRCcmFuY2hJZF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHtcbiAgICBicmFuY2hOYW1lRXJyb3I6IFwiXCIsXG4gIH0pXG5cbiAgY29uc3QgeyBzaWduVXNlclVwLCBkYXRhIH0gPSB1c2VTaWduVXAoKVxuICBjb25zdCB7IGNvbmZpcm1TaWduVXAgfSA9IHVzZUNvbmZpcm1TaWduVXAoKVxuICBjb25zdCB7IGNyZWF0ZUJyYW5jaCwgZGF0YTogY3JlYXRlZEJyYW5jaCB9ID0gdXNlQ3JlYXRlQnJhbmNoKClcbiAgY29uc3QgeyBkYXRhOiBicmFuY2hlc0RhdGEsIHJlZmV0Y2g6IGxpc3RCcmFuY2hlcyB9ID0gdXNlTGlzdEJyYW5jaGVzKClcblxuICBjb25zdCBvbkNoYW5nZUJyYW5jaE5hbWUgPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHtcbiAgICBzZXRCcmFuY2hOYW1lKG5ld1ZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBvbkNoYW5nZVVzZXJuYW1lID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VXNlcm5hbWUobmV3VmFsdWUpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHtcbiAgICBzZXRQYXNzd29yZChuZXdWYWx1ZSlcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZSkgPT4ge1xuICAgIHNldEVtYWlsKG5ld1ZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBvbkNoYW5nZUNvZGUgPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHtcbiAgICBzZXRDb2RlKG5ld1ZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpXG4gIH1cblxuICBjb25zdCBzaWduVXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghYnJhbmNoTmFtZSkge1xuICAgICAgc2V0RXJyb3Ioe1xuICAgICAgICAuLi5lcnJvcixcbiAgICAgICAgYnJhbmNoTmFtZUVycm9yOiBcIkJyYW5jaCBuYW1lIGlzIHJlcXVpcmVkIVwiLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBzaWduVXNlclVwKHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBhdHRyaWJ1dGVzOiB7IGVtYWlsIH0gfSlcbiAgICAgIHNldEZvcm1UeXBlKFwiY29uZmlybVwiKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXJTdWIoZGF0YSAmJiBkYXRhLnVzZXJTdWIpXG4gIH0sIFtkYXRhXSlcblxuICBjb25zdCBjb25maXJtID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0cnkge1xuICAgICAgY29uZmlybVNpZ25VcCh7IHVzZXJuYW1lLCBjb2RlIH0pXG4gICAgICBjcmVhdGVCcmFuY2goeyB1c2VyU3ViLCB1c2VybmFtZSwgYnJhbmNoTmFtZSB9KVxuICAgICAgc2V0Rm9ybVR5cGUoXCJzaWduVXBcIilcbiAgICAgIGhhbmRsZUNoYW5nZSgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdEJyYW5jaGVzKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCcmFuY2hlcyhicmFuY2hlc0RhdGEgJiYgYnJhbmNoZXNEYXRhLmRhdGEpXG4gIH0sIFticmFuY2hlc0RhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHticmFuY2hJZCAmJiA8QWRtaW5CcmFuY2hJbmZvIHNldEJyYW5jaElkPXtzZXRCcmFuY2hJZH0gYnJhbmNoSWQ9e2JyYW5jaElkfSAvPn1cbiAgICAgIHshYnJhbmNoSWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2hhbmdlfSBwcmltYXJ5PlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb2RlIGJyYW5jaFwiIC8+IENyZWF0ZSBicmFuY2hcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICBpZD1cIkxvZ291dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgQXV0aC5zaWduT3V0KClcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVVzZXIobnVsbClcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2lnbiBvdXRcIiAvPiBMb2dvdXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8QnJhbmNoTGlzdCBzZXRCcmFuY2hJZD17c2V0QnJhbmNoSWR9IC8+XG4gICAgICAgICAgPE1vZGFsIG9wZW49e2FjdGl2ZX0gb25DbG9zZT17aGFuZGxlQ2hhbmdlfSB0aXRsZT1cIkZpbGwgaW4gQnJhbmNoIGluZm9cIj5cbiAgICAgICAgICAgIDxNb2RhbC5TZWN0aW9uPlxuICAgICAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwic2lnblVwXCIgJiYgKFxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzaWduVXB9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnJhbmNoTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VCcmFuY2hOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnJhbmNoIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IuYnJhbmNoTmFtZUVycm9yICYmIDxwPntlcnJvci5icmFuY2hOYW1lRXJyb3J9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VVc2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJyYW5jaCBhZG1pbiB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gbGFiZWw9XCJCcmFuY2ggYWRtaW4gZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCcmFuY2ggYWRtaW4gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBCcmFuY2hcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Zm9ybVR5cGUgPT09IFwiY29uZmlybVwiICYmIChcbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17Y29uZmlybX0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VVc2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJyYW5jaCBhZG1pbiB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e2NvZGV9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvZGV9IGxhYmVsPVwiQ29uZmlybWF0aW9uIGNvZGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Nb2RhbC5TZWN0aW9uPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmFuY2hDb25zb2xlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BranchConsole.js\n");

/***/ })

})