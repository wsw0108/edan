module.exports = app => {
  app.get('/class-no-ctx', 'class.noctx');
  app.get('/class-has-ctx', 'class.hasctx');
};
