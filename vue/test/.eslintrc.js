
module.exports = {
    root:true,
    env: {
        "node": true
    },
    parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
    },
    extends: [ "@vue/prettier", "eslint:recommended","plugin:vue/vue3-essential",],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-constant-condition": ["error", { checkLoops: false }],
        "prefer-const": "warn",
        "vue/no-use-v-if-with-v-for": "off"
    },
};
