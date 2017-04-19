'use strict';

const CustomLoader = require('./custom_loader');

class AppWorkerLoader extends CustomLoader {

  /**
   * loadPlugin first, then loadConfig
   * @since 1.0.0
   */
  loadConfig() {
    super.loadPlugin();
    super.loadConfig();
  }

  /**
   * 开始加载所有约定目录
   * @since 1.0.0
   */
  load() {
    // app > plugin > core
    this.loadApplicationExtend();
    this.loadRequestExtend();
    this.loadResponseExtend();
    this.loadContextExtend();
    this.loadHelperExtend();

    // app > plugin
    this.loadCustomApp();
    // app > plugin
    this.loadService();
    // app > plugin > core
    this.loadMiddleware();
    // app
    this.loadController();
    // app
    this.loadRouter(); // 依赖 controller
  }

}

module.exports = AppWorkerLoader;
