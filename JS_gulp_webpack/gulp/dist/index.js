(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createP = createP;
exports.name = name;
function createP() {
  var func = function func() {
    return 1 + 1;
  };
  func();
  var p = document.createElement('p');
  p.textContent = 'text';
  document.body.append(p);
}
function name() {
  var p = document.createElement('p');
  p.textContent = 'name';
  document.body.append(p);
}

},{}],2:[function(require,module,exports){
"use strict";

var _do = require("./do.js");
function createDiv() {
  var div = document.createElement('div');
  div.textContent = 'text';
  document.body.append(div);
}
(0, _do.createP)();
createDiv();
(0, _do.name)();

},{"./do.js":1}]},{},[2]);
