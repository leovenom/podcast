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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Episode; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"./node_modules/date-fns/esm/locale/pt-BR/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ \"./src/utils/convertDurationToTimeString.ts\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./episode.module.scss */ \"./src/pages/episodes/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _jsxFileName = \"/Users/leonardt/code/React/podcasternext/src/pages/episodes/[slug].tsx\";\n\n\n\n\n\n\n\n\n\nfunction Episode({\n  episode\n}) {\n  const {\n    play\n  } = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_episode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().episode),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [episode.title, \"| Podcast\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_episode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().thumbnailContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/arrow-left.svg\",\n            alt: \"Voltar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: () => play(episode),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"/play.svg\",\n          alt: \"Tocar epis\\xF3dio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.publishedAt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: episode.durationAsString\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_episode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),\n      dangerouslySetInnerHTML: {\n        __html: episode.description\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, this);\n}\nconst getStaticPaths = async () => {\n  const {\n    data\n  } = await _services_api__WEBPACK_IMPORTED_MODULE_6__.api.get('episodes', {\n    params: {\n      _limit: 2,\n      _sort: 'published_at',\n      _order: 'desc'\n    }\n  });\n  const paths = data.map(episode => {\n    return {\n      params: {\n        slug: episode.id\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: 'blocking'\n  };\n};\nconst getStaticProps = async ctx => {\n  const {\n    slug\n  } = ctx.params;\n  const {\n    data\n  } = await _services_api__WEBPACK_IMPORTED_MODULE_6__.api.get(`/episodes/${slug}`);\n  const episode = {\n    id: data.id,\n    title: data.title,\n    thumbnail: data.thumbnail,\n    members: data.members,\n    publishedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(data.published_at), 'd MMM yy', {\n      locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_9__.default\n    }),\n    duration: Number(data.file.duration),\n    durationAsString: (0,_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__.convertDurationToTimeString)(Number(data.file.duration)),\n    description: data.description,\n    url: data.file.url\n  };\n  return {\n    props: {\n      episode\n    },\n    revalidate: 60 * 60 * 24 // 24 hours\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ZXJuZXh0Ly4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInBsYXkiLCJ1c2VQbGF5ZXIiLCJzdHlsZXMiLCJ0aXRsZSIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uQXNTdHJpbmciLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsImFwaSIsInBhcmFtcyIsIl9saW1pdCIsIl9zb3J0IiwiX29yZGVyIiwicGF0aHMiLCJtYXAiLCJzbHVnIiwiaWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY3R4IiwiZm9ybWF0IiwicGFyc2VJU08iLCJwdWJsaXNoZWRfYXQiLCJsb2NhbGUiLCJwdEJSIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJmaWxlIiwiY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIiwidXJsIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFpQmUsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQTRDO0FBQ3ZELFFBQU07QUFBRUM7QUFBRixNQUFXQyxrRUFBUyxFQUExQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxxRUFBaEI7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNSO0FBQUEsbUJBQVFILE9BQU8sQ0FBQ0ksS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBSyxlQUFTLEVBQUVELGdGQUFoQjtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDQTtBQUFRLGNB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QUFDRixNQUFNLENBQUNuQixJQUFJLENBQUNvQixJQUFMLENBQVVGLFFBQVgsQ0FBUCxDQVAvQjtBQVFkcEIsZUFBVyxFQUFFRSxJQUFJLENBQUNGLFdBUko7QUFTZHdCLE9BQUcsRUFBRXRCLElBQUksQ0FBQ29CLElBQUwsQ0FBVUU7QUFURCxHQUFoQjtBQVlBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xuQztBQURLLEtBREY7QUFJTG9DLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUpqQixDQUlxQjs7QUFKckIsR0FBUDtBQU1ELENBdkJJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXBpc29kZS5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR0aHVtYm5haWw6IHN0cmluZztcblx0bWVtYmVyczogc3RyaW5nO1xuXHRkdXJhdGlvbjogbnVtYmVyO1xuXHRkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nO1xuXHRwdWJsaXNoZWRBdDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xudHlwZSBFcGlzb2RlUHJvcHMgPSB7XG4gICAgZXBpc29kZTogRXBpc29kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVwaXNvZGUoeyBlcGlzb2RlIH06IEVwaXNvZGVQcm9wcykge1xuICAgIGNvbnN0IHsgcGxheSB9ID0gdXNlUGxheWVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxuICAgICAgICAgICAgPEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57ZXBpc29kZS50aXRsZX18IFBvZGNhc3Q8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJWb2x0YXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwbGF5KGVwaXNvZGUpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgxPntlcGlzb2RlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC9zcGFuPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZXBpc29kZS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRfbGltaXQ6IDIsXG5cdFx0XHRfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXG5cdFx0XHRfb3JkZXI6ICdkZXNjJ1xuXHRcdH1cblx0fSlcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzbHVnOiBlcGlzb2RlLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gY3R4LnBhcmFtc1xuICBcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoYC9lcGlzb2Rlcy8ke3NsdWd9YClcbiAgXG4gICAgY29uc3QgZXBpc29kZSA9IHtcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICB0aHVtYm5haWw6IGRhdGEudGh1bWJuYWlsLFxuICAgICAgbWVtYmVyczogZGF0YS5tZW1iZXJzLFxuICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhkYXRhLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxuICAgICAgZHVyYXRpb246IE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pLFxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgdXJsOiBkYXRhLmZpbGUudXJsXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBlcGlzb2RlLFxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gMjQgaG91cnNcbiAgICB9XG4gIH0gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3333/'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ZXJuZXh0Ly4vc3JjL3NlcnZpY2VzL2FwaS50cz8wZTlkIl0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxHQUFHLEdBQUdDLG1EQUFBLENBQWE7QUFDNUJDLFNBQU8sRUFBRTtBQURtQixDQUFiLENBQVoiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy8nXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_date-fns_esm_locale_pt-BR_index_js-node_modules_next_image_js","vendors-node_modules_next_link_js","src_contexts_PlayerContext_tsx-src_utils_convertDurationToTimeString_ts"], function() { return __webpack_exec__("./src/pages/episodes/[slug].tsx"); });
module.exports = __webpack_exports__;

})();