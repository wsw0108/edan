'use strict';

const egg = require('egg');

class AgentWorkerLoader extends egg.AgentWorkerLoader {
  getAppInfo() {
    const appInfo = super.getAppInfo();
    appInfo.options = this.app._options;
    return appInfo;
  }
}

module.exports = AgentWorkerLoader;
