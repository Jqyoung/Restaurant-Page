/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Alkatra/Alkatra-VariableFont_wght.ttf */ "./src/fonts/Alkatra/Alkatra-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rubik/Rubik-VariableFont_wght.ttf */ "./src/fonts/Rubik/Rubik-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --text-color: rgb(171, 31, 31);\n  --header-text-color: rgb(237, 234, 218);\n  --header-bgclr: rgba(171, 31, 31, 0.818);\n  --div-bgclr: rgba(103, 103, 103, 0.658);\n  --grey-bgclr: rgba(41, 41, 41, 0.702);\n}\n\n@font-face {\n  font-family: \"written-font\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: \"formal-font\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-color: black;\n}\n\n#content {\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 1.5rem;\n  background-color: var(--header-bgclr);\n  font-family: \"formal-font\", sans-serif;\n  font-weight: 600;\n\n  display: grid;\n  grid-template-columns: 0.3fr min-content min-content min-content;\n  justify-items: start;\n  justify-content: center;\n  gap: 6rem;\n}\n\n.active {\n  border-bottom: 2px solid var(--header-text-color);\n}\n\n.header img {\n  width: 2.5rem;\n  /* filter: sepia(1) hue-rotate(290deg) saturate(250) contrast(65%); */\n\n  justify-self: start;\n}\n\nbutton {\n  background: none;\n  border-style: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--header-text-color);\n  width: min-content;\n}\n\n.main-content {\n  color: var(--text-color);\n  font-family: \"written-font\", sans-serif;\n}\n\n/* homepage styles */\n.home {\n  text-align: center;\n  width: 100%;\n  flex: 1;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 600% 50%/98% no-repeat;\n  padding-top: 4rem;\n}\n\nh1 {\n  font-size: 5rem;\n}\n.home p {\n  font-size: 1.5rem;\n}\n.order {\n  font-size: 1.5rem;\n  width: fit-content;\n  padding: 10px 30px;\n  background-color: var(--text-color);\n  margin-top: 50px;\n  border-radius: 5px;\n}\n\n/* menu page styles */\n.menu {\n  width: 70%;\n  margin-bottom: 1rem;\n  background-color: var(--grey-bgclr);\n  padding: 3rem 3rem 0 3rem;\n  border-radius: 0 0 10px 10px;\n}\n.menu-category {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.menu-category > h2 {\n  grid-column: 1/3;\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: -1rem;\n}\n\n.menu-category > div {\n  background-color: var(--div-bgclr);\n  display: grid;\n  grid-template-columns: min-content 1fr min-content;\n  grid-template-rows: min-content 1fr;\n  grid-template-areas:\n    \"img title price\"\n    \"img description description\";\n  align-items: center;\n  color: var(--header-text-color);\n  border-radius: 10px;\n\n  padding: 15px 15px 15px 15px;\n}\n.menu-category > div > img {\n  grid-area: img;\n  width: 12rem;\n  margin-right: 1.5rem;\n  border-radius: 10px;\n}\n.menu-category > div > h3 {\n  grid-area: title;\n  font-size: 1.5rem;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(\n      to right,\n      var(--header-text-color) 65%,\n      transparent\n    )\n    1;\n}\n.menu-category > div > .description {\n  grid-area: description;\n  font-size: 1.1rem;\n  text-align: justify;\n  align-self: start;\n}\n.menu-category > div > .price {\n  grid-area: price;\n}\n\n/*Contact page styles */\n.contact {\n  display: grid;\n  grid-template-columns: min-content fit-content 1fr;\n  grid-template-areas:\n    \"phoneIcon phone map\"\n    \"hoursIcon hours map\"\n    \"addressIcon address map\";\n  font-size: 1.2rem;\n  color: var(--header-text-color);\n  font-family: \"formal-font\", sans-serif;\n  align-items: center;\n  column-gap: 8px;\n  background-color: var(--div-bgclr);\n  margin-top: auto;\n  padding: 60px 20px;\n  border-radius: 10px;\n}\n\n.contact > img:not(.map) {\n  width: 1.2rem;\n  filter: invert(1);\n}\n\n.contact:first-child {\n  grid-area: phoneIcon;\n  width: 1rem;\n}\n.phone {\n  grid-area: phone;\n}\n\n.contact > img:nth-of-type(2) {\n  grid-area: hoursIcon;\n}\n.hours {\n  grid-area: hours;\n}\n.hours::after {\n  content: \"\\a Fri - Sun: 10am-10pm \";\n  white-space: pre;\n}\n\n.contact > img:nth-of-type(3) {\n  grid-area: addressIcon;\n}\n.address {\n  grid-area: address;\n}\n.address:after {\n  content: \"\\a Salt Lake City, Utah 88888 \\a USA\";\n  white-space: pre;\n}\n\n.map {\n  grid-area: map;\n  width: 30rem;\n  margin-left: 30px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: auto;\n  padding: 5px 0;\n\n  width: 100%;\n}\na {\n  font-family: \"formal-font\", sans-serif;\n  text-decoration: none;\n  color: var(--header-text-color);\n  opacity: 0.5;\n}\na > p:hover {\n  color: var(--text-color);\n}\na > img {\n  width: 1.7rem;\n  vertical-align: middle;\n}\na > img:hover {\n  transform: scale(1.3);\n  filter: sepia(1) hue-rotate(290deg) saturate(200) brightness(0.8)\n    contrast(100%);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,uCAAuC;EACvC,wCAAwC;EACxC,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,2BAA2B;EAC3B,4CAAuD;AACzD;;AAEA;EACE,0BAA0B;EAC1B,4CAAmD;AACrD;;AAEA;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,qCAAqC;EACrC,sCAAsC;EACtC,gBAAgB;;EAEhB,aAAa;EACb,gEAAgE;EAChE,oBAAoB;EACpB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,qEAAqE;;EAErE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uCAAuC;AACzC;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,0EAA+D;EAC/D,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mCAAmC;EACnC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,mBAAmB;EACnB,mCAAmC;EACnC,yBAAyB;EACzB,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,kDAAkD;EAClD,mCAAmC;EACnC;;iCAE+B;EAC/B,mBAAmB;EACnB,+BAA+B;EAC/B,mBAAmB;;EAEnB,4BAA4B;AAC9B;AACA;EACE,cAAc;EACd,YAAY;EACZ,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;EACxB;;;;;KAKG;AACL;AACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,kDAAkD;EAClD;;;6BAG2B;EAC3B,iBAAiB;EACjB,+BAA+B;EAC/B,sCAAsC;EACtC,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,+CAA+C;EAC/C,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,gBAAgB;EAChB,cAAc;;EAEd,WAAW;AACb;AACA;EACE,sCAAsC;EACtC,qBAAqB;EACrB,+BAA+B;EAC/B,YAAY;AACd;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB;kBACgB;AAClB","sourcesContent":[":root {\n  --text-color: rgb(171, 31, 31);\n  --header-text-color: rgb(237, 234, 218);\n  --header-bgclr: rgba(171, 31, 31, 0.818);\n  --div-bgclr: rgba(103, 103, 103, 0.658);\n  --grey-bgclr: rgba(41, 41, 41, 0.702);\n}\n\n@font-face {\n  font-family: \"written-font\";\n  src: url(./fonts/Alkatra/Alkatra-VariableFont_wght.ttf);\n}\n\n@font-face {\n  font-family: \"formal-font\";\n  src: url(./fonts/Rubik/Rubik-VariableFont_wght.ttf);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-color: black;\n}\n\n#content {\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 1.5rem;\n  background-color: var(--header-bgclr);\n  font-family: \"formal-font\", sans-serif;\n  font-weight: 600;\n\n  display: grid;\n  grid-template-columns: 0.3fr min-content min-content min-content;\n  justify-items: start;\n  justify-content: center;\n  gap: 6rem;\n}\n\n.active {\n  border-bottom: 2px solid var(--header-text-color);\n}\n\n.header img {\n  width: 2.5rem;\n  /* filter: sepia(1) hue-rotate(290deg) saturate(250) contrast(65%); */\n\n  justify-self: start;\n}\n\nbutton {\n  background: none;\n  border-style: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--header-text-color);\n  width: min-content;\n}\n\n.main-content {\n  color: var(--text-color);\n  font-family: \"written-font\", sans-serif;\n}\n\n/* homepage styles */\n.home {\n  text-align: center;\n  width: 100%;\n  flex: 1;\n  background: url(./images/background.jpg) 600% 50%/98% no-repeat;\n  padding-top: 4rem;\n}\n\nh1 {\n  font-size: 5rem;\n}\n.home p {\n  font-size: 1.5rem;\n}\n.order {\n  font-size: 1.5rem;\n  width: fit-content;\n  padding: 10px 30px;\n  background-color: var(--text-color);\n  margin-top: 50px;\n  border-radius: 5px;\n}\n\n/* menu page styles */\n.menu {\n  width: 70%;\n  margin-bottom: 1rem;\n  background-color: var(--grey-bgclr);\n  padding: 3rem 3rem 0 3rem;\n  border-radius: 0 0 10px 10px;\n}\n.menu-category {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.menu-category > h2 {\n  grid-column: 1/3;\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: -1rem;\n}\n\n.menu-category > div {\n  background-color: var(--div-bgclr);\n  display: grid;\n  grid-template-columns: min-content 1fr min-content;\n  grid-template-rows: min-content 1fr;\n  grid-template-areas:\n    \"img title price\"\n    \"img description description\";\n  align-items: center;\n  color: var(--header-text-color);\n  border-radius: 10px;\n\n  padding: 15px 15px 15px 15px;\n}\n.menu-category > div > img {\n  grid-area: img;\n  width: 12rem;\n  margin-right: 1.5rem;\n  border-radius: 10px;\n}\n.menu-category > div > h3 {\n  grid-area: title;\n  font-size: 1.5rem;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(\n      to right,\n      var(--header-text-color) 65%,\n      transparent\n    )\n    1;\n}\n.menu-category > div > .description {\n  grid-area: description;\n  font-size: 1.1rem;\n  text-align: justify;\n  align-self: start;\n}\n.menu-category > div > .price {\n  grid-area: price;\n}\n\n/*Contact page styles */\n.contact {\n  display: grid;\n  grid-template-columns: min-content fit-content 1fr;\n  grid-template-areas:\n    \"phoneIcon phone map\"\n    \"hoursIcon hours map\"\n    \"addressIcon address map\";\n  font-size: 1.2rem;\n  color: var(--header-text-color);\n  font-family: \"formal-font\", sans-serif;\n  align-items: center;\n  column-gap: 8px;\n  background-color: var(--div-bgclr);\n  margin-top: auto;\n  padding: 60px 20px;\n  border-radius: 10px;\n}\n\n.contact > img:not(.map) {\n  width: 1.2rem;\n  filter: invert(1);\n}\n\n.contact:first-child {\n  grid-area: phoneIcon;\n  width: 1rem;\n}\n.phone {\n  grid-area: phone;\n}\n\n.contact > img:nth-of-type(2) {\n  grid-area: hoursIcon;\n}\n.hours {\n  grid-area: hours;\n}\n.hours::after {\n  content: \"\\a Fri - Sun: 10am-10pm \";\n  white-space: pre;\n}\n\n.contact > img:nth-of-type(3) {\n  grid-area: addressIcon;\n}\n.address {\n  grid-area: address;\n}\n.address:after {\n  content: \"\\a Salt Lake City, Utah 88888 \\a USA\";\n  white-space: pre;\n}\n\n.map {\n  grid-area: map;\n  width: 30rem;\n  margin-left: 30px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: auto;\n  padding: 5px 0;\n\n  width: 100%;\n}\na {\n  font-family: \"formal-font\", sans-serif;\n  text-decoration: none;\n  color: var(--header-text-color);\n  opacity: 0.5;\n}\na > p:hover {\n  color: var(--text-color);\n}\na > img {\n  width: 1.7rem;\n  vertical-align: middle;\n}\na > img:hover {\n  transform: scale(1.3);\n  filter: sepia(1) hue-rotate(290deg) saturate(200) brightness(0.8)\n    contrast(100%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/phone.svg */ "./src/icons/phone.svg");
/* harmony import */ var _icons_time_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/time.svg */ "./src/icons/time.svg");
/* harmony import */ var _icons_address_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/address.svg */ "./src/icons/address.svg");
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/map.png */ "./src/images/map.png");





function createContactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("main-content", "contact");

  const phoneImg = document.createElement("img");
  phoneImg.src = _icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__;
  const phone = document.createElement("p");
  phone.classList.add("phone");
  phone.textContent = "999-333-8888";

  const timeImg = document.createElement("img");
  timeImg.src = _icons_time_svg__WEBPACK_IMPORTED_MODULE_1__;
  const hours = document.createElement("p");
  hours.classList.add("hours");
  hours.textContent = "Mon - Sun: 11am-9pm";

  const addressImg = document.createElement("img");
  addressImg.src = _icons_address_svg__WEBPACK_IMPORTED_MODULE_2__;
  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = "9999 5400 S Blvd";

  const map = document.createElement("img");
  map.classList.add("map");
  map.src = _images_map_png__WEBPACK_IMPORTED_MODULE_3__;
  map.alt = "map";

  contactContainer.append(
    phoneImg,
    phone,
    timeImg,
    hours,
    addressImg,
    address,
    map
  );

  return contactContainer;
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_helpSetAttr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helpSetAttr.js */ "./src/helpers/helpSetAttr.js");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github.png */ "./src/images/github.png");



function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const anchor = document.createElement("a");
  (0,_helpers_helpSetAttr_js__WEBPACK_IMPORTED_MODULE_0__["default"])(anchor, { href: "https://github.com/Jqyoung", target: "_blank" });
  const linkPara = document.createElement("p");
  linkPara.innerHTML = "Copyright &copy; 2023 Joey Young";
  anchor.appendChild(linkPara);

  const anchor2 = document.createElement("a");
  (0,_helpers_helpSetAttr_js__WEBPACK_IMPORTED_MODULE_0__["default"])(anchor2, {
    href: "https://jqyoung.github.io/Restaurant-Page/",
    target: "_blank",
  });
  const githubIcon = document.createElement("img");
  (0,_helpers_helpSetAttr_js__WEBPACK_IMPORTED_MODULE_0__["default"])(githubIcon, { src: _images_github_png__WEBPACK_IMPORTED_MODULE_1__, alt: "github" });
  anchor2.appendChild(githubIcon);

  footer.append(anchor, anchor2);

  return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_odin_lined_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/odin-lined.png */ "./src/images/odin-lined.png");
/* harmony import */ var _helpers_helpSetAttr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/helpSetAttr.js */ "./src/helpers/helpSetAttr.js");



function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logoElement = document.createElement("img");
  (0,_helpers_helpSetAttr_js__WEBPACK_IMPORTED_MODULE_1__["default"])(logoElement, { src: _images_odin_lined_png__WEBPACK_IMPORTED_MODULE_0__, alt: _images_odin_lined_png__WEBPACK_IMPORTED_MODULE_0__ });
  header.appendChild(logoElement);

  const buttonContent = ["Home", "Menu", "Contact"];
  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    if (i === 0) {
      button.classList.add("home-tab", "active");
    }
    if (i === 1) {
      button.classList.add("menu-tab");
    }
    button.textContent = buttonContent[i];
    header.appendChild(button);
  }
  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/helpers/helpSetAttr.js":
/*!************************************!*\
  !*** ./src/helpers/helpSetAttr.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setAttribute(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAttribute);


/***/ }),

/***/ "./src/helpers/removeNode.js":
/*!***********************************!*\
  !*** ./src/helpers/removeNode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeDomNode(tabs = []) {
  const nodeToRemove = document.querySelector(".main-content");
  if (nodeToRemove) nodeToRemove.remove();

  //remove inactive header nav border bottom
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeDomNode);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _helpers_removeNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/removeNode */ "./src/helpers/removeNode.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



function createHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("main-content", "home");

  const title = document.createElement("h1");
  title.textContent = "Way of Noodles";

  const description = document.createElement("p");
  description.textContent = "The best noodle bowls from China and Japan";

  const order = document.createElement("button");
  order.classList.add("order");
  order.textContent = "Order Now";

  order.addEventListener("click", () => {
    const content = document.querySelector("#content");
    const menuTab = document.querySelector(".menu-tab");
    const homeTab = document.querySelector(".home-tab");
    const footer = document.querySelector(".footer");
    (0,_helpers_removeNode__WEBPACK_IMPORTED_MODULE_0__["default"])();
    homeTab.classList.remove("active");
    menuTab.classList.add("active");
    content.insertBefore((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)(), footer);
  });

  homeContainer.append(title, description, order);

  return homeContainer;
}




/***/ }),

/***/ "./src/initiatePage.js":
/*!*****************************!*\
  !*** ./src/initiatePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiatePage": () => (/* binding */ initiatePage)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");




function initiatePage() {
  const container = document.getElementById("content");

  const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const mainContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();
  const footer = (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  container.append(header, mainContent, footer);
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _images_beefNoodleSoup_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/beefNoodleSoup.jpg */ "./src/images/beefNoodleSoup.jpg");
/* harmony import */ var _images_slicedNoodle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/slicedNoodle.png */ "./src/images/slicedNoodle.png");
/* harmony import */ var _images_riceNoodle_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/riceNoodle.jpg */ "./src/images/riceNoodle.jpg");
/* harmony import */ var _images_lowMein_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lowMein.jpg */ "./src/images/lowMein.jpg");
/* harmony import */ var _images_tsukimen_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tsukimen.jpg */ "./src/images/tsukimen.jpg");
/* harmony import */ var _images_ramen_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/ramen.jpg */ "./src/images/ramen.jpg");
/* harmony import */ var _images_iceDrink_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/iceDrink.jpg */ "./src/images/iceDrink.jpg");
/* harmony import */ var _images_sake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/sake.jpg */ "./src/images/sake.jpg");











function createMenuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("main-content", "menu");

  const categories = ["Noodle Soup", "Ramen", "Beverage"];
  for (let i = 0; i < 3; i++) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");
    const categoryElement = document.createElement("h2");
    categoryElement.textContent = categories[i];
    menuContainer.append(categoryDiv);
    categoryDiv.append(categoryElement);
  }

  const noodlesMenu = [
    menuItemsFactory(
      "Beef Noodle Soup",
      "$15.99",
      "Rich beef and pork bone soup with tender beef short ribs and green cabbage as toppings",
      _images_beefNoodleSoup_jpg__WEBPACK_IMPORTED_MODULE_0__,
      "Beef Noodle Soup"
    ),
    menuItemsFactory(
      "Hand-Sliced Noodle Soup",
      "$15.99",
      "Hand-sliced noodles, tender beef slices, and fresh lettuce in a flavorful bone broth with aromatic spices",
      _images_slicedNoodle_png__WEBPACK_IMPORTED_MODULE_1__,
      "Sliced Noodle Soup"
    ),

    menuItemsFactory(
      "Rice Noodle Soup",
      "$14.99",
      "Delicious chicken and pork broth with pork tender, deep-fried chashu and lettuce as toppings ",
      _images_riceNoodle_jpg__WEBPACK_IMPORTED_MODULE_2__,
      "Rice Noodle Soup"
    ),

    menuItemsFactory(
      "Zha Jiang Noodle",
      "$13.99",
      "Wheat noodles with savory fermented soybean paste sauce, ground meat, garlic, ginger, and topped with vegetables",
      _images_lowMein_jpg__WEBPACK_IMPORTED_MODULE_3__,
      "Zha Jiang Noodle"
    ),
  ];
  const ramenMenu = [
    menuItemsFactory(
      "Tsukemen Dipping Ramen",
      "17.99",
      "Thick wheat noodles dipped in a rich creamy broth made from pork bone and dashi, topped with chashu pork and bamboo shoots.",
      _images_tsukimen_jpg__WEBPACK_IMPORTED_MODULE_4__,
      "Tsukemen Dipping Ramen Noodle"
    ),

    menuItemsFactory(
      "Tonkotsu Ramen",
      "$17.99",
      "Rich pork bone soup with tender chashu, soft-boiled egg, corn and celtuce as topping",
      _images_ramen_jpg__WEBPACK_IMPORTED_MODULE_5__,
      "Tonkotsu Ramen"
    ),
  ];

  const beverageMenu = [
    menuItemsFactory(
      "Ice Jelly Drink",
      "$3.99",
      "Icy drink made with brown sugar and papaya starch",
      _images_iceDrink_jpg__WEBPACK_IMPORTED_MODULE_6__,
      "Ice Jelly Drink"
    ),

    menuItemsFactory(
      "Sake",
      "3.99",
      "Japanese rice wine with a smooth, slightly sweet taste served chilled or warm",
      _images_sake_jpg__WEBPACK_IMPORTED_MODULE_7__,
      "Sake"
    ),
  ];

  const noodleMenuDivs = createMenuItems(noodlesMenu);
  for (let i = 0; i < noodleMenuDivs.length; i++)
    menuContainer.children[0].append(noodleMenuDivs[i]);

  const ramenMenuDivs = createMenuItems(ramenMenu);
  for (let i = 0; i < ramenMenuDivs.length; i++)
    menuContainer.children[1].append(ramenMenuDivs[i]);

  const beverageDivs = createMenuItems(beverageMenu);
  for (let i = 0; i < beverageDivs.length; i++)
    menuContainer.children[2].append(beverageDivs[i]);

  return menuContainer;
}

function menuItemsFactory(name, price, description, imgPath, imgAlt) {
  return { name, description, price, imgPath, imgAlt };
}

function createMenuItems(menuItem) {
  const menuDivs = [];
  for (let i = 0; i < menuItem.length; i++) {
    const noodleSoupDiv = document.createElement("div");
    const menuItemName = document.createElement("h3");
    menuItemName.textContent = menuItem[i].name;

    const menuItemPrice = document.createElement("p");
    menuItemPrice.classList.add("price");
    menuItemPrice.textContent = menuItem[i].price;

    const menuItemDes = document.createElement("p");
    menuItemDes.classList.add("description");
    menuItemDes.textContent = menuItem[i].description;

    const menuImage = document.createElement("img");
    menuImage.src = menuItem[i].imgPath;
    menuImage.alt = menuItem[i].imgAlt;

    noodleSoupDiv.append(menuImage, menuItemName, menuItemPrice, menuItemDes);

    menuDivs.push(noodleSoupDiv);
  }
  return menuDivs;
}




/***/ }),

/***/ "./src/fonts/Alkatra/Alkatra-VariableFont_wght.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/Alkatra/Alkatra-VariableFont_wght.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7d7f539621400f4b70b.ttf";

/***/ }),

/***/ "./src/fonts/Rubik/Rubik-VariableFont_wght.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/Rubik/Rubik-VariableFont_wght.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dfbb61b2158905edb87.ttf";

/***/ }),

/***/ "./src/icons/address.svg":
/*!*******************************!*\
  !*** ./src/icons/address.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea4b8bbd976a88b2ff8b.svg";

/***/ }),

/***/ "./src/icons/phone.svg":
/*!*****************************!*\
  !*** ./src/icons/phone.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e6124e793f7728491d0.svg";

/***/ }),

/***/ "./src/icons/time.svg":
/*!****************************!*\
  !*** ./src/icons/time.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf96ad57b57c0d7843b0.svg";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1912f3df69b700416cb1.jpg";

/***/ }),

/***/ "./src/images/beefNoodleSoup.jpg":
/*!***************************************!*\
  !*** ./src/images/beefNoodleSoup.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3605236452a9d514b49b.jpg";

/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5de0643bf1bbf77878ff.png";

/***/ }),

/***/ "./src/images/iceDrink.jpg":
/*!*********************************!*\
  !*** ./src/images/iceDrink.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5630d87cf8433730da4c.jpg";

/***/ }),

/***/ "./src/images/lowMein.jpg":
/*!********************************!*\
  !*** ./src/images/lowMein.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4b3408dd1d9b26a75c2.jpg";

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb0c06eb45f786a6cf6b.png";

/***/ }),

/***/ "./src/images/odin-lined.png":
/*!***********************************!*\
  !*** ./src/images/odin-lined.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f0f495b2f256748749f.png";

/***/ }),

/***/ "./src/images/ramen.jpg":
/*!******************************!*\
  !*** ./src/images/ramen.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db3d74e5d4d8da62a67c.jpg";

/***/ }),

/***/ "./src/images/riceNoodle.jpg":
/*!***********************************!*\
  !*** ./src/images/riceNoodle.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7999ff0d19a5258926ad.jpg";

/***/ }),

/***/ "./src/images/sake.jpg":
/*!*****************************!*\
  !*** ./src/images/sake.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31830cae1d8a1f00081d.jpg";

/***/ }),

/***/ "./src/images/slicedNoodle.png":
/*!*************************************!*\
  !*** ./src/images/slicedNoodle.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1da44f630f950c3cbe3.png";

/***/ }),

/***/ "./src/images/tsukimen.jpg":
/*!*********************************!*\
  !*** ./src/images/tsukimen.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2079c224b0a2977e89df.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initiatePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initiatePage.js */ "./src/initiatePage.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _helpers_removeNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/removeNode.js */ "./src/helpers/removeNode.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_initiatePage_js__WEBPACK_IMPORTED_MODULE_0__.initiatePage)();
clickTab();

function clickTab() {
  const container = document.querySelector("#content");
  const footer = document.querySelector(".footer");
  const callbacks = [_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome, _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPage, _contact_js__WEBPACK_IMPORTED_MODULE_3__.createContactPage];
  const tabs = document.querySelectorAll(".header button");
  for (const [index, button] of tabs.entries()) {
    button.addEventListener("click", (e) => {
      (0,_helpers_removeNode_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tabs);
      e.target.classList.add("active");
      container.insertBefore(callbacks[index](), footer);
    });
  }
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map