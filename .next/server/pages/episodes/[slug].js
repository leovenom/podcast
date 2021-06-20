/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/episodes/[slug]";
exports.ids = ["pages/episodes/[slug]"];
exports.modules = {

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Episode; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"./node_modules/date-fns/esm/locale/pt-BR/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episode.module.scss */ \"./src/pages/episodes/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/pages/episodes/[slug].tsx\";\n\n\n\n\n\n\n\nfunction Episode({\n  episode\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_episode_module_scss__WEBPACK_IMPORTED_MODULE_6___default().episode),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_episode_module_scss__WEBPACK_IMPORTED_MODULE_6___default().thumbnailContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/arrow-left.svg\",\n            alt: \"Voltar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"/play.svg\",\n          alt: \"Tocar epis\\xF3dio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.publishedAt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.durationAsString\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_episode_module_scss__WEBPACK_IMPORTED_MODULE_6___default().description),\n      dangerouslySetInnerHTML: {\n        __html: episode.description\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\nconst getStaticPaths = async () => {\n  const {\n    data\n  } = await _services_api__WEBPACK_IMPORTED_MODULE_4__.api.get('episodes', {\n    params: {\n      _limit: 2,\n      _sort: 'published_at',\n      _order: 'desc'\n    }\n  });\n  const paths = data.map(episode => {\n    return {\n      params: {\n        slug: episode.id\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: 'blocking'\n  };\n};\nconst getStaticProps = async ctx => {\n  const {\n    slug\n  } = ctx.params;\n  const {\n    data\n  } = await _services_api__WEBPACK_IMPORTED_MODULE_4__.api.get(`/episodes/${slug}`);\n  const episode = {\n    id: data.id,\n    title: data.title,\n    thumbnail: data.thumbnail,\n    members: data.members,\n    publishedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(data.published_at), 'd MMM yy', {\n      locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_7__.default\n    }),\n    duration: Number(data.file.duration),\n    durationAsString: (0,_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_5__.convertDurationToTimeString)(Number(data.file.duration)),\n    description: data.description,\n    url: data.file.url\n  };\n  return {\n    props: {\n      episode\n    },\n    revalidate: 60 * 60 * 24 // 24 hours\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ZXJuZXh0Ly4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInN0eWxlcyIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsInB1Ymxpc2hlZEF0IiwiZHVyYXRpb25Bc1N0cmluZyIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwiYXBpIiwicGFyYW1zIiwiX2xpbWl0IiwiX3NvcnQiLCJfb3JkZXIiLCJwYXRocyIsIm1hcCIsInNsdWciLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjdHgiLCJmb3JtYXQiLCJwYXJzZUlTTyIsInB1Ymxpc2hlZF9hdCIsImxvY2FsZSIsInB0QlIiLCJkdXJhdGlvbiIsIk51bWJlciIsImZpbGUiLCJjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmciLCJ1cmwiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBaUJlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUE0QztBQUN2RCxzQkFDSTtBQUFLLGFBQVMsRUFBRUMscUVBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLGdGQUFoQjtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDQTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsaUJBQVQ7QUFBMkIsZUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUksOERBQUMsbURBQUQ7QUFDSSxhQUFLLEVBQUUsR0FEWDtBQUVJ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cUI7O0FBSnJCLEdBQVA7QUFNRCxDQXZCSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUic7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2VwaXNvZGUubW9kdWxlLnNjc3MnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gICAgaWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dGh1bWJuYWlsOiBzdHJpbmc7XG5cdG1lbWJlcnM6IHN0cmluZztcblx0ZHVyYXRpb246IG51bWJlcjtcblx0ZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nO1xuXHR1cmw6IHN0cmluZztcblx0cHVibGlzaGVkQXQ6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcbnR5cGUgRXBpc29kZVByb3BzID0ge1xuICAgIGVwaXNvZGU6IEVwaXNvZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcGlzb2RlKHsgZXBpc29kZSB9OiBFcGlzb2RlUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aHVtYm5haWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiVm9sdGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMT57ZXBpc29kZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGVwaXNvZGUuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJywge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0X2xpbWl0OiAyLFxuXHRcdFx0X3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuXHRcdFx0X29yZGVyOiAnZGVzYydcblx0XHR9XG5cdH0pXG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc2x1ZzogZXBpc29kZS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IGN0eC5wYXJhbXNcbiAgXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KGAvZXBpc29kZXMvJHtzbHVnfWApXG4gIFxuICAgIGNvbnN0IGVwaXNvZGUgPSB7XG4gICAgICBpZDogZGF0YS5pZCxcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgdGh1bWJuYWlsOiBkYXRhLnRodW1ibmFpbCxcbiAgICAgIG1lbWJlcnM6IGRhdGEubWVtYmVycyxcbiAgICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZGF0YS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7IGxvY2FsZTogcHRCUiB9KSxcbiAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSxcbiAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSksXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIHVybDogZGF0YS5maWxlLnVybFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZXBpc29kZSxcbiAgICAgIH0sXG4gICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzXG4gICAgfVxuICB9ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3333/'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ZXJuZXh0Ly4vc3JjL3NlcnZpY2VzL2FwaS50cz8wZTlkIl0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxHQUFHLEdBQUdDLG1EQUFBLENBQWE7QUFDNUJDLFNBQU8sRUFBRTtBQURtQixDQUFiLENBQVoiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy8nXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/utils/convertDurationToTimeString.ts":
/*!**************************************************!*\
  !*** ./src/utils/convertDurationToTimeString.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDurationToTimeString\": function() { return /* binding */ convertDurationToTimeString; }\n/* harmony export */ });\nfunction convertDurationToTimeString(duration) {\n  const hours = Math.floor(duration / 3600);\n  const minutes = Math.floor(duration % 3600 / 60);\n  const seconds = duration % 60;\n  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');\n  return timeString;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ZXJuZXh0Ly4vc3JjL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZy50cz8zMDUyIl0sIm5hbWVzIjpbImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImR1cmF0aW9uIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInRpbWVTdHJpbmciLCJtYXAiLCJ1bml0IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsMkJBQVQsQ0FBcUNDLFFBQXJDLEVBQXVEO0FBQzFELFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsR0FBRyxJQUF0QixDQUFkO0FBQ0EsUUFBTUksT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsUUFBUSxHQUFHLElBQVosR0FBb0IsRUFBL0IsQ0FBaEI7QUFDQSxRQUFNSyxPQUFPLEdBQUdMLFFBQVEsR0FBRyxFQUEzQjtBQUVBLFFBQU1NLFVBQVUsR0FBRyxDQUFDTCxLQUFELEVBQVFHLE9BQVIsRUFBaUJDLE9BQWpCLEVBQ2RFLEdBRGMsQ0FDVkMsSUFBSSxJQUFJQyxNQUFNLENBQUNELElBQUQsQ0FBTixDQUFhRSxRQUFiLENBQXNCLENBQXRCLEVBQXlCLEdBQXpCLENBREUsRUFFZEMsSUFGYyxDQUVULEdBRlMsQ0FBbkI7QUFJQSxTQUFPTCxVQUFQO0FBQ0giLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gMzYwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IGR1cmF0aW9uICUgNjA7XG5cbiAgICBjb25zdCB0aW1lU3RyaW5nID0gW2hvdXJzLCBtaW51dGVzLCBzZWNvbmRzXVxuICAgICAgICAubWFwKHVuaXQgPT4gU3RyaW5nKHVuaXQpLnBhZFN0YXJ0KDIsICcwJykpXG4gICAgICAgIC5qb2luKCc6JylcbiAgICAgICAgXG4gICAgcmV0dXJuIHRpbWVTdHJpbmc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/convertDurationToTimeString.ts\n");

/***/ }),

/***/ "./src/pages/episodes/episode.module.scss":
/*!************************************************!*\
  !*** ./src/pages/episodes/episode.module.scss ***!
  \************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"episode\": \"episode_episode__3xSMv\",\n\t\"thumbnailContainer\": \"episode_thumbnailContainer__g4oD1\",\n\t\"description\": \"episode_description__3hw48\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ZXJuZXh0Ly4vc3JjL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGUubW9kdWxlLnNjc3M/OTlkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZXBpc29kZXMvZXBpc29kZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVwaXNvZGVcIjogXCJlcGlzb2RlX2VwaXNvZGVfXzN4U012XCIsXG5cdFwidGh1bWJuYWlsQ29udGFpbmVyXCI6IFwiZXBpc29kZV90aHVtYm5haWxDb250YWluZXJfX2c0b0QxXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJlcGlzb2RlX2Rlc2NyaXB0aW9uX18zaHc0OFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/episodes/episode.module.scss\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_date-fns_esm_locale_pt-BR_index_js-node_modules_next_image_js","vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./src/pages/episodes/[slug].tsx"); });
module.exports = __webpack_exports__;

})();