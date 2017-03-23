'use strict';

const assert = require('power-assert');
const mm = require('egg-mock');

describe('test/lib/framework.test.js', () => {
  let app;
  const extra = { key: 'value' };
  before(() => {
    app = mm.app({
      baseDir: 'example',
      framework: true,
      extra,
    });
    return app.ready();
  });

  after(() => {
    // doSomething();
    return app.close();
  });

  afterEach(mm.restore);

  it('should has appOptions under app.config', () => {
    assert(app.config.appOptions && app.config.appOptions.extra);
    assert.deepEqual(app.config.appOptions.extra, extra);
  });
});
