"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwt = exports.crypto = void 0;

var _crypto = require("crypto");

var _jsonwebtoken = require("jsonwebtoken");

var crypto = {
  hash: function hash(password, passwordKey) {
    return (0, _crypto.createHmac)('sha512', passwordKey).update(password).digest('hex');
  },
  compare: function compare(password, passwordKey, hashedPassword) {
    return hashedPassword === (0, _crypto.createHmac)('sha512', passwordKey).update(password).digest('hex');
  }
};
exports.crypto = crypto;
var jwt = {
  create: function create(user) {
    return (0, _jsonwebtoken.sign)({
      user: {
        id: user.id
      }
    }, process.env.JWT_KEY);
  },
  decode: function decode(token) {
    return (0, _jsonwebtoken.verify)(token, process.env.JWT_KEY);
  }
};
exports.jwt = jwt;