/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": function() { return /* binding */ PlayerContext; },\n/* harmony export */   \"PlayerContextProvider\": function() { return /* binding */ PlayerContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  ;\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.\n\n  function togglePlay() {\n    // trocar o valor para o contrario dela !(negação)\n    setIsPlaying(!isPlaying);\n  }\n\n  ;\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  ;\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    var nextEpisodeIndex = currentEpisodeIndex + 1;\n\n    if (nextEpisodeIndex < episodeList.length) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  ;\n\n  function playPrevious() {\n    if (currentEpisodeIndex > 0) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PlayerContextProvider, \"LrQXJ4YCuKXOoMsmvRtpeyylJ9U=\");\n\n_c = PlayerContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImxlbmd0aCIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGVJbmRleCIsInBsYXlQcmV2aW91cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQk8sSUFBTUEsYUFBYSxnQkFBR0Msb0RBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsU0FBU0MscUJBQVQsT0FBeUU7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDOztBQUFBLGtCQUN0Q0MsK0NBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDckVDLFdBRHFFO0FBQUEsTUFDeERDLGNBRHdEOztBQUFBLG1CQUV0QkYsK0NBQVEsQ0FBQyxDQUFELENBRmM7QUFBQSxNQUVyRUcsbUJBRnFFO0FBQUEsTUFFaERDLHNCQUZnRDs7QUFBQSxtQkFHMUNKLCtDQUFRLENBQUMsS0FBRCxDQUhrQztBQUFBLE1BR3JFSyxTQUhxRTtBQUFBLE1BRzFEQyxZQUgwRDs7QUFLNUUsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQWdDO0FBQzVCTixrQkFBYyxDQUFDLENBQUNNLE9BQUQsQ0FBRCxDQUFkO0FBQ0FKLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTRyxRQUFULENBQWtCQyxJQUFsQixFQUFtQ0MsS0FBbkMsRUFBa0Q7QUFDOUNULGtCQUFjLENBQUNRLElBQUQsQ0FBZDtBQUNBTiwwQkFBc0IsQ0FBQ08sS0FBRCxDQUF0QjtBQUNBTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUFBLEdBZjJFLENBaUI1RTs7QUFDQSxXQUFTTSxVQUFULEdBQXNCO0FBQ047QUFDWk4sZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTUSxlQUFULENBQXlCQyxLQUF6QixFQUF3QztBQUNwQ1IsZ0JBQVksQ0FBQ1EsS0FBRCxDQUFaO0FBQ0g7O0FBQUE7QUFFRCxNQUFNQyxXQUFXLEdBQUdaLG1CQUFtQixHQUFHLENBQTFDO0FBQ0EsTUFBTWEsT0FBTyxHQUFJYixtQkFBbUIsR0FBRyxDQUF2QixHQUE0QkYsV0FBVyxDQUFDZ0IsTUFBeEQ7O0FBRUEsV0FBU0MsUUFBVCxHQUFvQjtBQUNoQixRQUFNQyxnQkFBZ0IsR0FBR2hCLG1CQUFtQixHQUFHLENBQS9DOztBQUVBLFFBQUlnQixnQkFBZ0IsR0FBR2xCLFdBQVcsQ0FBQ2dCLE1BQW5DLEVBQTJDO0FBQ3ZDYiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDtBQUNKOztBQUFBOztBQUVELFdBQVNpQixZQUFULEdBQXdCO0FBQ3BCLFFBQUlqQixtQkFBbUIsR0FBRyxDQUExQixFQUE2QjtBQUN6QkMsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxzQkFDSSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUNJLFNBQUssRUFBRTtBQUNIRixpQkFBVyxFQUFYQSxXQURHO0FBRUhFLHlCQUFtQixFQUFuQkEsbUJBRkc7QUFHSEksVUFBSSxFQUFKQSxJQUhHO0FBSUhFLGNBQVEsRUFBUkEsUUFKRztBQUtIUyxjQUFRLEVBQVJBLFFBTEc7QUFNSEUsa0JBQVksRUFBWkEsWUFORztBQU9IZixlQUFTLEVBQVRBLFNBUEc7QUFRSE8sZ0JBQVUsRUFBVkEsVUFSRztBQVNIQyxxQkFBZSxFQUFmQTtBQVRHLEtBRFg7QUFBQSxjQWFVZDtBQWJWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0E3RGVELHFCOztLQUFBQSxxQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9QbGF5ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lbWJlcnM6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHVybDogc3RyaW5nO1xufTtcblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWQ7XG4gICAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcbiAgICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcbiAgICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIHRvZ2dsZVBsYXkgLSBzZSBlbGUgdGl2ZXIgdG9jYW5kbyBldSBwYXVzbyBzZSBlbGUgdGl2ZXIgcGF1c2FkbyBldSB0b2NvLlxuICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyb2NhciBvIHZhbG9yIHBhcmEgbyBjb250cmFyaW8gZGVsYSAhKG5lZ2HDp8OjbylcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6Ym9vbGVhbikge1xuICAgICAgICBzZXRJc1BsYXlpbmcoc3RhdGUpXG4gICAgfTtcblxuICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XG4gICAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICAgICAgY29uc3QgbmV4dEVwaXNvZGVJbmRleCA9IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxO1xuXG4gICAgICAgIGlmIChuZXh0RXBpc29kZUluZGV4IDwgZXBpc29kZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICBlcGlzb2RlTGlzdCwgXG4gICAgICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXG4gICAgICAgICAgICAgICAgcGxheSxcbiAgICAgICAgICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgICAgICAgICBwbGF5UHJldmlvdXMsXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXksIFxuICAgICAgICAgICAgICAgIHNldFBsYXlpbmdTdGF0ZSBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

});