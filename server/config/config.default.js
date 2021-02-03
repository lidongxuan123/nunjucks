/* eslint valid-jsdoc: "off" */

'use strict';

const path = require("path")
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
    },
    root: [
      path.join(appInfo.baseDir, '../dev'),
      // path.join(appInfo.baseDir, 'path/to/another'),
    ].join(','),
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612323513226_9503';

  config.static = {
    prefix: "/",
    dir: path.join(appInfo.baseDir, "../dev")
  }
  // add your middleware config here
  config.middleware = [];



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
