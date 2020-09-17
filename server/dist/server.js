"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _fs = require("fs");

var _path = require("path");

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _helpers = require("./utils/helpers");

var SCHEMA_DIRECTORY = (0, _path.join)(__dirname, 'schema');

var _default = new _apolloServer.ApolloServer({
  typeDefs: (0, _fs.readdirSync)(SCHEMA_DIRECTORY).map(function (file) {
    return (0, _fs.readFileSync)((0, _path.join)(SCHEMA_DIRECTORY, file), 'utf8');
  }),
  resolvers: _resolvers["default"],
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var req, _req$headers, _context2, authorization, _jwt$decode;

      return _regenerator["default"].wrap(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = _ref.req;
              _context3.prev = 1;
              _context2 = {};
              authorization = req === null || req === void 0 ? void 0 : (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.authorization;

              if (authorization) {
                _context2.user = (_jwt$decode = _helpers.jwt.decode(authorization.split(' ')[1])) === null || _jwt$decode === void 0 ? void 0 : _jwt$decode.user;
              }

              return _context3.abrupt("return", _context2);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }(),
  playground: undefined !== 'production',
  introspection: true
});

exports["default"] = _default;