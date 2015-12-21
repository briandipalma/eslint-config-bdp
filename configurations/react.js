"use strict";

module.exports = {
	"extends": "./default.js",
	"plugins": [
		"react"
	],
	"ecmaFeatures": {
		"jsx": true,
		"experimentalObjectRestSpread": true
	},
	"rules": {
		"no-extra-parens": [2, "functions"],
		"react/display-name": [1, { "acceptTranspilerName": true }],
		"react/forbid-prop-types": 1,
		"react/jsx-boolean-value": [1, ["always"]],
		"react/jsx-closing-bracket-location": 1,
		"react/jsx-curly-spacing": 1,
		"react/jsx-handler-names": 1,
		"react/jsx-indent-props": [1, "tab"],
		"react/jsx-key": 1,
		"react/jsx-max-props-per-line": 1,
		"react/jsx-no-duplicate-props": 1,
		"react/jsx-no-is-mounted": 1,
		"react/jsx-no-literals": 1,
		"react/jsx-no-undef": 1,
		"react/jsx-pascal-case": 1,
		"react/jsx-sort-prop-types": 1,
		"react/jsx-sort-props": 1,
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"react/no-deprecated": 1,
		"react/no-did-mount-set-state": 1,
		"react/no-did-update-set-state": 1,
		"react/no-direct-mutation-state": 1,
		"react/no-multi-comp": 1,
		"react/no-unknown-property": 1,
		"react/prefer-es6-class": 1,
		"react/prop-types": 1,
		"react/react-in-jsx-scope": 1,
		"react/self-closing-comp": 1,
		"react/sort-comp": 1,
		"react/wrap-multilines": 1
	}
};
