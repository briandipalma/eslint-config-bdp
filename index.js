"use strict";

var join = require("path").join
var readFileSync = require("fs").readFileSync;

module.exports = JSON.parse(readFileSync(__dirname, ".eslintrc"));
