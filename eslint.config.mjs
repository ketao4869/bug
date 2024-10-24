import uni from '@uni-helper/eslint-config'

export default uni(
  {
    typescript: true,
    vue: true,

    unocss: true,
    formatters: {
      css: true,
      html: true,
    },
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['*.vue'],
    rules: {
      'vue/block-indent': ['error', 2, { ignores: ['route'] }],
      'no-console': 'off',
    },
  },
)
