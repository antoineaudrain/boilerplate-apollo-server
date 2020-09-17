"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _server = _interopRequireDefault(require("./server"));

var run = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$server$listen, url;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _server["default"].listen(process.env.PORT || 3000);

          case 2:
            _yield$server$listen = _context.sent;
            url = _yield$server$listen.url;
            console.log("\uD83D\uDE80 Server ready at ".concat(url));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

run()["catch"](function (error) {
  console.error(error);
  process.exit();
});