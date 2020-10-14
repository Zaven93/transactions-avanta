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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "DaQf":
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

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

/***/ "GbwQ":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: ./aws-exports.js
var aws_exports = __webpack_require__("uI6m");

// EXTERNAL MODULE: external "@shopify/polaris"
var polaris_ = __webpack_require__("nj/N");

// CONCATENATED MODULE: ./components/Login.js

var __jsx = external_react_default.a.createElement;





const Profile = ({
  setUser
}) => {
  const {
    0: username,
    1: setUsername
  } = Object(external_react_["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('');
  const onChangeUsername = Object(external_react_["useCallback"])(newValue => {
    setUsername(newValue);
    console.log('Value username', newValue);
  }, []);
  const onChangePassword = Object(external_react_["useCallback"])(newValue => {
    setPassword(newValue);
    console.log('Value password', newValue);
  }, []);

  const signIn = async e => {
    e.preventDefault();
    const signedInUser = await external_aws_amplify_["Auth"].signIn(username, password);
    setUser(signedInUser);
  };

  return __jsx("div", {
    className: "authentication-container"
  }, __jsx(polaris_["Card"], {
    title: "Log into your branch",
    sectioned: true
  }, __jsx(polaris_["Form"], {
    onSubmit: signIn
  }, __jsx(polaris_["FormLayout"], null, __jsx(polaris_["TextField"], {
    value: username,
    onChange: onChangeUsername,
    label: "Username"
  }), __jsx(polaris_["TextField"], {
    type: "password",
    value: password,
    onChange: onChangePassword,
    label: "Password"
  }), __jsx(polaris_["Button"], {
    primary: true,
    submit: true
  }, "Login")))));
};

/* harmony default export */ var Login = (Profile);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/ProductsList.js + 1 modules
var ProductsList = __webpack_require__("Vixo");

// EXTERNAL MODULE: ./utils/helper.js
var helper = __webpack_require__("FVIk");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./graphql/queries.js
var queries = __webpack_require__("E1HW");

// CONCATENATED MODULE: ./components/BranchRow.js
var BranchRow_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);

const BranchRow = ({
  product,
  state,
  setState,
  branchId,
  branchInfo,
  rowId,
  setRowId
}) => {
  const {
    0: fetchedProduct,
    1: setFetchedProduct
  } = Object(external_react_["useState"])({
    description: product.node.description,
    id: product.node.id,
    image: product.node.images.edges[0] ? product.node.images.edges[0].node.originalSrc : '',
    tags: product.node.tags,
    title: product.node.title,
    variants: {
      id: product.node.variants.edges[0].node.id,
      price: product.node.variants.edges[0].node.price
    }
  }); // const [branchInfo, setBranchInfo] = useState('')
  // const [rowId, setRowId] = useState('')

  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])(null);
  const {
    0: bonus,
    1: setBonus
  } = Object(external_react_["useState"])('');
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(false);
  const handleSearchInput = Object(external_react_["useCallback"])(newValue => setSearchValue(newValue), []);
  const handleBonus = Object(external_react_["useCallback"])(value => {
    setBonus(value);
    fetchedProduct.tags = [value];
    setFetchedProduct(fetchedProduct);
  }, []);

  const compareProduct = () => {
    const comparedProduct = branchInfo.branchProducts.items.filter(branchProduct => branchProduct.productId === fetchedProduct.id);
    console.log('Here is your compared product', comparedProduct);

    if (!comparedProduct || comparedProduct === undefined) {
      return;
    }

    setBonus(comparedProduct[0] ? comparedProduct[0].tags[0] : '');
    return;
  }; // const getBranch = async () => {
  //     try {
  //         const branch = await API.graphql(graphqlOperation(getBranchById, { id: branchId }))
  //         setBranchInfo(branch.data.getBranch)
  //         setRowId(
  //             branch.data.getBranch.branchProducts.items
  //                 .map((item) => item.productId)
  //                 .filter((productId) => productId === fetchedProduct.id)[0]
  //         )
  //         setState({
  //             products: [
  //                 ...state.products,
  //                 ...branch.data.getBranch.branchProducts.items.filter(
  //                     (product) => product.productId === fetchedProduct.id
  //                 )[0]
  //             ]
  //         })
  //         compareProduct(branch.data.getBranch.branchProducts)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }


  Object(external_react_["useEffect"])(() => {
    console.log('Row id from useEffect', branchInfo.branchProducts.items.map(item => item.productId).filter(productId => productId === fetchedProduct.id)[0]); // setRowId([...rowId, branchInfo.branchProducts.items
    //         .map((item) => item.productId)
    //         .filter((productId) => productId === fetchedProduct.id)[0]])

    compareProduct();
  }, [product, branchInfo]);
  console.log('Fetched product', fetchedProduct);
  console.log('State from BranchRow', state);
  console.log('Row id from BranchRow', rowId);
  return BranchRow_jsx(external_semantic_ui_react_["Table"].Row, {
    key: fetchedProduct.id
  }, BranchRow_jsx(external_semantic_ui_react_["Table"].Cell, null, BranchRow_jsx(external_semantic_ui_react_["Header"], {
    as: "h4",
    image: true,
    className: "product-header"
  }, BranchRow_jsx(polaris_["Checkbox"], {
    checked: rowId.includes(fetchedProduct.id) && true,
    onChange: () => {
      if (rowId.includes(fetchedProduct.id)) {
        setRowId(rowId.filter(id => id !== fetchedProduct.id));
        setState({
          products: state.products.filter(filteredProduct => filteredProduct.id !== fetchedProduct.id)
        });
      } else {
        setRowId([...rowId, fetchedProduct.id]);
        setState(_objectSpread(_objectSpread({}, state), {}, {
          products: [...state.products, fetchedProduct]
        }));
      }
    }
  }), BranchRow_jsx(polaris_["Thumbnail"], {
    source: fetchedProduct.image,
    size: "small",
    alt: ""
  }), BranchRow_jsx(external_semantic_ui_react_["Header"].Content, null, fetchedProduct.title))), BranchRow_jsx(external_semantic_ui_react_["Table"].Cell, {
    textAlign: "center"
  }, BranchRow_jsx(polaris_["TextStyle"], {
    variation: "subdued"
  }, fetchedProduct.variants && Object(helper["c" /* toCurrency */])(fetchedProduct.variants.price))), BranchRow_jsx(external_semantic_ui_react_["Table"].Cell, null, BranchRow_jsx(polaris_["TextField"], {
    id: "percentage-input",
    placeholder: "Bonus Percentage",
    value: bonus,
    onChange: handleBonus,
    prefix: BranchRow_jsx(external_semantic_ui_react_["Icon"], {
      name: "percent"
    }),
    disabled: !rowId.includes(fetchedProduct.id)
  })));
};

/* harmony default export */ var components_BranchRow = (BranchRow);
// EXTERNAL MODULE: external "graphql"
var external_graphql_ = __webpack_require__("T7Fc");

// CONCATENATED MODULE: ./components/BranchProducts.js
var BranchProducts_jsx = external_react_default.a.createElement;












external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);
const listProducts = external_graphql_tag_default.a`
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
const createBranchProduct = external_graphql_tag_default.a`
    mutation createBranchProduct($input: CreateBranchProductInput!) {
        createBranchProduct(input: $input) {
            id
            branchId
            productId
            tags
        }
    }
`;
const productUpdate = external_graphql_tag_default.a`
    mutation productUpdate($input: ProductInput!) {
        productUpdate(input: $input) {
            product {
                id
                metafields(first: 100) {
                    edges {
                        node {
                            namespace
                            key
                            value
                        }
                    }
                }
            }
        }
    }
`;
const getBranchById = external_graphql_tag_default.a`
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
const updateBranchProduct = external_graphql_tag_default.a`
    mutation updateBranchProduct($input: UpdateBranchProductInput!) {
        updateBranchProduct(input: $input) {
            id
            tags
            branchId
            productId
        }
    }
`;
const deleteBranchProduct = external_graphql_tag_default.a`
    mutation deleteBranchProduct($input: DeleteBranchProductInput!) {
        deleteBranchProduct(input: $input) {
            id
        }
    }
`;
const onCreateBranchProduct = external_graphql_tag_default.a`
    subscription onCreateBranchProduct {
        onCreateBranchProduct {
            id
        }
    }
`;
const onUpdateBranchProduct = external_graphql_tag_default.a`
    subscription onUpdateBranchProduct {
        onUpdateBranchProduct {
            id
        }
    }
`;
const onDeleteBranchProduct = external_graphql_tag_default.a`
    subscription onDeleteBranchProduct {
        onDeleteBranchProduct {
            id
        }
    }
`;

const BranchProducts_ProductsList = ({
  active,
  handleChange,
  branchId,
  branchName
}) => {
  const {
    loading,
    error,
    data
  } = Object(client_["useQuery"])(listProducts);
  const {
    0: branchProductSubscription,
    1: setBranchProductSubscription
  } = Object(external_react_["useState"])('');
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
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])(null);
  const {
    0: branchInfo,
    1: setBranchInfo
  } = Object(external_react_["useState"])('');
  const handleSearchInput = Object(external_react_["useCallback"])(newValue => setSearchValue(newValue), []);

  const getBranch = async () => {
    try {
      const branch = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(getBranchById, {
        id: branchId
      }));
      setBranchInfo(branch.data.getBranch);
      setRowId([...rowId, ...branch.data.getBranch.branchProducts.items.map(item => item.productId)]);
      setState({
        products: [...state.products, ...branch.data.getBranch.branchProducts.items.map(product => ({
          id: product.productId
        }))]
      });
    } catch (error) {
      console.log(error);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getBranch();
    const createListener = external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onCreateBranchProduct)).subscribe({
      next: createdBranchProduct => setBranchProductSubscription(createdBranchProduct)
    });
    const updateListener = external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onUpdateBranchProduct)).subscribe({
      next: updatedBranchProduct => setBranchProductSubscription(updatedBranchProduct)
    });
    const deleteListener = external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onDeleteBranchProduct)).subscribe({
      next: deletedBranchProduct => setBranchProductSubscription(deletedBranchProduct)
    });
    return () => {
      createListener.unsubscribe();
      updateListener.unsubscribe();
      deleteListener.unsubscribe();
    };
  }, [branchId, branchProductSubscription]);

  if (loading) {
    return BranchProducts_jsx("div", null, "Loading products...");
  }

  if (error) {
    return BranchProducts_jsx("div", null, "Some error occured");
  }

  console.log('Branch info from BranchProducts', branchInfo);
  console.log('Products from state in BranchProducts', state.products);

  const deleteProductsFromBranch = () => {
    const productsToDeleteFromBranch = branchInfo.branchProducts.items.filter(branchProduct => !state.products.map(product => product.id).includes(branchProduct.productId));
    console.log('Products that are not included in products array', productsToDeleteFromBranch);
    Promise.all(productsToDeleteFromBranch.map(deleteProduct => {
      external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(deleteBranchProduct, {
        input: {
          id: deleteProduct.id
        }
      }));
    })).catch(err => console.log(err));
    return;
  };

  const addProductsToBranch = () => {
    Promise.all(state.products.map(product => {
      const updatedProduct = branchInfo.branchProducts.items.filter(branchProduct => branchProduct.productId === product.id)[0];

      if (updatedProduct) {
        console.log('Yes it containes products that should be updated', updatedProduct);
        external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(updateBranchProduct, {
          input: {
            id: updatedProduct.id,
            tags: product.tags
          }
        }));
      } else {
        console.log("No it doesn't contain the product that should be updated");
        external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(createBranchProduct, {
          input: {
            id: Object(external_uuid_["v4"])(),
            branchId: branchId,
            productId: product.id,
            tags: product.tags
          }
        }));
      }
    })).catch(err => console.log(err));
    return;
  }; // const updateProducts = async () => {
  //     try {
  //         await axios({
  //             url: 'http://localhost:3000/updateProduct',
  //             method: 'POST',
  //             data: {
  //                 products: state.products
  //             }
  //         })
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }


  console.log('State data from product list', state);
  console.log('BranchInfo from modalZaven jan', branchInfo);
  return BranchProducts_jsx(polaris_["Modal"], {
    open: active,
    onClose: () => handleChange(),
    title: "Choose products",
    primaryAction: {
      content: 'Save changes',
      onAction: () => {
        addProductsToBranch();
        deleteProductsFromBranch(); // updateProducts()

        handleChange();
      }
    }
  }, BranchProducts_jsx(polaris_["Modal"].Section, null, BranchProducts_jsx(external_semantic_ui_react_["Table"], {
    celled: true,
    striped: true,
    selectable: true
  }, BranchProducts_jsx(external_semantic_ui_react_["Table"].Header, null, BranchProducts_jsx(external_semantic_ui_react_["Table"].Row, null, BranchProducts_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Products"), BranchProducts_jsx(external_semantic_ui_react_["Table"].HeaderCell, {
    textAlign: "center"
  }, "Price"), BranchProducts_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Bonus Percentage"))), BranchProducts_jsx(external_semantic_ui_react_["Table"].Body, null, data && branchInfo && data.products.edges // .filter((product) => {
  //     if (searchValue == null) {
  //         return product
  //     } else if (
  //         product.node.title
  //             .toLowerCase()
  //             .includes(searchValue.toLowerCase())
  //     ) {
  //         return product
  //     }
  // })
  .map(product => BranchProducts_jsx(components_BranchRow, {
    rowId: rowId,
    setRowId: setRowId,
    branchInfo: branchInfo,
    branchId: branchId,
    product: product,
    state: state,
    setState: setState
  }) // <Table.Row
  //     key={product.node.id}
  //     >
  //     <Table.Cell>
  //         <Header as="h4" image className="product-header">
  //             <Checkbox
  //                 checked={
  //                     rowId.includes(product.node.id) && true
  //                 }
  //                 onClick={() => {
  //                     if (rowId.includes(product.node.id)) {
  //                         setRowId(
  //                             rowId.filter((id) => id !== product.node.id)
  //                         )
  //                         setState({
  //                             products: state.products.filter(
  //                                 (filteredProduct) =>
  //                                     filteredProduct.node.id !==
  //                                     product.node.id
  //                             )
  //                         })
  //                     } else {
  //                         setRowId([...rowId, product.node.id])
  //                         setState({
  //                             ...state,
  //                             products: [...state.products, product]
  //                         })
  //                     }
  //                 }}
  //             />
  //             <Thumbnail
  //                 source={
  //                     product.node.images.edges[0] &&
  //                     product.node.images.edges[0].node
  //                         .originalSrc
  //                 }
  //                 size="small"
  //                 alt=""
  //             />
  //             <Header.Content>
  //                 {product.node.title}
  //             </Header.Content>
  //         </Header>
  //     </Table.Cell>
  //     <Table.Cell>
  //         <TextStyle variation="subdued">
  //             {product.node.description}
  //         </TextStyle>
  //     </Table.Cell>
  //     <Table.Cell textAlign="center">
  //         <TextStyle variation="subdued">
  //             {product.node.variants.edges[0] &&
  //                 toCurrency(
  //                     product.node.variants.edges[0].node.price
  //                 )}
  //         </TextStyle>
  //     </Table.Cell>
  // </Table.Row>
  )), BranchProducts_jsx(external_semantic_ui_react_["Table"].Footer, {
    fullWidth: true
  }, BranchProducts_jsx(external_semantic_ui_react_["Table"].Row, null)))));
};

/* harmony default export */ var BranchProducts = (BranchProducts_ProductsList);
// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__("DaQf");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_);

// EXTERNAL MODULE: external "@shopify/app-bridge"
var app_bridge_ = __webpack_require__("dDoP");
var app_bridge_default = /*#__PURE__*/__webpack_require__.n(app_bridge_);

// EXTERNAL MODULE: external "@shopify/app-bridge/actions"
var actions_ = __webpack_require__("0W++");

// EXTERNAL MODULE: external "@shopify/polaris-icons"
var polaris_icons_ = __webpack_require__("GbwQ");

// CONCATENATED MODULE: ./components/AdminBranchInfo.js
var AdminBranchInfo_jsx = external_react_default.a.createElement;







external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);
const AdminBranchInfo_getBranchById = external_graphql_tag_default.a`
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

const AdminBranchInfo = ({
  branchId,
  setBranchId
}) => {
  const {
    0: branchInfo,
    1: setBranchInfo
  } = Object(external_react_["useState"])('');
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])(null);
  const handleSearchInput = Object(external_react_["useCallback"])(newValue => setSearchValue(newValue), []);

  const getBranch = async () => {
    try {
      const branch = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(AdminBranchInfo_getBranchById, {
        id: branchId
      }));
      setBranchInfo(branch.data.getBranch);
    } catch (error) {
      console.log(error);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getBranch();
  }, []);
  console.log('Branch info from admin', branchId);
  return AdminBranchInfo_jsx(external_react_default.a.Fragment, null, branchInfo && AdminBranchInfo_jsx(external_react_default.a.Fragment, null, AdminBranchInfo_jsx(polaris_["Button"], {
    onClick: () => setBranchId(null),
    primary: true
  }, "Go back"), AdminBranchInfo_jsx(polaris_["TextField"], {
    label: "Search Product",
    value: searchValue,
    onChange: handleSearchInput,
    prefix: AdminBranchInfo_jsx(polaris_["Icon"], {
      source: polaris_icons_["SearchMajorMonotone"]
    }),
    placeholder: "Search by Customer phone number"
  }), AdminBranchInfo_jsx(polaris_["Card"], null, AdminBranchInfo_jsx(polaris_["DataTable"], {
    columnContentTypes: ['text', 'text', 'text', 'text'],
    headings: ['Customer phone number', 'TotalPrice', 'TotalBonusAmount', 'Minus from Bonus Amount', 'CreatedAt'],
    rows: branchInfo && branchInfo.transactions.items.filter(transaction => {
      if (searchValue == null) {
        return transaction;
      } else if (transaction.customer[0].phone.toLowerCase().includes(searchValue.toLowerCase())) {
        return transaction;
      }
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(transaction => [AdminBranchInfo_jsx(polaris_["Button"], {
      primary: true,
      onClick: () => redirect.dispatch(Redirect.Action.ADMIN_PATH, {
        path: `/customers/${transaction.customer[0].id}`,
        newContext: true
      })
    }, transaction.customer[0].phone), Object(helper["c" /* toCurrency */])(Number(transaction.totalPrice)), Object(helper["c" /* toCurrency */])(Number(transaction.totalBonusAmount)), transaction.note === null ? '' : Object(helper["c" /* toCurrency */])(extractNumbersFromString(transaction.note)), Object(helper["b" /* formatDate */])(transaction.createdAt)])
  }))));
};

/* harmony default export */ var components_AdminBranchInfo = (AdminBranchInfo);
// CONCATENATED MODULE: ./components/BranchList.js
var BranchList_jsx = external_react_default.a.createElement;














external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);
external_aws_sdk_default.a.config.update({
  accessKeyId: 'AKIAI53OMMWOAP5X3K5Q',
  secretAccessKey: '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',
  region: 'us-east-1'
});
const cognito = new external_aws_sdk_default.a.CognitoIdentityServiceProvider();
const listBranchs = external_graphql_tag_default.a`
    query listBranchs {
        listBranchs {
            items {
                adminId
                branchName
                branchUsername
                createdAt
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
    }
`;
const onCreateBranchSubscription = external_graphql_tag_default.a`
    subscription onCreateBranch {
        onCreateBranch {
            adminId
            branchName
            id
            createdAt
        }
    }
`;
const onDeleteBranchSubscription = external_graphql_tag_default.a`
    subscription onDeleteBranch {
        onDeleteBranch {
            id
        }
    }
`;
const removeBranch = external_graphql_tag_default.a`
    mutation deleteBranch($input: DeleteBranchInput!) {
        deleteBranch(input: $input) {
            id
        }
    }
`;

const BranchList = ({
  setBranchId,
  branchId
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  const {
    0: branches,
    1: setBranches
  } = Object(external_react_["useState"])('');
  const {
    0: branchName,
    1: setBranchName
  } = Object(external_react_["useState"])('');
  const {
    0: productBranchId,
    1: setProductBranchId
  } = Object(external_react_["useState"])('');
  const {
    0: newCreatedBranch,
    1: setNewCreatedBranch
  } = Object(external_react_["useState"])('');
  const app = app_bridge_default()({
    apiKey: '3b01063bac3031d13101100ef3e44fd5',
    shopOrigin: 'transactions-avanta.myshopify.com'
  });
  const redirect = actions_["Redirect"].create(app);

  const handleChange = () => {
    setActive(!active);
  };

  const fetchBranches = async () => {
    try {
      const getBranches = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(listBranchs));
      setBranches(getBranches.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBranch = async id => {
    try {
      const deletedBranch = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(removeBranch, {
        input: {
          id
        }
      }));
      console.log('Deleted branch', deletedBranch);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserFromCognito = async username => {
    try {
      await cognito.adminDeleteUser({
        UserPoolId: 'us-east-1_IfrnnzGFR',
        Username: username
      }).promise();
    } catch (error) {
      console.log(error);
    }
  };

  Object(external_react_["useEffect"])(() => {
    fetchBranches();
    external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onCreateBranchSubscription)).subscribe({
      next: createdBranch => {
        setNewCreatedBranch(createdBranch);
      }
    });
    external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onDeleteBranchSubscription)).subscribe({
      next: deletedBranch => {
        setNewCreatedBranch(deletedBranch);
      }
    });
  }, [newCreatedBranch]);
  console.log('Branches from Branch list', branches);
  return BranchList_jsx(external_react_default.a.Fragment, null, BranchList_jsx(external_semantic_ui_react_["Table"], {
    selectable: true,
    celled: true
  }, BranchList_jsx(external_semantic_ui_react_["Table"].Header, null, BranchList_jsx(external_semantic_ui_react_["Table"].Row, null, BranchList_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Branch Name"), BranchList_jsx(external_semantic_ui_react_["Table"].HeaderCell, {
    textAlign: "center"
  }, "Created At"), BranchList_jsx(external_semantic_ui_react_["Table"].HeaderCell, {
    textAlign: "center"
  }, "Actions"))), BranchList_jsx(external_semantic_ui_react_["Table"].Body, null, branches && branches.listBranchs.items.map(item => BranchList_jsx(external_semantic_ui_react_["Table"].Row, {
    key: item.id
  }, BranchList_jsx(external_semantic_ui_react_["Table"].Cell, null, BranchList_jsx(polaris_["Button"], {
    primary: true,
    onClick: () => {
      setBranchId(item.id); // redirect.dispatch(
      //     Redirect.Action.ADMIN_PATH,
      //     `/apps/3b01063bac3031d13101100ef3e44fd5/branch/${item.id}`
      // )
    }
  }, BranchList_jsx(external_semantic_ui_react_["Icon"], {
    name: "code branch"
  }), " ", item.branchName)), BranchList_jsx(external_semantic_ui_react_["Table"].Cell, {
    textAlign: "center"
  }, Object(helper["b" /* formatDate */])(item.createdAt)), BranchList_jsx(external_semantic_ui_react_["Table"].Cell, {
    textAlign: "center",
    className: "branch-actions"
  }, BranchList_jsx(external_semantic_ui_react_["Popup"], {
    content: "Edit branch",
    trigger: BranchList_jsx(external_semantic_ui_react_["Icon"], {
      onClick: () => {
        setProductBranchId(item.id);
        setBranchName(item.branchName);
        handleChange();
      },
      className: "edit-branch",
      name: "edit outline"
    })
  }), BranchList_jsx(external_semantic_ui_react_["Popup"], {
    content: "Delete Branch",
    trigger: BranchList_jsx(external_semantic_ui_react_["Icon"], {
      className: "remove-branch",
      name: "trash alternate",
      onClick: () => {
        deleteBranch(item.id);
        deleteUserFromCognito(item.branchUsername);
      }
    })
  })))))), BranchList_jsx(BranchProducts, {
    branchName: branchName,
    branchId: productBranchId,
    active: active,
    handleChange: handleChange
  }));
};

/* harmony default export */ var components_BranchList = (BranchList);
// CONCATENATED MODULE: ./components/BranchConsole.js
var BranchConsole_jsx = external_react_default.a.createElement;












external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);
const createBranch = external_graphql_tag_default.a`
    mutation createBranch($input: CreateBranchInput!) {
        createBranch(input: $input) {
            id
            adminId
            branchName
        }
    }
`;
const BranchConsole_listBranchs = external_graphql_tag_default.a`
    query listBranchs {
        listBranchs {
            items {
                adminId
                branchName
                createdAt
                id
            }
        }
    }
`;

const BranchConsole = ({
  updateUser
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  const {
    0: branchName,
    1: setBranchName
  } = Object(external_react_["useState"])('');
  const {
    0: username,
    1: setUsername
  } = Object(external_react_["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('');
  const {
    0: code,
    1: setCode
  } = Object(external_react_["useState"])('');
  const {
    0: formType,
    1: setFormType
  } = Object(external_react_["useState"])('signUp');
  const {
    0: userSub,
    1: setUserSub
  } = Object(external_react_["useState"])(null);
  const {
    0: branches,
    1: setBranches
  } = Object(external_react_["useState"])('');
  const {
    0: branchId,
    1: setBranchId
  } = Object(external_react_["useState"])(null);
  const onChangeBranchName = Object(external_react_["useCallback"])(newValue => {
    setBranchName(newValue);
  }, []);
  const onChangeUsername = Object(external_react_["useCallback"])(newValue => {
    setUsername(newValue);
  }, []);
  const onChangePassword = Object(external_react_["useCallback"])(newValue => {
    setPassword(newValue);
  }, []);
  const onChangeEmail = Object(external_react_["useCallback"])(newValue => {
    setEmail(newValue);
  }, []);
  const onChangeCode = Object(external_react_["useCallback"])(newValue => {
    setCode(newValue);
  }, []);

  const handleChange = () => {
    setActive(!active);
  };

  const signUp = async e => {
    e.preventDefault();

    try {
      const user = await external_aws_amplify_["Auth"].signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      setUserSub(user.userSub);
      console.log('Signed Up User from Modal', user);
      setFormType('confirm');
    } catch (error) {
      console.log(error);
    }
  };

  const confirm = async e => {
    e.preventDefault();

    try {
      const confirmedUser = await external_aws_amplify_["Auth"].confirmSignUp(username, code);
      console.log('Confirmed user', confirmedUser);
      const branch = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(createBranch, {
        input: {
          adminId: userSub,
          branchUsername: username,
          branchName: branchName,
          id: Object(external_uuid_["v4"])()
        }
      }));
      console.log('New created branch', branch);
      setFormType('signUp');
      handleChange();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBranches = async () => {
    try {
      const getBranches = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(BranchConsole_listBranchs));
      setBranches(getBranches.data);
    } catch (error) {
      console.log(error);
    }
  };

  Object(external_react_["useEffect"])(() => {
    fetchBranches();
  }, []);
  console.log('Branch name', branchName);
  console.log('Username', username);
  console.log('Password', password);
  console.log('Email', email);
  console.log('Code', code);
  console.log('Fetched branches', branches);
  return BranchConsole_jsx(external_react_default.a.Fragment, null, branchId && BranchConsole_jsx(components_AdminBranchInfo, {
    setBranchId: setBranchId,
    branchId: branchId
  }), !branchId && BranchConsole_jsx(external_react_default.a.Fragment, null, BranchConsole_jsx(polaris_["Button"], {
    onClick: handleChange,
    primary: true
  }, "Create branch"), BranchConsole_jsx(polaris_["Button"], {
    primary: true,
    id: "Logout",
    onClick: () => {
      external_aws_amplify_["Auth"].signOut();
      updateUser(null);
    }
  }, BranchConsole_jsx(external_semantic_ui_react_["Icon"], {
    name: "sign out"
  }), " Logout"), BranchConsole_jsx(components_BranchList, {
    setBranchId: setBranchId
  }), BranchConsole_jsx(polaris_["Modal"], {
    open: active,
    onClose: handleChange,
    title: "Fill in Branch info"
  }, BranchConsole_jsx(polaris_["Modal"].Section, null, formType === 'signUp' && BranchConsole_jsx(polaris_["Form"], {
    onSubmit: signUp
  }, BranchConsole_jsx(polaris_["FormLayout"], null, BranchConsole_jsx(polaris_["TextField"], {
    value: branchName,
    onChange: onChangeBranchName,
    label: "Branch Name"
  }), BranchConsole_jsx(polaris_["TextField"], {
    value: username,
    onChange: onChangeUsername,
    label: "Branch admin username"
  }), BranchConsole_jsx(polaris_["TextField"], {
    value: email,
    onChange: onChangeEmail,
    label: "Branch admin email"
  }), BranchConsole_jsx(polaris_["TextField"], {
    type: "password",
    value: password,
    onChange: onChangePassword,
    label: "Branch admin password"
  }), BranchConsole_jsx(polaris_["Button"], {
    primary: true,
    submit: true
  }, "Create Branch"))), formType === 'confirm' && BranchConsole_jsx(polaris_["Form"], {
    onSubmit: confirm
  }, BranchConsole_jsx(polaris_["FormLayout"], null, BranchConsole_jsx(polaris_["TextField"], {
    value: username,
    onChange: onChangeUsername,
    label: "Branch admin username"
  }), BranchConsole_jsx(polaris_["TextField"], {
    value: code,
    onChange: onChangeCode,
    label: "Confirmation code"
  }), BranchConsole_jsx(polaris_["Button"], {
    primary: true,
    submit: true
  }, "Confirm")))))));
};

/* harmony default export */ var components_BranchConsole = (BranchConsole);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/AcceptedPaymentRequest.js
var AcceptedPaymentRequest = __webpack_require__("rljl");

// EXTERNAL MODULE: ./components/PendingPaymentRequest.js
var PendingPaymentRequest = __webpack_require__("7Xrt");

// EXTERNAL MODULE: ./components/DeclinedPaymentRequest.js
var DeclinedPaymentRequest = __webpack_require__("o0q5");

// EXTERNAL MODULE: ./graphql/subscriptions.js
var subscriptions = __webpack_require__("Skdt");

// CONCATENATED MODULE: ./components/PaymentRequest.js
var PaymentRequest_jsx = external_react_default.a.createElement;








external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);

const AcceptPayment = ({
  branchId,
  setShowPaymentRequest
}) => {
  const {
    0: activeToast,
    1: setActiveToast
  } = Object(external_react_["useState"])(false);
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(0);
  const {
    0: createUpdatePaymentSubscription,
    1: setCreateUpdatePaymentSubscription
  } = Object(external_react_["useState"])('');
  const handleTabChange = Object(external_react_["useCallback"])(selectedTabIndex => setSelected(selectedTabIndex), []);
  Object(external_react_["useEffect"])(() => {
    const listener = external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(subscriptions["b" /* paymentSubscription */])).subscribe({
      next: paymentResponse => {
        setCreateUpdatePaymentSubscription(paymentResponse);
      }
    });
    const onUpdatePayment = external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(subscriptions["a" /* onUpdatePaymentSubscription */])).subscribe({
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
  const toastMarkup = activeToast ? PaymentRequest_jsx(polaris_["Toast"], {
    content: "Order has been successfully created",
    onDismiss: () => setActiveToast(false)
  }) : null;

  const renderPaymentRequest = selected => {
    switch (selected) {
      case 0:
        return PaymentRequest_jsx(PendingPaymentRequest["a" /* default */], {
          branchId: branchId,
          createUpdatePaymentSubscription: createUpdatePaymentSubscription
        });

      case 1:
        return PaymentRequest_jsx(AcceptedPaymentRequest["a" /* default */], {
          branchId: branchId
        });

      case 2:
        return PaymentRequest_jsx(DeclinedPaymentRequest["a" /* default */], {
          branchId: branchId
        });

      default:
        return;
    }
  };

  return PaymentRequest_jsx(polaris_["Frame"], null, PaymentRequest_jsx(polaris_["Page"], {
    title: "Payment Request"
  }, PaymentRequest_jsx(Button, {
    onClick: () => setShowPaymentRequest(false)
  }, "Go back"), PaymentRequest_jsx(polaris_["Card"], null, PaymentRequest_jsx(polaris_["Tabs"], {
    tabs: tabs,
    selected: selected,
    onSelect: handleTabChange
  }, PaymentRequest_jsx(polaris_["Card"].Section, {
    title: tabs[selected].content
  }, renderPaymentRequest(selected)))), toastMarkup));
};

/* harmony default export */ var PaymentRequest = (AcceptPayment);
// CONCATENATED MODULE: ./components/BranchData.js
var BranchData_jsx = external_react_default.a.createElement;














external_aws_amplify_["API"].configure(aws_exports["a" /* default */]);
const branchByAdminId = external_graphql_tag_default.a`
    query branchByAdminId($adminId: ID!) {
        branchByAdminId(adminId: $adminId) {
            items {
                adminId
                branchName
                id
                transactions {
                    items {
                        branchId
                        createdAt
                        currency
                        id
                        note
                        customer {
                            email
                            firstName
                            id
                            lastName
                            phone
                        }
                        products {
                            bonusPercentage
                            id
                            image
                            priceAmount
                            priceCurrency
                            title
                        }
                        sortDate
                        totalBonusAmount
                        totalPrice
                        updatedAt
                    }
                }
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
const onCreateTransaction = external_graphql_tag_default.a`
    subscription onCreateTransaction {
        onCreateTransaction {
            id
        }
    }
`;

const BranchData = ({
  user,
  updateUser
}) => {
  const {
    0: branchInfo,
    1: setBranchInfo
  } = Object(external_react_["useState"])('');
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])(null);
  const {
    0: newCreatedTransaction,
    1: setNewCreatedTransaction
  } = Object(external_react_["useState"])('');
  const {
    0: showPaymentRequest,
    1: setShowPaymentRequest
  } = Object(external_react_["useState"])(false); // const [transactionItems, setTransactionItems] = useState(transactions.listTransactions.items)
  // const [nextPaginateToken, setNextPaginateToken] = useState(
  //     transactions.listTransactions.nextToken
  // )
  // const [previousPaginateTokens, setPreviousPaginateTokens] = useState([])

  const handleSearchInput = Object(external_react_["useCallback"])(newValue => setSearchValue(newValue), []);
  const router = Object(router_["useRouter"])();
  const app = app_bridge_default()({
    apiKey: '3b01063bac3031d13101100ef3e44fd5',
    shopOrigin: 'transactions-avanta.myshopify.com'
  });
  const redirect = actions_["Redirect"].create(app); // const paginateNext = async () => {
  //     setPreviousPaginateTokens([...previousPaginateTokens, nextPaginateToken])
  //     try {
  //         const data = await API.graphql(
  //             graphqlOperation(listTransactions, { limit: 5, nextToken: nextPaginateToken })
  //         )
  //         console.log('Data from pagination', data)
  //         setTransactionItems(data.data.listTransactions.items)
  //         setNextPaginateToken(data.data.listTransactions.nextToken)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  // const paginatePrevious = async () => {
  //     const previousToken =
  //         previousPaginateTokens[
  //             previousPaginateTokens.length === 1 ? 0 : previousPaginateTokens.length - 2
  //         ]
  //     setPreviousPaginateTokens([
  //         ...previousPaginateTokens.slice(0, previousPaginateTokens.length - 1)
  //     ])
  //     try {
  //         if (previousPaginateTokens.length === 1) {
  //             const data = await API.graphql(graphqlOperation(listTransactions, { limit: 5 }))
  //             setTransactionItems(data.data.listTransactions.items)
  //             setNextPaginateToken(data.data.listTransactions.nextToken)
  //         } else {
  //             const data = await API.graphql(
  //                 graphqlOperation(listTransactions, { limit: 5, nextToken: previousToken })
  //             )
  //             setTransactionItems(data.data.listTransactions.items)
  //             setNextPaginateToken(data.data.listTransactions.nextToken)
  //         }
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  const getBranch = async () => {
    try {
      const fetchBranch = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(branchByAdminId, {
        adminId: user.attributes.sub
      }));
      setBranchInfo(fetchBranch.data.branchByAdminId.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getBranch();
    external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onCreateTransaction)).subscribe({
      next: createdTransaction => setNewCreatedTransaction(createdTransaction)
    });
  }, [newCreatedTransaction]);
  console.log('Branch data user', user);
  console.log('Branch info', branchInfo);
  return BranchData_jsx(external_react_default.a.Fragment, null, showPaymentRequest ? BranchData_jsx(PaymentRequest, {
    setShowPaymentRequest: setShowPaymentRequest,
    branchId: branchInfo.id
  }) : BranchData_jsx(polaris_["Page"], {
    title: branchInfo && branchInfo.branchName
  }, BranchData_jsx(polaris_["TextField"], {
    label: "Search Product",
    value: searchValue,
    onChange: handleSearchInput,
    prefix: BranchData_jsx(polaris_["Icon"], {
      source: polaris_icons_["SearchMajorMonotone"]
    }),
    placeholder: "Search by Customer phone number"
  }), BranchData_jsx(polaris_["Stack"], null, BranchData_jsx(polaris_["Stack"].Item, {
    fill: true
  }, BranchData_jsx(polaris_["Button"], {
    id: "Accept-Payment",
    onClick: () => // redirect.dispatch(
    //     Redirect.Action.ADMIN_PATH,
    //     '/apps/3b01063bac3031d13101100ef3e44fd5/accept-payment'
    // )
    setShowPaymentRequest(true)
  }, BranchData_jsx(polaris_["Icon"], {
    source: polaris_icons_["BalanceMajorMonotone"]
  }), " Accept Payment")), BranchData_jsx(polaris_["Stack"].Item, null, BranchData_jsx(polaris_["Button"], {
    id: "Create-Transaction",
    primary: true,
    onClick: () => redirect.dispatch(actions_["Redirect"].Action.REMOTE, {
      // url: `https://dev.d3ivgpkzuz6hkr.amplifyapp.com?adminId=${user.attributes.sub}`,
      url: `http://localhost:3001/transactions/${user.attributes.sub}`,
      newContext: true
    })
  }, BranchData_jsx(polaris_["Icon"], {
    source: polaris_icons_["TransactionMajorMonotone"]
  }), " Create transaction")), BranchData_jsx(polaris_["Stack"].Item, null, BranchData_jsx(polaris_["Button"], {
    primary: true,
    id: "Logout",
    onClick: () => {
      external_aws_amplify_["Auth"].signOut();
      updateUser(null);
    }
  }, BranchData_jsx(polaris_["Icon"], {
    source: polaris_icons_["LogOutMinor"]
  }), " Logout"))), branchInfo && BranchData_jsx(polaris_["Card"], null, BranchData_jsx(polaris_["DataTable"], {
    columnContentTypes: ['text', 'text', 'text', 'text'],
    headings: ['Customer phone number', 'TotalPrice', 'TotalBonusAmount', 'Minus from Bonus Amount', 'CreatedAt'],
    rows: branchInfo && branchInfo.transactions.items.filter(transaction => {
      if (searchValue == null) {
        return transaction;
      } else if (transaction.customer[0].phone.toLowerCase().includes(searchValue.toLowerCase())) {
        return transaction;
      }
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(transaction => [BranchData_jsx(polaris_["Button"], {
      primary: true,
      onClick: () => redirect.dispatch(actions_["Redirect"].Action.ADMIN_PATH, {
        path: `/customers/${transaction.customer[0].id}`,
        newContext: true
      })
    }, transaction.customer[0].phone), Object(helper["c" /* toCurrency */])(Number(transaction.totalPrice)), Object(helper["c" /* toCurrency */])(Number(transaction.totalBonusAmount)), transaction.note === null ? '' : Object(helper["c" /* toCurrency */])(Object(helper["a" /* extractNumbersFromString */])(transaction.note)), Object(helper["b" /* formatDate */])(transaction.createdAt)])
  }))));
};

/* harmony default export */ var components_BranchData = (BranchData);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;







const Index = () => {
  const {
    0: user,
    1: updateUser
  } = Object(external_react_["useState"])(null);

  const checkUser = async () => {
    try {
      const user = await external_aws_amplify_["Auth"].currentAuthenticatedUser();

      if (!user) {
        return;
      }

      updateUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  Object(external_react_["useEffect"])(() => {
    checkUser();
  }, []);
  return pages_jsx(external_react_default.a.Fragment, null, user && user.username !== 'superadmin' && pages_jsx(components_BranchData, {
    updateUser: updateUser,
    user: user
  }), !user && pages_jsx(Login, {
    setUser: fetchedUser => updateUser(fetchedUser)
  }), user && user.username === 'superadmin' && pages_jsx(components_BranchConsole, {
    updateUser: updateUser
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

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

/***/ "T7Fc":
/***/ (function(module, exports) {

module.exports = require("graphql");

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

/***/ "dDoP":
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge");

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

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

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });