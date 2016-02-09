var test = require('tape');
var sinon = require('sinon');
var app = require('../server/server');
var request = require('supertest');
var restApiRoot = app.get('restApiRoot');
var assert = require('assert');

test('device test!', function (t) {
    t.end();
});

test('Post the device information', function (t) {
    request(app)
        .post('/api/v1/devices')
        .send(
                {
                "appId": "1",
                "appVersion": 1,
                "deviceToken": "0000-0000-0000-0000",
                "deviceType": "ios",
                "modified": "2016-02-09",
                "subscription": true,
                "id": 111
                }
        )
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.end();
        });
});

test('Get the device information by Id', function (t) {
    request(app)
        .post('/api/v1/devices')
        .send( { id: '111' } )
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.end();
        });
});
