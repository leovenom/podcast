exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 3434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ api; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const jsonServer = __webpack_require__(2804);

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults(); // Set default middlewares (logger, static, cors and no-cache)

server.use(middlewares); // Add custom routes before JSON Server router

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
}); // To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  } // Continue to JSON Server router


  next();
}); // Use default router

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: process.env.API_URL || 'http://localhost:3333'
});

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;