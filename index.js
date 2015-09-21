"use strict";

var join = require("path").join
var readFileSync = require("fs").readFileSync;

var normalizedESLintrcPath = join(__dirname, ".eslintrc");
var esLintrcContents = readFileSync(normalizedESLintrcPath, "utf8");

module.exports = JSON.parse(esLintrcContents);
