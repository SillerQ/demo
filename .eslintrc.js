module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-mixed-spaces-and-tabs': [0],
        'comma-dangle': [2, 'never'],
        indent: [2, 4]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
