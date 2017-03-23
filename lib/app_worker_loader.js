'use strict';

const egg = require('egg');

class AppWorkerLoader extends egg.AppWorkerLoader {
  getAppInfo() {
    const appInfo = super.getAppInfo();
    appInfo.options = this.app._options;
    return appInfo;
  }
}

module.exports = AppWorkerLoader;
