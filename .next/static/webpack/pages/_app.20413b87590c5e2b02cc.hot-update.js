/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  var _usePlayer = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer)(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious; // disparar essa função toda vez que isPlaying for alterado  \n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // não retorna nada\n    if (!audioRef.current) {\n      return;\n    } // Se isPlaying for true - play\n\n\n    if (isPlaying) {\n      audioRef.current.play(); // agora se isPlaying for falso - pausar\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().playerContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: [\"Tocando agora \", episode === null || episode === void 0 ? void 0 : episode.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().currentEpisode),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyPlayer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: !episode ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty) : '',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().progress),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slider),\n          children: episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_slider__WEBPACK_IMPORTED_MODULE_3__.default, {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              background: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptySlider)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), episode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        loop: isLooping,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttons),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().playButton),\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Pause\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar pr\\xF3xima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().isActive) : '',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Player, \"7ruQlj4wXuegM+BRfmsYOiZXztg=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJlcGlzb2RlIiwic3R5bGVzIiwidGl0bGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFFdkIsTUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFtQixJQUFuQixDQUF2Qjs7QUFGdUIsbUJBZ0JuQkMsa0VBQVMsRUFoQlU7QUFBQSxNQUtyQkMsV0FMcUIsY0FLckJBLFdBTHFCO0FBQUEsTUFNckJDLG1CQU5xQixjQU1yQkEsbUJBTnFCO0FBQUEsTUFPckJDLFNBUHFCLGNBT3JCQSxTQVBxQjtBQUFBLE1BUXJCQyxTQVJxQixjQVFyQkEsU0FScUI7QUFBQSxNQVNyQkMsVUFUcUIsY0FTckJBLFVBVHFCO0FBQUEsTUFVckJDLFVBVnFCLGNBVXJCQSxVQVZxQjtBQUFBLE1BV3JCQyxlQVhxQixjQVdyQkEsZUFYcUI7QUFBQSxNQVlyQkMsUUFacUIsY0FZckJBLFFBWnFCO0FBQUEsTUFhckJDLFlBYnFCLGNBYXJCQSxZQWJxQjtB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LGdCQXBCRixlQXVCRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxDQUFDTSxPQUZiO0FBR0UsaUJBQU8sRUFBRVYsVUFIWDtBQUlFLG1CQUFTLEVBQUVGLFNBQVMsR0FBR2EscUVBQUgsR0FBcUIsRUFKM0M7QUFBQSxpQ0FNRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlGRDs7R0E3SGVwQixNO1VBZ0JWRyw4RDs7O0tBaEJVSCxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcycgXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKSB7XG5cbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgeyBcbiAgICBlcGlzb2RlTGlzdCwgXG4gICAgY3VycmVudEVwaXNvZGVJbmRleCwgXG4gICAgaXNQbGF5aW5nLFxuICAgIGlzTG9vcGluZyxcbiAgICB0b2dnbGVQbGF5LFxuICAgIHRvZ2dsZUxvb3AsXG4gICAgc2V0UGxheWluZ1N0YXRlLFxuICAgIHBsYXlOZXh0LFxuICAgIHBsYXlQcmV2aW91cyxcbiAgICBoYXNOZXh0LFxuICAgIGhhc1ByZXZpb3VzXG4gIH0gPSB1c2VQbGF5ZXIoKTtcblxuICAvLyBkaXNwYXJhciBlc3NhIGZ1bsOnw6NvIHRvZGEgdmV6IHF1ZSBpc1BsYXlpbmcgZm9yIGFsdGVyYWRvICBcbiAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICAvLyBuw6NvIHJldG9ybmEgbmFkYVxuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAgIC8vIFNlIGlzUGxheWluZyBmb3IgdHJ1ZSAtIHBsYXlcbiAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcblxuICAgICAgLy8gYWdvcmEgc2UgaXNQbGF5aW5nIGZvciBmYWxzbyAtIHBhdXNhclxuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG4gICAgfVxuICB9LCBbaXNQbGF5aW5nXSlcblxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSB7ZXBpc29kZT8udGl0bGV9PC9zdHJvbmc+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHsvKiBTZSBleGlzdGlyIG8gZXBzb2RpbyBtb3N0cmFyIGlzc28gc2UgbsOjbyBleGlzdGlyIG1vc3RyYXIgXCJTZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyXCIgKi99XG4gICAgICB7IGVwaXNvZGUgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHdpZHRoPXs1OTJ9XG4gICAgICAgICAgICBoZWlnaHQ9ezU5Mn1cbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxuICAgICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjYXNzbyBldSBuw6NvIHRlbmhhIHVtIGVwc29kaW8gKi99XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17ICFlcGlzb2RlID8gc3R5bGVzLmVtcHR5IDogJyd9PiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XG4gICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PiBcbiAgICAgICAgICB7Lyogc2UgZXUgdGl2ZXIgdW0gZXBzb2RpbyB2b3UgbW9zdHJhciA8U2xpZGVyLz4gc2UgbsOjbyB2b3UgbW9zdHJhciBlbXB0eVNsaWRlciAqL31cbiAgICAgICAgICB7IGVwaXNvZGUgPyAoXG4gICAgICAgICAgICA8U2xpZGVyIFxuICAgICAgICAgICAgICB0cmFja1N0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA0ZDM2MSd9fVxuICAgICAgICAgICAgICByYWlsU3R5bGU9e3sgYmFja2dyb3VuZDogJyM5Zjc1ZmYnfX1cbiAgICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3tib3JkZXJDb2xvcjogJyMwNGQzNjEnLCBib3JkZXJXaWR0aDogNH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfS8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj4wMDowMDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyBlcGlzb2RlICYmIChcbiAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS51cmx9XG4gICAgICAgICAgICByZWY9e2F1ZGlvUmVmfVxuICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxuICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgIG9uUGxheT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKHRydWUpfVxuICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKGZhbHNlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkZXNhYmlsaXRhZG8gY2FzbyBuw6NvIHRlbmhhIGVwc2lkb2RlIHRvY2FuZG8gKi99XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5UHJldmlvdXN9IGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzUHJldmlvdXN9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJUb2NhciBhbnRlcmlvclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgIHsvKiBzZSBlc3RpdmVyIHRvY2FuZG8gIG1vc3RyYXIgcGF1c2Ugc2UgbsOjbyBtb3N0cmEgdG9jYXIqL31cbiAgICAgICAgICAgIHsgaXNQbGF5aW5nIFxuICAgICAgICAgICAgICA/IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlBhdXNlXCIvPiBcbiAgICAgICAgICAgICAgOiA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5TmV4dH0gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNOZXh0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJUb2NhciBwcsOzeGltYVwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTG9vcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aXNMb29waW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGV0aXJcIi8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

});