exports.noctx = function* () {
  this.body = 'no-ctx';
};

exports.hasctx = function* (ctx) {
  ctx.body = 'has-ctx';
};
