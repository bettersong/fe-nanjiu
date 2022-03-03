module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true // defineProps 属于 Vue3 的规则校验，需要在 eslint-plugin-vue官方指南中寻找对应配置
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    'plugin:vue/vue3-essential',
    'prettier',
    // https://github.com/vuejs/eslint-config-standard
    'eslint:recommended',
    '@vue/prettier'
  ],
  plugins: ['prettier']
};
