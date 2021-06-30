(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/styles/app.module.scss
var app_module = __webpack_require__(4811);
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 27 modules
var format = __webpack_require__(3011);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/pt-BR/index.js + 5 modules
var pt_BR = __webpack_require__(8994);
// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__(3372);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx





function Header() {
  const currentDate = (0,format/* default */.Z)(new Date(), 'EEEEEE, d MMMM', {
    locale: pt_BR/* default */.Z
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (styles_module_default()).headerContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/logo.svg",
      alt: "Podcastr"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "O melhor para voc\xEA ouvir, sempre"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: currentDate
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "rc-slider"
var external_rc_slider_namespaceObject = require("rc-slider");;
var external_rc_slider_default = /*#__PURE__*/__webpack_require__.n(external_rc_slider_namespaceObject);
// EXTERNAL MODULE: ./src/contexts/PlayerContext.tsx
var PlayerContext = __webpack_require__(1983);
// EXTERNAL MODULE: ./src/components/Player/styles.module.scss
var Player_styles_module = __webpack_require__(5638);
var Player_styles_module_default = /*#__PURE__*/__webpack_require__.n(Player_styles_module);
// EXTERNAL MODULE: ./src/utils/convertDurationToTimeString.ts
var convertDurationToTimeString = __webpack_require__(4005);
;// CONCATENATED MODULE: ./src/components/Player/index.tsx









function Player() {
  var _episode$duration;

  const audioRef = (0,external_react_.useRef)(null);
  const {
    0: progress,
    1: setProgress
  } = (0,external_react_.useState)(0);
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    clearPlayerState
  } = (0,PlayerContext/* usePlayer */.nn)(); // disparar essa função toda vez que isPlaying for alterado  

  (0,external_react_.useEffect)(() => {
    // não retorna nada
    if (!audioRef.current) {
      return;
    } // Se isPlaying for true - play


    if (isPlaying) {
      audioRef.current.play(); // agora se isPlaying for falso - pausar
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setuoProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  ;

  function handleSeek(amount) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  ;

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  ;
  const episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Player_styles_module_default()).playerContainer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
        children: ["Tocando agora ", episode === null || episode === void 0 ? void 0 : episode.title]
      })]
    }), episode ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Player_styles_module_default()).currentEpisode,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: episode.title
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: episode.members
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Player_styles_module_default()).emptyPlayer,
      children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "Selecione um podcast para ouvir"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: !episode ? (Player_styles_module_default()).empty : '',
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Player_styles_module_default()).progress,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,convertDurationToTimeString/* convertDurationToTimeString */.D)(progress)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Player_styles_module_default()).slider,
          children: episode ? /*#__PURE__*/jsx_runtime_.jsx((external_rc_slider_default()), {
            max: episode.duration,
            value: progress,
            onChange: handleSeek,
            trackStyle: {
              backgroundColor: '#04d361'
            },
            railStyle: {
              background: '#9f75ff'
            },
            handleStyle: {
              borderColor: '#04d361',
              borderWidth: 4
            }
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Player_styles_module_default()).emptySlider
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,convertDurationToTimeString/* convertDurationToTimeString */.D)((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        })]
      }), episode && /*#__PURE__*/jsx_runtime_.jsx("audio", {
        src: episode.url,
        ref: audioRef,
        loop: isLooping,
        autoPlay: true,
        onEnded: handleEpisodeEnded,
        onPlay: () => setPlayingState(true),
        onPause: () => setPlayingState(false),
        onLoadedMetadata: setuoProgressListener
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Player_styles_module_default()).buttons,
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          disabled: !episode || episodeList.length === 1,
          onClick: toggleShuffle,
          className: isShuffling ? (Player_styles_module_default()).isActive : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: playPrevious,
          disabled: !episode || !hasPrevious,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: (Player_styles_module_default()).playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/pause.svg",
            alt: "Pause"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/play.svg",
            alt: "Tocar"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: playNext,
          disabled: !episode || !hasNext,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/play-next.svg",
            alt: "Tocar pr\xF3xima"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          disabled: !episode,
          onClick: toggleLoop,
          className: isLooping ? (Player_styles_module_default()).isActive : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          })
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(PlayerContext/* PlayerContextProvider */.QM, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (app_module_default()).wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      }), /*#__PURE__*/jsx_runtime_.jsx(Player, {})]
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 3372:
/***/ (function(module) {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__3jyUX"
};


/***/ }),

/***/ 5638:
/***/ (function(module) {

// Exports
module.exports = {
	"playerContainer": "styles_playerContainer__2kTpC",
	"empty": "styles_empty__XvMyC",
	"progress": "styles_progress__ULW9V",
	"currentEpisode": "styles_currentEpisode__3Qmiu",
	"emptyPlayer": "styles_emptyPlayer__WHPi6",
	"slider": "styles_slider__3_Mkb",
	"emptySlider": "styles_emptySlider__3p9Ad",
	"buttons": "styles_buttons__i4fo8",
	"isActive": "styles_isActive__PGy6l",
	"playButton": "styles_playButton__fmvI6"
};


/***/ }),

/***/ 4811:
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "app_wrapper__X8llh"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [943,999,11,543], function() { return __webpack_exec__(5434); });
module.exports = __webpack_exports__;

})();