/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n//Development\r\nconsole.log(\"Brief introduction to HTML CSS\")\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{\\r\\n    margin:0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\nbody, html {\\r\\n    height: 100%;\\r\\n}\\r\\nh1 , h2, h3,h4,h5{\\r\\n    font-family: 'Ubuntu', sans-serif;\\r\\n    margin-bottom: 1rem;\\r\\n    line-height: 1.5;\\r\\n    margin: 0;\\r\\n}\\r\\nul{\\r\\n    list-style: none;\\r\\n}\\r\\na{\\r\\n    color: #333;\\r\\n    text-decoration: none;\\r\\n}\\r\\nimg{\\r\\n    width: 100%;\\r\\n}\\r\\n.container{\\r\\n    padding: 0 2rem;\\r\\n    margin: auto;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.py-1{padding:1.5rem 0;}\\r\\n.py-2{padding:2rem 0;}\\r\\n.py-3{padding:3rem 0; }\\r\\n.px-1{padding: 0 1.5rem;}\\r\\n.px-2{padding: 0 2rem;}\\r\\n.px-3{padding: 0 3rem;}\\r\\n\\r\\n#home{\\r\\n    display: grid;\\r\\n    grid-template-columns: 0.5fr 2.4fr 3.6fr;\\r\\n}\\r\\n.area{\\r\\n    background-color: #F5F8FA;\\r\\n    height: auto;\\r\\n}\\r\\n.area1{\\r\\n    background: linear-gradient(to right, rgba(239,240,235,1) 0%,rgba(244,244,244,0.88) 40%,rgba(239,240,235,0.7) 99%,rgba(239,240,235,0.7) 100%);\\r\\n    background-color: #fff;\\r\\n}\\r\\n.chat-container .info{\\r\\n    display: flex;\\r\\n    padding-left: 1.5rem;\\r\\n    align-items: center;\\r\\n}\\r\\n.chat-container .info img{\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n.chat-container .info div h5 {\\r\\n   color:  #1FB5EB;\\r\\n}\\r\\n.panel-container{\\r\\n    display: flex;\\r\\n    cursor: pointer;\\r\\n    height: 50px;\\r\\n    align-items: center;\\r\\n}\\r\\n.panel-container:first-child{\\r\\n    margin-top: 30px;\\r\\n    background-color: #fff;\\r\\n    border-left: 6px solid #1FB5EB;\\r\\n\\r\\n}\\r\\n.panel-container i {\\r\\n    width: 1.4rem !important;\\r\\n    color:  #1FB5EB;  \\r\\n}\\r\\n\\r\\n.panel-container div {\\r\\n    background-color:#FF5F5F;\\r\\n    width: 43px;\\r\\n    margin: 0 25px; \\r\\n    text-align: center;\\r\\n    padding: 2px 0;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.panel-container h3 {\\r\\n    font-weight: 500;\\r\\n}\\r\\n.panel-container div a {\\r\\n  font-size: 12px;\\r\\n  color: #fff;\\r\\n}\\r\\n.panel-folders{\\r\\n    margin-top: 30px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.panel-folders div{\\r\\n    background-color:#C7DFEF;\\r\\n    width: 43px;\\r\\n    margin: 0 25px; \\r\\n    text-align: center;\\r\\n    padding: 2px 0;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.panel-container .blue {\\r\\n    color: #4664C7;\\r\\n  }\\r\\n.panel-container .pink  {\\r\\n    color: #FE9699;\\r\\n  }\\r\\n  .panel-container .yellow {\\r\\n    color: #FED86F;\\r\\n  }\\r\\n  .compose{\\r\\n      cursor: pointer;\\r\\n      margin-top: 40px;\\r\\n      margin-left: 3rem;\\r\\n      width: 150px;\\r\\n      background-color: #FF5E5E;\\r\\n      line-height: 30px;\\r\\n      border-radius: 10px;\\r\\n      box-shadow: 1px 4px 15px 1px rgba(255,94,94,1);\\r\\n  }\\r\\n.compose a{\\r\\n      color: #fff;\\r\\n}\\r\\n.compose:hover{\\r\\n      background-color: #ff5353;\\r\\n}\\r\\n.compose:active{\\r\\n    box-shadow: 1px 1px 15px 1px rgba(255,94,94,1);\\r\\n    transform: translateY(3px);\\r\\n}\\r\\n  .card-container{\\r\\n      margin-top: 3rem;\\r\\n  }\\r\\n  .area1 div input{\\r\\n    position: relative;\\r\\n    margin-left: 2rem;\\r\\n    margin-right: 15px;\\r\\n    height: 30px;\\r\\n    border: none;\\r\\n    border-radius: 20px;\\r\\n    width: -webkit-fill-available;\\r\\n    padding-left:30px;\\r\\n    text-indent: 20px;\\r\\n    \\r\\n  }\\r\\n  .area1 div input:focus{\\r\\n    outline: none;\\r\\n  }\\r\\n  .input-icons i { \\r\\n    position: absolute; \\r\\n} \\r\\n  \\r\\n.input-icons { \\r\\n    width: 100%; \\r\\n    margin-bottom: 10px; \\r\\n} \\r\\n  \\r\\n.icon { \\r\\n    padding-left: 53px;\\r\\n    z-index: 2;\\r\\n    padding-top: 8px;\\r\\n    cursor: pointer;\\r\\n    min-width: 40px; \\r\\n} \\r\\n  \\r\\n.input-field { \\r\\n    width: 100%; \\r\\n    padding: 10px; \\r\\n} \\r\\n.cards-container{\\r\\n    position: relative;\\r\\n    margin: 2rem 1rem;\\r\\n}\\r\\n.box-shadow{\\r\\n    position: absolute;\\r\\n    bottom: 0px;\\r\\n    width: 90%;\\r\\n    align-items: center;\\r\\n    background-color: #fff;\\r\\n    height: 50px;\\r\\n    z-index: 2;\\r\\n    margin: auto;\\r\\n    height: 15px;\\r\\n    right: 14px;\\r\\n    box-shadow: 2px 7px 25px -2px rgba(199,199,199,1);\\r\\n    border-radius: 0px 0px 10px 10px;\\r\\n}\\r\\n\\r\\n.card-row img{\\r\\n    width:50px !important;\\r\\n    height: 50px;\\r\\n    margin-left: 20px;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n.card-row{\\r\\n    position: relative;\\r\\n    background-color: #fff;\\r\\n    border-radius: 14px;\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    z-index: 3;\\r\\n    cursor: pointer;\\r\\n    top: 0;\\r\\n    transition: all ease 0.5s;\\r\\n}\\r\\n.name-date{\\r\\n    display: flex;\\r\\n}\\r\\n.name-date div h5:nth-child(2){\\r\\n    font-weight: 500;\\r\\n}\\r\\n.card-row:hover{\\r\\n    top: -8px;\\r\\n    box-shadow: 14px -4px 27px -13px rgba(148,142,148,1);\\r\\n}\\r\\n.card-header >p{\\r\\n    font-family: cursive;\\r\\n    font-size: 12px;\\r\\n    margin-bottom: 5px;\\r\\n    color:#838383;\\r\\n    margin:12px 0px;\\r\\n}\\r\\n.name-date >p{\\r\\n    font-family: monospace, Cochin, Georgia, Times, 'Times New Roman', serif;\\r\\n    right: 20px;\\r\\n    position: absolute;\\r\\n    font-size: 11px;\\r\\n    font-weight: bold;\\r\\n    float: right;\\r\\n}\\r\\n.description{\\r\\ndisplay: grid;\\r\\ngrid-template-columns: 100px auto;\\r\\ngrid-template-rows: 100px auto;\\r\\n\\r\\n}\\r\\n.header-icons{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.description img{\\r\\n    width:50px !important;\\r\\n    height: auto;\\r\\n    margin-left: 45px;\\r\\n    border-radius: 50%; \\r\\n}\\r\\n.header-icons div i{\\r\\n    color: #ADADAD;\\r\\n    font-size: 22px;\\r\\n    margin-right: 28px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.header-icons .arrows{\\r\\n    margin-right: 100px;\\r\\n}\\r\\n.header-icons .arrows i{\\r\\n    margin-right: 2px;\\r\\n    margin-right: 10px;\\r\\n    font-size: 17px;\\r\\n\\r\\n    cursor: pointer;\\r\\n}\\r\\n.header-icons .arrows i:nth-child(3){\\r\\n    color: black;\\r\\n}\\r\\n.header-icons div span{\\r\\n    font-family: cursive;\\r\\n    margin-right: 10px;\\r\\n}\\r\\n.header{\\r\\n    margin-top: 30px;\\r\\n}\\r\\n.description-personal h5:nth-child(1){\\r\\n    font-family: 'Ubuntu', sans-serif;\\r\\n}\\r\\n.description-personal h5:nth-child(2){\\r\\n    font-family: 'Ubuntu', sans-serif;\\r\\n    font-size: 13px;\\r\\n    font-weight: 500;\\r\\n}\\r\\n.description-personal p:nth-child(3){\\r\\n    font-size: 13px;\\r\\n    color: #AA9;\\r\\n    margin: 5px 0;\\r\\n}\\r\\n.description-personal p:nth-child(4){\\r\\n    color: black;\\r\\n    font-size: 10px;\\r\\n    font-family: sans-serif;\\r\\n    font-weight: 700;\\r\\n    margin-top: 16px;\\r\\n}\\r\\n.description-personal h2{\\r\\n    font-size: 20px;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n.article-description{\\r\\n    max-width: 420px;\\r\\n    font-size: 13px;\\r\\n    color: #7C7C7C;\\r\\n    margin-top: 10px\\r\\n}\\r\\n.article-description div{\\r\\n    margin-top: 30px;\\r\\n    color: #32BBEC;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.article-galery{\\r\\n    display: grid;\\r\\n    margin-top: 20px;\\r\\n    grid-template-columns: repeat(8, 1fr);\\r\\n    grid-template-rows: repeat(2, 100px);\\r\\n    grid-gap: 15px;\\r\\n}\\r\\n.article-galery figure img{\\r\\n    width: 100% !important;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n    margin:0;\\r\\n    border-radius: inherit !important;\\r\\n}\\r\\n.gallery__item--1{\\r\\n    grid-column-start: 1;\\r\\n    grid-column-end: 3;\\r\\n    grid-row-start: 1;\\r\\n    grid-row-end: 2;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.gallery__item--2{\\r\\n    grid-column-start: 1;\\r\\n    grid-column-end: 3;\\r\\n    grid-row-start: 2;\\r\\n    grid-row-end: 3; \\r\\n    cursor: pointer;\\r\\n}\\r\\n.gallery__item--3{\\r\\n    grid-column-start: 3;\\r\\n    cursor: pointer;\\r\\n    grid-column-end: 6;\\r\\n    grid-row-start: 1;\\r\\n    grid-row-end: 3;  \\r\\n}\\r\\n.gallery__item--4{\\r\\n    grid-column-start: 6;\\r\\n    grid-column-end: 8;\\r\\n    cursor: pointer;\\r\\n    grid-row-start: 1;\\r\\n    grid-row-end: 3;  \\r\\n}\\r\\n.article-download div{\\r\\n    width: 120px;\\r\\n    text-align: center;\\r\\n    line-height: 30px;\\r\\n    cursor: pointer;\\r\\n    border-radius: 10px;\\r\\n\\r\\n    border: 1px solid grey;\\r\\n}\\r\\n.article-download{\\r\\n    margin-top: 20px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.article-download div a{\\r\\n    color: grey;\\r\\n}\\r\\n.article-download div a i{\\r\\n    margin-right: 7px;\\r\\n}\\r\\n.article-download span{\\r\\n    margin-left: 10px;\\r\\n    color: grey;\\r\\n    font-size: 13px;\\r\\n}\\r\\n.send-message input{\\r\\n    border: 1px solid #ccc;\\r\\n    width: 88%;\\r\\n    height: 40px;\\r\\n    border-radius: 20px;\\r\\n    text-indent: 20px;\\r\\n\\r\\n}\\r\\n.send-message input:focus{\\r\\n    outline: none;\\r\\n  }\\r\\n.send-message{\\r\\n    margin-top: 15px;\\r\\n}\\r\\n.send-message span{\\r\\n    position: relative;\\r\\n    left: -80px;\\r\\n\\r\\n} \\r\\n.send-message span i{\\r\\n    color: grey;\\r\\n\\r\\n    font-size: 21px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.send-message span i:nth-child(2){\\r\\n    color: #32BBEC;\\r\\n    margin-left: 13px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });