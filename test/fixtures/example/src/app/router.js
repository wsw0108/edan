module.exports = app => {
  app.get('/generator-no-ctx', 'generator.noctx');
  app.get('/generator-has-ctx', 'generator.hasctx');
  app.get('/class-no-ctx', 'class.noctx');
  app.get('/class-has-ctx', 'class.hasctx');
};
