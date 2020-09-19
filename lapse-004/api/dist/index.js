"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = new _express["default"]();
api.listen(3030, function () {
  console.log('API: Listenning');
});
