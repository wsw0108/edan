module.exports = app => {
  class ClassController extends app.Controller {
    * noctx() {
      this.ctx.body = 'no-ctx';
    }
    * hasctx(ctx) {
      ctx.body = 'has-ctx';
    }
  }
  return ClassController;
}
