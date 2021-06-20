/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": function() { return /* binding */ PlayerContext; },\n/* harmony export */   \"PlayerContextProvider\": function() { return /* binding */ PlayerContextProvider; },\n/* harmony export */   \"usePlayer\": function() { return /* binding */ usePlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  ;\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.\n\n  function togglePlay() {\n    // trocar o valor para o contrario dela !(negação)\n    setIsPlaying(!isPlaying);\n  }\n\n  ;\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  ;\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  ;\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  ;\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n    setCurrentEpisodeIndex(0);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  ;\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasPrevious: hasPrevious,\n      hasNext: hasNext,\n      toggleLoop: toggleLoop,\n      toggleShuffle: toggleShuffle,\n      clearPlayerState: clearPlayerState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImNsZWFyUGxheWVyU3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEJPLElBQU1BLGFBQWEsZ0JBQUdDLG9EQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXlFO0FBQUE7O0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3Qzs7QUFBQSxrQkFDdENDLCtDQUFRLENBQUMsRUFBRCxDQUQ4QjtBQUFBLE1BQ3JFQyxXQURxRTtBQUFBLE1BQ3hEQyxjQUR3RDs7QUFBQSxtQkFFdEJGLCtDQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFckVHLG1CQUZxRTtBQUFBLE1BRWhEQyxzQkFGZ0Q7O0FBQUEsbUJBRzFDSiwrQ0FBUSxD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QTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIOztHQXJGZUQscUI7O0tBQUFBLHFCO0FBdUZULElBQU1pQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQzNCLFNBQU9DLGlEQUFVLENBQUNwQyxhQUFELENBQWpCO0FBQ0gsQ0FGTTs7SUFBTW1DLFMiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUGxheWVyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZW1iZXJzOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIGlzTG9vcGluZzogYm9vbGVhbjtcbiAgICBpc1NodWZmbGluZzogYm9vbGVhbjtcbiAgICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBzZXRQbGF5aW5nU3RhdGU6IChzdGF0ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xuICAgIHRvZ2dsZUxvb3A6ICgpID0+IHZvaWQ7XG4gICAgdG9nZ2xlU2h1ZmZsZTogKCkgPT4gdm9pZDtcbiAgICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcbiAgICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XG4gICAgY2xlYXJQbGF5ZXJTdGF0ZTogKCkgPT4gdm9pZDtcbiAgICBoYXNQcmV2aW91czogYm9vbGVhbjtcbiAgICBoYXNOZXh0OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIHRvZ2dsZVBsYXkgLSBzZSBlbGUgdGl2ZXIgdG9jYW5kbyBldSBwYXVzbyBzZSBlbGUgdGl2ZXIgcGF1c2FkbyBldSB0b2NvLlxuICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyb2NhciBvIHZhbG9yIHBhcmEgbyBjb250cmFyaW8gZGVsYSAhKG5lZ2HDp8OjbylcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVMb29wKCkge1xuICAgICAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKSB7XG4gICAgICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodWZmbGluZyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldFBsYXlpbmdTdGF0ZShzdGF0ZTpib29sZWFuKSB7XG4gICAgICAgIHNldElzUGxheWluZyhzdGF0ZSlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2xlYXJQbGF5ZXJTdGF0ZSgpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW10pO1xuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XG4gICAgY29uc3QgaGFzTmV4dCA9IGlzU2h1ZmZsaW5nIHx8IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICAgICAgaWYgKGlzU2h1ZmZsaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKVxuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0UmFuZG9tRXBpc29kZUluZGV4KTtcblxuICAgICAgICB9IGVsc2UgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICAgICAgaWYgKGhhc1ByZXZpb3VzKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgICAgICAgdmFsdWU9e3sgXG4gICAgICAgICAgICAgICAgZXBpc29kZUxpc3QsIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxuICAgICAgICAgICAgICAgIHBsYXksXG4gICAgICAgICAgICAgICAgcGxheUxpc3QsXG4gICAgICAgICAgICAgICAgcGxheU5leHQsXG4gICAgICAgICAgICAgICAgcGxheVByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgICAgICAgICBpc0xvb3BpbmcsXG4gICAgICAgICAgICAgICAgaXNTaHVmZmxpbmcsXG4gICAgICAgICAgICAgICAgdG9nZ2xlUGxheSwgXG4gICAgICAgICAgICAgICAgc2V0UGxheWluZ1N0YXRlLFxuICAgICAgICAgICAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGhhc05leHQsXG4gICAgICAgICAgICAgICAgdG9nZ2xlTG9vcCxcbiAgICAgICAgICAgICAgICB0b2dnbGVTaHVmZmxlLFxuICAgICAgICAgICAgICAgIGNsZWFyUGxheWVyU3RhdGVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

});