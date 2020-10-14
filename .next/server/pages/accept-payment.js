module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dsdu");


/***/ }),

/***/ "7Xrt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FVIk");
/* harmony import */ var _ProductsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Vixo");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uI6m");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);
const updatePaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
    mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {
        updatePaymentRequest(input: $input) {
            bonusAmount
            customerId
            id
            orderId
            status
            products {
                originalUnitPrice
                quantity
                variantId
            }
            createdAt
            updatedAt
        }
    }
`;
const listPaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
    query listPaymentRequest($branchId: ID) {
        listPaymentRequests(filter: { status: { eq: PENDING }, branchId: { eq: $branchId } }) {
            items {
                bonusAmount
                createdAt
                customerId
                id
                orderId
                status
                updatedAt
            }
            nextToken
        }
    }
`;
const paymentSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            id
            orderId
            status
            updatedAt
        }
    }
`;

const PendingPaymentRequest = ({
  createUpdatePaymentSubscription,
  branchId
}) => {
  const {
    0: paymentRequestId,
    1: setPaymentRequestId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: paymentRequestItems,
    1: setPaymentRequestItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setActive(!active), [active]);
  console.log('Payment request id for decline', paymentRequestId);
  const fetchAcceptedPayments = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      const res = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listPaymentRequest, {
        branchId
      }));
      setPaymentRequestItems(res.data.listPaymentRequests.items);
      console.log('Accepted payments', res.data);
    } catch (error) {
      console.log(error);
    }
  }, [createUpdatePaymentSubscription]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchAcceptedPayments();
  }, [fetchAcceptedPayments]);

  const declinePayment = async paymentId => {
    try {
      const paymentResponse = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(updatePaymentRequest, {
        input: {
          id: paymentId,
          status: 'DECLINED'
        }
      }));
      console.log('Declined Payment data from lambda', paymentResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    selectable: true,
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Customer Id"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Bonus Amount"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Created At"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Updated At"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Status"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Action"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, paymentRequestItems && paymentRequestItems.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, {
    key: item.id
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small"
  }, item.customerId)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* toCurrency */ "c"])(item.bonusAmount)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "b"])(item.createdAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "b"])(item.updatedAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small",
    progress: "partiallyComplete",
    status: "attention"
  }, item.status)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
    className: "actions-cell"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
    content: "Approve payment",
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      className: "accept",
      name: "check",
      onClick: () => {
        setPaymentRequestId(item.id);
        handleChange();
      }
    })
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
    content: "Decline payment",
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      className: "decline",
      name: "remove",
      onClick: async () => {
        declinePayment(item.id);
      }
    })
  })))))), __jsx(_ProductsList__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    paymentRequestId: paymentRequestId,
    active: active,
    handleChange: handleChange
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (PendingPaymentRequest);

/***/ }),

/***/ "Dsdu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uI6m");
/* harmony import */ var _components_AcceptedPaymentRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rljl");
/* harmony import */ var _components_PendingPaymentRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7Xrt");
/* harmony import */ var _components_DeclinedPaymentRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("o0q5");
/* harmony import */ var _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Skdt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

const AcceptPayment = () => {
  const {
    0: activeToast,
    1: setActiveToast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: createUpdatePaymentSubscription,
    1: setCreateUpdatePaymentSubscription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_8__[/* paymentSubscription */ "b"])).subscribe({
      next: paymentResponse => {
        setCreateUpdatePaymentSubscription(paymentResponse);
      }
    });
    const onUpdatePayment = aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_8__[/* onUpdatePaymentSubscription */ "a"])).subscribe({
      next: onUpdatePaymentResponse => {
        setCreateUpdatePaymentSubscription(onUpdatePaymentResponse);
      }
    });
    return () => {
      listener.unsubscribe();
      onUpdatePayment.unsubscribe();
    };
  }, []);
  const tabs = [{
    id: 'pending-payments',
    content: 'Pending Payment Requests',
    accessibilityLabel: 'Pending Requests',
    panelID: 'pending-payments-content'
  }, {
    id: 'accepted-payments',
    content: 'Accepted Payment Requests',
    accessibilityLabel: 'Accepted Request',
    panelID: 'accepted-payments-content'
  }, {
    id: 'declined-payments',
    content: 'Declined Payment Requests',
    accessibilityLabel: 'Declined Requests',
    panelID: 'declined-payments-content'
  }];
  const toastMarkup = activeToast ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Toast"], {
    content: "Order has been successfully created",
    onDismiss: () => setActiveToast(false)
  }) : null;

  const renderPaymentRequest = selected => {
    switch (selected) {
      case 0:
        return __jsx(_components_PendingPaymentRequest__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          createUpdatePaymentSubscription: createUpdatePaymentSubscription
        });

      case 1:
        return __jsx(_components_AcceptedPaymentRequest__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null);

      case 2:
        return __jsx(_components_DeclinedPaymentRequest__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null);

      default:
        return;
    }
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    title: "Payment Request"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    tabs: tabs,
    selected: selected,
    onSelect: handleTabChange
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"].Section, {
    title: tabs[selected].content
  }, renderPaymentRequest(selected)))), toastMarkup));
};

/* harmony default export */ __webpack_exports__["default"] = (AcceptPayment);

/***/ }),

/***/ "E1HW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export listTransactions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listProducts; });
/* unused harmony export branchByAdminId */
/* unused harmony export listPaymentRequest */
/* unused harmony export getBranchById */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const listTransactions = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query listTransactions($limit: Int, $nextToken: String) {
        listTransactions(limit: $limit, nextToken: $nextToken) {
            nextToken
            items {
                id
                totalPrice
                totalBonusAmount
                note
                currency
                products {
                    id
                    title
                    bonusPercentage
                    priceAmount
                    priceCurrency
                    image
                }
                customer {
                    id
                    firstName
                    lastName
                    phone
                    email
                }
                createdAt
            }
        }
    }
`;
const listProducts = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Products {
        products(first: 100) {
            edges {
                node {
                    id
                    title
                    tags
                    description(truncateAt: 100)
                    variants(first: 1) {
                        edges {
                            node {
                                id
                                price
                            }
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`;
const branchByAdminId = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query branchByAdminId($adminId: ID!) {
        branchByAdminId(adminId: $adminId) {
            items {
                adminId
                branchName
                id
                branchProducts {
                    items {
                        branchId
                        createdAt
                        id
                        productId
                        tags
                    }
                }
            }
        }
    }
`;
const listPaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query listPaymentRequest {
        listPaymentRequests {
            items {
                bonusAmount
                createdAt
                customerId
                id
                orderId
                status
                updatedAt
            }
        }
    }
`;
const getBranchById = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getBranch($id: ID!) {
        getBranch(id: $id) {
            transactions(sortDirection: DESC) {
                items {
                    branchId
                    createdAt
                    currency
                    note
                    customer {
                        email
                        id
                        firstName
                        lastName
                        phone
                    }
                    totalBonusAmount
                    totalPrice
                    updatedAt
                    sortDate
                }
            }
            branchName
            adminId
            id
            branchProducts {
                items {
                    branchId
                    createdAt
                    id
                    productId
                    tags
                    updatedAt
                }
            }
        }
    }
`;

/***/ }),

/***/ "FVIk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractNumbersFromString; });
const toCurrency = price => {
  return new Intl.NumberFormat('hy-AM', {
    currency: 'AMD',
    style: 'currency'
  }).format(price);
};
const formatDate = rowDate => {
  const date = new Date(rowDate);
  const year = new Intl.DateTimeFormat('en', {
    year: 'numeric'
  }).format(date);
  const month = new Intl.DateTimeFormat('en', {
    month: 'short'
  }).format(date);
  const day = new Intl.DateTimeFormat('en', {
    day: '2-digit'
  }).format(date);
  return `${day}-${month}-${year}`;
};
const extractNumbersFromString = string => {
  return Number(string.match(/\d+/g));
};

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "Skdt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onUpdatePaymentSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return paymentSubscription; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const onUpdatePaymentSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    subscription onUpdatePaymentRequest {
        onUpdatePaymentRequest {
            id
            status
        }
    }
`;
const paymentSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            id
            orderId
            status
            updatedAt
        }
    }
`;

/***/ }),

/***/ "Vixo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "@shopify/polaris"
var polaris_ = __webpack_require__("nj/N");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./utils/helper.js
var helper = __webpack_require__("FVIk");

// EXTERNAL MODULE: ./aws-exports.js
var aws_exports = __webpack_require__("uI6m");

// EXTERNAL MODULE: ./graphql/queries.js
var queries = __webpack_require__("E1HW");

// CONCATENATED MODULE: ./graphql/mutation.js

const createDraftOrder = external_graphql_tag_default.a`
    mutation CreateOrder($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
            draftOrder {
                id
                customer {
                    id
                }
                email
                lineItems(first: 10) {
                    edges {
                        node {
                            title
                            quantity
                            originalUnitPrice
                            variant {
                                id
                                price
                                title
                                product {
                                    tags
                                    title
                                    images(first: 5) {
                                        edges {
                                            node {
                                                originalSrc
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
const completeOrder = external_graphql_tag_default.a`
    mutation CompleteOrder($id: ID!) {
        draftOrderComplete(id: $id, paymentPending: true) {
            draftOrder {
                customer {
                    id
                }
                email
                name
            }
        }
    }
`;
const updatePaymentRequest = external_graphql_tag_default.a`
    mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {
        updatePaymentRequest(input: $input) {
            bonusAmount
            customerId
            id
            orderId
            status
            products {
                originalUnitPrice
                quantity
                variantId
            }
            createdAt
            updatedAt
        }
    }
`;
// CONCATENATED MODULE: ./components/ProductsList.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);

const ProductsList = ({
  active,
  handleChange,
  paymentRequestId
}) => {
  const {
    loading,
    error,
    data
  } = Object(client_["useQuery"])(queries["a" /* listProducts */]);
  const {
    0: rowId,
    1: setRowId
  } = Object(external_react_["useState"])([]);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    products: []
  });

  if (loading) {
    return __jsx("div", null, "Loading products...");
  }

  if (error) {
    return __jsx("div", null, "Some error occured");
  }

  const acceptPayment = async () => {
    try {
      const paymentResponse = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(updatePaymentRequest, {
        input: {
          id: paymentRequestId,
          status: 'APPROVED',
          products: state.products.map(product => ({
            originalUnitPrice: product.node.variants.edges[0].node.price,
            quantity: 1,
            variantId: product.node.variants.edges[0].node.id
          }))
        }
      }));
      console.log('Payment data from lambda', paymentResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx(polaris_["Modal"], {
    open: active,
    onClose: handleChange,
    title: "Choose products",
    primaryAction: {
      content: 'Proceed',
      onAction: () => {
        acceptPayment();
        handleChange();
      }
    }
  }, __jsx(polaris_["Modal"].Section, null, __jsx(external_semantic_ui_react_["Table"], {
    celled: true,
    striped: true,
    selectable: true
  }, __jsx(external_semantic_ui_react_["Table"].Header, null, __jsx(external_semantic_ui_react_["Table"].Row, null, __jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Products"), __jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Description"), __jsx(external_semantic_ui_react_["Table"].HeaderCell, {
    textAlign: "center"
  }, "Price"))), __jsx(external_semantic_ui_react_["Table"].Body, null, data && data.products.edges.map(product => __jsx(external_semantic_ui_react_["Table"].Row, {
    key: product.node.id,
    onClick: () => {
      if (rowId.includes(product.node.id)) {
        setRowId(rowId.filter(id => id !== product.node.id));
        setState({
          products: state.products.filter(filteredProduct => filteredProduct.node.id !== product.node.id)
        });
      } else {
        setRowId([...rowId, product.node.id]);
        setState(_objectSpread(_objectSpread({}, state), {}, {
          products: [...state.products, product]
        }));
      }
    }
  }, __jsx(external_semantic_ui_react_["Table"].Cell, null, __jsx(external_semantic_ui_react_["Header"], {
    as: "h4",
    image: true,
    className: "product-header"
  }, __jsx(polaris_["Checkbox"], {
    checked: rowId.includes(product.node.id) && true
  }), __jsx(polaris_["Thumbnail"], {
    source: product.node.images.edges[0] && product.node.images.edges[0].node.originalSrc,
    size: "small",
    alt: ""
  }), __jsx(external_semantic_ui_react_["Header"].Content, null, product.node.title))), __jsx(external_semantic_ui_react_["Table"].Cell, null, __jsx(polaris_["TextStyle"], {
    variation: "subdued"
  }, product.node.description)), __jsx(external_semantic_ui_react_["Table"].Cell, {
    textAlign: "center"
  }, __jsx(polaris_["TextStyle"], {
    variation: "subdued"
  }, product.node.variants.edges[0] && Object(helper["c" /* toCurrency */])(product.node.variants.edges[0].node.price)))))), __jsx(external_semantic_ui_react_["Table"].Footer, {
    fullWidth: true
  }, __jsx(external_semantic_ui_react_["Table"].Row, null)))));
};

/* harmony default export */ var components_ProductsList = __webpack_exports__["a"] = (ProductsList);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "o0q5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FVIk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].configure(aws_amplify__WEBPACK_IMPORTED_MODULE_2___default.a);
const listPaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    query listPaymentRequest($limit: Int, $nextToken: String) {
        listPaymentRequests(
            limit: $limit
            nextToken: $nextToken
            filter: { status: { eq: DECLINED } }
        ) {
            items {
                bonusAmount
                createdAt
                customerId
                id
                orderId
                status
                updatedAt
            }
            nextToken
        }
    }
`;

const DeclinedPaymentRequest = () => {
  const {
    0: nextPaginateToken,
    1: setNextPaginateToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: paymentRequestItems,
    1: setPaymentRequestItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const fetchAcceptedPayments = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      const res = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listPaymentRequest, {
        limit: 20
      }));
      setNextPaginateToken(res.data.listPaymentRequests.nextToken);
      setPaymentRequestItems(res.data.listPaymentRequests.items);
      console.log('Accepted payments', res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchAcceptedPayments();
  }, [fetchAcceptedPayments]);

  const loadMore = async () => {
    try {
      const res = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listPaymentRequest, {
        limit: 20,
        nextToken: nextPaginateToken
      }));
      setNextPaginateToken(res.data.listPaymentRequests.nextToken);
      setPaymentRequestItems([...paymentRequestItems, ...res.data.listPaymentRequests.items]);
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Customer Id"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Bonus Amount"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Created At"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Updated At"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Status"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, paymentRequestItems && paymentRequestItems.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    key: item.id
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small"
  }, item.customerId)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* toCurrency */ "c"])(item.bonusAmount)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "b"])(item.createdAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "b"])(item.updatedAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small",
    progress: "incomplete",
    status: "critical"
  }, item.status)))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    disabled: !nextPaginateToken,
    primary: true,
    onClick: loadMore
  }, "Load more"));
};

/* harmony default export */ __webpack_exports__["a"] = (DeclinedPaymentRequest);

/***/ }),

/***/ "rljl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FVIk");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uI6m");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);
const listPaymentRequest = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query listPaymentRequest($limit: Int, $nextToken: String) {
        listPaymentRequests(
            limit: $limit
            nextToken: $nextToken
            filter: { status: { eq: APPROVED } }
        ) {
            items {
                bonusAmount
                createdAt
                customerId
                id
                orderId
                status
                updatedAt
            }
            nextToken
        }
    }
`;

const AcceptedPaymentRequest = () => {
  const {
    0: nextPaginateToken,
    1: setNextPaginateToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: paymentRequestItems,
    1: setPaymentRequestItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  console.log('Next token is', nextPaginateToken);
  const fetchAcceptedPayments = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      const res = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_1__["graphqlOperation"])(listPaymentRequest, {
        limit: 20
      }));
      setNextPaginateToken(res.data.listPaymentRequests.nextToken);
      setPaymentRequestItems(res.data.listPaymentRequests.items);
      console.log('Accepted payments', res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchAcceptedPayments();
  }, [fetchAcceptedPayments]);

  const loadMore = async () => {
    try {
      const res = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_1__["graphqlOperation"])(listPaymentRequest, {
        limit: 20,
        nextToken: nextPaginateToken
      }));
      setNextPaginateToken(res.data.listPaymentRequests.nextToken);
      setPaymentRequestItems([...paymentRequestItems, ...res.data.listPaymentRequests.items]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('Next paginate token', nextPaginateToken);
  console.log('Accepted state data', paymentRequestItems);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Customer Id"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Order Id"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Bonus Amount"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Created At"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Updated At"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, null, "Status"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, null, paymentRequestItems && paymentRequestItems.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, {
    key: item.id
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small"
  }, item.customerId)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small"
  }, item.orderId)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* toCurrency */ "c"])(item.bonusAmount)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "b"])(item.createdAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "b"])(item.updatedAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    size: "small",
    progress: "complete",
    status: "success"
  }, item.status)))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    disabled: !nextPaginateToken,
    primary: true,
    onClick: loadMore
  }, "Load more"));
};

/* harmony default export */ __webpack_exports__["a"] = (AcceptedPaymentRequest);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uI6m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  "aws_appsync_graphqlEndpoint": "https://kytejmxrrrgahiikcodklhf6rq.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-iwznaxe3h5bxznagzuctrhqekm"
};
/* harmony default export */ __webpack_exports__["a"] = (awsmobile);

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });