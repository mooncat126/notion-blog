module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'prettier'
    ],
    // 在这里添加你的自定义规则
    rules: {}
}
