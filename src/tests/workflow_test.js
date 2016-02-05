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

test('Put and get workflows', function (t) {
    request(app)
        .put('/api/v1/Workflows')
        .send({ name: 'tobi' })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.end();
        });
});

