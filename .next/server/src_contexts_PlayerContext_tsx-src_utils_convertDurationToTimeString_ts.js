/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_contexts_PlayerContext_tsx-src_utils_convertDurationToTimeString_ts";
exports.ids = ["src_contexts_PlayerContext_tsx-src_utils_convertDurationToTimeString_ts"];
exports.modules = {

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerContext\": function() { return /* binding */ PlayerContext; },\n/* harmony export */   \"PlayerContextProvider\": function() { return /* binding */ PlayerContextProvider; },\n/* harmony export */   \"usePlayer\": function() { return /* binding */ usePlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/contexts/PlayerContext.tsx\";\n\nconst PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PlayerContextProvider({\n  children\n}) {\n  const {\n    0: episodeList,\n    1: setEpisodeList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: currentEpisodeIndex,\n    1: setCurrentEpisodeIndex\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const {\n    0: isPlaying,\n    1: setIsPlaying\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isLooping,\n    1: setIsLooping\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isShuffling,\n    1: setIsShuffling\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  ;\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.\n\n  function togglePlay() {\n    // trocar o valor para o contrario dela !(negação)\n    setIsPlaying(!isPlaying);\n  }\n\n  ;\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  ;\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  ;\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  ;\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n    setCurrentEpisodeIndex(0);\n  }\n\n  const hasPrevious = currentEpisodeIndex > 0;\n  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  ;\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {\n    value: {\n      episodeList,\n      currentEpisodeIndex,\n      play,\n      playList,\n      playNext,\n      playPrevious,\n      isPlaying,\n      isLooping,\n      isShuffling,\n      togglePlay,\n      setPlayingState,\n      hasPrevious,\n      hasNext,\n      toggleLoop,\n      toggleShuffle,\n      clearPlayerState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 9\n  }, this);\n}\nconst usePlayer = () => {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3NjYXN0ci1uZXh0Ly4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImNsZWFyUGxheWVyU3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQTZCTyxNQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxDQUErQjtBQUFFQztBQUFGLENBQS9CLEVBQXlFO0FBQzVFLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0MsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLG1CQUFEO0FBQUEsT0FBc0JDO0FBQXRCLE1BQWdERiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDSyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qk4sK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7O0FBRUEsV0FBU1MsSUFBVCxDQUFjQyxPQUFkLEVBQWdDO0FBQzVCWCxrQkFBYyxDQUFDLENBQUNXLE9BQUQsQ0FBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTTyxRQUFULENBQWtCQyxJQUFsQixFQUFtQ0MsS0FBbkMsRUFBa0Q7QUFDOUNkLGtCQUFjLENBQUNhLElBQUQsQ0FBZDtBQUNBViwwQkFBc0IsQ0FBQ1csS0FBRCxDQUF0QjtBQUNBVCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUFBLEdBakIyRSxDQW1CcEU7O0FBQ1IsV0FBU1UsVUFBVCxHQUFzQjtBQUNOO0FBQ1pWLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0g7O0FBQUE7O0FBRUQsV0FBU1ksVUFBVCxHQUFzQjtBQUNsQlQsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTVyxhQUFULEdBQXlCO0FBQ3JCUixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNIOztBQUFBOztBQUVELFdBQVNVLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXdDO0FBQ3BDZCxnQkFBWSxDQUFDYyxLQUFELENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTQyxnQkFBVCxHQUE0QjtBQUN4QnBCLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FHLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDSDs7QUFFRCxRQUFNa0IsV0FBVyxHQUFHbkIsbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxRQUFNb0IsT0FBTyxHQUFHZCxXQUFXLElBQUtOLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCSCxXQUFXLENBQUN3QixNQUF2RTs7QUFFQSxXQUFTQyxRQUFULEdBQW9CO0FBQ2hCLFFBQUloQixXQUFKLEVBQWlCO0FBQ2IsWUFBTWlCLHNCQUFzQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCN0IsV0FBVyxDQUFDd0IsTUFBdkMsQ0FBL0I7QUFDQXBCLDRCQUFzQixDQUFDc0Isc0JBQUQsQ0FBdEI7QUFFSCxLQUpELE1BSU8sSUFBSUgsT0FBSixFQUFhO0FBQ2hCbkIsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0g7QUFDSjs7QUFBQTs7QUFFRCxXQUFTMkIsWUFBVCxHQUF3QjtBQUNwQixRQUFJUixXQUFKLEVBQWlCO0FBQ2JsQiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDtBQUNKOztBQUVELHNCQUNJLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0ksU0FBSyxFQUFFO0FBQ0hILGlCQURHO0FBRUhHLHlCQUZHO0FBR0hRLFVBSEc7QUFJSEUsY0FKRztBQUtIWSxjQUxHO0FBTUhLLGtCQU5HO0FBT0h6QixlQVBHO0FBUUhFLGVBUkc7QUFTSEUsaUJBVEc7QUFVSE8sZ0JBVkc7QUFXSEcscUJBWEc7QUFZSEcsaUJBWkc7QUFhSEMsYUFiRztBQWNITixnQkFkRztBQWVIQyxtQkFmRztBQWdCSEc7QUFoQkcsS0FEWDtBQUFBLGNBb0JVdEI7QUFwQlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIO0FBRU0sTUFBTWdDLFNBQVMsR0FBRyxNQUFNO0FBQzNCLFNBQU9DLGlEQUFVLENBQUNwQyxhQUFELENBQWpCO0FBQ0gsQ0FGTSIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9QbGF5ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lbWJlcnM6IHN0cmluZztcbiAgICB0aHVtYm5haWw6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHVybDogc3RyaW5nO1xufTtcblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgaXNMb29waW5nOiBib29sZWFuO1xuICAgIGlzU2h1ZmZsaW5nOiBib29sZWFuO1xuICAgIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xuICAgIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XG4gICAgdG9nZ2xlTG9vcDogKCkgPT4gdm9pZDtcbiAgICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xuICAgIHBsYXlOZXh0OiAoKSA9PiB2b2lkO1xuICAgIHBsYXlQcmV2aW91czogKCkgPT4gdm9pZDtcbiAgICBjbGVhclBsYXllclN0YXRlOiAoKSA9PiB2b2lkO1xuICAgIGhhc1ByZXZpb3VzOiBib29sZWFuO1xuICAgIGhhc05leHQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9O1xuXG4gICAgICAgICAgICAvLyB0b2dnbGVQbGF5IC0gc2UgZWxlIHRpdmVyIHRvY2FuZG8gZXUgcGF1c28gc2UgZWxlIHRpdmVyIHBhdXNhZG8gZXUgdG9jby5cbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cm9jYXIgbyB2YWxvciBwYXJhIG8gY29udHJhcmlvIGRlbGEgIShuZWdhw6fDo28pXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpIHtcbiAgICAgICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTaHVmZmxlKCkge1xuICAgICAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6Ym9vbGVhbikge1xuICAgICAgICBzZXRJc1BsYXlpbmcoc3RhdGUpXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyUGxheWVyU3RhdGUoKSB7XG4gICAgICAgIHNldEVwaXNvZGVMaXN0KFtdKTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuICAgIGNvbnN0IGhhc05leHQgPSBpc1NodWZmbGluZyB8fCAoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgICAgIGlmIChpc1NodWZmbGluZykge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJhbmRvbUVwaXNvZGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aClcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleCk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChoYXNOZXh0KSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKSB7XG4gICAgICAgIGlmIChoYXNQcmV2aW91cykge1xuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIGVwaXNvZGVMaXN0LCBcbiAgICAgICAgICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcbiAgICAgICAgICAgICAgICBwbGF5LFxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LFxuICAgICAgICAgICAgICAgIHBsYXlOZXh0LFxuICAgICAgICAgICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgICAgICAgICAgaXNMb29waW5nLFxuICAgICAgICAgICAgICAgIGlzU2h1ZmZsaW5nLFxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXksIFxuICAgICAgICAgICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICBoYXNQcmV2aW91cyxcbiAgICAgICAgICAgICAgICBoYXNOZXh0LFxuICAgICAgICAgICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgICAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcbiAgICAgICAgICAgICAgICBjbGVhclBsYXllclN0YXRlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ }),

/***/ "./src/utils/convertDurationToTimeString.ts":
/*!**************************************************!*\
  !*** ./src/utils/convertDurationToTimeString.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDurationToTimeString\": function() { return /* binding */ convertDurationToTimeString; }\n/* harmony export */ });\nfunction convertDurationToTimeString(duration) {\n  const hours = Math.floor(duration / 3600);\n  const minutes = Math.floor(duration % 3600 / 60);\n  const seconds = duration % 60;\n  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');\n  return timeString;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3NjYXN0ci1uZXh0Ly4vc3JjL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZy50cz8zMDUyIl0sIm5hbWVzIjpbImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImR1cmF0aW9uIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInRpbWVTdHJpbmciLCJtYXAiLCJ1bml0IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsMkJBQVQsQ0FBcUNDLFFBQXJDLEVBQXVEO0FBQzFELFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsR0FBRyxJQUF0QixDQUFkO0FBQ0EsUUFBTUksT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsUUFBUSxHQUFHLElBQVosR0FBb0IsRUFBL0IsQ0FBaEI7QUFDQSxRQUFNSyxPQUFPLEdBQUdMLFFBQVEsR0FBRyxFQUEzQjtBQUVBLFFBQU1NLFVBQVUsR0FBRyxDQUFDTCxLQUFELEVBQVFHLE9BQVIsRUFBaUJDLE9BQWpCLEVBQ2RFLEdBRGMsQ0FDVkMsSUFBSSxJQUFJQyxNQUFNLENBQUNELElBQUQsQ0FBTixDQUFhRSxRQUFiLENBQXNCLENBQXRCLEVBQXlCLEdBQXpCLENBREUsRUFFZEMsSUFGYyxDQUVULEdBRlMsQ0FBbkI7QUFJQSxTQUFPTCxVQUFQO0FBQ0giLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gMzYwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IGR1cmF0aW9uICUgNjA7XG5cbiAgICBjb25zdCB0aW1lU3RyaW5nID0gW2hvdXJzLCBtaW51dGVzLCBzZWNvbmRzXVxuICAgICAgICAubWFwKHVuaXQgPT4gU3RyaW5nKHVuaXQpLnBhZFN0YXJ0KDIsICcwJykpXG4gICAgICAgIC5qb2luKCc6JylcbiAgICAgICAgXG4gICAgcmV0dXJuIHRpbWVTdHJpbmc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/convertDurationToTimeString.ts\n");

/***/ })

};
;