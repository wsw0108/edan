'use strict';

const assert = require('assert');
const mm = require('egg-mock');
const request = require('supertest');

describe('test/lib/framework.test.js', () => {
  let app;
  const extra = { key: 'value' };

  before(() => {
    app = mm.app({
      baseDir: 'example',
      // appDir: 'src',
      framework: true,
      extra,
    });
    return app.ready();
  });

  after(() => app.close());

  it('should has appOptions under app.config', () => {
    assert(app.config.appOptions && app.config.appOptions.extra);
    assert.deepEqual(app.config.appOptions.extra, extra);
  });

  it('should load app from appDir', () => {
    const cases = [];
    cases.push(request(app.callback())
      .get('/generator-no-ctx')
      .expect(200)
      .expect('no-ctx')
    );
    cases.push(request(app.callback())
      .get('/generator-has-ctx')
      .expect(200)
      .expect('has-ctx')
    );
    cases.push(request(app.callback())
      .get('/class-no-ctx')
      .expect(200)
      .expect('no-ctx')
    );
    cases.push(request(app.callback())
      .get('/class-has-ctx')
      .expect(200)
      .expect('has-ctx')
    );
    return Promise.all(cases);
  });

  it('should load service', function* () {
    const ctx = app.mockContext();
    assert(ctx.service.service);
    const result = yield ctx.service.service.method();
    assert(result === 'method');
  });

});
