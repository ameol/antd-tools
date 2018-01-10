'use strict';

const path = require('path');

module.exports = function getRunCmdEnv() {
  const env = {};
  Object.keys(process.env).forEach((key) => {
    env[key] = process.env[key];
  });
  // make sure `antd-tools/node_modules/.bin` in the PATH env
  const nodeModulesBinDir = path.join(__dirname, '../../node_modules/.bin');
  env.PATH = env.PATH ? `${nodeModulesBinDir}:${env.PATH}` : nodeModulesBinDir;
  env.PATH = env.PATH + ';C:\\Users\\Administrator\\AppData\\Roaming\\npm;C:\\ProgramFiles\\Git\\bin';//添加环境变量
  return env;
};
