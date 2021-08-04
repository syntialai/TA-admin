/* eslint-disable no-param-reassign */
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Mlearn';
        return args;
      });
  },
  transpileDependencies: [
    'vuetify',
  ],
  runtimeCompiler: true,
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/assets/scss/index.scss'",
      },
      scss: {
        additionalData: "@import '@/assets/scss/index.scss';",
      },
    },
  },
};
