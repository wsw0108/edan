'use strict';

const path = require('path');
const EggLoader = require('egg-core').EggLoader;
const controller = require('./controller');

class CustomLoader extends EggLoader {

  constructor(options) {
    super(options);

    const appDir = this.app._options.appDir;
    this.appDir = path.join(this.options.baseDir, appDir);
  }

  getAppInfo() {
    const appInfo = super.getAppInfo();
    appInfo.options = this.app._options;
    return appInfo;
  }

  getLoadUnits() {
    const dirs = super.getLoadUnits();
    dirs.push({
      path: this.appDir,
      type: 'app',
    });

    return dirs;
  }

  loadRouter() {
    this.loadFile(path.join(this.appDir, 'app/router.js'));
  }

}

Object.assign(CustomLoader.prototype, controller);

module.exports = CustomLoader;