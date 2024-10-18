const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin'); // Comment out for now

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        options = options || {};
        options.transpileOnly = true;
        return options;
      });

    config.module
      .rule('tsx')
      .test(/\.tsx$/)
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        options = options || {};
        options.transpileOnly = true;
        return options;
      });

    config.plugin('fork-ts-checker')
      .use(ForkTsCheckerWebpackPlugin, [{ async: false }]);

    // Comment out ESLintPlugin if it causes issues
    // config.plugin('eslint')
    //   .use(ESLintPlugin, [{ extensions: ['.js', '.vue', '.ts'] }]);
  }
};
