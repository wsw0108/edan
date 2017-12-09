'use strict';

const path = require('path');
const egg = require('egg');
const AppWorkerLoader = require('./app_worker_loader');
const AgentWorkerLoader = require('./agent_worker_loader');

const EGG_PATH = Symbol.for('egg#eggPath');
const EGG_LOADER = Symbol.for('egg#loader');

class Application extends egg.Application {
  get [EGG_PATH]() {
    return path.join(__dirname, '..');
  }
  get [EGG_LOADER]() {
    return AppWorkerLoader;
  }
}

class Agent extends egg.Agent {
  get [EGG_PATH]() {
    return path.join(__dirname, '..');
  }
  get [EGG_LOADER]() {
    return AgentWorkerLoader;
  }
}

module.exports = Object.assign(egg, {
  Application,
  Agent,
  AppWorkerLoader,
  AgentWorkerLoader,
});
