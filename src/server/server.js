var util = require("util");
var loopback = require('loopback');
var boot = require('loopback-boot');

var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

app.boot = function (cb) {
  // boot scripts mount components like REST API
  boot(app, __dirname, function (err) {
    if (err) throw err;
    app.start();

    app.loaded = true;
    app.emit('loaded');

    cb(app);
  });
};

app.boot(function (app) {
  app.emit('booted');
  console.log('booted');
});
