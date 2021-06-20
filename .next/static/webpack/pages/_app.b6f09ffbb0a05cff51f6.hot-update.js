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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _episode$duration;\n\n  var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var _usePlayer = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer)(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      isShuffling = _usePlayer.isShuffling,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious; // disparar essa função toda vez que isPlaying for alterado  \n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // não retorna nada\n    if (!audioRef.current) {\n      return;\n    } // Se isPlaying for true - play\n\n\n    if (isPlaying) {\n      audioRef.current.play(); // agora se isPlaying for falso - pausar\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playerContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: [\"Tocando agora \", episode === null || episode === void 0 ? void 0 : episode.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().currentEpisode),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().emptyPlayer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: !episode ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().empty) : '',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().progress),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slider),\n          children: episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_slider__WEBPACK_IMPORTED_MODULE_3__.default, {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              background: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().emptySlider)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: (0,_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_6__.convertDurationToTimeString)((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), episode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        loop: isLooping,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode || episodeList.length === 1,\n          onClick: toggleShuffle,\n          className: isShuffling ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().isActive) : '',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playButton),\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Pause\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar pr\\xF3xima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().isActive) : '',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Player, \"D9MQ90ooJ3OqjRnVaYnB2kWT9C0=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJlcGlzb2RlIiwic3R5bGVzIiwidGl0bGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImR1cmF0aW9uIiwidXJsIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUV2QixNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQW1CLElBQW5CLENBQXZCOztBQUZ1QixrQkFHU0MsK0NBQVEsQ0FBQyxDQUFELENBSGpCO0FBQUEsTUFHaEJDLFFBSGdCO0FBQUEsTUFHTkMsV0FITTs7QUFBQSxtQkFtQm5CQyxrRUFBUyxFQW5CVTtBQUFBLE1BTXJCQyxXQU5xQixjQU1yQkEsV0FOcUI7QUFBQSxNQU9yQkMsbUJBUHFCLGNBT3JCQSxtQkFQcUI7QUFBQSxNQVFyQkMsU0FScUIsY0FR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RUFBRU0sdUVBRmI7QUFHRSxrQkFBUSxFQUFFLENBQUNELE9BSGI7QUFJRSxpQkFBTyxFQUFFWixVQUpYO0FBQUEsb0JBT0lILFNBQVMsZ0JBQ1A7QUFBSyxlQUFHLEVBQUMsWUFBVDtBQUFzQixlQUFHLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFETyxnQkFFUDtBQUFLLGVBQUcsRUFBQyxXQUFUO0FBQXFCLGVBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVE47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRixlQXlCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVPLFFBQS9CO0FBQXlDLGtCQUFRLEVBQUUsQ0FBQ1EsT0FBRCxJQUFZLENBQUNOLE9BQWhFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRixlQTRCRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxDQUFDTSxPQUZiO0FBR0UsaUJBQU8sRUFBRVgsVUFIWDtBQUlFLG1CQUFTLEVBQUVILFNBQVMsR0FBR2UscUVBQUgsR0FBcUIsRUFKM0M7QUFBQSxpQ0FNRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThGRDs7R0FySWV6QixNO1VBbUJWTSw4RDs7O0tBbkJVTixNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnIFxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpIHtcblxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB7IFxuICAgIGVwaXNvZGVMaXN0LCBcbiAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcbiAgICBpc1BsYXlpbmcsXG4gICAgaXNMb29waW5nLFxuICAgIGlzU2h1ZmZsaW5nLFxuICAgIHRvZ2dsZVBsYXksXG4gICAgdG9nZ2xlTG9vcCxcbiAgICB0b2dnbGVTaHVmZmxlLFxuICAgIHNldFBsYXlpbmdTdGF0ZSxcbiAgICBwbGF5TmV4dCxcbiAgICBwbGF5UHJldmlvdXMsXG4gICAgaGFzTmV4dCxcbiAgICBoYXNQcmV2aW91c1xuICB9ID0gdXNlUGxheWVyKCk7XG5cbiAgLy8gZGlzcGFyYXIgZXNzYSBmdW7Dp8OjbyB0b2RhIHZleiBxdWUgaXNQbGF5aW5nIGZvciBhbHRlcmFkbyAgXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgLy8gbsOjbyByZXRvcm5hIG5hZGFcbiAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgICAvLyBTZSBpc1BsYXlpbmcgZm9yIHRydWUgLSBwbGF5XG4gICAgaWYgKGlzUGxheWluZykge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG5cbiAgICAgIC8vIGFnb3JhIHNlIGlzUGxheWluZyBmb3IgZmFsc28gLSBwYXVzYXJcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICAgIH1cbiAgfSwgW2lzUGxheWluZ10pXG5cbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aW1nIHNyYz1cIi9wbGF5aW5nLnN2Z1wiIGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEge2VwaXNvZGU/LnRpdGxlfTwvc3Ryb25nPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICB7LyogU2UgZXhpc3RpciBvIGVwc29kaW8gbW9zdHJhciBpc3NvIHNlIG7Do28gZXhpc3RpciBtb3N0cmFyIFwiU2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpclwiICovfVxuICAgICAgeyBlcGlzb2RlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFcGlzb2RlfT5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICB3aWR0aD17NTkyfVxuICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9XG4gICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHN0cm9uZz57ZXBpc29kZS50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cbiAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogY2Fzc28gZXUgbsOjbyB0ZW5oYSB1bSBlcHNvZGlvICovfVxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyAhZXBpc29kZSA/IHN0eWxlcy5lbXB0eSA6ICcnfT4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgIDxzcGFuPnt9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT4gXG4gICAgICAgICAgey8qIHNlIGV1IHRpdmVyIHVtIGVwc29kaW8gdm91IG1vc3RyYXIgPFNsaWRlci8+IHNlIG7Do28gdm91IG1vc3RyYXIgZW1wdHlTbGlkZXIgKi99XG4gICAgICAgICAgeyBlcGlzb2RlID8gKFxuICAgICAgICAgICAgPFNsaWRlciBcbiAgICAgICAgICAgICAgdHJhY2tTdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnfX1cbiAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmQ6ICcjOWY3NWZmJ319XG4gICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjMDRkMzYxJywgYm9yZGVyV2lkdGg6IDR9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0vPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhlcGlzb2RlPy5kdXJhdGlvbiA/PyAwKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgZXBpc29kZSAmJiAoXG4gICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICBzcmM9e2VwaXNvZGUudXJsfVxuICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cbiAgICAgICAgICAgIGxvb3A9e2lzTG9vcGluZ31cbiAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICBvblBsYXk9eygpID0+IHNldFBsYXlpbmdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgIG9uUGF1c2U9eygpID0+IHNldFBsYXlpbmdTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZGVzYWJpbGl0YWRvIGNhc28gbsOjbyB0ZW5oYSBlcHNpZG9kZSB0b2NhbmRvICovfVxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09PSAxIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2lzU2h1ZmZsaW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91c30+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIGFudGVyaW9yXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgey8qIHNlIGVzdGl2ZXIgdG9jYW5kbyAgbW9zdHJhciBwYXVzZSBzZSBuw6NvIG1vc3RyYSB0b2NhciovfVxuICAgICAgICAgICAgeyBpc1BsYXlpbmcgXG4gICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiUGF1c2VcIi8+IFxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlOZXh0fSBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc05leHR9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIHByw7N4aW1hXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

});