import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.config({
		extends: [
			'next/core-web-vitals',
			'next/typescript',
			'plugin:prettier/recommended',
		],
		plugins: ['prettier'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'prettier/prettier': [
				'error',
				{
					trailingComma: 'all',
					semi: false,
					tabWidth: 2,
					singleQuote: true,
					printWidth: 80,
					endOfLine: 'auto',
					useTabs: true,
					arrowParens: 'always',
				},
			],
		},
	}),
]

export default eslintConfig
