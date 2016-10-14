/* eslint-env node */
/* eslint-disable modules/no-cjs */

// Karma configuration

const argv = require('minimist')(process.argv);

const getReporters = () => {
  const reporters = ['progress'];
  if (argv.teamcity) {
    reporters.push('teamcity');
  }
  return reporters;
};

const getWepbackConfig = () => {
  const config = require('./webpack.config.js');
  config.devtool = 'inline-source-map';
  return config;
};

module.exports = config => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'chai-as-promised', 'chai-jquery', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      './src/**/*.test.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: getWepbackConfig(),

    webpackServer: {
      noInfo: true
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: getReporters(),


    // web server port
    port: 9876,

    hostname: require('os').hostname(),

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Electron'],

    electronOpts: {
      // show: false,
      // skipTaskbar: true,
      height: 1024,
      width: 768,
      webPreferences: {
        pageVisibility: true
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};