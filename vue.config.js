/* eslint-disable */
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'vue-wechat-markdown-edtior';
        return args;
      });
  },
};
