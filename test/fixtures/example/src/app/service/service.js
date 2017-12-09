const Service = require('egg').Service;

class TestService extends Service {
  async method() {
    return 'method';
  }
};

module.exports = TestService;
