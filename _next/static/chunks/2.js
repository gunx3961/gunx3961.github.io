(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./archives/dev/es-modules-a-cartoon-deep-dive/es-modules-a-cartoon-deep-dive.md":
/*!***************************************************************************************!*\
  !*** ./archives/dev/es-modules-a-cartoon-deep-dive/es-modules-a-cartoon-deep-dive.md ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/tag */ "./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/dev/gunx3961.github.io/archives/dev/es-modules-a-cartoon-deep-dive/es-modules-a-cartoon-deep-dive.md";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\u56FE\u89E3 ES modules"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u672C\u6587\u7FFB\u8BD1\u81EA ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "em",
    props: {
      "href": "http://code-cartoons.com/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Lin Clark"), " \u7684\u6587\u7AE0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "em",
    props: {
      "href": "https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u300AES modules: A cartoon deep-dive\u300B"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "ES modules \uFF08\u4EE5\u4E0B\u7B80\u79F0 ESM\uFF09 \u4E3A JavaScript \u5E26\u6765\u4E86\u6807\u51C6\u5316\u7684\u6A21\u5757\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u4E5F\u66FE\u4E3A\u6B64\u4ED8\u51FA\u4E86\u4E0D\u5C0F\u7684\u52AA\u529B\u2014\u2014\u5C06\u8FD1 10 \u5E74\u7684\u6807\u51C6\u5316\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), "\u968F\u7740 Firefox 60 \u5C06\u5728 5 \u6708\u53D1\u5E03\uFF0C\u6240\u6709\u7684\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u5C06\u652F\u6301 ESM\uFF1BNode.js \u6B63\u5728\u7740\u624B\u652F\u6301 ESM\uFF1B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.youtube.com/watch?v=qR_b5gajwug"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "ESM \u7684 WebAssembly \u6574\u5408"), " \u4E5F\u6B63\u5728\u8FDB\u884C\u4E2D\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u8BB8\u591A JS \u5F00\u53D1\u8005\u90FD\u77E5\u9053 ESM \u662F\u4E00\u4E2A\u8001\u751F\u5E38\u8C08\u7684\u8BDD\u9898\u4E86\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u6DF1\u5165\u4E86\u89E3\u8FC7\u5B83\u7684\u4EBA\u53EA\u662F\u5C11\u6570\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), "\u73B0\u5728\u5C31\u8BA9\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B ESM \u5230\u5E95\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF0C\u4EE5\u53CA\u5B83\u548C\u5176\u4ED6\u6A21\u5757\u7CFB\u7EDF\u6709\u4F55\u5F02\u540C\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u6A21\u5757\u5316\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "JS \u7F16\u7A0B\u5373\u662F\u5728\u7BA1\u7406\u53D8\u91CF\u3002\u6211\u4EEC\u5BF9\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\uFF0C\u6216\u8005\u5BF9\u4E24\u4E2A\u53D8\u91CF\u8FDB\u884C\u7EC4\u5408\uFF0C\u5C06\u5176\u653E\u8FDB\u53E6\u4E00\u4E2A\u53D8\u91CF\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/01_variables.png",
      "alt": "01_variables"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\u6211\u4EEC\u5B9E\u5728\u6709\u592A\u591A\u7684\u4EE3\u7801\u90FD\u5728\u5BF9\u53D8\u91CF\u8FDB\u884C\u5904\u7406\uFF0C\u7EC4\u7EC7\u53D8\u91CF\u7684\u65B9\u5F0F\u5C06\u4F1A\u5BF9\u7F16\u5199\u4EE3\u7801\u3001\u7EF4\u62A4\u4EE3\u7801\u4EA7\u751F\u5DE8\u5927\u7684\u5F71\u54CD\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "\u4E00\u6B21\u4EC5\u8003\u8651\u5C11\u91CF\u53D8\u91CF\u4F1A\u8BA9\u4E8B\u60C5\u53D8\u5F97\u66F4\u7B80\u5355\u3002JS \u7684\u4F5C\u7528\u57DF\u4F1A\u5E2E\u52A9\u4F60\u8FD9\u6837\u505A\uFF0C\u4F5C\u7528\u57DF\u4F7F\u51FD\u6570\u65E0\u6CD5\u8BBF\u95EE\u5B9A\u4E49\u5728\u5176\u4ED6\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/02_module_scope_01.png",
      "alt": "02_module_scope_01"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u4F5C\u7528\u57DF\u5F88\u68D2\uFF0C\u5B83\u8BA9\u6211\u4EEC\u4E13\u6CE8\u4E8E\u5F53\u524D\u7684\u51FD\u6570\uFF0C\u4E0D\u5FC5\u62C5\u5FC3\u5176\u4ED6\u51FD\u6570\u4F1A\u5BF9\u4F60\u7684\u53D8\u91CF\u52A8\u624B\u52A8\u811A\u3002\u4E0D\u8FC7\u5B83\u7684\u53E6\u4E00\u9762\u5C31\u662F\uFF0C\u5728\u4E0D\u540C\u51FD\u6570\u4E2D\u5171\u7528\u53D8\u91CF\u53D8\u5F97\u66F4\u96BE\u4E86\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "\u5982\u679C\u60F3\u5728\u4E24\u4E2A\u4F5C\u7528\u57DF\u4E2D\u5171\u7528\u4E00\u4E2A\u53D8\u91CF\u4F60\u4F1A\u600E\u4E48\u505A\uFF1F\u901A\u5E38\u7684\u624B\u6BB5\u662F\u5C06\u53D8\u91CF\u653E\u5728\u66F4\u4E0A\u7EA7\u7684\u4F5C\u7528\u57DF\u4E2D\u2026\u2026\u6BD4\u5982\u5168\u5C40\u4F5C\u7528\u57DF\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), "\u53EF\u80FD\u8FD9\u4F1A\u8BA9\u4F60\u60F3\u5230\u4F7F\u7528 jQuery \u7684\u90A3\u4E9B\u65E5\u5B50\u3002\u5728\u52A0\u8F7D jQuery \u63D2\u4EF6\u4E4B\u524D\uFF0C\u9996\u5148\u8981\u4FDD\u8BC1 jQuery \u5728\u4F60\u7684\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/02_module_scope_02.png",
      "alt": "02_module_scope_02"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u8FD9\u6837\u505A\u65E0\u53EF\u539A\u975E\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u607C\u4EBA\u7684\u95EE\u9898\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "\u4F60\u4E0D\u4EC5\u9700\u8981\u4FDD\u8BC1 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "<script>"), " \u6807\u7B7E\u5FC5\u987B\u6309\u7167\u6B63\u786E\u7684\u987A\u5E8F\u6446\u653E\uFF0C\u8FD8\u8981\u786E\u4FDD\u5B83\u4EEC\u4E0D\u4F1A\u6253\u4E71\u3002\u5982\u679C\u6709\u4EBA\u4E0D\u5C0F\u5FC3\u8FD9\u4E48\u505A\u4E86\uFF0C\u4F60\u7684\u5E94\u7528\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u65F6\u7ED9\u4F60\u629B\u4E2A\u9519\u8BEF\u51FA\u6765\u3002\u5F53\u51FD\u6570\u5C1D\u8BD5\u5BFB\u627E\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u7684 jQuery \u5374\u6CA1\u627E\u5230\u65F6\uFF0C\u5B83\u4F1A\u62A5\u9519\u505C\u6B62\u8FD0\u884C\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/02_module_scope_03.png",
      "alt": "02_module_scope_03"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u8FD9\u4F1A\u8BA9\u4EE3\u7801\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u5220\u9664\u8001\u7684\u4EE3\u7801\u6216\u8005\u6807\u7B7E\u4F1A\u53D8\u5F97\u60CA\u9669\u53C8\u523A\u6FC0\uFF0C\u4F60\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u4F1A\u8E29\u5230\u5730\u96F7\u3002\u4EE3\u7801\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u662F\u9690\u5F0F\u7684\uFF0C\u4EFB\u4F55\u51FD\u6570\u90FD\u53EF\u80FD\u4F9D\u8D56\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\uFF0C\u4F60\u4E5F\u4E0D\u77E5\u9053\u54EA\u4E2A\u51FD\u6570\u4F1A\u4F9D\u8D56\u54EA\u5757 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "<script>"), " \u4E86\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u53E6\u4E00\u4E2A\u95EE\u9898\u662F\u56E0\u4E3A\u53D8\u91CF\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\uFF0C\u4EFB\u4F55\u4EE3\u7801\u90FD\u6709\u53EF\u80FD\u4FEE\u6539\u53D8\u91CF\u3002\u6076\u610F\u4EE3\u7801\u53EF\u4EE5\u8D81\u673A\u8FBE\u5230\u67D0\u4E9B\u76EE\u7684\uFF0C\u975E\u6076\u610F\u4EE3\u7801\u4E5F\u53EF\u80FD\u4E0D\u5C0F\u5FC3\u5BF9\u5B83\u4EEC\u8FDB\u884C\u4FEE\u6539\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u6A21\u5757\u5316\u5982\u4F55\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\uFF1F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u6A21\u5757\u5316\u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u597D\u7684\u65B9\u5F0F\u6765\u7EC4\u7EC7\u8FD9\u4E9B\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u7528\u5B83\u5C06\u4E00\u6BB5\u6709\u610F\u4E49\u7684\u53D8\u91CF\u548C\u51FD\u6570\u7EC4\u5408\u8D77\u6765\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), "\u51FD\u6570\u548C\u53D8\u91CF\u88AB\u653E\u8FDB\u6A21\u5757\u4F5C\u7528\u57DF\u4E2D\uFF0C\u6A21\u5757\u4F5C\u7528\u57DF\u8D1F\u8D23\u5C06\u53D8\u91CF\u63D0\u4F9B\u7ED9\u6A21\u5757\u4E2D\u7684\u51FD\u6570\u4F7F\u7528\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "\u548C\u51FD\u6570\u4F5C\u7528\u57DF\u4E0D\u540C\u7684\u662F\uFF0C\u6A21\u5757\u4F5C\u7528\u57DF\u540C\u6837\u63D0\u4F9B\u4E86\u5C06\u53D8\u91CF\u63D0\u4F9B\u7ED9\u5176\u4ED6\u6A21\u5757\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u6A21\u5757\u4E2D\u7684\u53D8\u91CF\u3001\u7C7B\u6216\u51FD\u6570\u80FD\u88AB\u663E\u5F0F\u5730\u58F0\u660E\u5B83\u4EEC\u53EF\u4EE5\u88AB\u5176\u4ED6\u6A21\u5757\u7528\u5230\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), "\u8FD9\u6837\u7684\u58F0\u660E\u53EB\u505A\u5BFC\u51FA\uFF08export\uFF09\u3002\u5176\u4ED6\u6A21\u5757\u53EF\u4EE5\u663E\u5F0F\u5730\u58F0\u660E\u4F9D\u8D56\u4EFB\u4F55\u4E00\u4E2A\u88AB\u5BFC\u51FA\u7684\u53D8\u91CF\u3001\u7C7B\u6216\u51FD\u6570\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/02_module_scope_04.png",
      "alt": "02_module_scope_04"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u7531\u4E8E\u4F9D\u8D56\u5173\u7CFB\u662F\u663E\u5F0F\u58F0\u660E\u7684\uFF0C\u6211\u4EEC\u5F88\u5BB9\u6613\u770B\u51FA\u7F3A\u5C11\u4E86\u67D0\u4E2A\u6A21\u5757\u540E\u5E26\u6765\u7684\u540E\u679C\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), "\u5F97\u76CA\u4E8E\u8FD9\u79CD\u4ECE\u6A21\u5757\u4E2D\u5BFC\u51FA\u548C\u5BFC\u5165\u53D8\u91CF\u7684\u80FD\u529B\uFF0C\u6211\u4EEC\u80FD\u5F88\u5BB9\u6613\u5730\u5C06\u6240\u6709\u4EE3\u7801\u5207\u5206\u6210\u72EC\u7ACB\u5DE5\u4F5C\u7684\u4EE3\u7801\u5757\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5408\u5E76\u548C\u91CD\u7EC4\u8FD9\u4E9B\u4EE3\u7801\u5757\u2014\u2014\u5C31\u50CF\u4E50\u9AD8\u79EF\u6728\u4E00\u6837\u2014\u2014\u7528\u6A21\u5757\u6765\u6784\u5EFA\u5404\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u5E94\u7528\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), "\u4E3A\u4E86\u5C06\u6A21\u5757\u529F\u80FD\u5F15\u5165 JS\uFF0C\u4EBA\u4EEC\u5DF2\u7ECF\u505A\u4E86\u591A\u79CD\u5C1D\u8BD5\u3002\u5982\u4ECA\u6211\u4EEC\u4E3B\u8981\u4F7F\u7528\u4E24\u79CD\u6A21\u5757\u7CFB\u7EDF\uFF1ACommonJS \u56E0\u4E3A\u5386\u53F2\u539F\u56E0\u88AB\u7528\u5728 Node.js \u7684\u6A21\u5757\u7CFB\u7EDF\u4E2D\uFF0CESM \u662F ES \u6807\u51C6\u4E2D\u65B0\u52A0\u5165\u7684\u6A21\u5757\u5316\u65B9\u6848\uFF0C\u6D4F\u89C8\u5668\u73B0\u5728\u5DF2\u7ECF\u652F\u6301 ESM\uFF0CNode.js \u4E5F\u6B63\u5728\u5411\u652F\u6301 ESM \u8FC8\u8FDB\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u73B0\u5728\u8BA9\u6211\u4EEC\u6765\u8FDB\u4E00\u6B65\u4E86\u89E3 ESM \u7684\u5185\u90E8\u673A\u5236\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "ESM \u7684\u8FD0\u884C\u673A\u5236"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u5F53\u5728\u5F00\u53D1\u4E2D\u4F7F\u7528\u6A21\u5757\u65F6\uFF0C\u6211\u4EEC\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u4F9D\u8D56\u5173\u7CFB\u7684\u56FE\uFF0C\u4E0D\u540C\u4F9D\u8D56\u4E4B\u95F4\u7684\u8054\u7CFB\u6765\u81EA\u6211\u4EEC\u7684\u5BFC\u5165\u58F0\u660E\uFF08import statements\uFF09\u3002\u8FD9\u4E9B\u5BFC\u5165\u58F0\u660E\u80FD\u8BA9\u6D4F\u89C8\u5668\u6216\u8005 Node \u6E05\u695A\u5730\u77E5\u9053\u5B83\u4EEC\u5E94\u8BE5\u52A0\u8F7D\u54EA\u4E9B\u4EE3\u7801\uFF0C\u6211\u4EEC\u7ED9\u51FA\u4E00\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u5165\u53E3\uFF0C\u7136\u540E\u6839\u636E\u5B83\u7684\u5BFC\u5165\u58F0\u660E\u6765\u627E\u5230\u6240\u6709\u5269\u4E0B\u7684\u4EE3\u7801\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/04_import_graph.png",
      "alt": "04_import_graph"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u4F46\u662F\uFF0C\u6D4F\u89C8\u5668\u5E76\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\u6587\u4EF6\u672C\u8EAB\uFF0C\u5B83\u4EEC\u9700\u8981\u88AB\u89E3\u6790\u4E3A\u4E00\u79CD\u88AB\u79F0\u4E3A\u6A21\u5757\u8BB0\u5F55\uFF08Module Records\uFF09\u7684\u6570\u636E\u7ED3\u6784\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/05_module_record.png",
      "alt": "05_module_record"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u6A21\u5757\u8BB0\u5F55\u4E4B\u540E\u4F1A\u88AB\u8F6C\u5316\u4E3A\u6A21\u5757\u5B9E\u4F8B\uFF0C\u4E00\u4E2A\u6A21\u5757\u5B9E\u4F8B\u5305\u542B\u4E86\u4E24\u6837\u4E1C\u897F\uFF1A\u4EE3\u7801\u548C\u72B6\u6001\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "\u4EE3\u7801\u662F\u6307\u4EE4\u7684\u96C6\u5408\uFF0C\u4F46\u662F\u53EA\u6709\u4EE3\u7801\u672C\u8EAB\u4E0D\u80FD\u505A\u4EFB\u4F55\u4E8B\uFF0C\u4F60\u9700\u8981\u4E00\u4E9B\u539F\u6599\u6765\u4F9B\u6307\u4EE4\u4F7F\u7528\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "\u72B6\u6001\u662F\u4EC0\u4E48\uFF1F\u72B6\u6001\u5373\u662F\u8FD9\u4E9B\u539F\u6599\u3002\u72B6\u6001\u662F\u53D8\u91CF\u5728\u4EFB\u4F55\u65F6\u95F4\u70B9\u7684\u5B9E\u9645\u7684\u503C\u3002\u5F53\u7136\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u53EA\u662F\u5185\u5B58\u4E2D\u4E00\u4E9B\u6570\u636E\u7684\u6635\u79F0\u7F62\u4E86\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u6A21\u5757\u5B9E\u4F8B\u5C06\u8FD9\u4E24\u8005\u7EC4\u5408\u8D77\u6765\uFF1A\u4EE3\u7801\uFF08\u4E00\u4E32\u6307\u4EE4\u7684\u5217\u8868\uFF09\u548C\u72B6\u6001\uFF08\u6240\u6709\u53D8\u91CF\u7684\u503C\uFF09\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/06_module_instance.png",
      "alt": "06_module_instance"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u6211\u4EEC\u6240\u9700\u8981\u7684\u6B63\u662F\u6BCF\u4E00\u4E2A\u6A21\u5757\u7684\u6A21\u5757\u5B9E\u4F8B\u3002\u6A21\u5757\u8BFB\u53D6\u7684\u8FC7\u7A0B\u5C31\u662F\u4ECE\u5165\u53E3\u6587\u4EF6\u62FF\u5230\u6574\u4E2A\u4F9D\u8D56\u5173\u7CFB\u56FE\u7684\u6A21\u5757\u5B9E\u4F8B\u7684\u8FC7\u7A0B\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u5BF9\u4E8E ESM\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u4EE5\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4\uFF1A\n1. \u6784\u9020\uFF08Construction\uFF09\u2014\u2014\u52A0\u8F7D\u811A\u672C\u5E76\u89E3\u6790\u4E3A\u6A21\u5757\u8BB0\u5F55\u3002\n2. \u5B9E\u4F8B\u5316\uFF08Instantiation\uFF09\u2014\u2014\u7ED9\u6240\u6709\u5BFC\u51FA\u53D8\u91CF\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF08\u4F46\u662F\u5148\u4E0D\u8FDB\u884C\u521D\u59CB\u5316\uFF09\uFF0C\u7136\u540E\u8BA9\u5BF9\u5E94\u7684\u5BFC\u5165\u53D8\u91CF\u3001\u5BFC\u51FA\u53D8\u91CF\u6307\u5411\u8FD9\u4E2A\u5730\u5740\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u94FE\u63A5\uFF08linking\uFF09\u3002\n3. \u8D4B\u503C\uFF08Evaluation\uFF09\u2014\u2014\u8FD0\u884C\u4EE3\u7801\u6C42\u503C\uFF0C\u5BF9\u5206\u914D\u7684\u5185\u5B58\u7A7A\u95F4\u8FDB\u884C\u8D4B\u503C\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/07_3_phases.png",
      "alt": "07_3_phases"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "CommonJS \u4E2D\u52A0\u8F7D\u6587\u4EF6\u3001\u5B9E\u4F8B\u5316\u548C\u8D4B\u503C\u662F\u4E00\u8D77\u6267\u884C\u7684\uFF0C\u800C ESM \u5C06\u4E0A\u8FF0\u4E09\u4E2A\u6B65\u9AA4\u5728\u4E0D\u540C\u7684\u9636\u6BB5\u6267\u884C\uFF0C\u6240\u4EE5\u4EBA\u4EEC\u7ECF\u5E38\u628A ESM \u63CF\u8FF0\u4E3A\u5F02\u6B65\u7684\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "ESM \u7684\u6807\u51C6\u4E2D\u786E\u5B9E\u5B9A\u4E49\u4E86\u8FD9\u79CD\u5F02\u6B65\u7279\u6027\uFF0C\u6211\u4EEC\u4F1A\u5728\u4E0B\u6587\u4E2D\u8BE6\u7EC6\u9610\u8FF0\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u6A21\u5757\u672C\u8EAB\u662F\u6CA1\u6709\u5F02\u6B65\u7684\u5FC5\u8981\u6027\u7684\uFF0C\u4F46\u662F\u6A21\u5757\u7684\u52A0\u8F7D\u4E0D\u4EC5\u6D89\u53CA\u4E86\u4E0A\u8FF0\u7684\u4E09\u4E2A\u9636\u6BB5\uFF0C\u8FD8\u8DDF\u5982\u4F55\u52A0\u8F7D\u6587\u4EF6\u6709\u5173\u3002ESM \u6807\u51C6\u4E0D\u4F1A\u544A\u8BC9\u4F60\u5982\u4F55\u53BB\u52A0\u8F7D\u6587\u4EF6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5B9A\u4E49\u5728\u5176\u4ED6\u6807\u51C6\u91CC\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://tc39.github.io/ecma262/#sec-modules"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "ESM \u6807\u51C6"), " \u544A\u8BC9\u4F60\u8BE5\u5982\u4F55\u5C06\u6587\u4EF6\u89E3\u6790\u4E3A\u6A21\u5757\u8BB0\u5F55\u3001\u5982\u4F55\u5B9E\u4F8B\u5316\u5E76\u8D4B\u503C\uFF0C\u4F46\u662F\u5B83\u5E76\u4E0D\u4F1A\u544A\u8BC9\u4F60\u4E00\u5F00\u59CB\u6211\u4EEC\u5982\u4F55\u62FF\u5230\u8FD9\u4E9B\u6587\u4EF6\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), "\u6211\u4EEC\u901A\u8FC7 loader \u62C9\u53D6\u5230\u6587\u4EF6\uFF0C\u4E0D\u540C\u7684\u5E73\u53F0\u5BF9 loader \u4F1A\u6709\u4E0D\u540C\u7684\u5B9A\u4E49\u3002\u5BF9\u4E8E\u6D4F\u89C8\u5668\u6765\u8BF4\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5B9A\u4E49\u5728 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://html.spec.whatwg.org/#fetch-a-module-script-tree"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "HTML \u89C4\u8303"), " \u4E2D\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/07_loader_vs_es.png",
      "alt": "07_loader_vs_es"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "loader \u5B9E\u9645\u63A7\u5236\u7740\u5982\u4F55\u52A0\u8F7D\u6A21\u5757\uFF0C\u5B83\u4F1A\u8C03\u7528 ESM \u65B9\u6CD5\u2014\u2014 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "ParseModule"), "\u3001", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Module.Instantiate"), " \u548C ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Module.Evaluate"), "\uFF0C\u5C31\u50CF\u63D0\u7EBF\u6728\u5076\u4E00\u6837\u64CD\u7EB5\u7740 JS \u5F15\u64CE\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/08_loader_as_puppeteer.png",
      "alt": "08_loader_as_puppeteer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u73B0\u5728\u8BA9\u6211\u4EEC\u6765\u8FDB\u4E00\u6B65\u9610\u8FF0\u5404\u4E2A\u6B65\u9AA4\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u6784\u9020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u5BF9\u4E8E\u6BCF\u4E2A\u6A21\u5757\u3001\u6784\u9020\u9636\u6BB5\u4F1A\u53D1\u751F\u4E09\u4EF6\u4E8B\uFF1A\n1. \u5B9A\u4F4D\u6A21\u5757\u6240\u5728\u7684\u6587\u4EF6\u2014\u2014\u5373\u6A21\u5757\u89E3\u6790\uFF08module resolution\uFF09\u3002\n2. \u62C9\u53D6\u6587\u4EF6\uFF08\u4ECE\u4E00\u4E2A URL \u4E0B\u8F7D\u6216\u8005\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u52A0\u8F7D\uFF09\u3002\n3. \u5C06\u6587\u4EF6\u89E3\u6790\u4E3A\u6A21\u5757\u8BB0\u5F55\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u5B9A\u4F4D\u5E76\u52A0\u8F7D\u6587\u4EF6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "loader \u4F1A\u8D1F\u8D23\u627E\u5230\u5E76\u4E0B\u8F7D\u6587\u4EF6\u3002\u9996\u5148\u9700\u8981\u627E\u5230\u5165\u53E3\u6587\u4EF6\uFF0C\u5728 HTML \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "<script>"), " \u6807\u7B7E\u6765\u544A\u8BC9 loader \u5165\u53E3\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/08_script_entry.png",
      "alt": "08_script_entry"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u4F46\u662F loader \u5982\u4F55\u627E\u5230 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "main.js"), " \u6240\u4F9D\u8D56\u7684\u6A21\u5757\u5462\uFF1F\u5728 import \u8BED\u53E5\u4E2D\u6211\u4EEC\u4F1A\u4F7F\u7528\u6A21\u5757\u5B9A\u4F4D\u7B26\uFF08module specifier\uFF09\u6765\u6307\u5B9A\u4E0B\u4E00\u4E2A\u6A21\u5757\u7684\u4F4D\u7F6E\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/09_module_specifier.png",
      "alt": "09_module_specifier"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF1A\u4E0D\u540C\u5E73\u53F0\u5BF9\u5B9A\u4F4D\u7B26\u5B57\u7B26\u4E32\u6709\u4E0D\u540C\u7684\u89E3\u6790\u673A\u5236\uFF0C\u5F53\u4E0B\u6709\u4E00\u4E9B\u80FD\u5728 Node \u89E3\u6790\u7684\u5B9A\u4F4D\u7B26\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u88AB\u89E3\u6790\uFF0C\u4F46\u662F\u4EBA\u4EEC\u5728 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/domenic/package-name-maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u81F4\u529B\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898"), "\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), "\u5728\u8FD9\u4E9B\u95EE\u9898\u89E3\u51B3\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u53EA\u63A5\u53D7 URL \u4F5C\u4E3A\u5B9A\u4F4D\u7B26\u5E76\u4ECE\u52A0\u8F7D\u6587\u4EF6\u3002\u800C\u6587\u4EF6\u5728\u88AB\u89E3\u6790\u4E4B\u524D\u5E76\u4E0D\u4F1A\u544A\u8BC9\u6211\u4EEC\u4E0B\u4E00\u6B65\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u6211\u4EEC\u5E76\u4E0D\u80FD\u4E00\u6B21\u6027\u5730\u62FF\u5230\u6574\u4E2A\u5E94\u7528\u7684\u4F9D\u8D56\u5173\u7CFB\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), "\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u53EA\u80FD\u4E00\u5C42\u4E00\u5C42\u5730\u524D\u8FDB\uFF0C\u5148\u89E3\u6790\u4E00\u4E2A\u6587\u4EF6\uFF0C\u627E\u5230\u5B83\u7684\u4F9D\u8D56\uFF0C\u518D\u5BF9\u5B83\u7684\u4F9D\u8D56\u4EEC\u6267\u884C\u540C\u6837\u7684\u6B65\u9AA4\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/10_construction.png",
      "alt": "10_construction"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u53EF\u60F3\u800C\u77E5\uFF0C\u5982\u679C\u4E3B\u7EBF\u7A0B\u4E00\u76F4\u7B49\u5F85\u4E0B\u8F7D\u8FD9\u4E9B\u6587\u4EF6\uFF0C\u4F1A\u6709\u5927\u91CF\u4EFB\u52A1\u88AB\u963B\u585E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u52A0\u8F7D\u6587\u4EF6\u4F1A\u5360\u7528\u5927\u91CF\u7684\u65F6\u95F4\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/11_latency.png",
      "alt": "11_latency"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u4E3A\u4E86\u4E0D\u8BA9\u6A21\u5757\u52A0\u8F7D\u5BFC\u81F4\u4F60\u7684\u5E94\u7528\u6162\u5230\u4E0D\u80FD\u7528\uFF0CESM \u6807\u51C6\u53EA\u5BF9\u6784\u5EFA\u7B97\u6CD5\u8FDB\u884C\u7EA6\u675F\uFF0C\u8BA9\u6D4F\u89C8\u5668\u81EA\u5DF1\u6765\u62C9\u53D6\u6587\u4EF6\u5E76\u5B8C\u6210\u4F9D\u8D56\u5173\u7CFB\u7684\u6574\u7406\uFF0C\u597D\u8FDB\u884C\u63A5\u4E0B\u6765\u7684\u540C\u6B65\u7684\u5B9E\u4F8B\u5316\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "\u8FD9\u4E9B\u5206\u9636\u6BB5\u5B8C\u6210\u7684\u5DE5\u4F5C\u662F ESM \u548C CommonJS \u6A21\u5757\u6700\u5173\u952E\u7684\u533A\u522B\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), "CommonJS \u76F4\u63A5\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u52A0\u8F7D\u6587\u4EF6\uFF0C\u6BD4\u4ECE\u7F51\u7EDC\u4E2D\u4E0B\u8F7D\u6587\u4EF6\u8981\u5FEB\u5F97\u591A\u3002Node \u53EF\u4EE5\u963B\u585E\u4E3B\u7EBF\u7A0B\u6765\u7B49\u5F85\u6587\u4EF6\u52A0\u8F7D\u5B8C\u6210\uFF0C\u7136\u540E\u76F4\u63A5\u5BF9\u5B83\u8FDB\u884C\u5B9E\u4F8B\u5316\u548C\u8D4B\u503C\u7684\u5DE5\u4F5C\u3002\u8FD9\u610F\u5473\u7740\u4F60\u7684\u4EE3\u7801\u4F1A\u5728\u8FD4\u56DE\u6A21\u5757\u5B9E\u4F8B\u4E4B\u524D\u540C\u6B65\u5730\u987A\u7740\u4F9D\u8D56\u6811\u4E00\u76F4\u52A0\u8F7D\u3001\u5B9E\u4F8B\u5316\u5E76\u6267\u884C\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/12_cjs_require.png",
      "alt": "12_cjs_require"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u5728\u540E\u9762\u6211\u4EEC\u8FD8\u4F1A\u7EE7\u7EED\u9610\u8FF0 CommonJS \u7684\u8FD9\u79CD\u673A\u5236\u5E26\u6765\u7684\u4E0D\u540C\u8868\u73B0\uFF0C\u8FD9\u91CC\u5148\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF1A\u5728 Node \u7684 CommonJS \u6A21\u5757\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5728\u5B9A\u4F4D\u7B26\u4E2D\u4F7F\u7528\u53D8\u91CF\uFF0C\u6240\u6709 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "requier()"), " \u4E4B\u524D\u7684\u4EE3\u7801\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u6240\u4EE5\u5728\u8FDB\u884C\u6A21\u5757\u89E3\u6790\u65F6\u5B9A\u4F4D\u7B26\u4E2D\u7684\u53D8\u91CF\u662F\u6709\u503C\u7684\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "\u4F46\u662F\u5728 ESM \u91CC\u9700\u8981\u5148\u68B3\u7406\u4F9D\u8D56\u5173\u7CFB\u518D\u6267\u884C\uFF0C\u6240\u4EE5\u4F60\u65E0\u6CD5\u5728\u5B9A\u4F4D\u7B26\u4E2D\u4F7F\u7528\u8FD8\u6CA1\u6709\u503C\u7684\u53D8\u91CF\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/13_static_import.png",
      "alt": "13_static_import"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u4F46\u662F\u5728\u5B9A\u4F4D\u7B26\u4E2D\u4F7F\u7528\u53D8\u91CF\u786E\u5B9E\u662F\u5F88\u6709\u7528\u7684\u4E00\u79CD\u7279\u6027\uFF0C\u6BD4\u5982\u6709\u65F6\u5019\u4F60\u7684\u6A21\u5757\u4F4D\u7F6E\u53EF\u80FD\u4F1A\u4F9D\u8D56\u4E8E\u8FD0\u884C\u73AF\u5883\u3002\u4E3A\u4E86\u80FD\u8BA9 ESM \u4E5F\u652F\u6301\u8FD9\u79CD\u7279\u6027\uFF0C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/tc39/proposal-dynamic-import"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u52A8\u6001\u5BFC\u5165\uFF08dynamic import\uFF09"), " \u63D0\u6848\u8BA9\u6211\u4EEC\u80FD\u4F7F\u7528\u5F62\u5982 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "import(`${path}/foo.js`)"), " \u7684\u65B9\u5F0F\u4F7F\u7528\u5BFC\u5165\u58F0\u660E\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), "\u6BCF\u4E00\u4E2A\u4F7F\u7528 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "import()"), " \u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u89C6\u4E3A\u4F9D\u8D56\u5173\u7CFB\u56FE\u4E2D\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u5E76\u5206\u522B\u5904\u7406\u4F9D\u8D56\u5173\u7CFB\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/14dynamic_import_graph.png",
      "alt": "14dynamic_import_graph"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u5373\u4F7F\u662F\u5728\u4E0D\u540C\u4F9D\u8D56\u6811\u4E0B\u7684\u540C\u4E00\u6A21\u5757\uFF0C\u4E5F\u4F1A\u5171\u4EAB\u540C\u4E00\u4EFD\u6A21\u5757\u5B9E\u4F8B\u3002loader \u4F1A\u5C06\u6A21\u5757\u5B9E\u4F8B\u7F13\u5B58\u4E0B\u6765\uFF0C\u5728\u540C\u4E00\u4E2A\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u6BCF\u4E2A\u6A21\u5757\u53EA\u4F1A\u5B58\u5728\u4E00\u4EFD\u5B9E\u4F8B\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), "\u8FD9\u6837\u4F7F\u5F15\u64CE\u7684\u5DE5\u4F5C\u91CF\u53D8\u5F97\u66F4\u5C11\uFF0C\u6A21\u5757\u6587\u4EF6\u53EA\u4F1A\u88AB\u62C9\u53D6\u4E00\u6B21\u3002\uFF08\u800C\u8FD9\u53EA\u662F\u6A21\u5757\u7F13\u5B58\u7684\u5176\u4E2D\u4E00\u4E2A\u539F\u56E0\uFF0C\u6211\u4EEC\u5C06\u5728\u8D4B\u503C\u9636\u6BB5\u770B\u5230\u53E6\u4E00\u4E2A\u539F\u56E0\u3002\uFF09", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), "loader \u4F7F\u7528 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://html.spec.whatwg.org/multipage/webappapis.html#module-map"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "module map"), " \u6765\u7BA1\u7406\u6A21\u5757\u7F13\u5B58\u3002\u6BCF\u4E2A\u5168\u5C40\u4F5C\u7528\u57DF\u90FD\u6709\u5176\u72EC\u7ACB\u7684 module map \u6765\u7BA1\u7406\u5B83\u4EEC\u7684\u6A21\u5757\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), "\u5F53 loader \u5C06\u8981\u62C9\u53D6\u4E00\u4E2A\u6A21\u5757\u65F6\uFF0C\u4F1A\u5C06\u5176 URL \u653E\u5165 module map \u4E2D\uFF0C\u5E76\u6807\u8BB0\u5176 fetching \u72B6\u6001\uFF0C\u53D1\u9001\u5BF9\u5E94\u7684\u8BF7\u6C42\uFF0C\u518D\u5F00\u59CB\u62C9\u53D6\u4E0B\u4E00\u4E2A\u6A21\u5757\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/15_module_map.png",
      "alt": "15_module_map"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "\u5982\u679C\u6709\u53E6\u4E00\u4E2A\u6A21\u5757\u4F9D\u8D56\u76F8\u540C\u7684\u6587\u4EF6\uFF0Cloader \u4F1A\u73B0\u5728 module map \u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u7ED3\u679C\u662F fetching \u72B6\u6001\uFF0Cloader \u4F1A\u8DF3\u8FC7\u5F53\u524D\u6587\u4EF6\u5F00\u59CB\u4E0B\u4E00\u4E2A URL \u7684\u52A0\u8F7D\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "module map \u4E0D\u4EC5\u4F1A\u8FFD\u8E2A\u6587\u4EF6\u7684\u62C9\u53D6\u72B6\u6001\uFF0C\u540C\u65F6\u8FD8\u7528\u6765\u7F13\u5B58\u6A21\u5757\u5B9E\u4F8B\uFF0C\u8BA9\u6211\u4EEC\u7EE7\u7EED\u8BB2\u89E3\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\u89E3\u6790\u6A21\u5757"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u5F53\u6587\u4EF6\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u89E3\u6790\u4E3A\u6A21\u5757\u8BB0\u5F55\u3002\u6D4F\u89C8\u5668\u901A\u8FC7\u6A21\u5757\u8BB0\u5F55\u6765\u7406\u89E3\u6A21\u5757\u7684\u5185\u90E8\u6784\u9020\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/25_file_to_module_record.png",
      "alt": "25_file_to_module_record"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u6A21\u5757\u8BB0\u5F55\u88AB\u89E3\u6790\u540E\u4F1A\u88AB\u653E\u5728 module map \u4E2D\uFF0C\u53EF\u4F9B\u4E4B\u540E\u7684\u6240\u6709\u5BF9\u8BE5\u6A21\u5757\u7684\u8BF7\u6C42\u4F7F\u7528\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/25_module_map.png",
      "alt": "25_module_map"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\u8FD9\u91CC\u6709\u4E00\u4E9B\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF0C\u88AB\u89E3\u6790\u7684\u6A21\u5757\u548C\u666E\u901A\u7684\u811A\u672C\u6709\u6240\u4E0D\u540C\uFF0C\u6240\u6709\u7684\u6A21\u5757\u90FD\u4F1A\u88AB\u89C6\u4E3A\u4E25\u683C\u6A21\u5F0F\uFF0C\u8FD8\u6709\u4E00\u4E9B\u533A\u522B\u4F8B\u5982 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "await"), " \u662F\u9876\u5C42\u4EE3\u7801\u7684\u4FDD\u7559\u5B57\uFF0C\u4EE5\u53CA ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "this"), " \u7684\u503C\u662F ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "undefined"), "\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), "\u8FD9\u4E9B\u89E3\u6790\u4E0A\u7684\u533A\u522B\u5BF9\u5F85\u88AB\u79F0\u4E3A \u201Cparse goal\u201D\uFF0C\u5728\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u89E3\u6790\u4E0A\u5E94\u7528\u4E0D\u540C\u7684 parse goal \u4F1A\u5F97\u5230\u4E0D\u540C\u7684\u7ED3\u679C\u3002\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u4E8B\u5148\u77E5\u9053\u6211\u4EEC\u8981\u89E3\u6790\u7684\u6587\u4EF6\u5230\u5E95\u662F\u4EC0\u4E48\u89D2\u8272\u2014\u2014\u5B83\u662F\u5426\u662F\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), "\u5728\u6D4F\u89C8\u5668\u4E2D\u8981\u505A\u5230\u8FD9\u70B9\u5F88\u5BB9\u6613\uFF0C\u53EA\u9700\u5728 script \u6807\u7B7E\u52A0\u5165 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "type=\"module\""), "\uFF0C\u5C31\u53EF\u4EE5\u660E\u786E\u58F0\u660E\u8BE5\u6587\u4EF6\u5E94\u8BE5\u5F53\u4F5C\u6A21\u5757\u89E3\u6790\u3002\u540C\u6837\u7684\uFF0C\u53EA\u6709\u6A21\u5757\u80FD\u591F\u88AB\u5BFC\u5165\uFF0C\u6240\u4EE5\u6BCF\u4E00\u4E2A\u88AB ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "import"), " \u7684\u6587\u4EF6\u4E5F\u662F\u6A21\u5757\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/26_parse_goal.png",
      "alt": "26_parse_goal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\u4F46\u662F\u5728 Node \u4E2D\u6CA1\u6709 HTML \u6807\u7B7E\uFF0C\u6CA1\u6709\u4E00\u4E2A\u53EF\u7528\u6765\u6807\u8BC6\u6A21\u5757\u7684\u9009\u9879\u3002\u793E\u533A\u66FE\u5C1D\u8BD5\u8FC7\u4F7F\u7528 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, ".mjs"), " \u62D3\u5C55\u540D\u6765\u6807\u8BC6\u6A21\u5757\uFF0C\u6211\u4EEC\u4E4B\u540E\u8FD8\u4F1A\u770B\u5230\u5173\u4E8E parse goal \u7684\u8BA8\u8BBA\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6B63\u5728\u8FDB\u884C\u7684\u8BAE\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u8FD8\u4E0D\u6E05\u695A Node \u793E\u533A\u6700\u540E\u9009\u62E9\u54EA\u79CD\u65B9\u5F0F\u6765\u4F5C\u4E3A\u6A21\u5757\u6807\u8BC6\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), "\u603B\u4E4B\uFF0Cloader \u9700\u8981\u77E5\u9053\u88AB\u89E3\u6790\u7684\u6587\u4EF6\u662F\u5426\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u5982\u679C\u88AB\u5BFC\u5165\u7684\u6A21\u5757\u91CC\u6709\u5176\u4ED6\u7684\u5BFC\u5165\uFF0Cloader \u5C06\u4E00\u76F4\u5DE5\u4F5C\u76F4\u5230\u6240\u6709\u6587\u4EF6\u90FD\u88AB\u52A0\u8F7D\u5E76\u89E3\u6790\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), "\u81F3\u6B64\u6A21\u5757\u7684\u6784\u9020\u9636\u6BB5\u7684\u5DE5\u4F5C\u5C31\u5B8C\u6210\u4E86\uFF0C\u6211\u4EEC\u4ECE\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u62FF\u5230\u4E86\u6574\u4E2A\u5E94\u7528\u7684\u6A21\u5757\u8BB0\u5F55\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/27_construction.png",
      "alt": "27_construction"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "\u63A5\u4E0B\u6765\u8BE5\u8FDB\u884C\u5B9E\u4F8B\u5316\u5E76\u5C06\u6240\u6709\u5B9E\u4F8B\u94FE\u63A5\u8D77\u6765\u4E86\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\u5B9E\u4F8B\u5316"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\u6B63\u5982\u4E0A\u6587\u63D0\u5230\u7684\uFF0C\u4E00\u4E2A\u6A21\u5757\u5B9E\u4F8B\u5305\u542B\u4E86\u4EE3\u7801\u548C\u72B6\u6001\u3002\u72B6\u6001\u7531\u5185\u5B58\u63CF\u8FF0\uFF0C\u5B9E\u4F8B\u5316\u9636\u6BB5\u5B9E\u9645\u4E0A\u662F\u5728\u8FDB\u884C\u5206\u914D\u5185\u5B58\u7684\u5DE5\u4F5C\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), "\u9996\u5148\uFF0CJS \u5F15\u64CE\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\u73AF\u5883\u8BB0\u5F55\uFF08module environment record\uFF09\u7528\u6765\u7BA1\u7406\u6A21\u5757\u8BB0\u5F55\u4E2D\u7684\u53D8\u91CF\uFF0C\u7136\u540E\u7ED9\u6240\u6709 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "export"), " \u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u6A21\u5757\u73AF\u5883\u8BB0\u5F55\u7528\u6765\u8BB0\u5F55\u6240\u6709 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "export"), " \u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), "\u53D8\u91CF\u6B64\u65F6\u4EC5\u505A\u521D\u59CB\u5316\uFF0C\u5728\u8D4B\u503C\u9636\u6BB5\u624D\u4F1A\u88AB\u8D4B\u503C\u3002\u4E3A\u4E86\u66F4\u65B9\u4FBF\u5730\u8FDB\u884C\u8D4B\u503C\u9636\u6BB5\u7684\u5DE5\u4F5C\uFF0C\u6240\u6709\u88AB ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "export"), " \u7684\u51FD\u6570\u58F0\u660E\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u9636\u6BB5\u88AB\u521D\u59CB\u5316\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), "JS \u5F15\u64CE\u4F1A\u5BF9\u6574\u4E2A\u4F9D\u8D56\u6811\u8FDB\u884C\u4E00\u6B21\u540E\u5E8F\u904D\u5386\uFF0C\u4ECE\u53F6\u5B50\u8282\u70B9\uFF08\u4E5F\u5C31\u662F\u6CA1\u6709\u5176\u4ED6\u4F9D\u8D56\u7684\u6587\u4EF6\uFF09\u5F00\u59CB\u5BF9 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "export"), " \u5206\u914D\u5185\u5B58\u5730\u5740\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/30_live_bindings_01.png",
      "alt": "30_live_bindings_01"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "\u5F15\u64CE\u81EA\u5E95\u5411\u4E0A\u5B8C\u6210\u5BF9\u6240\u6709 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "export"), " \u7684\u5730\u5740\u5206\u914D\u540E\uFF0C\u53C8\u4ECE\u6839\u8282\u70B9\u81EA\u9876\u5411\u4E0B\u5730\u5BF9 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "import"), " \u8FDB\u884C\u5185\u5B58\u5730\u5740\u7684\u7ED1\u5B9A\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), "\u5BF9\u5E94\u7684 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "export"), " \u548C ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "import"), " \u6307\u5411\u7684\u662F\u76F8\u540C\u7684\u5730\u5740\uFF0C\u5148\u5BF9 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "export"), " \u5206\u914D\u5185\u5B58\u4FDD\u8BC1\u4E86\u6BCF\u4E2A ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "import"), " \u90FD\u6307\u5411\u6B63\u786E\u7684\u5185\u5B58\u5730\u5740\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/30_live_bindings_02.png",
      "alt": "30_live_bindings_02"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\u5728 CommonJS \u4E2D\uFF0C\u6574\u4E2A\u5BFC\u51FA\u5BF9\u8C61\u662F\u88AB\u8D4B\u503C\u62F7\u8D1D\u7684\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/31_cjs_variable.png",
      "alt": "31_cjs_variable"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "\u800C\u5728 ESM \u4E2D\uFF0C\u5BFC\u5165\u548C\u5BFC\u51FA\u6A21\u5757\u6307\u5411\u540C\u4E00\u7247\u5185\u5B58\u7A7A\u95F4\uFF0C\u5F53\u5BFC\u51FA\u6A21\u5757\u7684\u503C\u88AB\u6539\u53D8\uFF0C\u5BFC\u5165\u6A21\u5757\u4F1A\u53CD\u6620\u5176\u53D8\u5316\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), "\u5BFC\u51FA\u6A21\u5757\u53EF\u4EE5\u4EFB\u610F\u5730\u6539\u7F16\u6A21\u5757\u503C\uFF0C\u4F46\u662F\u88AB\u5BFC\u5165\u7684\u6A21\u5757\u7684\u503C\u4E0D\u80FD\u88AB\u6539\u5199\u3002\u5F53\u7136\uFF0C\u5982\u679C\u88AB\u5BFC\u5165\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6539\u5199\u5BF9\u8C61\u7684\u5C5E\u6027\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/30_live_bindings_04.png",
      "alt": "30_live_bindings_04"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "ESM \u4F7F\u7528\u8FD9\u79CD live bindings \u7684\u539F\u56E0\u5728\u4E8E\uFF0C\u5F15\u64CE\u4E0D\u8FD0\u884C\u4EE3\u7801\u5373\u53EF\u5B8C\u6210\u6A21\u5757\u4E4B\u95F4\u7684\u7ED1\u5B9A\u3002\u6211\u4EEC\u4F1A\u5728\u4E0B\u6587\u4E2D\u9610\u8FF0\uFF0C\u8FD9\u4E00\u70B9\u4E3A\u8D4B\u503C\u9636\u6BB5\u7684\u5FAA\u73AF\u5F15\u7528\u5E26\u6765\u7684\u5E2E\u52A9\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), "\u81F3\u6B64\u5B9E\u4F8B\u5316\u9636\u6BB5\u4E5F\u7ED3\u675F\u4E86\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u6240\u6709\u6A21\u5757\u7684\u5B9E\u4F8B\uFF0C\u5BFC\u5165\u3001\u5BFC\u51FA\u6A21\u5757\u4E5F\u5728\u5185\u5B58\u4E2D\u88AB\u8054\u7CFB\u8D77\u6765\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), "\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u6267\u884C\u4EE3\u7801\uFF0C\u5BF9\u6A21\u5757\u8FDB\u884C\u8D4B\u503C\u4E86\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\u8D4B\u503C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "\u6700\u540E\u4E00\u6B65\u6211\u4EEC\u5C06\u7ED9\u5DF2\u5206\u914D\u597D\u7684\u5185\u5B58\u7A7A\u95F4\u8D4B\u503C\u3002JS \u5F15\u64CE\u5C06\u6267\u884C\u9876\u5C42\u4EE3\u7801\u2014\u2014\u51FD\u6570\u5916\u7684\u4EE3\u7801\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), "\u9664\u4E86\u8D4B\u503C\u4E4B\u5916\uFF0C\u6267\u884C\u4EE3\u7801\u65F6\u53EF\u80FD\u4F1A\u6709\u5176\u4ED6\u7684\u526F\u4F5C\u7528\uFF0C\u6BD4\u5982\u6A21\u5757\u53EF\u80FD\u4F1A\u53D1\u9001\u8BF7\u6C42\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/40_top_level_code.png",
      "alt": "40_top_level_code"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "\u6B63\u662F\u56E0\u4E3A\u6709\u6F5C\u5728\u7684\u526F\u4F5C\u7528\u5B58\u5728\uFF0C\u6211\u4EEC\u5E0C\u671B\u6240\u6709\u6A21\u5757\u7684\u4EE3\u7801\u88AB\u7CBE\u786E\u5730\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u8D4B\u503C\u9636\u6BB5\u6267\u884C\u4EE3\u7801\u7684\u6B21\u6570\u53EF\u80FD\u4F1A\u5F71\u54CD\u6267\u884C\u7ED3\u679C\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), "\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u9700\u8981 module map \u6765\u7F13\u5B58 URL\uFF0Cmodule map \u4FDD\u8BC1\u4E86\u6A21\u5757\u8BB0\u5F55\u7684\u552F\u4E00\u6027\uFF0C\u4E5F\u4FDD\u8BC1\u4E86\u6240\u6709\u6A21\u5757\u53EA\u88AB\u6267\u884C\u4E00\u6B21\u3002\u548C\u5B9E\u4F8B\u5316\u4E2D\u4E00\u6837\uFF0C\u6A21\u5757\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u4E5F\u662F\u901A\u8FC7\u540E\u5E8F\u904D\u5386\u51B3\u5B9A\u7684\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "\u63A5\u4E0B\u6765\u6211\u4EEC\u8BB2\u8BB2\u5FAA\u73AF\u5F15\u7528\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), "\u5FAA\u73AF\u5F15\u7528\u6765\u6E90\u4E8E\u4F60\u4F9D\u8D56\u5173\u7CFB\u4E2D\u7684\u56DE\u8DEF\u3002\u901A\u5E38\u6765\u8BF4\u8FD9\u4F1A\u662F\u4E00\u6761\u6BD4\u8F83\u957F\u7684\u56DE\u8DEF\uFF0C\u4F46\u662F\u4E3A\u4E86\u56FE\u65B9\u4FBF\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u77ED\u56DE\u8DEF\u4F5C\u4E3A\u4F8B\u5B50\u6765\u89E3\u91CA\u8FD9\u4E2A\u95EE\u9898\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/41_cjs_cycle.png",
      "alt": "41_cjs_cycle"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "\u6211\u4EEC\u6765\u770B CommonJS \u5728\u8FD9\u91CC\u5982\u4F55\u5DE5\u4F5C\u3002main \u6A21\u5757\u4F1A\u6267\u884C\u5230 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "require"), " \u8BED\u53E5\u4E4B\u524D\uFF0C\u7136\u540E\u8BFB\u53D6 counter \u6A21\u5757\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/41_cyclic_graph.png",
      "alt": "41_cyclic_graph"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "counter \u6A21\u5757\u5C1D\u8BD5\u8BBF\u95EE main \u6A21\u5757\u7684 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "message"), "\uFF0C\u4F46\u662F\u6B64\u65F6\u7684 main \u6A21\u5757\u5C1A\u672A\u6267\u884C\u81F3\u6B64\uFF0C\u62FF\u5230\u4E00\u4E2A ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "undefined"), " \u3002JS \u5F15\u64CE\u5C06\u4E3A ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "message"), " \u8FD9\u4E2A\u672C\u5730\u53D8\u91CF\u5206\u914D\u5185\u5B58\u7A7A\u95F4\u7136\u540E\u8D4B\u503C\u4E3A ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "undefined"), "\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/42_cjs_variable_2.png",
      "alt": "42_cjs_variable_2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "\u4EE3\u7801\u7EE7\u7EED\u6267\u884C\u81F3 counter \u6A21\u5757\u7684\u9876\u5C42\u4EE3\u7801\u7ED3\u675F\uFF0C\u6211\u4EEC\u8BBE\u7F6E\u4E00\u4E2A ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "setTimeout"), " \u6765\u786E\u8BA4\u6700\u7EC8\uFF08main.js \u6267\u884C\u7ED3\u675F\u540E\uFF09\u6211\u4EEC\u662F\u5426\u4F1A\u62FF\u5230 messsage \u7684\u503C\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/43_cjs_cycle.png",
      "alt": "43_cjs_cycle"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "main.js \u4E2D\u7684 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "message"), " \u4F1A\u88AB\u521D\u59CB\u5316\u653E\u5165\u5185\u5B58\uFF0C\u4F46\u662F counter \u6A21\u5757\u5F15\u5165\u7684 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "message"), " \u5BF9\u6B64\u5E76\u65E0\u611F\u77E5\uFF0C\u4F9D\u65E7\u4E3A ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "undefined"), "\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://hacks.mozilla.org/files/2018/03/44_cjs_variable_2.png",
      "alt": "44_cjs_variable_2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "\u5982\u679C\u6A21\u5757\u662F\u901A\u8FC7 live bindings \u7EF4\u7CFB\u7684\uFF0C main.js \u6267\u884C\u7ED3\u675F\u540E\u4F1A\u5C06\u6A21\u5757\u6B63\u786E\u5730\u8D4B\u503C\uFF0C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "setTimeout"), " \u7684\u56DE\u8C03\u4E5F\u5C31\u80FD\u62FF\u5230\u6B63\u786E\u7684\u503C\u4E86\u3002", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "br",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), "\u5BF9\u4E8E\u5FAA\u73AF\u5F15\u7528\u7684\u652F\u6301\u65F6 ESM \u8BBE\u8BA1\u80CC\u540E\u7684\u4E00\u79CD\u7406\u6027\u8003\u91CF\uFF0C\u4E09\u6BB5\u5F0F\u7684\u6267\u884C\u6B65\u9AA4\u4F7F\u4E4B\u6210\u4E3A\u53EF\u80FD\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "ESM \u7684\u73B0\u72B6\uFF1F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "\u968F\u7740 5 \u6708\u521D\u6B63\u5F0F\u53D1\u5E03\u7684 Firefox 60\uFF0C\u6240\u6709\u4E3B\u6D41\u6D4F\u89C8\u5668\u5747\u5DF2\u9ED8\u8BA4\u652F\u6301 ESM\u3002Node \u7684 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/nodejs/modules"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "\u6A21\u5757\u5C0F\u7EC4"), " \u4E5F\u6B63\u81F4\u529B\u4E8E\u89E3\u51B3 ESM \u548C CommonJS \u4E4B\u95F4\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002  "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5728\u811A\u672C\u6807\u7B7E\u4E2D\u4F7F\u7528 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "type=module"), " \u5E76\u4E14\u5BFC\u5165\u5BFC\u51FA\u6A21\u5757\u3002\u4E0D\u8FC7\u73B0\u9636\u6BB5\u8FD8\u6709\u5F88\u591A\u6A21\u5757\u76F8\u5173\u7684\u529F\u80FD\u8FD8\u5728\u8BAE\u6848\u4E2D\uFF0C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/tc39/proposal-dynamic-import"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "dynamic import proposal"), " \u76EE\u524D\u5728 Stage 3 \u9636\u6BB5\uFF0C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/tc39/proposal-import-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "import.meta"), " \u548C ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/domenic/package-name-maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "module resolution proposal"), " \u4E5F\u5728\u81F4\u529B\u62B9\u5E73 Node \u548C\u6D4F\u89C8\u5668\u7AEF\u6A21\u5757\u4F7F\u7528\u4E0A\u7684\u5DEE\u8DDD\uFF0C\u5E0C\u671B\u6211\u4EEC\u80FD\u770B\u5230 ESM \u66F4\u597D\u7684\u672A\u6765\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "\uFF08\u8BD1\u8005\uFF1A\u591A\u8BF4\u4E00\u53E5\uFF0C\u5728\u4E0D\u89E3\u51B3\u6D4F\u89C8\u5668\u7AEF\u7684\u4F9D\u8D56\u5173\u7CFB\u5C42\u7EA7\u6253\u5E73\u7684\u95EE\u9898\u524D\uFF0C\u6253\u5305\u65B9\u6848\u53EF\u80FD\u624D\u662F\u94F6\u5F39\u3002\uFF09"));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/tag/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdxTag = __webpack_require__(/*! ./mdx-tag */ "./node_modules/@mdx-js/tag/dist/mdx-tag.js");

Object.defineProperty(exports, 'MDXTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxTag).default;
  }
});

var _mdxProvider = __webpack_require__(/*! ./mdx-provider */ "./node_modules/@mdx-js/tag/dist/mdx-provider.js");

Object.defineProperty(exports, 'MDXProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-provider.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mdx-js/tag/dist/mdx-provider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createReactContext2 = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");

var _createReactContext3 = _interopRequireDefault(_createReactContext2);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _createReactContext = (0, _createReactContext3.default)({}),
    Provider = _createReactContext.Provider,
    Consumer = _createReactContext.Consumer;

var withMDXComponents = function withMDXComponents(Component) {
  return function (_ref) {
    var components = _ref.components,
        props = _objectWithoutProperties(_ref, ['components']);

    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({ components: components || contextComponents }, props));
      }
    );
  };
};

exports.withMDXComponents = withMDXComponents;
var MDXProvider = function MDXProvider(_ref2) {
  var components = _ref2.components,
      children = _ref2.children;
  return _react2.default.createElement(
    Provider,
    { value: components },
    children
  );
};

MDXProvider.propTypes = {
  components: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = MDXProvider;

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-tag.js":
/*!**************************************************!*\
  !*** ./node_modules/@mdx-js/tag/dist/mdx-tag.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _mdxProvider = __webpack_require__(/*! ./mdx-provider */ "./node_modules/@mdx-js/tag/dist/mdx-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
  inlineCode: 'code',
  wrapper: 'div'
};

var MDXTag = function (_Component) {
  _inherits(MDXTag, _Component);

  function MDXTag() {
    _classCallCheck(this, MDXTag);

    return _possibleConstructorReturn(this, (MDXTag.__proto__ || Object.getPrototypeOf(MDXTag)).apply(this, arguments));
  }

  _createClass(MDXTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          parentName = _props.parentName,
          _props$props = _props.props,
          childProps = _props$props === undefined ? {} : _props$props,
          children = _props.children,
          _props$components = _props.components,
          components = _props$components === undefined ? {} : _props$components,
          Layout = _props.Layout,
          layoutProps = _props.layoutProps;


      var Component = components[parentName + '.' + name] || components[name] || defaults[name] || name;

      if (Layout) {
        (0, _hoistNonReactStatics2.default)(this, Layout);

        return _react2.default.createElement(
          Layout,
          _extends({ components: components }, layoutProps),
          _react2.default.createElement(
            Component,
            childProps,
            children
          )
        );
      }

      return _react2.default.createElement(
        Component,
        childProps,
        children
      );
    }
  }]);

  return MDXTag;
}(_react.Component);

exports.default = (0, _mdxProvider.withMDXComponents)(MDXTag);

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/webpack/buildin/global.js");

/***/ })

}]);
//# sourceMappingURL=2.js.map