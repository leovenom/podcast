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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _episode$duration;\n\n  var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var _usePlayer = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer)(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      isShuffling = _usePlayer.isShuffling,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious,\n      clearPlayerState = _usePlayer.clearPlayerState; // disparar essa função toda vez que isPlaying for alterado  \n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // não retorna nada\n    if (!audioRef.current) {\n      return;\n    } // Se isPlaying for true - play\n\n\n    if (isPlaying) {\n      audioRef.current.play(); // agora se isPlaying for falso - pausar\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n\n  function setuoProgressListener() {\n    audioRef.current.currentTime = 0;\n    audioRef.current.addEventListener('timeupdate', function () {\n      setProgress(Math.floor(audioRef.current.currentTime));\n    });\n  }\n\n  ;\n\n  function handleSeek(amount) {\n    audioRef.current.currentTime = amount;\n    setProgress(amount);\n  }\n\n  ;\n\n  function handleEpisodeEnded() {\n    if (hasNext) {\n      playNext();\n    } else {\n      clearPlayerState();\n    }\n  }\n\n  ;\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playerContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: [\"Tocando agora \", episode === null || episode === void 0 ? void 0 : episode.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().currentEpisode),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().emptyPlayer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: !episode ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().empty) : '',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().progress),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: (0,_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_6__.convertDurationToTimeString)(progress)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slider),\n          children: episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_slider__WEBPACK_IMPORTED_MODULE_3__.default, {\n            max: episode.duration,\n            value: progress,\n            onChange: handleSeek,\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              background: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().emptySlider)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: (0,_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_6__.convertDurationToTimeString)((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), episode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        loop: isLooping,\n        autoPlay: true,\n        onEnded: handleEpisodeEnded,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        },\n        onLoadedMetadata: setuoProgressListener\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode || episodeList.length === 1,\n          onClick: toggleShuffle,\n          className: isShuffling ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().isActive) : '',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playButton),\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Pause\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 151,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar pr\\xF3xima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().isActive) : '',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 163,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Player, \"PEWQTgqujhxa8UaI9ctVo7XSLBY=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsImNsZWFyUGxheWVyU3RhdGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwic2V0dW9Qcm9ncmVzc0xpc3RlbmVyIiwiY3VycmVudFRpbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiTWF0aCIsImZsb29yIiwiaGFuZGxlU2VlayIsImFtb3VudCIsImhhbmRsZUVwaXNvZGVFbmRlZCIsImVwaXNvZGUiLCJzdHlsZXMiLCJ0aXRsZSIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmciLCJkdXJhdGlvbiIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZW1wdHlTbGlkZXIiLCJ1cmwiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBRXZCLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRnVCLGtCQUdTQywrQ0FBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUdoQkMs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ZUFBRyxFQUFDLFlBQVQ7QUFBc0IsZUFBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE8sZ0JBRVA7QUFBSyxlQUFHLEVBQUMsV0FBVDtBQUFxQixlQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUF5QkU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFFTyxRQUEvQjtBQUF5QyxrQkFBUSxFQUFFLENBQUNpQixPQUFELElBQVksQ0FBQ2YsT0FBaEU7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxnQkFBVDtBQUEwQixlQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGLGVBNEJFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxrQkFBUSxFQUFFLENBQUNlLE9BRmI7QUFHRSxpQkFBTyxFQUFFcEIsVUFIWDtBQUlFLG1CQUFTLEVBQUVILFNBQVMsR0FBR3dCLHFFQUFILEdBQXFCLEVBSjNDO0FBQUEsaUNBTUU7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtR0Q7O0dBaEtlbEMsTTtVQW9CVk0sOEQ7OztLQXBCVU4sTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BsYXllci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7XG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJyBcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKSB7XG5cbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgeyBcbiAgICBlcGlzb2RlTGlzdCwgXG4gICAgY3VycmVudEVwaXNvZGVJbmRleCwgXG4gICAgaXNQbGF5aW5nLFxuICAgIGlzTG9vcGluZyxcbiAgICBpc1NodWZmbGluZyxcbiAgICB0b2dnbGVQbGF5LFxuICAgIHRvZ2dsZUxvb3AsXG4gICAgdG9nZ2xlU2h1ZmZsZSxcbiAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgcGxheU5leHQsXG4gICAgcGxheVByZXZpb3VzLFxuICAgIGhhc05leHQsXG4gICAgaGFzUHJldmlvdXMsXG4gICAgY2xlYXJQbGF5ZXJTdGF0ZVxuICB9ID0gdXNlUGxheWVyKCk7XG5cbiAgLy8gZGlzcGFyYXIgZXNzYSBmdW7Dp8OjbyB0b2RhIHZleiBxdWUgaXNQbGF5aW5nIGZvciBhbHRlcmFkbyAgXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgLy8gbsOjbyByZXRvcm5hIG5hZGFcbiAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgICAvLyBTZSBpc1BsYXlpbmcgZm9yIHRydWUgLSBwbGF5XG4gICAgaWYgKGlzUGxheWluZykge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG5cbiAgICAgIC8vIGFnb3JhIHNlIGlzUGxheWluZyBmb3IgZmFsc28gLSBwYXVzYXJcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICAgIH1cbiAgfSwgW2lzUGxheWluZ10pXG5cbiAgZnVuY3Rpb24gc2V0dW9Qcm9ncmVzc0xpc3RlbmVyKCkge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuXG4gICAgYXVkaW9SZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lKSlcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWVrKGFtb3VudDogbnVtYmVyKSB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IGFtb3VudDtcbiAgICBzZXRQcm9ncmVzcyhhbW91bnQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUVwaXNvZGVFbmRlZCgpIHtcbiAgICBpZiAoaGFzTmV4dCkge1xuICAgICAgIHBsYXlOZXh0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJQbGF5ZXJTdGF0ZSgpXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cbiAgICAgICAgPHN0cm9uZz5Ub2NhbmRvIGFnb3JhIHtlcGlzb2RlPy50aXRsZX08L3N0cm9uZz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgey8qIFNlIGV4aXN0aXIgbyBlcHNvZGlvIG1vc3RyYXIgaXNzbyBzZSBuw6NvIGV4aXN0aXIgbW9zdHJhciBcIlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXJcIiAqL31cbiAgICAgIHsgZXBpc29kZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICB3aWR0aD17NTkyfVxuICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9XG4gICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHN0cm9uZz57ZXBpc29kZS50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cbiAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNhc3NvIGV1IG7Do28gdGVuaGEgdW0gZXBzb2RpbyAqL31cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXsgIWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKHByb2dyZXNzKX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PiBcbiAgICAgICAgICB7Lyogc2UgZXUgdGl2ZXIgdW0gZXBzb2RpbyB2b3UgbW9zdHJhciA8U2xpZGVyLz4gc2UgbsOjbyB2b3UgbW9zdHJhciBlbXB0eVNsaWRlciAqL31cbiAgICAgICAgICB7IGVwaXNvZGUgPyAoXG4gICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgIG1heD17ZXBpc29kZS5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2dyZXNzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vla31cbiAgICAgICAgICAgICAgdHJhY2tTdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnfX1cbiAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmQ6ICcjOWY3NWZmJ319XG4gICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjMDRkMzYxJywgYm9yZGVyV2lkdGg6IDR9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0vPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhlcGlzb2RlPy5kdXJhdGlvbiA/PyAwKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgZXBpc29kZSAmJiAoXG4gICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICBzcmM9e2VwaXNvZGUudXJsfVxuICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cbiAgICAgICAgICAgIGxvb3A9e2lzTG9vcGluZ31cbiAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICBvbkVuZGVkPXtoYW5kbGVFcGlzb2RlRW5kZWR9XG4gICAgICAgICAgICBvblBsYXk9eygpID0+IHNldFBsYXlpbmdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgIG9uUGF1c2U9eygpID0+IHNldFBsYXlpbmdTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgICBvbkxvYWRlZE1ldGFkYXRhPXtzZXR1b1Byb2dyZXNzTGlzdGVuZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZGVzYWJpbGl0YWRvIGNhc28gbsOjbyB0ZW5oYSBlcHNpZG9kZSB0b2NhbmRvICovfVxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09PSAxIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2lzU2h1ZmZsaW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91c30+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIGFudGVyaW9yXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgey8qIHNlIGVzdGl2ZXIgdG9jYW5kbyAgbW9zdHJhciBwYXVzZSBzZSBuw6NvIG1vc3RyYSB0b2NhciovfVxuICAgICAgICAgICAgeyBpc1BsYXlpbmcgXG4gICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiUGF1c2VcIi8+IFxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlOZXh0fSBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc05leHR9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIHByw7N4aW1hXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

});