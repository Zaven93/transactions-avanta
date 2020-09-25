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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0W++":
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "GbwQ":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dDoP");
/* harmony import */ var _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0W++");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("T7Fc");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("GbwQ");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FVIk");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("uI6m");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);
const listTransactions = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
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
const paymentSubscription = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            orderId
            updatedAt
        }
    }
`;
const listProducts = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
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

const Index = ({
  transactions
}) => {
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: transactionItems,
    1: setTransactionItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(transactions.listTransactions.items);
  const {
    0: nextPaginateToken,
    1: setNextPaginateToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(transactions.listTransactions.nextToken);
  const {
    0: previousPaginateTokens,
    1: setPreviousPaginateTokens
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const handleSearchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setSearchValue(newValue), []);
  const app = _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_3___default()({
    apiKey: '3b01063bac3031d13101100ef3e44fd5',
    shopOrigin: 'transactions-avanta.myshopify.com'
  });
  const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__["Redirect"].create(app);

  const paginateNext = async () => {
    setPreviousPaginateTokens([...previousPaginateTokens, nextPaginateToken]);

    try {
      const data = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listTransactions, {
        limit: 5,
        nextToken: nextPaginateToken
      }));
      console.log('Data from pagination', data);
      setTransactionItems(data.data.listTransactions.items);
      setNextPaginateToken(data.data.listTransactions.nextToken);
    } catch (error) {
      console.log(error);
    }
  };

  const paginatePrevious = async () => {
    const previousToken = previousPaginateTokens[previousPaginateTokens.length === 1 ? 0 : previousPaginateTokens.length - 2];
    setPreviousPaginateTokens([...previousPaginateTokens.slice(0, previousPaginateTokens.length - 1)]);

    try {
      if (previousPaginateTokens.length === 1) {
        const data = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listTransactions, {
          limit: 5
        }));
        setTransactionItems(data.data.listTransactions.items);
        setNextPaginateToken(data.data.listTransactions.nextToken);
      } else {
        const data = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listTransactions, {
          limit: 5,
          nextToken: previousToken
        }));
        setTransactionItems(data.data.listTransactions.items);
        setNextPaginateToken(data.data.listTransactions.nextToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    title: "Transactions"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    label: "Search Product",
    value: searchValue,
    onChange: handleSearchInput,
    prefix: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
      source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__["SearchMajorMonotone"]
    }),
    placeholder: "Search by Customer phone number"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, {
    fill: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    id: "Accept-Payment",
    onClick: () => redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__["Redirect"].Action.ADMIN_PATH, '/apps/3b01063bac3031d13101100ef3e44fd5/accept-payment')
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__["BalanceMajorMonotone"]
  }), " Accept Payment")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    id: "Create-Transaction",
    primary: true,
    onClick: () => redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__["Redirect"].Action.REMOTE, {
      url: 'https://dev.d3ivgpkzuz6hkr.amplifyapp.com',
      newContext: true
    })
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_8__["TransactionMajorMonotone"]
  }), " Create transaction"))), transactionItems && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DataTable"], {
    columnContentTypes: ['text', 'text', 'text', 'text'],
    headings: ['Customer phone number', 'TotalPrice', 'TotalBonusAmount', 'Minus from Bonus Amount', 'CreatedAt'],
    rows: transactionItems && transactionItems.filter(transaction => {
      if (searchValue == null) {
        return transaction;
      } else if (transaction.customer[0].phone.toLowerCase().includes(searchValue.toLowerCase())) {
        return transaction;
      }
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(transaction => [__jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      primary: true,
      onClick: () => redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__["Redirect"].Action.ADMIN_PATH, {
        path: `/customers/${transaction.customer[0].id}`,
        newContext: true
      })
    }, transaction.customer[0].phone), Object(_utils_helper__WEBPACK_IMPORTED_MODULE_9__[/* toCurrency */ "c"])(Number(transaction.totalPrice)), Object(_utils_helper__WEBPACK_IMPORTED_MODULE_9__[/* toCurrency */ "c"])(Number(transaction.totalBonusAmount)), transaction.note === null ? '' : Object(_utils_helper__WEBPACK_IMPORTED_MODULE_9__[/* toCurrency */ "c"])(Object(_utils_helper__WEBPACK_IMPORTED_MODULE_9__[/* extractNumbersFromString */ "a"])(transaction.note)), Object(_utils_helper__WEBPACK_IMPORTED_MODULE_9__[/* formatDate */ "b"])(transaction.createdAt)])
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Pagination"], {
    hasPrevious: previousPaginateTokens.length > 0,
    onPrevious: paginatePrevious,
    hasNext: nextPaginateToken,
    onNext: paginateNext
  })));
};

async function getStaticProps() {
  let result;

  try {
    result = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(listTransactions, {
      limit: 5
    }));
  } catch (error) {
    console.log(error);
  }

  if (result.errors) {
    console.warn('Failed to fetch transactions.', result.errors);
    return {
      props: {
        transactions: []
      }
    };
  }

  if (result.data !== null) {
    return {
      props: {
        transactions: result.data
      }
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "T7Fc":
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dDoP":
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge");

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });