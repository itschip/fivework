module.exports = {
	env: {
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
};
