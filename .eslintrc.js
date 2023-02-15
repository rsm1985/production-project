module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': { 
		'ecmaFeatures': {
			jsx: true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'i18next'
	],
	'rules': {
		'react/jsx-indent': [2, 2],
		'react/jsx-indent-props': [2, 2],
		'react/jsx-filename-extension': [1, {
			'extensions': ['.js', '.jsx', '.tsx']
		}],
		'import/prefer-default-export': 'off',
		'indent': [
			'error',
			'tab'
		],
		'no-unused-vars':'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/jsx-props-no-spreading': 'warn',
		//Правило для вывода ошибки при отсутствии перевода через метод t() только внутри разметки
		'i18next/no-literal-string': ['error', {markupOnly: true}]
	},
	globals: {
		IS_DEV: true
	}
};
