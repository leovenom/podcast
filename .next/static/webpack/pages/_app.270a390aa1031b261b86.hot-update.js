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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.PlayerContext),\n      episodeList = _useContext.episodeList,\n      currentEpisodeIndex = _useContext.currentEpisodeIndex,\n      isPlaying = _useContext.isPlaying,\n      togglePlay = _useContext.togglePlay,\n      setPlayingState = _useContext.setPlayingState,\n      playNext = _useContext.playNext,\n      playPrevious = _useContext.playPrevious; // disparar essa função toda vez que isPlaying for alterado  \n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // não retorna nada\n    if (!audioRef.current) {\n      return;\n    } // Se isPlaying for true - play\n\n\n    if (isPlaying) {\n      audioRef.current.play(); // agora se isPlaying for falso - pausar\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().playerContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: [\"Tocando agora \", episode === null || episode === void 0 ? void 0 : episode.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().currentEpisode),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyPlayer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: !episode ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty) : '',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().progress),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slider),\n          children: episode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_slider__WEBPACK_IMPORTED_MODULE_3__.default, {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              background: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptySlider)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), episode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        autoPlay: true,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttons),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().playButton),\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Pause\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar pr\\xF3xima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Player, \"eYNN35qBHtmUgtStXLOBF2ePbB8=\");\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIlBsYXllckNvbnRleHQiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJ0b2dnbGVQbGF5Iiwic2V0UGxheWluZ1N0YXRlIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwiZXBpc29kZSIsInN0eWxlcyIsInRpdGxlIiwidGh1bWJuYWlsIiwibWVtYmVycyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZW1wdHlTbGlkZXIiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBRXZCLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRnVCLG9CQVluQkMsaURBQVUsQ0FBQ0Msa0VBQUQsQ0FaUztBQUFBLE1BS3JCQyxXQUxxQixlQUtyQkEsV0FMcUI7QUFBQSxNQU1yQkMsbUJBTnFCLGVBTXJCQSxtQkFOcUI7QUFBQSxNQU9yQkMsU0FQcUIsZUFPckJBLFNBUHFCO0FBQUEsTUFRckJDLFVBUnFCLGVBUXJCQSxVQVJxQjtBQUFBLE1BU3JCQyxlQVRxQixlQVNyQkEsZUFUcUI7QUFBQSxNQVVyQkMsUUFWcUIsZUFVckJBLFFBVnFCO0FBQUEsTUFXckJDLFlBWHFCLGVBV3JCQSxZQVhxQixFQWN2Qjs7O0FBQ0FDLGtEQUFTLENBQUMsWUFBSztBQUNUO0FBQ0osUUFBSSxDQUFDWCxRQUFRLENBQUNZLE9BQWQsRUFBdUI7QUFDckI7QUFDRCxL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1GRDs7R0FuSGVoQixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcycgXG5pbXBvcnQgeyBQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCkge1xuXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHsgXG4gICAgZXBpc29kZUxpc3QsIFxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxuICAgIGlzUGxheWluZywgXG4gICAgdG9nZ2xlUGxheSxcbiAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgcGxheU5leHQsXG4gICAgcGxheVByZXZpb3VzLFxuICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxuXG4gIC8vIGRpc3BhcmFyIGVzc2EgZnVuw6fDo28gdG9kYSB2ZXogcXVlIGlzUGxheWluZyBmb3IgYWx0ZXJhZG8gIFxuICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIC8vIG7Do28gcmV0b3JuYSBuYWRhXG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICAgLy8gU2UgaXNQbGF5aW5nIGZvciB0cnVlIC0gcGxheVxuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuXG4gICAgICAvLyBhZ29yYSBzZSBpc1BsYXlpbmcgZm9yIGZhbHNvIC0gcGF1c2FyXG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG4gIH0sIFtpc1BsYXlpbmddKVxuXG4gIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cbiAgICAgICAgPHN0cm9uZz5Ub2NhbmRvIGFnb3JhIHtlcGlzb2RlPy50aXRsZX08L3N0cm9uZz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgey8qIFNlIGV4aXN0aXIgbyBlcHNvZGlvIG1vc3RyYXIgaXNzbyBzZSBuw6NvIGV4aXN0aXIgbW9zdHJhciBcIlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXJcIiAqL31cbiAgICAgIHsgZXBpc29kZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgd2lkdGg9ezU5Mn1cbiAgICAgICAgICAgIGhlaWdodD17NTkyfVxuICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XG4gICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNhc3NvIGV1IG7Do28gdGVuaGEgdW0gZXBzb2RpbyAqL31cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXsgIWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICA8c3Bhbj4wMDowMDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+IFxuICAgICAgICAgIHsvKiBzZSBldSB0aXZlciB1bSBlcHNvZGlvIHZvdSBtb3N0cmFyIDxTbGlkZXIvPiBzZSBuw6NvIHZvdSBtb3N0cmFyIGVtcHR5U2xpZGVyICovfVxuICAgICAgICAgIHsgZXBpc29kZSA/IChcbiAgICAgICAgICAgIDxTbGlkZXIgXG4gICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJ319XG4gICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzlmNzVmZid9fVxuICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17e2JvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOiA0fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IGVwaXNvZGUgJiYgKFxuICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cbiAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XG4gICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICBvblBhdXNlPXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGRlc2FiaWxpdGFkbyBjYXNvIG7Do28gdGVuaGEgZXBzaWRvZGUgdG9jYW5kbyAqL31cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIi8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259IFxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgey8qIHNlIGVzdGl2ZXIgdG9jYW5kbyAgbW9zdHJhciBwYXVzZSBzZSBuw6NvIG1vc3RyYSB0b2NhciovfVxuICAgICAgICAgICAgeyBpc1BsYXlpbmcgXG4gICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiUGF1c2VcIi8+IFxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlOZXh0fSBkaXNhYmxlZD17IWVwaXNvZGV9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIHByw7N4aW1hXCIvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

});