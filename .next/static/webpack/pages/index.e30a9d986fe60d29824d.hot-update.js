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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": function() { return /* binding */ PlayerContext; },\n/* harmony export */   \"PlayerContextProvider\": function() { return /* binding */ PlayerContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  ;\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.\n\n  function togglePlay() {\n    // trocar o valor para o contrario dela !(negação)\n    setIsPlaying(!isPlaying);\n  }\n\n  ;\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  ;\n  var hasPrevious = currentEpisodeIndex > 0;\n\n  function playNext() {\n    var nextEpisodeIndex = currentEpisodeIndex + 1;\n\n    if (nextEpisodeIndex < episodeList.length) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  ;\n\n  function playPrevious() {\n    if (currentEpisodeIndex > 0) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PlayerContextProvider, \"LrQXJ4YCuKXOoMsmvRtpeyylJ9U=\");\n\n_c = PlayerContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwicGxheU5leHQiLCJuZXh0RXBpc29kZUluZGV4IiwibGVuZ3RoIiwicGxheVByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCTyxJQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ3RDQywrQ0FBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRiwrQ0FBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osK0NBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUs1RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBZ0M7QUFDNUJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUosMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUFBOztBQUVELFdBQVNHLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUM5Q1Qsa0JBQWMsQ0FBQ1EsSUFBRCxDQUFkO0FBQ0FOLDBCQUFzQixDQUFDTyxLQUFELENBQXRCO0FBQ0FMLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBQUEsR0FmMkUsQ0FpQjVFOztBQUNBLFdBQVNNLFVBQVQsR0FBc0I7QUFDTjtBQUNaTixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNIOztBQUFBOztBQUVELFdBQVNRLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXdDO0FBQ3BDUixnQkFBWSxDQUFDUSxLQUFELENBQVo7QUFDSDs7QUFBQTtBQUVELE1BQU1DLFdBQVcsR0FBR1osbUJBQW1CLEdBQUcsQ0FBMUM7O0FBR0EsV0FBU2EsUUFBVCxHQUFvQjtBQUNoQixRQUFNQyxnQkFBZ0IsR0FBR2QsbUJBQW1CLEdBQUcsQ0FBL0M7O0FBRUEsUUFBSWMsZ0JBQWdCLEdBQUdoQixXQUFXLENBQUNpQixNQUFuQyxFQUEyQztBQUN2Q2QsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0g7QUFDSjs7QUFBQTs7QUFFRCxXQUFTZ0IsWUFBVCxHQUF3QjtBQUNwQixRQUFJaEIsbUJBQW1CLEdBQUcsQ0FBMUIsRUFBNkI7QUFDekJDLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNIO0FBQ0o7O0FBRUQsc0JBQ0ksOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFDSSxTQUFLLEVBQUU7QUFDSEYsaUJBQVcsRUFBWEEsV0FERztBQUVIRSx5QkFBbUIsRUFBbkJBLG1CQUZHO0FBR0hJLFVBQUksRUFBSkEsSUFIRztBQUlIRSxjQUFRLEVBQVJBLFFBSkc7QUFLSE8sY0FBUSxFQUFSQSxRQUxHO0FBTUhHLGtCQUFZLEVBQVpBLFlBTkc7QUFPSGQsZUFBUyxFQUFUQSxTQVBHO0FBUUhPLGdCQUFVLEVBQVZBLFVBUkc7QUFTSEMscUJBQWUsRUFBZkE7QUFURyxLQURYO0FBQUEsY0FhVWQ7QUFiVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBN0RlRCxxQjs7S0FBQUEscUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUGxheWVyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZW1iZXJzOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xuICAgIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XG4gICAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKSB7XG4gICAgICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIH07XG5cbiAgICAvLyB0b2dnbGVQbGF5IC0gc2UgZWxlIHRpdmVyIHRvY2FuZG8gZXUgcGF1c28gc2UgZWxlIHRpdmVyIHBhdXNhZG8gZXUgdG9jby5cbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cm9jYXIgbyB2YWxvciBwYXJhIG8gY29udHJhcmlvIGRlbGEgIShuZWdhw6fDo28pXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOmJvb2xlYW4pIHtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHN0YXRlKVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuXG5cbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICAgICAgY29uc3QgbmV4dEVwaXNvZGVJbmRleCA9IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxO1xuXG4gICAgICAgIGlmIChuZXh0RXBpc29kZUluZGV4IDwgZXBpc29kZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICBlcGlzb2RlTGlzdCwgXG4gICAgICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXG4gICAgICAgICAgICAgICAgcGxheSxcbiAgICAgICAgICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgICAgICAgICBwbGF5UHJldmlvdXMsXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXksIFxuICAgICAgICAgICAgICAgIHNldFBsYXlpbmdTdGF0ZSBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

});