module.exports = {
    ignorePatterns: ['.eslintrc.js'],
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended', // Enables rules recommended by @eslint: https://eslint.org/docs/rules/
        'google',
        'prettier',
        'prettier/prettier',
        'plugin:prettier/recommended', // Enables rules recommended by @eslint-plugin-prettier and @eslint-config-prettier
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }], // Displays prettier errors as ESLint errors
        'brace-style': [2, '1tbs'], // https://eslint.org/docs/rules/brace-style
        // 'comma-dangle': [2, 'always-multiline'], // https://eslint.org/docs/rules/comma-dangle
        'comma-spacing': [2, { before: false, after: true }], // https://eslint.org/docs/rules/comma-spacing
        'default-param-last': ['error'], // https://eslint.org/docs/rules/default-param-last
        'dot-notation': ['error'], // https://eslint.org/docs/rules/dot-notation
        'func-call-spacing': [2, 'never'], // https://eslint.org/docs/rules/func-call-spacing
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ], // https://eslint.org/docs/rules/keyword-spacing
        'lines-between-class-members': [2, 'always'], // https://eslint.org/docs/rules/lines-between-class-members
        'no-duplicate-imports': ['error'], // https://eslint.org/docs/rules/no-duplicate-imports
        'no-extra-parens': [
            2,
            'all',
            {
                returnAssign: false,
                enforceForArrowConditionals: false,
            },
        ], // https://eslint.org/docs/rules/no-extra-parens
        'no-invalid-this': ['error'], // https://eslint.org/docs/rules/no-invalid-this
        'no-redeclare': [
            2,
            {
                builtinGlobals: true,
            },
        ], // https://eslint.org/docs/rules/no-redeclare
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
                allowTaggedTemplates: false,
                allowTernary: true,
                enforceForJSX: false,
            },
        ], // https://eslint.org/docs/rules/no-unused-expressions
        'no-useless-constructor': ['error'], // https://eslint.org/docs/rules/no-useless-constructor
        'object-curly-spacing': [
            2,
            'always',
            {
                objectsInObjects: false,
            },
        ], // https://eslint.org/docs/rules/object-curly-spacing
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
            },
        ], // https://eslint.org/docs/rules/quotes
        semi: [2, 'always'], // https://eslint.org/docs/rules/semi
        'space-before-function-paren': [
            2,
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ], // https://eslint.org/docs/rules/space-before-function-paren
        'space-infix-ops': [2, { int32Hint: false }], // https://eslint.org/docs/rules/space-infix-ops
    },
};
