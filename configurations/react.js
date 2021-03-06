"use strict";

module.exports = {
	"extends": [
		"./default.js",
		"plugin:react/recommended"
	],
	"plugins": [
		"react"
	],
	"parserOptions": {
		 "ecmaFeatures": {
				"experimentalObjectRestSpread": true
		}
	},
	"rules": {
		"no-extra-parens": [2, "functions"],
		"new-cap": [2, {"capIsNew": false}],
		"react/forbid-prop-types": 1,
		"react/jsx-boolean-value": [1, "always"],
		"react/jsx-closing-bracket-location": 1,
		"react/jsx-curly-spacing": 1,
		"react/jsx-equals-spacing": 1,
		"react/jsx-first-prop-new-line": [1, "multiline"],
		"react/jsx-handler-names": 1,
		"react/jsx-indent-props": [1, "tab"],
		"react/jsx-indent": [1, "tab"],
		"react/jsx-key": 1,
		"react/jsx-max-props-per-line": 1,
		"react/jsx-no-literals": 1,
		"react/jsx-pascal-case": 1,
		"react/jsx-sort-props": 1,
		"react/jsx-space-before-closing": 1,
		"react/no-multi-comp": [1, {"ignoreStateless": true}],
		"react/no-string-refs": 1,
		"react/prefer-es6-class": 1,
		"react/require-render-return": 1,
		"react/self-closing-comp": 1,
		"react/sort-comp": 1,
		"react/sort-prop-types": 1,
		"react/wrap-multilines": 1,
		"react/jsx-no-target-blank": 1
	}
};
