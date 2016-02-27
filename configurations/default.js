"use strict";

module.exports = {
	"rules": {
		"indent": [2, "tab", {"SwitchCase": 1}],
		"quotes": [2, "double"],
		"linebreak-style": 2,
		"semi": [2, "always"],
		"valid-jsdoc": [
			2,
			{"requireReturn": false, "requireParamDescription": false, "requireReturnDescription": false}
		],
		"accessor-pairs": 2,
		"consistent-return": 2,
		"curly": 2,
		"default-case": 2,
		"dot-location": [2, "property"],
		"dot-notation": 2,
		"eqeqeq": 2,
		"guard-for-in": 2,
		"no-alert": 2,
		"no-caller": 2,
		"no-div-regex": 2,
		"no-else-return": 2,
		"no-eval": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-implicit-coercion": 2,
		"no-implied-eval": 2,
		"no-invalid-this": 2,
		"no-iterator": 2,
		"no-labels": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-multi-spaces": 2,
		"no-native-reassign": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-new": 2,
		"no-octal-escape": 2,
		"no-octal": 2,
		"no-param-reassign": 2,
		"no-process-env": 2,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-return-assign": 2,
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 2,
		"no-unused-expressions": 2,
		"no-useless-call": 2,
		"no-useless-concat": 2,
		"no-void": 2,
		"no-warning-comments": 2,
		"no-with": 2,
		"radix": 2,
		"wrap-iife": 2,
		"yoda": 2,
		"strict": 2,
		"init-declarations": 2,
		"no-delete-var": 2,
		"no-shadow-restricted-names": 2,
		"no-shadow": 2,
		"no-undef-init": 2,
		"no-undef": 2,
		"no-unused-vars": 2,
		"no-use-before-define": [2, {"functions": false}],
		"callback-return": 2,
		"global-require": 2,
		"handle-callback-err": 2,
		"no-mixed-requires": 2,
		"no-new-require": 2,
		"no-path-concat": 2,
		"no-process-exit": 2,
		"array-bracket-spacing": 2,
		"block-spacing": 2,
		"brace-style": 2,
		"camelcase": 2,
		"comma-spacing": 2,
		"comma-style": 2,
		"computed-property-spacing": 2,
		"consistent-this": [2, "self"],
		"eol-last": 2,
		"func-names": 2,
		"func-style": [2, "declaration", {"allowArrowFunctions": true}],
		"id-length": 2,
		"jsx-quotes": 2,
		"key-spacing": 2,
		"lines-around-comment": 2,
		"max-nested-callbacks": 2,
		"new-cap": 2,
		"new-parens": 2,
		"newline-after-var": 2,
		"no-array-constructor": 2,
		"no-continue": 2,
		"no-inline-comments": 2,
		"no-lonely-if": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-multiple-empty-lines": 2,
		"no-negated-condition": 2,
		"no-nested-ternary": 2,
		"no-new-object": 2,
		"no-spaced-func": 2,
		"no-trailing-spaces": 2,
		"no-underscore-dangle": [2, { "allowAfterThis": true }],
		"no-unneeded-ternary": 2,
		"object-curly-spacing": 2,
		"one-var": [2, "never"],
		"operator-linebreak": 2,
		"padded-blocks": [2, "never"],
		"quote-props": [2, "as-needed"],
		"semi-spacing": 2,
		"keyword-spacing": 2,
		"space-before-function-paren": [2, "never"],
		"space-in-parens": 2,
		"space-infix-ops": 2,
		"space-unary-ops": 2,
		"spaced-comment": 2,
		"space-before-blocks": 2,
		"arrow-parens": 2,
		"arrow-spacing": 2,
		"generator-star-spacing": [2, {"before": false, "after": true}],
		"no-confusing-arrow": 2,
		"no-constant-condition": 2,
		"no-var": 2,
		"object-shorthand": 2,
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"prefer-reflect": 2,
		"prefer-spread": 2,
		"prefer-template": 2,
		"require-yield": 2,
		"max-len": [2, 120, 4],
		"newline-per-chained-call": 2,
		"no-empty-function": 2,
		"no-unmodified-loop-condition": 2,
		"no-useless-constructor": 2,
		"no-whitespace-before-property": 2,
		"prefer-rest-params": 2,
		"template-curly-spacing": 2,
		"yield-star-spacing": 2
	},
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	}
};
