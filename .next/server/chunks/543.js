exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 1983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QM": function() { return /* binding */ PlayerContextProvider; },
/* harmony export */   "nn": function() { return /* binding */ usePlayer; }
/* harmony export */ });
/* unused harmony export PlayerContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function PlayerContextProvider({
  children
}) {
  const {
    0: episodeList,
    1: setEpisodeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: currentEpisodeIndex,
    1: setCurrentEpisodeIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: isPlaying,
    1: setIsPlaying
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isLooping,
    1: setIsLooping
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isShuffling,
    1: setIsShuffling
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  ;

  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  ; // togglePlay - se ele tiver tocando eu pauso se ele tiver pausado eu toco.

  function togglePlay() {
    // trocar o valor para o contrario dela !(negação)
    setIsPlaying(!isPlaying);
  }

  ;

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  ;

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  ;

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  ;

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  ;

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerContext.Provider, {
    value: {
      episodeList,
      currentEpisodeIndex,
      play,
      playList,
      playNext,
      playPrevious,
      isPlaying,
      isLooping,
      isShuffling,
      togglePlay,
      setPlayingState,
      hasPrevious,
      hasNext,
      toggleLoop,
      toggleShuffle,
      clearPlayerState
    },
    children: children
  });
}
const usePlayer = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext);
};

/***/ }),

/***/ 4005:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ convertDurationToTimeString; }
/* harmony export */ });
function convertDurationToTimeString(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = duration % 60;
  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
  return timeString;
}

/***/ })

};
;