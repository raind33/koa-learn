/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    a: 'a路由'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSIsImEiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0MsR0FBVCxFQUFjO0FBQzdCQSxLQUFHLENBQUNDLElBQUosR0FBVztBQUNUQyxLQUFDLEVBQUU7QUFETSxHQUFYO0FBR0QsQ0FKRCIsImZpbGUiOiIuL3NyYy9hcGkvYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY3R4KSB7XG4gIGN0eC5ib2R5ID0ge1xuICAgIGE6ICdh6Lev55SxJ1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    b: 'b路由'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSIsImIiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0MsR0FBVCxFQUFjO0FBQzdCQSxLQUFHLENBQUNDLElBQUosR0FBVztBQUNUQyxLQUFDLEVBQUU7QUFETSxHQUFYO0FBR0QsQ0FKRCIsImZpbGUiOiIuL3NyYy9hcGkvYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY3R4KSB7XG4gIGN0eC5ib2R5ID0ge1xuICAgIGI6ICdi6Lev55SxJ1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ \"path\");\n\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst koaBody = __webpack_require__(/*! koa-body */ \"koa-body\");\n\nconst cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n\nconst koaJson = __webpack_require__(/*! koa-json */ \"koa-json\");\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst koaStatic = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst app = new Koa();\n\nconst router = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\napp.use(koaStatic(path.join(__dirname, '../public')));\napp.use(helmet());\napp.use(koaBody());\napp.use(cors());\napp.use(koaJson());\napp.use(router());\napp.listen(9000);\nconsole.log(232);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIktvYSIsImtvYUJvZHkiLCJjb3JzIiwia29hSnNvbiIsImhlbG1ldCIsImtvYVN0YXRpYyIsImFwcCIsInJvdXRlciIsInVzZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSx1REFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLE1BQU1DLEdBQUcsR0FBR0QsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG1CQUFPLENBQUMsMEJBQUQsQ0FBdkI7O0FBQ0EsTUFBTUcsSUFBSSxHQUFHSCxtQkFBTyxDQUFDLDRCQUFELENBQXBCOztBQUNBLE1BQU1JLE9BQU8sR0FBR0osbUJBQU8sQ0FBQywwQkFBRCxDQUF2Qjs7QUFDQSxNQUFNSyxNQUFNLEdBQUdMLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTU0sU0FBUyxHQUFHTixtQkFBTyxDQUFDLDhCQUFELENBQXpCOztBQUVBLE1BQU1PLEdBQUcsR0FBRyxJQUFJTixHQUFKLEVBQVo7O0FBRUEsTUFBTU8sTUFBTSxHQUFHUixtQkFBTyxDQUFDLDZDQUFELENBQXRCOztBQUVBTyxHQUFHLENBQUNFLEdBQUosQ0FBUUgsU0FBUyxDQUFDUCxJQUFJLENBQUNXLElBQUwsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFELENBQWpCO0FBQ0FKLEdBQUcsQ0FBQ0UsR0FBSixDQUFRSixNQUFNLEVBQWQ7QUFDQUUsR0FBRyxDQUFDRSxHQUFKLENBQVFQLE9BQU8sRUFBZjtBQUNBSyxHQUFHLENBQUNFLEdBQUosQ0FBUU4sSUFBSSxFQUFaO0FBQ0FJLEdBQUcsQ0FBQ0UsR0FBSixDQUFRTCxPQUFPLEVBQWY7QUFFQUcsR0FBRyxDQUFDRSxHQUFKLENBQVFELE1BQU0sRUFBZDtBQUNBRCxHQUFHLENBQUNLLE1BQUosQ0FBVyxJQUFYO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IEtvYSA9IHJlcXVpcmUoJ2tvYScpXG5jb25zdCBrb2FCb2R5ID0gcmVxdWlyZSgna29hLWJvZHknKVxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ0Brb2EvY29ycycpXG5jb25zdCBrb2FKc29uID0gcmVxdWlyZSgna29hLWpzb24nKVxuY29uc3QgaGVsbWV0ID0gcmVxdWlyZSgna29hLWhlbG1ldCcpXG5jb25zdCBrb2FTdGF0aWMgPSByZXF1aXJlKCdrb2Etc3RhdGljJylcblxuY29uc3QgYXBwID0gbmV3IEtvYSgpXG5cbmNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzL2luZGV4JylcblxuYXBwLnVzZShrb2FTdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpKSlcbmFwcC51c2UoaGVsbWV0KCkpXG5hcHAudXNlKGtvYUJvZHkoKSlcbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShrb2FKc29uKCkpXG5cbmFwcC51c2Uocm91dGVyKCkpXG5hcHAubGlzdGVuKDkwMDApXG5jb25zb2xlLmxvZygyMzIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/a.js":
/*!*************************!*\
  !*** ./src/routes/a.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const router = __webpack_require__(/*! koa-router */ \"koa-router\")();\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2EuanM/MWIzYiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJyZXF1aXJlIiwiYSIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFQLEVBQWY7O0FBRUEsTUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLGdDQUFELENBQWpCOztBQUNBRCxNQUFNLENBQUNHLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRCxDQUFqQjtBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9hLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpKClcblxuY29uc3QgYSA9IHJlcXVpcmUoJy4uL2FwaS9hJylcbnJvdXRlci5nZXQoJy9hJywgYSlcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/a.js\n");

/***/ }),

/***/ "./src/routes/b.js":
/*!*************************!*\
  !*** ./src/routes/b.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const router = __webpack_require__(/*! koa-router */ \"koa-router\")();\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2IuanM/NWFhYiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJyZXF1aXJlIiwiYiIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFQLEVBQWY7O0FBRUEsTUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLGdDQUFELENBQWpCOztBQUNBRCxNQUFNLENBQUNHLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRCxDQUFqQjtBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9iLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpKClcblxuY29uc3QgYiA9IHJlcXVpcmUoJy4uL2FwaS9iJylcbnJvdXRlci5nZXQoJy9iJywgYilcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/b.js\n");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoute = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aRouter = __webpack_require__(/*! ./a */ \"./src/routes/a.js\");\n\nconst bRouter = __webpack_require__(/*! ./b */ \"./src/routes/b.js\");\n\nmodule.exports = combineRoute(aRouter, bRouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LmpzP2UyNmMiXSwibmFtZXMiOlsiY29tYmluZVJvdXRlIiwicmVxdWlyZSIsImFSb3V0ZXIiLCJiUm91dGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQTVCOztBQUVBLE1BQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyw4QkFBRCxDQUF2Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG1CQUFPLENBQUMsOEJBQUQsQ0FBdkI7O0FBRUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsWUFBWSxDQUFDRSxPQUFELEVBQVVDLE9BQVYsQ0FBN0IiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tYmluZVJvdXRlID0gcmVxdWlyZSgna29hLWNvbWJpbmUtcm91dGVycycpXG5cbmNvbnN0IGFSb3V0ZXIgPSByZXF1aXJlKCcuL2EnKVxuY29uc3QgYlJvdXRlciA9IHJlcXVpcmUoJy4vYicpXG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJvdXRlKGFSb3V0ZXIsIGJSb3V0ZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/index.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL2NvcnNcIj9hNjk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrb2EvY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrb2EvY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/cors\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-body\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtanNvblwiPzY1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-json\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });