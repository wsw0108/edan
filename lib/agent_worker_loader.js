'use strict';

const CustomLoader = require('./custom_loader');

class AgentWorkerLoader extends CustomLoader {

  /**
   * loadPlugin first, then loadConfig
   */
  loadConfig() {
    super.loadPlugin();
    super.loadConfig();
  }

  load() {
    this.loadAgentExtend();
    this.loadCustomAgent();
  }

}

module.exports = AgentWorkerLoader;
