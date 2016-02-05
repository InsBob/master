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

test('Permission issue without token when accessing all IBUsers', function (t) {
    request(app)
        .get('/api/v1/IBUsers')
        .expect('Content-Type', /json/)
        .expect(401)
        .end(function (err, res) {
            t.ok(res['unauthorized'], 'Anonymous users can access IBUsers list');
            t.end();
        });
});