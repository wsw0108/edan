const Controller = require('egg').Controller;

class ClassController extends Controller {
  async noctx() {
    this.ctx.body = 'no-ctx';
  }
  async hasctx(ctx) {
    ctx.body = 'has-ctx';
  }
}

module.exports = ClassController;
