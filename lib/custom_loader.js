'use strict';

const path = require('path');
const EggLoader = require('egg-core').EggLoader;

class CustomLoader extends EggLoader {

  constructor(options) {
    super(options);

    const appDir = this.app.options.appDir || process.env.EDAN_APP_DIR || 'src';
    this.appDir = path.join(this.options.baseDir, appDir);
  }

  getAppInfo() {
    const appInfo = super.getAppInfo();
    appInfo.options = this.app.options;
    return appInfo;
  }

  getLoadUnits() {
    const result = [];

    const dirs = super.getLoadUnits();
    dirs.forEach(dir => result.push(dir));

    result.push({
      path: this.appDir,
      type: 'app',
    });

    return result;
  }

  loadController(opt) {
    opt = Object.assign({
      directory: path.join(this.appDir, 'app/controller'),
    }, opt);
    super.loadController(opt);
  }

  loadRouter() {
    this.loadFile(path.join(this.appDir, 'app/router.js'));
  }

}

module.exports = CustomLoader;
