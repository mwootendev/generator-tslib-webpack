let webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [<%= karma.frameworks %>],
    plugins: [
      <%- karma.plugins %>
      require('karma-phantomjs-launcher'),
      require('karma-remap-istanbul'),
      require('karma-webpack')
    ],
    files: [
      { pattern: './src/**/*.spec.ts', watched: false }
    ],
    preprocessors: {
      './src/*.ts': ['webpack']
    },
    mime: {
      'text/x-typescript': ['ts']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov',
        "text-summary": ''
      }
    },
    reporters: ['progress', 'karma-remap-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
