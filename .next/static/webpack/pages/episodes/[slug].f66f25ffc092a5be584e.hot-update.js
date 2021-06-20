/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": function() { return /* binding */ PlayerContext; },\n/* harmony export */   \"PlayerContextProvider\": function() { return /* binding */ PlayerContextProvider; },\n/* harmony export */   \"usePlayer\": function() { return /* binding */ usePlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  ;\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.\n\n  function togglePlay() {\n    // trocar o valor para o contrario dela !(negação)\n    setIsPlaying(!isPlaying);\n  }\n\n  ;\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  ;\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  ;\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  ;\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  ;\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasPrevious: hasPrevious,\n      hasNext: hasNext,\n      toggleLoop: toggleLoop,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImxlbmd0aCIsInBsYXlOZXh0IiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJCTyxJQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ3RDQywrQ0FBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRiwrQ0FBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osK0NBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUFBLG1CQUkxQ04sK0NBQVEsQ0FBQyxLQUFELENBSmtDO0FBQUEsTUFJckVPLFNBSnFFO0FBQUEsTUFJMURDLFlBSjBEOztBQUFBLG1CQUt0Q1IsK0NBQVEsQ0FBQyxLQUFELENBTDhCO0FBQUEsTUFLckVTLFdBTHFFO0FBQUEsTUFLeERDLGNBTHdEOztBQU81RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBZ0M7QUFDNUJWLGtCQUFjLENBQUMsQ0FBQ1UsT0FBRCxDQUFELENBQWQ7QUFDQVIsMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUFBOztBQUVELFdBQVNPLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUM5Q2Isa0JBQWMsQ0FBQ1ksSUFBRCxDQUFkO0FBQ0FWLDBCQUFzQixDQUFDVyxLQUFELENBQXRCO0FBQ0FULGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBQUEsR0FqQjJFLENBbUI1RTs7QUFDQSxXQUFTVSxVQUFULEdBQXNCO0FBQ047QUFDWlYsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTWSxVQUFULEdBQXNCO0FBQ2xCVCxnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNIOztBQUFBOztBQUVELFdBQVNXLGFBQVQsR0FBeUI7QUFDckJSLGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0g7O0FBQUE7O0FBRUQsV0FBU1UsZUFBVCxDQUF5QkMsS0FBekIsRUFBd0M7QUFDcENkLGdCQUFZLENBQUNjLEtBQUQsQ0FBWjtBQUNIOztBQUFBO0FBRUQsTUFBTUMsV0FBVyxHQUFHbEIsbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxNQUFNbUIsT0FBTyxHQUFJbkIsbUJBQW1CLEdBQUcsQ0FBdkIsR0FBNEJGLFdBQVcsQ0FBQ3NCLE1BQXhEOztBQUVBLFdBQVNDLFFBQVQsR0FBb0I7QUFDaEIsUUFBSUYsT0FBSixFQUFhO0FBQ1RsQiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDtBQUNKOztBQUFBOztBQUVELFdBQVNzQixZQUFULEdBQXdCO0FBQ3BCLFFBQUlKLFdBQUosRUFBaUI7QUFDYmpCLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNIO0FBQ0o7O0FBRUQsc0JBQ0ksOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFDSSxTQUFLLEVBQUU7QUFDSEYsaUJBQVcsRUFBWEEsV0FERztBQUVIRSx5QkFBbUIsRUFBbkJBLG1CQUZHO0FBR0hRLFVBQUksRUFBSkEsSUFIRztBQUlIRSxjQUFRLEVBQVJBLFFBSkc7QUFLSFcsY0FBUSxFQUFSQSxRQUxHO0FBTUhDLGtCQUFZLEVBQVpBLFlBTkc7QUFPSHBCLGVBQVMsRUFBVEEsU0FQRztBQVFIRSxlQUFTLEVBQVRBLFNBUkc7QUFTSEUsaUJBQVcsRUFBWEEsV0FURztBQVVITyxnQkFBVSxFQUFWQSxVQVZHO0FBV0hHLHFCQUFlLEVBQWZBLGVBWEc7QUFZSEUsaUJBQVcsRUFBWEEsV0FaRztBQWFIQyxhQUFPLEVBQVBBLE9BYkc7QUFjSEwsZ0JBQVUsRUFBVkEsVUFkRztBQWVIQyxtQkFBYSxFQUFiQTtBQWZHLEtBRFg7QUFBQSxjQW1CVW5CO0FBbkJWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVCSDs7R0EzRWVELHFCOztLQUFBQSxxQjtBQTZFVCxJQUFNNEIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUMzQixTQUFPQyxpREFBVSxDQUFDL0IsYUFBRCxDQUFqQjtBQUNILENBRk07O0lBQU04QixTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59O1xuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICAgIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gICAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xuICAgIGlzUGxheWluZzogYm9vbGVhbjtcbiAgICBpc0xvb3Bpbmc6IGJvb2xlYW47XG4gICAgaXNTaHVmZmxpbmc6IGJvb2xlYW47XG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWQ7XG4gICAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcbiAgICB0b2dnbGVMb29wOiAoKSA9PiB2b2lkO1xuICAgIHRvZ2dsZVNodWZmbGU6ICgpID0+IHZvaWQ7XG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XG4gICAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICAgIGhhc1ByZXZpb3VzOiBib29sZWFuO1xuICAgIGhhc05leHQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9O1xuXG4gICAgLy8gdG9nZ2xlUGxheSAtIHNlIGVsZSB0aXZlciB0b2NhbmRvIGV1IHBhdXNvIHNlIGVsZSB0aXZlciBwYXVzYWRvIGV1IHRvY28uXG4gICAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJvY2FyIG8gdmFsb3IgcGFyYSBvIGNvbnRyYXJpbyBkZWxhICEobmVnYcOnw6NvKVxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKSB7XG4gICAgICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcbiAgICAgICAgc2V0SXNTaHVmZmxpbmcoIWlzU2h1ZmZsaW5nKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOmJvb2xlYW4pIHtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHN0YXRlKVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuICAgIGNvbnN0IGhhc05leHQgPSAoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgICAgIGlmIChoYXNOZXh0KSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICAgICAgaWYgKGhhc1ByZXZpb3VzKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICBlcGlzb2RlTGlzdCwgXG4gICAgICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXG4gICAgICAgICAgICAgICAgcGxheSxcbiAgICAgICAgICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgICAgICAgICBwbGF5UHJldmlvdXMsXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICAgICAgICAgIGlzTG9vcGluZyxcbiAgICAgICAgICAgICAgICBpc1NodWZmbGluZyxcbiAgICAgICAgICAgICAgICB0b2dnbGVQbGF5LCBcbiAgICAgICAgICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXMsXG4gICAgICAgICAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgICAgICAgICB0b2dnbGVMb29wLFxuICAgICAgICAgICAgICAgIHRvZ2dsZVNodWZmbGUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

});