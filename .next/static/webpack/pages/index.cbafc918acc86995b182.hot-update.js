/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_leonardt_code_React_podcasternext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var latestEpisodes = _ref.latestEpisodes,\n      allEpisodes = _ref.allEpisodes;\n\n  var _usePlayer = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer)(),\n      playList = _usePlayer.playList;\n\n  var episodeList = [].concat((0,_Users_leonardt_code_React_podcasternext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(latestEpisodes), (0,_Users_leonardt_code_React_podcasternext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(allEpisodes));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homepage),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Home | Podcast\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().latestEpisodes),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"\\xDAltimos lan\\xE7amentos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: latestEpisodes.map(function (episode, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              width: 192,\n              height: 192,\n              src: episode.thumbnail,\n              alt: episode.title,\n              objectFit: \"cover\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().episodeDetails),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/episodes/\".concat(episode.id),\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  children: episode.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: episode.members\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: episode.publishedAt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: episode.durationAsString\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              type: \"button\",\n              onClick: function onClick() {\n                return playList(episodeList, index);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/play-green.svg\",\n                alt: \"Tocar epis\\xF3dio\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, _this)]\n          }, episode.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 8\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().allEpisodes),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Todos epis\\xF3dios\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        cellSpacing: 0,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: \"Podcast\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: \"Integrantes\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: \"Data\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: \"Dura\\xE7\\xE3o\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n          children: allEpisodes.map(function (episode, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                  width: 72\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  width: 120,\n                  height: 120,\n                  src: episode.thumbnail,\n                  alt: episode.title,\n                  objectFit: \"cover\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                  href: \"/episodes/\".concat(episode.id),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: episode.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 98,\n                    columnNumber: 12\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 96,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: episode.members\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                style: {\n                  width: 100\n                },\n                children: episode.publishedAt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: episode.durationAsString\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                  type: \"button\",\n                  onClick: function onClick() {\n                    return playList(episodeList, index + latestEpisodes.length);\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/play-green.svg\",\n                    alt: \"Tocar epis\\xF3dio\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 106,\n                    columnNumber: 12\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 105,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 10\n              }, _this)]\n            }, episode.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 9\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"B+17Ictt0EMdTLSLvmaYvE6LpQQ=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RFcGlzb2RlcyIsImFsbEVwaXNvZGVzIiwidXNlUGxheWVyIiwicGxheUxpc3QiLCJlcGlzb2RlTGlzdCIsInN0eWxlcyIsIm1hcCIsImVwaXNvZGUiLCJpbmRleCIsInRodW1ibmFpbCIsInRpdGxlIiwiaWQiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbkFzU3RyaW5nIiwid2lkdGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBbUJlLFNBQVNBLElBQVQsT0FBMEQ7QUFBQTs7QUFBQTs7QUFBQSxNQUExQ0MsY0FBMEMsUUFBMUNBLGNBQTBDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjs7QUFBQSxtQkFDbkRDLGtFQUFTLEVBRDBDO0FBQUEsTUFDaEVDLFFBRGdFLGNBQ2hFQSxRQURnRTs7QUFHeEUsTUFBTUMsV0FBVywwS0FBUUosY0FBUixnS0FBMkJDLFdBQTNCLEVBQWpCO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVJLG1FQUFoQjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQztBQUFTLGVBQVMsRUFBRUEseUVBQXBCO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUEsa0JBQ0VMLGNBQWMsQ0FBQ00sR0FBZixDQUFtQixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDdkMsOEJBQ0M7QUFBQSxvQ0FDQyw4REFBQyxtREFBRDtBQUNDLG1CQUFLLEVBQUUsR0FEUjtBQUVDLG9CQUFNLEVBQUUsR0FGVDtBQUdDLGlCQUFHLEVBQUVE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QUFBQSx1QkFmRCxlQWdCQztBQUFJLHFCQUFLLEVBQUU7QUFBRUcsdUJBQUssRUFBRTtBQUFULGlCQUFYO0FBQUEsMEJBQTRCUixPQUFPLENBQUNNO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaEJELGVBaUJDO0FBQUEsMEJBQUtOLE9BQU8sQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRCxlQWtCQztBQUFBLHVDQUNDO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLHlCQUFPLEVBQUU7QUFBQSwyQkFBTVgsUUFBUSxDQUFFQyxXQUFGLEVBQWVJLEtBQUssR0FBR1IsY0FBYyxDQUFDZ0IsTUFBdEMsQ0FBZDtBQUFBLG1CQUEvQjtBQUFBLHlDQUNDO0FBQUssdUJBQUcsRUFBQyxpQkFBVDtBQUEyQix1QkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsQkQ7QUFBQSxlQUFTVCxPQUFPLENBQUNJLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUEwQkEsV0EzQkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtGQTs7R0F2RnVCWixJO1VBQ0ZHLDhEOzs7S0FERUgsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJ1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHRodW1ibmFpbDogc3RyaW5nO1xuXHRtZW1iZXJzOiBzdHJpbmc7XG5cdGR1cmF0aW9uOiBudW1iZXI7XG5cdGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZztcblx0dXJsOiBzdHJpbmc7XG5cdHB1Ymxpc2hlZEF0OiBzdHJpbmc7XG59XG50eXBlIEhvbWVQcm9wcyA9IHtcblx0bGF0ZXN0RXBpc29kZXM6IEVwaXNvZGVbXTtcblx0YWxsRXBpc29kZXM6IEVwaXNvZGVbXTtcblx0Ly8gZXBpc29kZXM6IEFycmF5PEVwaXNvZGU+IG91dHJhIGZvcm1hIGRlIGZhemVyXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2RlcyB9OiBIb21lUHJvcHMpIHtcblx0Y29uc3QgeyBwbGF5TGlzdCB9ID0gdXNlUGxheWVyKCk7XG5cblx0Y29uc3QgZXBpc29kZUxpc3QgPSBbIC4uLmxhdGVzdEVwaXNvZGVzLCAuLi5hbGxFcGlzb2Rlc107XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlfT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+SG9tZSB8IFBvZGNhc3Q8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5sYXRlc3RFcGlzb2Rlc30+XG5cdFx0XHRcdDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e2xhdGVzdEVwaXNvZGVzLm1hcCgoZXBpc29kZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2VwaXNvZGUuaWR9PlxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxOTJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezE5Mn0gXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSBcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD17ZXBpc29kZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdEZpdD1cImNvdmVyXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPntlcGlzb2RlLm1lbWJlcnN9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcGxheUxpc3QoZXBpc29kZUxpc3QsIGluZGV4KX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQpIFxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWxsRXBpc29kZXN9PlxuXHRcdFx0XHQ8aDI+VG9kb3MgZXBpc8OzZGlvczwvaDI+XG5cdFx0XHRcdDx0YWJsZSBjZWxsU3BhY2luZz17MH0+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPlBvZGNhc3Q8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+SW50ZWdyYW50ZXM8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+RGF0YTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5EdXJhw6fDo288L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+PC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7YWxsRXBpc29kZXMubWFwKChlcGlzb2RlLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2VwaXNvZGUuaWR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt7IHdpZHRoOiA3MiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxMjB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxMjB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2VwaXNvZGUudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0PVwiY292ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPiBcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57ZXBpc29kZS5tZW1iZXJzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fT57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcGxheUxpc3QoIGVwaXNvZGVMaXN0LCBpbmRleCArIGxhdGVzdEVwaXNvZGVzLmxlbmd0aCApfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyAgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRfbGltaXQ6IDEyLFxuXHRcdFx0X3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuXHRcdFx0X29yZGVyOiAnZGVzYydcblx0XHR9XG5cdH0pXG5cblx0Y29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGVwaXNvZGUuaWQsXG5cdFx0XHR0aXRsZTogZXBpc29kZS50aXRsZSxcblx0XHRcdHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXG5cdFx0XHRtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXG5cdFx0XHRwdWJsaXNoZWRBdDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG5cdFx0XHRkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG5cdFx0XHRkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxuXHRcdFx0dXJsOiBlcGlzb2RlLmZpbGUudXJsLFxuXHRcdH07XG5cdH0pXG5cdGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XG5cdGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMiwgZXBpc29kZXMubGVuZ3RoKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRsYXRlc3RFcGlzb2Rlcyxcblx0XHRcdGFsbEVwaXNvZGVzXG5cdFx0fSxcblx0XHRyZXZhbGlkYXRlOiA2MCAqIDYwICogNixcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ \"./node_modules/next/dist/next-server/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcz84MzhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJIQUF1RCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

});