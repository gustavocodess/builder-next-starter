"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...page]]",{

/***/ "./components/Hero/Hero.builder.ts":
/*!*****************************************!*\
  !*** ./components/Hero/Hero.builder.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroBuilderConfig\": function() { return /* binding */ HeroBuilderConfig; }\n/* harmony export */ });\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ \"./components/Hero/Hero.tsx\");\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n\n\nvar HeroBuilderConfig = {\n    name: \"Hero\",\n    image: \"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0\",\n    inputs: [\n        {\n            name: \"title\",\n            type: \"string\",\n            defaultValue: \"Your Title Here\"\n        },\n        {\n            name: \"image\",\n            type: \"file\",\n            allowedFileTypes: [\n                \"jpeg\",\n                \"jpg\",\n                \"png\",\n                \"svg\"\n            ],\n            required: true,\n            defaultValue: \"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F52dcecf48f9c48cc8ddd8f81fec63236\"\n        },\n        {\n            name: \"buttonLink\",\n            type: \"string\",\n            defaultValue: \"https://example.com\"\n        },\n        {\n            name: \"buttonText\",\n            type: \"string\",\n            defaultValue: \"Click\"\n        },\n        {\n            name: \"height\",\n            type: \"number\",\n            defaultValue: 400\n        },\n        {\n            name: \"darkMode\",\n            type: \"boolean\",\n            defaultValue: false\n        },\n        // `advanced: true` hides this option under the \"show advanced\" toggle\n        {\n            name: \"parallaxStrength\",\n            type: \"number\",\n            advanced: true,\n            defaultValue: 400\n        }, \n    ]\n};\n_builder_io_react__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(_Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"], HeroBuilderConfig);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8vSGVyby5idWlsZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUNrQjtBQUVyQyxJQUFNRSxpQkFBaUIsR0FBRztJQUMvQkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsS0FBSyxFQUNILHNHQUFzRztJQUN4R0MsTUFBTSxFQUFFO1FBQ047WUFDRUYsSUFBSSxFQUFFLE9BQU87WUFDYkcsSUFBSSxFQUFFLFFBQVE7WUFDZEMsWUFBWSxFQUFFLGlCQUFpQjtTQUNoQztRQUNEO1lBQ0VKLElBQUksRUFBRSxPQUFPO1lBQ2JHLElBQUksRUFBRSxNQUFNO1lBQ1pFLGdCQUFnQixFQUFFO2dCQUFDLE1BQU07Z0JBQUUsS0FBSztnQkFBRSxLQUFLO2dCQUFFLEtBQUs7YUFBQztZQUMvQ0MsUUFBUSxFQUFFLElBQUk7WUFDZEYsWUFBWSxFQUNWLHNHQUFzRztTQUN6RztRQUNEO1lBQ0VKLElBQUksRUFBRSxZQUFZO1lBQ2xCRyxJQUFJLEVBQUUsUUFBUTtZQUNkQyxZQUFZLEVBQUUscUJBQXFCO1NBQ3BDO1FBQ0Q7WUFDRUosSUFBSSxFQUFFLFlBQVk7WUFDbEJHLElBQUksRUFBRSxRQUFRO1lBQ2RDLFlBQVksRUFBRSxPQUFPO1NBQ3RCO1FBQ0Q7WUFDRUosSUFBSSxFQUFFLFFBQVE7WUFDZEcsSUFBSSxFQUFFLFFBQVE7WUFDZEMsWUFBWSxFQUFFLEdBQUc7U0FDbEI7UUFDRDtZQUNFSixJQUFJLEVBQUUsVUFBVTtZQUNoQkcsSUFBSSxFQUFFLFNBQVM7WUFDZkMsWUFBWSxFQUFFLEtBQUs7U0FDcEI7UUFDRCxzRUFBc0U7UUFDdEU7WUFDRUosSUFBSSxFQUFFLGtCQUFrQjtZQUN4QkcsSUFBSSxFQUFFLFFBQVE7WUFDZEksUUFBUSxFQUFFLElBQUk7WUFDZEgsWUFBWSxFQUFFLEdBQUc7U0FDbEI7S0FDRjtDQUNGLENBQUM7QUFFRk4sd0VBQXlCLENBQUNELDZDQUFJLEVBQUVFLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvL0hlcm8uYnVpbGRlci50cz8zZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gJy4vSGVybyc7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgSGVyb0J1aWxkZXJDb25maWcgPSB7XG4gIG5hbWU6ICdIZXJvJyxcbiAgaW1hZ2U6XG4gICAgJ2h0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YxL2ltYWdlL2Fzc2V0cyUyRllKSUdiNGkwMWp2dzBTUmRMNUJ0JTJGZDZkM2JjODE0ZmZkNDdiMTgyZWM4MzQ1Y2M1NDM4YzAnLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0VmFsdWU6ICdZb3VyIFRpdGxlIEhlcmUnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2ltYWdlJyxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIGFsbG93ZWRGaWxlVHlwZXM6IFsnanBlZycsICdqcGcnLCAncG5nJywgJ3N2ZyddLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6XG4gICAgICAgICdodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92MS9pbWFnZS9hc3NldHMlMkZZSklHYjRpMDFqdncwU1JkTDVCdCUyRjUyZGNlY2Y0OGY5YzQ4Y2M4ZGRkOGY4MWZlYzYzMjM2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdidXR0b25MaW5rJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYnV0dG9uVGV4dCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ0NsaWNrJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdoZWlnaHQnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBkZWZhdWx0VmFsdWU6IDQwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkYXJrTW9kZScsXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gICAgLy8gYGFkdmFuY2VkOiB0cnVlYCBoaWRlcyB0aGlzIG9wdGlvbiB1bmRlciB0aGUgXCJzaG93IGFkdmFuY2VkXCIgdG9nZ2xlXG4gICAge1xuICAgICAgbmFtZTogJ3BhcmFsbGF4U3RyZW5ndGgnLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBhZHZhbmNlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogNDAwLFxuICAgIH0sXG4gIF0sXG59O1xuXG5CdWlsZGVyLnJlZ2lzdGVyQ29tcG9uZW50KEhlcm8sIEhlcm9CdWlsZGVyQ29uZmlnKTtcbiJdLCJuYW1lcyI6WyJIZXJvIiwiQnVpbGRlciIsIkhlcm9CdWlsZGVyQ29uZmlnIiwibmFtZSIsImltYWdlIiwiaW5wdXRzIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsImFsbG93ZWRGaWxlVHlwZXMiLCJyZXF1aXJlZCIsImFkdmFuY2VkIiwicmVnaXN0ZXJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero/Hero.builder.ts\n"));

/***/ }),

/***/ "./components/Hero/Hero.tsx":
/*!**********************************!*\
  !*** ./components/Hero/Hero.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n// import { Container } from './styles';\nvar Hero = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"relative overflow-hidden bg-cover bg-no-repeat\",\n        style: \" background-position: 50%; background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp'); height: 500px; \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex h-full items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"px-6 text-center text-white md:px-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            class: \"mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl\",\n                            children: [\n                                \"The best offer on the market \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 38\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"for your business\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 44\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            class: \"rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200\",\n                            \"data-te-ripple-init\": true,\n                            \"data-te-ripple-color\": \"light\",\n                            children: \"Get started\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n                lineNumber: 14,\n                columnNumber: 3\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n            lineNumber: 12,\n            columnNumber: 1\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gustavogarcia/Desktop/kp-demo/components/Hero/Hero.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8vSGVyby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFFMUIsd0NBQXdDO0FBRXhDLElBQU1DLElBQUksR0FBYSxXQUFNO0lBQzNCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBQyxnREFBZ0Q7UUFBQ0MsS0FBSyxFQUFDLHVIQUluRTtrQkFDSCw0RUFBQ0YsS0FBRztZQUNGQyxLQUFLLEVBQUMsdUdBQXVHO3NCQUM3Ryw0RUFBQ0QsS0FBRztnQkFBQ0MsS0FBSyxFQUFDLHlDQUF5QzswQkFDbEQsNEVBQUNELEtBQUc7b0JBQUNDLEtBQUssRUFBQyxzQ0FBc0M7O3NDQUMvQyw4REFBQ0UsSUFBRTs0QkFBQ0YsS0FBSyxFQUFDLHNFQUFzRTs7Z0NBQUMsK0JBQ2xEOzhDQUFBLDhEQUFDRyxJQUFFOzs7O3lDQUFHOzhDQUFBLDhEQUFDQyxNQUFJOzhDQUFDLG1CQUFpQjs7Ozs7eUNBQU87Ozs7OztpQ0FDOUQ7c0NBQ0wsOERBQUNDLFFBQU07NEJBQUNDLElBQUksRUFBQyxRQUFROzRCQUNuQk4sS0FBSyxFQUFDLDhYQUE4WDs0QkFDcFlPLHFCQUFtQjs0QkFBQ0Msc0JBQW9CLEVBQUMsT0FBTztzQ0FBQyxhQUVuRDs7Ozs7aUNBQVM7Ozs7Ozt5QkFDTDs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNBLENBQ0Y7QUFDSixDQUFDO0FBeEJLVixLQUFBQSxJQUFJO0FBMEJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvL0hlcm8udHN4PzQ2OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBIZXJvOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWNvdmVyIGJnLW5vLXJlcGVhdFwiIHN0eWxlPVwiXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9uZXcvc2xpZGVzLzE0Ni53ZWJwJyk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgXCI+XG48ZGl2XG4gIGNsYXNzPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBsZWZ0LTAgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctW2hzbGEoMCwwJSwwJSwwLjc1KV0gYmctZml4ZWRcIj5cbiAgPGRpdiBjbGFzcz1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJweC02IHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWQ6cHgtMTJcIj5cbiAgICAgIDxoMSBjbGFzcz1cIm10LTIgbWItMTYgdGV4dC01eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IG1kOnRleHQtNnhsIHhsOnRleHQtN3hsXCI+XG4gICAgICAgIFRoZSBiZXN0IG9mZmVyIG9uIHRoZSBtYXJrZXQgPGJyIC8+PHNwYW4+Zm9yIHlvdXIgYnVzaW5lc3M8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJyb3VuZGVkIGJvcmRlci0yIGJvcmRlci1uZXV0cmFsLTUwIHB4LVs0NnB4XSBwdC1bMTRweF0gcGItWzEycHhdIHRleHQtc20gZm9udC1tZWRpdW0gdXBwZXJjYXNlIGxlYWRpbmctbm9ybWFsIHRleHQtbmV1dHJhbC01MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBob3Zlcjpib3JkZXItbmV1dHJhbC0xMDAgaG92ZXI6YmctbmV1dHJhbC0xMDAgaG92ZXI6Ymctb3BhY2l0eS0xMCBob3Zlcjp0ZXh0LW5ldXRyYWwtMTAwIGZvY3VzOmJvcmRlci1uZXV0cmFsLTEwMCBmb2N1czp0ZXh0LW5ldXRyYWwtMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgYWN0aXZlOmJvcmRlci1uZXV0cmFsLTIwMCBhY3RpdmU6dGV4dC1uZXV0cmFsLTIwMFwiXG4gICAgICAgIGRhdGEtdGUtcmlwcGxlLWluaXQgZGF0YS10ZS1yaXBwbGUtY29sb3I9XCJsaWdodFwiPlxuICAgICAgICBHZXQgc3RhcnRlZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZXJvIiwiZGl2IiwiY2xhc3MiLCJzdHlsZSIsImgxIiwiYnIiLCJzcGFuIiwiYnV0dG9uIiwidHlwZSIsImRhdGEtdGUtcmlwcGxlLWluaXQiLCJkYXRhLXRlLXJpcHBsZS1jb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero/Hero.tsx\n"));

/***/ }),

/***/ "./pages/[[...page]].tsx":
/*!*******************************!*\
  !*** ./pages/[[...page]].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @builder.io/react */ \"./node_modules/@builder.io/react/dist/builder-react.es5.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Hero_Hero_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hero/Hero.builder */ \"./components/Hero/Hero.builder.ts\");\n// pages/[...page].tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar API_KEY = \"c90ef157ba3440838c28bdc754799554\";\n// Replace with your Public API Key\n_builder_io_react__WEBPACK_IMPORTED_MODULE_3__.builder.init(API_KEY);\n\nvar __N_SSG = true;\n// Define the Page component\nfunction Page(param) {\n    var page = param.page;\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var isPreviewing = (0,_builder_io_react__WEBPACK_IMPORTED_MODULE_3__.useIsPreviewing)();\n    // If the page content is not available\n    // and not in preview mode, show a 404 error page\n    if (!page && !isPreviewing) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/gustavogarcia/Desktop/kp-demo/pages/[[...page]].tsx\",\n            lineNumber: 64,\n            columnNumber: 12\n        }, this);\n    }\n    // If the page content is available, render\n    // the BuilderComponent with the page content\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: page === null || page === void 0 ? void 0 : (ref = page.data) === null || ref === void 0 ? void 0 : ref.title\n                }, void 0, false, {\n                    fileName: \"/Users/gustavogarcia/Desktop/kp-demo/pages/[[...page]].tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gustavogarcia/Desktop/kp-demo/pages/[[...page]].tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_builder_io_react__WEBPACK_IMPORTED_MODULE_3__.BuilderComponent, {\n                    model: \"page\",\n                    content: page || undefined,\n                    apiKey: API_KEY\n                }, void 0, false, {\n                    fileName: \"/Users/gustavogarcia/Desktop/kp-demo/pages/[[...page]].tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gustavogarcia/Desktop/kp-demo/pages/[[...page]].tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"vI8eRYCWI253Mig/3UV9rYVlu5g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _builder_io_react__WEBPACK_IMPORTED_MODULE_3__.useIsPreviewing\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bWy4uLnBhZ2VdXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3RCOztBQUEwQjtBQUNjO0FBQ3VDO0FBRXJDO0FBQ2I7QUFFYTtBQUUxQyxJQUFNUSxPQUFPLEdBQUcsa0NBQWtDO0FBQ2xELG1DQUFtQztBQUNuQ0wsMkRBQVksQ0FBQ0ssT0FBTyxDQUFDLENBQUM7QUFDbUI7O0FBMEN6Qyw0QkFBNEI7QUFDYixTQUFTRSxJQUFJLENBQUMsS0FBeUMsRUFBRTtRQUEzQyxJQUFNLEdBQU4sS0FBeUMsQ0FBdkNDLElBQUk7UUFlbkJBLEdBQVU7O0lBZHhCLElBQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBRTtJQUMxQixJQUFNWSxZQUFZLEdBQUdULGtFQUFlLEVBQUU7SUFFdEMsdUNBQXVDO0lBQ3ZDLGlEQUFpRDtJQUNqRCxJQUFJLENBQUNPLElBQUksSUFBSSxDQUFDRSxZQUFZLEVBQUU7UUFDMUIscUJBQU8sOERBQUNSLG1EQUFnQjtZQUFDUyxVQUFVLEVBQUUsR0FBRzs7Ozs7Z0JBQUksQ0FBQztJQUMvQyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLDZDQUE2QztJQUM3QyxxQkFDRTs7MEJBQ0UsOERBQUNSLGtEQUFJOzBCQUNILDRFQUFDUyxPQUFLOzhCQUFFSixJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLENBQUFBLEdBQVUsR0FBVkEsSUFBSSxDQUFFSyxJQUFJLGNBQVZMLEdBQVUsY0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxHQUFVLENBQUVJLEtBQUs7Ozs7O3dCQUFTOzs7OztvQkFDN0I7MEJBRVAsOERBQUNSLDBEQUFNOzBCQUNMLDRFQUFDTCwrREFBZ0I7b0JBQUNlLEtBQUssRUFBQyxNQUFNO29CQUFDQyxPQUFPLEVBQUVQLElBQUksSUFBSVEsU0FBUztvQkFBRUMsTUFBTSxFQUFFWixPQUFPOzs7Ozt3QkFBSTs7Ozs7b0JBQ3ZFOztvQkFDUixDQUNIO0FBQ0osQ0FBQztHQXZCdUJFLElBQUk7O1FBQ1hULGtEQUFTO1FBQ0hHLDhEQUFlOzs7QUFGZE0sS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bWy4uLnBhZ2VdXS50c3g/MDI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9bLi4ucGFnZV0udHN4XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1aWxkZXJDb21wb25lbnQsIGJ1aWxkZXIsIHVzZUlzUHJldmlld2luZyB9IGZyb20gXCJAYnVpbGRlci5pby9yZWFjdFwiO1xuaW1wb3J0IHsgQnVpbGRlckNvbnRlbnQgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vc2RrXCI7XG5pbXBvcnQgRGVmYXVsdEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgQVBJX0tFWSA9IFwiYzkwZWYxNTdiYTM0NDA4MzhjMjhiZGM3NTQ3OTk1NTRcIlxuLy8gUmVwbGFjZSB3aXRoIHlvdXIgUHVibGljIEFQSSBLZXlcbmJ1aWxkZXIuaW5pdChBUElfS0VZKTtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvSGVyby9IZXJvLmJ1aWxkZXJcIjtcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdGhhdCBmZXRjaGVzIHRoZSBCdWlsZGVyXG4vLyBjb250ZW50IGZvciBhIGdpdmVuIHBhZ2VcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICAvLyBGZXRjaCB0aGUgYnVpbGRlciBjb250ZW50IGZvciB0aGUgZ2l2ZW4gcGFnZVxuICBjb25zdCBwYWdlID0gYXdhaXQgYnVpbGRlclxuICAgIC5nZXQoXCJwYWdlXCIsIHtcbiAgICAgIGFwaUtleTogQVBJX0tFWSxcbiAgICAgIHVzZXJBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVybFBhdGg6IFwiL1wiICsgKChwYXJhbXM/LnBhZ2UgYXMgc3RyaW5nW10pPy5qb2luKFwiL1wiKSB8fCBcIlwiKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudG9Qcm9taXNlKCk7XG5cbiAgLy8gUmV0dXJuIHRoZSBwYWdlIGNvbnRlbnQgYXMgcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGFnZTogcGFnZSB8fCBudWxsLFxuICAgIH0sXG4gICAgLy8gUmV2YWxpZGF0ZSB0aGUgY29udGVudCBldmVyeSA1IHNlY29uZHNcbiAgICByZXZhbGlkYXRlOiA1LFxuICB9O1xufTtcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgdGhlXG4vLyBzdGF0aWMgcGF0aHMgZm9yIGFsbCBwYWdlcyBpbiBCdWlsZGVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIC8vIEdldCBhIGxpc3Qgb2YgYWxsIHBhZ2VzIGluIEJ1aWxkZXJcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBidWlsZGVyLmdldEFsbChcInBhZ2VcIiwge1xuICAgIC8vIFdlIG9ubHkgbmVlZCB0aGUgVVJMIGZpZWxkXG4gICAgZmllbGRzOiBcImRhdGEudXJsXCIsXG4gICAgb3B0aW9uczogeyBub1RhcmdldGluZzogdHJ1ZSB9LFxuICB9KTtcblxuICAvLyBHZW5lcmF0ZSB0aGUgc3RhdGljIHBhdGhzIGZvciBhbGwgcGFnZXMgaW4gQnVpbGRlclxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYWdlcy5tYXAoKHBhZ2UpID0+IGAke3BhZ2UuZGF0YT8udXJsfWApLmZpbHRlcih1cmwgPT4gdXJsICE9PSAnLycpLFxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxuICB9O1xufVxuXG4vLyBEZWZpbmUgdGhlIFBhZ2UgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgcGFnZSB9OiB7IHBhZ2U6IEJ1aWxkZXJDb250ZW50IHwgbnVsbCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc1ByZXZpZXdpbmcgPSB1c2VJc1ByZXZpZXdpbmcoKTtcblxuICAvLyBJZiB0aGUgcGFnZSBjb250ZW50IGlzIG5vdCBhdmFpbGFibGVcbiAgLy8gYW5kIG5vdCBpbiBwcmV2aWV3IG1vZGUsIHNob3cgYSA0MDQgZXJyb3IgcGFnZVxuICBpZiAoIXBhZ2UgJiYgIWlzUHJldmlld2luZykge1xuICAgIHJldHVybiA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xuICB9XG5cbiAgLy8gSWYgdGhlIHBhZ2UgY29udGVudCBpcyBhdmFpbGFibGUsIHJlbmRlclxuICAvLyB0aGUgQnVpbGRlckNvbXBvbmVudCB3aXRoIHRoZSBwYWdlIGNvbnRlbnRcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZT8uZGF0YT8udGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiBSZW5kZXIgdGhlIEJ1aWxkZXIgcGFnZSAqL31cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxCdWlsZGVyQ29tcG9uZW50IG1vZGVsPVwicGFnZVwiIGNvbnRlbnQ9e3BhZ2UgfHwgdW5kZWZpbmVkfSBhcGlLZXk9e0FQSV9LRVl9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJCdWlsZGVyQ29tcG9uZW50IiwiYnVpbGRlciIsInVzZUlzUHJldmlld2luZyIsIkRlZmF1bHRFcnJvclBhZ2UiLCJIZWFkIiwiTGF5b3V0IiwiQVBJX0tFWSIsImluaXQiLCJQYWdlIiwicGFnZSIsInJvdXRlciIsImlzUHJldmlld2luZyIsInN0YXR1c0NvZGUiLCJ0aXRsZSIsImRhdGEiLCJtb2RlbCIsImNvbnRlbnQiLCJ1bmRlZmluZWQiLCJhcGlLZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[[...page]].tsx\n"));

/***/ })

});