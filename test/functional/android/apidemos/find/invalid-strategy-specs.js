"use strict";

var env = require('../../../../helpers/env')
  , setup = require("../../../common/setup-base")
  , desired = require("../desired");

describe("apidemo - find - invalid strategy", function () {

  var driver;
  setup(this, desired).then(function (d) { driver = d; });

  if (env.FAST_TESTS) {
    beforeEach(function (done) {
      driver.resetApp().nodeify(done);
    });
  }

  it('should not accept -ios uiautomation locator strategy', function (done) {
    driver
      .elements('-ios uiautomation', '.elements()').catch(function (err) {
        throw JSON.stringify(err.cause.value);
      })
      .should.be.rejectedWith(/The requested resource could not be found/)
      .nodeify(done);
  });
});
