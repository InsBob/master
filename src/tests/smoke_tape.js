/* jshint maxlen: 1130 */

var test = require('tape');
var sinon = require('sinon');
var app = require('../server/server');
var request = require('supertest');
var restApiRoot = app.get('restApiRoot');
var assert = require('assert');
var test = require('tape');

test('First test!', function (t) {
    t.end();
});

test('GET all IBUsers', function (t) {
    request(app)
        .get('/api/v1/IBUsers')
        .expect('Content-Type', /json/)
        .expect(401)
        .end(function (err, res) {
            t.end();
        });
});

//// change these
////var model = app.models.<my_model>;
//
//var apiPath = 'PhoneNumber';
//
//var testObj = {
//  // snip
//};
//
//var testObjUpdate = {
//  description: 'Updated description'
//};
//
//// custom objects for additional tests
//
//// END changes
//
//// setup
//test('-- ' + apiPath + ' functional tests setup ---------------', function(t) {
//  // Arrange
//  testObj.created = Date();
//
//  // delete apps so starting fresh
//  app.boot(function(bootedApp) {
//    app = bootedApp;
//    console.log('set bootedApp as app');
//  });
//});
//
///**
// TESTS GO HERE
// */
//
//// teardown
//test(apiPath + ' functional tests teardown', function(t) {
//  //t.comment('closing Redis...');
//  // end Redis connection
//  app.dataSources.pg.disconnect(function() {
//    //t.comment('closed queueDb');
//    app.dataSources.pg.disconnect(function() {
//      //t.comment('closed cacheDb');
//      app.dataSources.pg.disconnect(function() {
//        //t.comment('closed authDb');
//        t.end();
//      });
//    });
//  });
//});