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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": function() { return /* binding */ PlayerContext; },\n/* harmony export */   \"PlayerContextProvider\": function() { return /* binding */ PlayerContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  ;\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.\n\n  function togglePlay() {\n    // trocar o valor para o contrario dela !(negação)\n    setIsPlaying(!isPlaying);\n  }\n\n  ;\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  ;\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  ;\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasPrevious: hasPrevious,\n      hasNext: hasNext\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PlayerContextProvider, \"LrQXJ4YCuKXOoMsmvRtpeyylJ9U=\");\n\n_c = PlayerContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImxlbmd0aCIsInBsYXlOZXh0IiwicGxheVByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVCTyxJQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ3RDQywrQ0FBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRiwrQ0FBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osK0NBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUs1RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBZ0M7QUFDNUJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUosMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUFBOztBQUVELFdBQVNHLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUM5Q1Qsa0JBQWMsQ0FBQ1EsSUFBRCxDQUFkO0FBQ0FOLDBCQUFzQixDQUFDTyxLQUFELENBQXRCO0FBQ0FMLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBQUEsR0FmMkUsQ0FpQjVFOztBQUNBLFdBQVNNLFVBQVQsR0FBc0I7QUFDTjtBQUNaTixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNIOztBQUFBOztBQUVELFdBQVNRLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXdDO0FBQ3BDUixnQkFBWSxDQUFDUSxLQUFELENBQVo7QUFDSDs7QUFBQTtBQUVELE1BQU1DLFdBQVcsR0FBR1osbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxNQUFNYSxPQUFPLEdBQUliLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCRixXQUFXLENBQUNnQixNQUF4RDs7QUFFQSxXQUFTQyxRQUFULEdBQW9CO0FBQ2hCLFFBQUlGLE9BQUosRUFBYTtBQUNUWiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDtBQUNKOztBQUFBOztBQUVELFdBQVNnQixZQUFULEdBQXdCO0FBQ3BCLFFBQUlKLFdBQUosRUFBaUI7QUFDYlgsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxzQkFDSSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUNJLFNBQUssRUFBRTtBQUNIRixpQkFBVyxFQUFYQSxXQURHO0FBRUhFLHlCQUFtQixFQUFuQkEsbUJBRkc7QUFHSEksVUFBSSxFQUFKQSxJQUhHO0FBSUhFLGNBQVEsRUFBUkEsUUFKRztBQUtIUyxjQUFRLEVBQVJBLFFBTEc7QUFNSEMsa0JBQVksRUFBWkEsWUFORztBQU9IZCxlQUFTLEVBQVRBLFNBUEc7QUFRSE8sZ0JBQVUsRUFBVkEsVUFSRztBQVNIQyxxQkFBZSxFQUFmQSxlQVRHO0FBVUhFLGlCQUFXLEVBQVhBLFdBVkc7QUFXSEMsYUFBTyxFQUFQQTtBQVhHLEtBRFg7QUFBQSxjQWVVakI7QUFmVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBN0RlRCxxQjs7S0FBQUEscUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUGxheWVyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZW1iZXJzOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xuICAgIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XG4gICAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICAgIGhhc1ByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICAgIGhhc05leHQ6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIHRvZ2dsZVBsYXkgLSBzZSBlbGUgdGl2ZXIgdG9jYW5kbyBldSBwYXVzbyBzZSBlbGUgdGl2ZXIgcGF1c2FkbyBldSB0b2NvLlxuICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyb2NhciBvIHZhbG9yIHBhcmEgbyBjb250cmFyaW8gZGVsYSAhKG5lZ2HDp8OjbylcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6Ym9vbGVhbikge1xuICAgICAgICBzZXRJc1BsYXlpbmcoc3RhdGUpXG4gICAgfTtcblxuICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XG4gICAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xuICAgICAgICBpZiAoaGFzUHJldmlvdXMpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIGVwaXNvZGVMaXN0LCBcbiAgICAgICAgICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcbiAgICAgICAgICAgICAgICBwbGF5LFxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LFxuICAgICAgICAgICAgICAgIHBsYXlOZXh0LFxuICAgICAgICAgICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgICAgICAgICAgdG9nZ2xlUGxheSwgXG4gICAgICAgICAgICAgICAgc2V0UGxheWluZ1N0YXRlLFxuICAgICAgICAgICAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGhhc05leHQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

});