// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "http://10.0.0.11:3000/api/v1";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.IBUser
 * @header lbServices.IBUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `IBUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "IBUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/IBUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for addresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for addresses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__addresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/addresses/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for addresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for addresses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__addresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/addresses/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for addresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for addresses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__addresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/addresses/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__link__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Add a related item by id for addresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for addresses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__link__addresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/addresses/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__unlink__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Remove the addresses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for addresses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__addresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/addresses/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__exists__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Check the existence of addresses relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for addresses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__exists__addresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/addresses/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__stats
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Fetches hasOne relation stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__stats": {
          url: urlBase + "/IBUsers/:id/stats",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__stats
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__stats": {
          url: urlBase + "/IBUsers/:id/stats",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__update__stats
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__update__stats": {
          url: urlBase + "/IBUsers/:id/stats",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroy__stats
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__stats": {
          url: urlBase + "/IBUsers/:id/stats",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for phoneNums.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNums
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__phoneNums": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/phoneNums/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for phoneNums.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNums
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__phoneNums": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/phoneNums/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for phoneNums.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNums
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__phoneNums": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/phoneNums/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for fieldsOfExpertise.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fieldsOfExpertise
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__fieldsOfExpertise": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for fieldsOfExpertise.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fieldsOfExpertise
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__fieldsOfExpertise": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for fieldsOfExpertise.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fieldsOfExpertise
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__fieldsOfExpertise": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__link__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Add a related item by id for fieldsOfExpertise.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fieldsOfExpertise
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__link__fieldsOfExpertise": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__unlink__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Remove the fieldsOfExpertise relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fieldsOfExpertise
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__fieldsOfExpertise": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__exists__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Check the existence of fieldsOfExpertise relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fieldsOfExpertise
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__exists__fieldsOfExpertise": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for weburls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for weburls
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__weburls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/weburls/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for weburls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for weburls
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__weburls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/weburls/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for weburls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for weburls
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__weburls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/weburls/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.findById() instead.
        "prototype$__findById__gaveQuotesFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.destroyById() instead.
        "prototype$__destroyById__gaveQuotesFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.updateById() instead.
        "prototype$__updateById__gaveQuotesFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.didJobsFor.findById() instead.
        "prototype$__findById__didJobsFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/didJobsFor/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.didJobsFor.destroyById() instead.
        "prototype$__destroyById__didJobsFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/didJobsFor/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.didJobsFor.updateById() instead.
        "prototype$__updateById__didJobsFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/didJobsFor/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.findById() instead.
        "prototype$__findById__associatedSSWorkflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.destroyById() instead.
        "prototype$__destroyById__associatedSSWorkflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.updateById() instead.
        "prototype$__updateById__associatedSSWorkflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.workRequests.findById() instead.
        "prototype$__findById__workRequests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/workRequests/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.workRequests.destroyById() instead.
        "prototype$__destroyById__workRequests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/workRequests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.workRequests.updateById() instead.
        "prototype$__updateById__workRequests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/workRequests/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for primaryWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for primaryWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__primaryWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for primaryWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for primaryWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__primaryWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for primaryWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for primaryWorkZipCodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__primaryWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__link__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Add a related item by id for primaryWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for primaryWorkZipCodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__link__primaryWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__unlink__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Remove the primaryWorkZipCodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for primaryWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__primaryWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__exists__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Check the existence of primaryWorkZipCodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for primaryWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__exists__primaryWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__findById__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a related item by id for tempWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tempWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__findById__tempWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__destroyById__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a related item by id for tempWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tempWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__tempWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__updateById__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update a related item by id for tempWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tempWorkZipCodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__updateById__tempWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__link__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Add a related item by id for tempWorkZipCodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tempWorkZipCodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__link__tempWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__unlink__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Remove the tempWorkZipCodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tempWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__tempWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__exists__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Check the existence of tempWorkZipCodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tempWorkZipCodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__exists__tempWorkZipCodes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries accessTokens of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/IBUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/IBUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__accessTokens
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts accessTokens of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/IBUsers/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries addresses of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__addresses": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/addresses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in addresses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__addresses": {
          url: urlBase + "/IBUsers/:id/addresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all addresses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__addresses": {
          url: urlBase + "/IBUsers/:id/addresses",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__addresses
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts addresses of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__addresses": {
          url: urlBase + "/IBUsers/:id/addresses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries phoneNums of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__phoneNums": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/phoneNums",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in phoneNums of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__phoneNums": {
          url: urlBase + "/IBUsers/:id/phoneNums",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all phoneNums of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__phoneNums": {
          url: urlBase + "/IBUsers/:id/phoneNums",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__phoneNums
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts phoneNums of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__phoneNums": {
          url: urlBase + "/IBUsers/:id/phoneNums/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries fieldsOfExpertise of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__fieldsOfExpertise": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in fieldsOfExpertise of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__fieldsOfExpertise": {
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all fieldsOfExpertise of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__fieldsOfExpertise": {
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__fieldsOfExpertise
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts fieldsOfExpertise of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__fieldsOfExpertise": {
          url: urlBase + "/IBUsers/:id/fieldsOfExpertise/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries weburls of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__weburls": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/weburls",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in weburls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__weburls": {
          url: urlBase + "/IBUsers/:id/weburls",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all weburls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__weburls": {
          url: urlBase + "/IBUsers/:id/weburls",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__weburls
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts weburls of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__weburls": {
          url: urlBase + "/IBUsers/:id/weburls/count",
          method: "GET"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor() instead.
        "prototype$__get__gaveQuotesFor": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "GET"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.create() instead.
        "prototype$__create__gaveQuotesFor": {
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "POST"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.destroyAll() instead.
        "prototype$__delete__gaveQuotesFor": {
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.count() instead.
        "prototype$__count__gaveQuotesFor": {
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/count",
          method: "GET"
        },

        // INTERNAL. Use IBUser.didJobsFor() instead.
        "prototype$__get__didJobsFor": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "GET"
        },

        // INTERNAL. Use IBUser.didJobsFor.create() instead.
        "prototype$__create__didJobsFor": {
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "POST"
        },

        // INTERNAL. Use IBUser.didJobsFor.destroyAll() instead.
        "prototype$__delete__didJobsFor": {
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.didJobsFor.count() instead.
        "prototype$__count__didJobsFor": {
          url: urlBase + "/IBUsers/:id/didJobsFor/count",
          method: "GET"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows() instead.
        "prototype$__get__associatedSSWorkflows": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "GET"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.create() instead.
        "prototype$__create__associatedSSWorkflows": {
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "POST"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.destroyAll() instead.
        "prototype$__delete__associatedSSWorkflows": {
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.count() instead.
        "prototype$__count__associatedSSWorkflows": {
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/count",
          method: "GET"
        },

        // INTERNAL. Use IBUser.workRequests() instead.
        "prototype$__get__workRequests": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "GET"
        },

        // INTERNAL. Use IBUser.workRequests.create() instead.
        "prototype$__create__workRequests": {
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "POST"
        },

        // INTERNAL. Use IBUser.workRequests.destroyAll() instead.
        "prototype$__delete__workRequests": {
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.workRequests.count() instead.
        "prototype$__count__workRequests": {
          url: urlBase + "/IBUsers/:id/workRequests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries primaryWorkZipCodes of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__primaryWorkZipCodes": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in primaryWorkZipCodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__primaryWorkZipCodes": {
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all primaryWorkZipCodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__primaryWorkZipCodes": {
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__primaryWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts primaryWorkZipCodes of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__primaryWorkZipCodes": {
          url: urlBase + "/IBUsers/:id/primaryWorkZipCodes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__get__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries tempWorkZipCodes of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__get__tempWorkZipCodes": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__create__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Creates a new instance in tempWorkZipCodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$__create__tempWorkZipCodes": {
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__delete__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Deletes all tempWorkZipCodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__tempWorkZipCodes": {
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$__count__tempWorkZipCodes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Counts tempWorkZipCodes of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__tempWorkZipCodes": {
          url: urlBase + "/IBUsers/:id/tempWorkZipCodes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#create
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/IBUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#createMany
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/IBUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#upsert
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/IBUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#exists
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/IBUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#findById
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/IBUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#find
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/IBUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#findOne
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/IBUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#updateAll
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/IBUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#deleteById
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/IBUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#count
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/IBUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#prototype$updateAttributes
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/IBUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#createChangeStream
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/IBUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#login
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              console.log(response.data);
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/IBUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#logout
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/IBUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#confirm
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/IBUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#resetPassword
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/IBUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Device.user.findById() instead.
        "::findById::device::user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/:fk",
          method: "GET"
        },

        // INTERNAL. Use Device.user.destroyById() instead.
        "::destroyById::device::user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Device.user.updateById() instead.
        "::updateById::device::user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Device.user.link() instead.
        "::link::device::user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Device.user.unlink() instead.
        "::unlink::device::user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Device.user.exists() instead.
        "::exists::device::user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Device.user() instead.
        "::get::device::user": {
          isArray: true,
          url: urlBase + "/devices/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Device.user.create() instead.
        "::create::device::user": {
          url: urlBase + "/devices/:id/user",
          method: "POST"
        },

        // INTERNAL. Use Device.user.createMany() instead.
        "::createMany::device::user": {
          isArray: true,
          url: urlBase + "/devices/:id/user",
          method: "POST"
        },

        // INTERNAL. Use Device.user.destroyAll() instead.
        "::delete::device::user": {
          url: urlBase + "/devices/:id/user",
          method: "DELETE"
        },

        // INTERNAL. Use Device.user.count() instead.
        "::count::device::user": {
          url: urlBase + "/devices/:id/user/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IBUser#getCurrent
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/IBUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.IBUser#updateOrCreate
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.IBUser#update
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.IBUser#destroyById
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.IBUser#removeById
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.IBUser#getCachedCurrent
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.IBUser#login} or
         * {@link lbServices.IBUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A IBUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser#isAuthenticated
         * @methodOf lbServices.IBUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser#getCurrentId
         * @methodOf lbServices.IBUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.IBUser#modelName
    * @propertyOf lbServices.IBUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `IBUser`.
    */
    R.modelName = "IBUser";

    /**
     * @ngdoc object
     * @name lbServices.IBUser.gaveQuotesFor
     * @header lbServices.IBUser.gaveQuotesFor
     * @object
     * @description
     *
     * The object `IBUser.gaveQuotesFor` groups methods
     * manipulating `Workflow` instances related to `IBUser`.
     *
     * Call {@link lbServices.IBUser#gaveQuotesFor IBUser.gaveQuotesFor()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IBUser#gaveQuotesFor
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries gaveQuotesFor of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.gaveQuotesFor = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::get::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#count
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Counts gaveQuotesFor of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.gaveQuotesFor.count = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::count::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#create
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Creates a new instance in gaveQuotesFor of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.gaveQuotesFor.create = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::create::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#createMany
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Creates a new instance in gaveQuotesFor of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.gaveQuotesFor.createMany = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::createMany::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#destroyAll
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Deletes all gaveQuotesFor of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.gaveQuotesFor.destroyAll = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::delete::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#destroyById
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Delete a related item by id for gaveQuotesFor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for gaveQuotesFor
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.gaveQuotesFor.destroyById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::destroyById::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#findById
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Find a related item by id for gaveQuotesFor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for gaveQuotesFor
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.gaveQuotesFor.findById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::findById::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.gaveQuotesFor#updateById
         * @methodOf lbServices.IBUser.gaveQuotesFor
         *
         * @description
         *
         * Update a related item by id for gaveQuotesFor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for gaveQuotesFor
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.gaveQuotesFor.updateById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::updateById::IBUser::gaveQuotesFor"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.IBUser.didJobsFor
     * @header lbServices.IBUser.didJobsFor
     * @object
     * @description
     *
     * The object `IBUser.didJobsFor` groups methods
     * manipulating `Workflow` instances related to `IBUser`.
     *
     * Call {@link lbServices.IBUser#didJobsFor IBUser.didJobsFor()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IBUser#didJobsFor
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries didJobsFor of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.didJobsFor = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::get::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#count
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Counts didJobsFor of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.didJobsFor.count = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::count::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#create
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Creates a new instance in didJobsFor of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.didJobsFor.create = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::create::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#createMany
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Creates a new instance in didJobsFor of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.didJobsFor.createMany = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::createMany::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#destroyAll
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Deletes all didJobsFor of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.didJobsFor.destroyAll = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::delete::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#destroyById
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Delete a related item by id for didJobsFor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for didJobsFor
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.didJobsFor.destroyById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::destroyById::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#findById
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Find a related item by id for didJobsFor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for didJobsFor
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.didJobsFor.findById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::findById::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.didJobsFor#updateById
         * @methodOf lbServices.IBUser.didJobsFor
         *
         * @description
         *
         * Update a related item by id for didJobsFor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for didJobsFor
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.didJobsFor.updateById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::updateById::IBUser::didJobsFor"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.IBUser.associatedSSWorkflows
     * @header lbServices.IBUser.associatedSSWorkflows
     * @object
     * @description
     *
     * The object `IBUser.associatedSSWorkflows` groups methods
     * manipulating `Workflow` instances related to `IBUser`.
     *
     * Call {@link lbServices.IBUser#associatedSSWorkflows IBUser.associatedSSWorkflows()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IBUser#associatedSSWorkflows
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries associatedSSWorkflows of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.associatedSSWorkflows = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::get::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#count
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Counts associatedSSWorkflows of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.associatedSSWorkflows.count = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::count::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#create
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Creates a new instance in associatedSSWorkflows of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.associatedSSWorkflows.create = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::create::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#createMany
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Creates a new instance in associatedSSWorkflows of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.associatedSSWorkflows.createMany = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::createMany::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#destroyAll
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Deletes all associatedSSWorkflows of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.associatedSSWorkflows.destroyAll = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::delete::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#destroyById
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Delete a related item by id for associatedSSWorkflows.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for associatedSSWorkflows
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.associatedSSWorkflows.destroyById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::destroyById::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#findById
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Find a related item by id for associatedSSWorkflows.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for associatedSSWorkflows
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.associatedSSWorkflows.findById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::findById::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.associatedSSWorkflows#updateById
         * @methodOf lbServices.IBUser.associatedSSWorkflows
         *
         * @description
         *
         * Update a related item by id for associatedSSWorkflows.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for associatedSSWorkflows
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.associatedSSWorkflows.updateById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::updateById::IBUser::associatedSSWorkflows"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.IBUser.workRequests
     * @header lbServices.IBUser.workRequests
     * @object
     * @description
     *
     * The object `IBUser.workRequests` groups methods
     * manipulating `WorkRequest` instances related to `IBUser`.
     *
     * Call {@link lbServices.IBUser#workRequests IBUser.workRequests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IBUser#workRequests
         * @methodOf lbServices.IBUser
         *
         * @description
         *
         * Queries workRequests of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R.workRequests = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::get::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#count
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Counts workRequests of IBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.workRequests.count = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::count::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#create
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Creates a new instance in workRequests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R.workRequests.create = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::create::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#createMany
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Creates a new instance in workRequests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R.workRequests.createMany = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::createMany::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#destroyAll
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Deletes all workRequests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workRequests.destroyAll = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::delete::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#destroyById
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Delete a related item by id for workRequests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for workRequests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workRequests.destroyById = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::destroyById::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#findById
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Find a related item by id for workRequests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for workRequests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R.workRequests.findById = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::findById::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IBUser.workRequests#updateById
         * @methodOf lbServices.IBUser.workRequests
         *
         * @description
         *
         * Update a related item by id for workRequests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for workRequests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R.workRequests.updateById = function() {
          var TargetResource = $injector.get("WorkRequest");
          var action = TargetResource["::updateById::IBUser::workRequests"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Workflow
 * @header lbServices.Workflow
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Workflow` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Workflow",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Workflows/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__get__quoteForWF
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Fetches hasOne relation quoteForWF.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__get__quoteForWF": {
          url: urlBase + "/Workflows/:id/quoteForWF",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__create__quoteForWF
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Creates a new instance in quoteForWF of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__create__quoteForWF": {
          url: urlBase + "/Workflows/:id/quoteForWF",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__update__quoteForWF
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update quoteForWF of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__update__quoteForWF": {
          url: urlBase + "/Workflows/:id/quoteForWF",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__destroy__quoteForWF
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Deletes quoteForWF of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__quoteForWF": {
          url: urlBase + "/Workflows/:id/quoteForWF",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__findById__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Find a related item by id for SPtimeSlots.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for SPtimeSlots
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__findById__SPtimeSlots": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Workflows/:id/SPtimeSlots/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__destroyById__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Delete a related item by id for SPtimeSlots.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for SPtimeSlots
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__SPtimeSlots": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Workflows/:id/SPtimeSlots/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__updateById__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update a related item by id for SPtimeSlots.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for SPtimeSlots
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__updateById__SPtimeSlots": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Workflows/:id/SPtimeSlots/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__get__finalEstimateTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Fetches hasOne relation finalEstimateTimeSlot.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__get__finalEstimateTimeSlot": {
          url: urlBase + "/Workflows/:id/finalEstimateTimeSlot",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__create__finalEstimateTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Creates a new instance in finalEstimateTimeSlot of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__create__finalEstimateTimeSlot": {
          url: urlBase + "/Workflows/:id/finalEstimateTimeSlot",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__update__finalEstimateTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update finalEstimateTimeSlot of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__update__finalEstimateTimeSlot": {
          url: urlBase + "/Workflows/:id/finalEstimateTimeSlot",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__destroy__finalEstimateTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Deletes finalEstimateTimeSlot of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__finalEstimateTimeSlot": {
          url: urlBase + "/Workflows/:id/finalEstimateTimeSlot",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__get__finalJobTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Fetches hasOne relation finalJobTimeSlot.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__get__finalJobTimeSlot": {
          url: urlBase + "/Workflows/:id/finalJobTimeSlot",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__create__finalJobTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Creates a new instance in finalJobTimeSlot of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__create__finalJobTimeSlot": {
          url: urlBase + "/Workflows/:id/finalJobTimeSlot",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__update__finalJobTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update finalJobTimeSlot of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__update__finalJobTimeSlot": {
          url: urlBase + "/Workflows/:id/finalJobTimeSlot",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__destroy__finalJobTimeSlot
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Deletes finalJobTimeSlot of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__finalJobTimeSlot": {
          url: urlBase + "/Workflows/:id/finalJobTimeSlot",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__get__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Queries SPtimeSlots of Workflow.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__get__SPtimeSlots": {
          isArray: true,
          url: urlBase + "/Workflows/:id/SPtimeSlots",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__create__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Creates a new instance in SPtimeSlots of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$__create__SPtimeSlots": {
          url: urlBase + "/Workflows/:id/SPtimeSlots",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__delete__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Deletes all SPtimeSlots of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__SPtimeSlots": {
          url: urlBase + "/Workflows/:id/SPtimeSlots",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$__count__SPtimeSlots
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Counts SPtimeSlots of Workflow.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__SPtimeSlots": {
          url: urlBase + "/Workflows/:id/SPtimeSlots/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#create
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Workflows",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#createMany
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Workflows",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#upsert
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Workflows",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#exists
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Workflows/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#findById
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Workflows/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#find
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Workflows",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#findOne
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Workflows/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#updateAll
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Workflows/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#deleteById
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Workflows/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#count
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Workflows/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#prototype$updateAttributes
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Workflows/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#createChangeStream
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Workflows/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Workflow#cancel
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Cancel workflow at anytime
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `reason` – `{String=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `success` – `{Boolean=}` -
         */
        "cancel": {
          url: urlBase + "/Workflows/cancel",
          method: "POST"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.findById() instead.
        "::findById::IBUser::gaveQuotesFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.destroyById() instead.
        "::destroyById::IBUser::gaveQuotesFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.updateById() instead.
        "::updateById::IBUser::gaveQuotesFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.didJobsFor.findById() instead.
        "::findById::IBUser::didJobsFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/didJobsFor/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.didJobsFor.destroyById() instead.
        "::destroyById::IBUser::didJobsFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/didJobsFor/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.didJobsFor.updateById() instead.
        "::updateById::IBUser::didJobsFor": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/didJobsFor/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.findById() instead.
        "::findById::IBUser::associatedSSWorkflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.destroyById() instead.
        "::destroyById::IBUser::associatedSSWorkflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.updateById() instead.
        "::updateById::IBUser::associatedSSWorkflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor() instead.
        "::get::IBUser::gaveQuotesFor": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "GET"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.create() instead.
        "::create::IBUser::gaveQuotesFor": {
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "POST"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.createMany() instead.
        "::createMany::IBUser::gaveQuotesFor": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "POST"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.destroyAll() instead.
        "::delete::IBUser::gaveQuotesFor": {
          url: urlBase + "/IBUsers/:id/gaveQuotesFor",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.gaveQuotesFor.count() instead.
        "::count::IBUser::gaveQuotesFor": {
          url: urlBase + "/IBUsers/:id/gaveQuotesFor/count",
          method: "GET"
        },

        // INTERNAL. Use IBUser.didJobsFor() instead.
        "::get::IBUser::didJobsFor": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "GET"
        },

        // INTERNAL. Use IBUser.didJobsFor.create() instead.
        "::create::IBUser::didJobsFor": {
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "POST"
        },

        // INTERNAL. Use IBUser.didJobsFor.createMany() instead.
        "::createMany::IBUser::didJobsFor": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "POST"
        },

        // INTERNAL. Use IBUser.didJobsFor.destroyAll() instead.
        "::delete::IBUser::didJobsFor": {
          url: urlBase + "/IBUsers/:id/didJobsFor",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.didJobsFor.count() instead.
        "::count::IBUser::didJobsFor": {
          url: urlBase + "/IBUsers/:id/didJobsFor/count",
          method: "GET"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows() instead.
        "::get::IBUser::associatedSSWorkflows": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "GET"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.create() instead.
        "::create::IBUser::associatedSSWorkflows": {
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "POST"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.createMany() instead.
        "::createMany::IBUser::associatedSSWorkflows": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "POST"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.destroyAll() instead.
        "::delete::IBUser::associatedSSWorkflows": {
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.associatedSSWorkflows.count() instead.
        "::count::IBUser::associatedSSWorkflows": {
          url: urlBase + "/IBUsers/:id/associatedSSWorkflows/count",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.workflows.findById() instead.
        "::findById::WorkRequest::workflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/workflows/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.workflows.destroyById() instead.
        "::destroyById::WorkRequest::workflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/workflows/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkRequest.workflows.updateById() instead.
        "::updateById::WorkRequest::workflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/workflows/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow() instead.
        "::get::WorkRequest::committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.create() instead.
        "::create::WorkRequest::committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "POST"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.createMany() instead.
        "::createMany::WorkRequest::committedWorkFlow": {
          isArray: true,
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "POST"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.update() instead.
        "::update::WorkRequest::committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "PUT"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.destroy() instead.
        "::destroy::WorkRequest::committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "DELETE"
        },

        // INTERNAL. Use WorkRequest.workflows() instead.
        "::get::WorkRequest::workflows": {
          isArray: true,
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.workflows.create() instead.
        "::create::WorkRequest::workflows": {
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "POST"
        },

        // INTERNAL. Use WorkRequest.workflows.createMany() instead.
        "::createMany::WorkRequest::workflows": {
          isArray: true,
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "POST"
        },

        // INTERNAL. Use WorkRequest.workflows.destroyAll() instead.
        "::delete::WorkRequest::workflows": {
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "DELETE"
        },

        // INTERNAL. Use WorkRequest.workflows.count() instead.
        "::count::WorkRequest::workflows": {
          url: urlBase + "/WorkRequests/:id/workflows/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Workflow#updateOrCreate
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Workflow#update
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Workflow#destroyById
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Workflow#removeById
         * @methodOf lbServices.Workflow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Workflow#modelName
    * @propertyOf lbServices.Workflow
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Workflow`.
    */
    R.modelName = "Workflow";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WorkRequest
 * @header lbServices.WorkRequest
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkRequest` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WorkRequest",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WorkRequests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WorkRequest.workflows.findById() instead.
        "prototype$__findById__workflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/workflows/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.workflows.destroyById() instead.
        "prototype$__destroyById__workflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/workflows/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkRequest.workflows.updateById() instead.
        "prototype$__updateById__workflows": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/workflows/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__findById__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Find a related item by id for timeSlots.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timeSlots
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__findById__timeSlots": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/timeSlots/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__destroyById__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Delete a related item by id for timeSlots.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timeSlots
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__timeSlots": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/timeSlots/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__updateById__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update a related item by id for timeSlots.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timeSlots
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__updateById__timeSlots": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/timeSlots/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__findById__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Find a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__findById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/media/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__destroyById__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Delete a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/media/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__updateById__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__updateById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/WorkRequests/:id/media/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow() instead.
        "prototype$__get__committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.create() instead.
        "prototype$__create__committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "POST"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.update() instead.
        "prototype$__update__committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "PUT"
        },

        // INTERNAL. Use WorkRequest.committedWorkFlow.destroy() instead.
        "prototype$__destroy__committedWorkFlow": {
          url: urlBase + "/WorkRequests/:id/committedWorkFlow",
          method: "DELETE"
        },

        // INTERNAL. Use WorkRequest.workflows() instead.
        "prototype$__get__workflows": {
          isArray: true,
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "GET"
        },

        // INTERNAL. Use WorkRequest.workflows.create() instead.
        "prototype$__create__workflows": {
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "POST"
        },

        // INTERNAL. Use WorkRequest.workflows.destroyAll() instead.
        "prototype$__delete__workflows": {
          url: urlBase + "/WorkRequests/:id/workflows",
          method: "DELETE"
        },

        // INTERNAL. Use WorkRequest.workflows.count() instead.
        "prototype$__count__workflows": {
          url: urlBase + "/WorkRequests/:id/workflows/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__get__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Queries timeSlots of WorkRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__get__timeSlots": {
          isArray: true,
          url: urlBase + "/WorkRequests/:id/timeSlots",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__create__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Creates a new instance in timeSlots of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__create__timeSlots": {
          url: urlBase + "/WorkRequests/:id/timeSlots",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__delete__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Deletes all timeSlots of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__timeSlots": {
          url: urlBase + "/WorkRequests/:id/timeSlots",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__count__timeSlots
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Counts timeSlots of WorkRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__timeSlots": {
          url: urlBase + "/WorkRequests/:id/timeSlots/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__get__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Queries media of WorkRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__get__media": {
          isArray: true,
          url: urlBase + "/WorkRequests/:id/media",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__create__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Creates a new instance in media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$__create__media": {
          url: urlBase + "/WorkRequests/:id/media",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__delete__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Deletes all media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__media": {
          url: urlBase + "/WorkRequests/:id/media",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$__count__media
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Counts media of WorkRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__media": {
          url: urlBase + "/WorkRequests/:id/media/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#create
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WorkRequests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#createMany
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/WorkRequests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#upsert
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WorkRequests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#exists
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/WorkRequests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#findById
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WorkRequests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#find
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WorkRequests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#findOne
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WorkRequests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#updateAll
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/WorkRequests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#deleteById
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/WorkRequests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#count
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/WorkRequests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#prototype$updateAttributes
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WorkRequests/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#createChangeStream
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/WorkRequests/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#submit
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Used by service seeker to submit a work request
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `workrequest` – `{Object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `id` – `{String=}` -
         */
        "submit": {
          url: urlBase + "/WorkRequests/submit",
          method: "POST"
        },

        // INTERNAL. Use IBUser.workRequests.findById() instead.
        "::findById::IBUser::workRequests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/workRequests/:fk",
          method: "GET"
        },

        // INTERNAL. Use IBUser.workRequests.destroyById() instead.
        "::destroyById::IBUser::workRequests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/workRequests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.workRequests.updateById() instead.
        "::updateById::IBUser::workRequests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IBUsers/:id/workRequests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IBUser.workRequests() instead.
        "::get::IBUser::workRequests": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "GET"
        },

        // INTERNAL. Use IBUser.workRequests.create() instead.
        "::create::IBUser::workRequests": {
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "POST"
        },

        // INTERNAL. Use IBUser.workRequests.createMany() instead.
        "::createMany::IBUser::workRequests": {
          isArray: true,
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "POST"
        },

        // INTERNAL. Use IBUser.workRequests.destroyAll() instead.
        "::delete::IBUser::workRequests": {
          url: urlBase + "/IBUsers/:id/workRequests",
          method: "DELETE"
        },

        // INTERNAL. Use IBUser.workRequests.count() instead.
        "::count::IBUser::workRequests": {
          url: urlBase + "/IBUsers/:id/workRequests/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#updateOrCreate
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#update
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#destroyById
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#removeById
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkRequest` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WorkRequest#modelName
    * @propertyOf lbServices.WorkRequest
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WorkRequest`.
    */
    R.modelName = "WorkRequest";

    /**
     * @ngdoc object
     * @name lbServices.WorkRequest.workflows
     * @header lbServices.WorkRequest.workflows
     * @object
     * @description
     *
     * The object `WorkRequest.workflows` groups methods
     * manipulating `Workflow` instances related to `WorkRequest`.
     *
     * Call {@link lbServices.WorkRequest#workflows WorkRequest.workflows()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#workflows
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Queries workflows of WorkRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.workflows = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::get::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#count
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Counts workflows of WorkRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.workflows.count = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::count::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#create
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Creates a new instance in workflows of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.workflows.create = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::create::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#createMany
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Creates a new instance in workflows of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.workflows.createMany = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::createMany::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#destroyAll
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Deletes all workflows of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workflows.destroyAll = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::delete::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#destroyById
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Delete a related item by id for workflows.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflows
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workflows.destroyById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::destroyById::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#findById
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Find a related item by id for workflows.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflows
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.workflows.findById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::findById::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.workflows#updateById
         * @methodOf lbServices.WorkRequest.workflows
         *
         * @description
         *
         * Update a related item by id for workflows.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflows
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.workflows.updateById = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::updateById::WorkRequest::workflows"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WorkRequest.committedWorkFlow
     * @header lbServices.WorkRequest.committedWorkFlow
     * @object
     * @description
     *
     * The object `WorkRequest.committedWorkFlow` groups methods
     * manipulating `Workflow` instances related to `WorkRequest`.
     *
     * Call {@link lbServices.WorkRequest#committedWorkFlow WorkRequest.committedWorkFlow()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WorkRequest#committedWorkFlow
         * @methodOf lbServices.WorkRequest
         *
         * @description
         *
         * Fetches hasOne relation committedWorkFlow.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.committedWorkFlow = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::get::WorkRequest::committedWorkFlow"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.committedWorkFlow#create
         * @methodOf lbServices.WorkRequest.committedWorkFlow
         *
         * @description
         *
         * Creates a new instance in committedWorkFlow of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.committedWorkFlow.create = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::create::WorkRequest::committedWorkFlow"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.committedWorkFlow#createMany
         * @methodOf lbServices.WorkRequest.committedWorkFlow
         *
         * @description
         *
         * Creates a new instance in committedWorkFlow of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.committedWorkFlow.createMany = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::createMany::WorkRequest::committedWorkFlow"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.committedWorkFlow#destroy
         * @methodOf lbServices.WorkRequest.committedWorkFlow
         *
         * @description
         *
         * Deletes committedWorkFlow of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.committedWorkFlow.destroy = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::destroy::WorkRequest::committedWorkFlow"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkRequest.committedWorkFlow#update
         * @methodOf lbServices.WorkRequest.committedWorkFlow
         *
         * @description
         *
         * Update committedWorkFlow of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workflow` object.)
         * </em>
         */
        R.committedWorkFlow.update = function() {
          var TargetResource = $injector.get("Workflow");
          var action = TargetResource["::update::WorkRequest::committedWorkFlow"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserCredential
 * @header lbServices.UserCredential
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserCredential` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserCredential",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserCredentials/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#prototype$__get__user
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "prototype$__get__user": {
          url: urlBase + "/UserCredentials/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#create
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#createMany
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#upsert
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserCredentials",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#exists
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/UserCredentials/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#findById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserCredentials/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#find
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserCredentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#findOne
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserCredentials/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#updateAll
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserCredentials/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#deleteById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserCredentials/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#count
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/UserCredentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#prototype$updateAttributes
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserCredentials/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#createChangeStream
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/UserCredentials/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserCredential#updateOrCreate
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#update
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#destroyById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#removeById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserCredential#modelName
    * @propertyOf lbServices.UserCredential
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserCredential`.
    */
    R.modelName = "UserCredential";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserIdentity
 * @header lbServices.UserIdentity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserIdentity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserIdentity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserIdentities/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#prototype$__get__user
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "prototype$__get__user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#create
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#createMany
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#upsert
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserIdentities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#exists
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/UserIdentities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#findById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserIdentities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#find
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#findOne
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserIdentities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#updateAll
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserIdentities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#deleteById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserIdentities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#count
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/UserIdentities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#prototype$updateAttributes
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserIdentities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#createChangeStream
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/UserIdentities/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#updateOrCreate
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#update
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#destroyById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#removeById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserIdentity#modelName
    * @propertyOf lbServices.UserIdentity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserIdentity`.
    */
    R.modelName = "UserIdentity";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Device
 * @header lbServices.Device
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Device` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Device",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/devices/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Device.user.findById() instead.
        "prototype$__findById__user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/:fk",
          method: "GET"
        },

        // INTERNAL. Use Device.user.destroyById() instead.
        "prototype$__destroyById__user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Device.user.updateById() instead.
        "prototype$__updateById__user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Device.user.link() instead.
        "prototype$__link__user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Device.user.unlink() instead.
        "prototype$__unlink__user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Device.user.exists() instead.
        "prototype$__exists__user": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/devices/:id/user/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Device.user() instead.
        "prototype$__get__user": {
          isArray: true,
          url: urlBase + "/devices/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Device.user.create() instead.
        "prototype$__create__user": {
          url: urlBase + "/devices/:id/user",
          method: "POST"
        },

        // INTERNAL. Use Device.user.destroyAll() instead.
        "prototype$__delete__user": {
          url: urlBase + "/devices/:id/user",
          method: "DELETE"
        },

        // INTERNAL. Use Device.user.count() instead.
        "prototype$__count__user": {
          url: urlBase + "/devices/:id/user/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#create
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/devices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#createMany
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/devices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#upsert
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/devices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#exists
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/devices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#findById
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/devices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#find
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/devices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#findOne
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/devices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#updateAll
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/devices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#deleteById
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/devices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#count
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/devices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#prototype$updateAttributes
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/devices/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Device#createChangeStream
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/devices/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Device#updateOrCreate
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Device#update
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Device#destroyById
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Device#removeById
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Device` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Device#modelName
    * @propertyOf lbServices.Device
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Device`.
    */
    R.modelName = "Device";

    /**
     * @ngdoc object
     * @name lbServices.Device.user
     * @header lbServices.Device.user
     * @object
     * @description
     *
     * The object `Device.user` groups methods
     * manipulating `IBUser` instances related to `Device`.
     *
     * Call {@link lbServices.Device#user Device.user()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Device#user
         * @methodOf lbServices.Device
         *
         * @description
         *
         * Queries user of device.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::get::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#count
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Counts user of device.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.user.count = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::count::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#create
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Creates a new instance in user of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user.create = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::create::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#createMany
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Creates a new instance in user of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user.createMany = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::createMany::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#destroyAll
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Deletes all user of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.user.destroyAll = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::delete::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#destroyById
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Delete a related item by id for user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for user
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.user.destroyById = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::destroyById::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#exists
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Check the existence of user relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for user
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user.exists = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::exists::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#findById
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Find a related item by id for user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for user
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user.findById = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::findById::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#link
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Add a related item by id for user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for user
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user.link = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::link::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#unlink
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Remove the user relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for user
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.user.unlink = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::unlink::device::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Device.user#updateById
         * @methodOf lbServices.Device.user
         *
         * @description
         *
         * Update a related item by id for user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for user
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IBUser` object.)
         * </em>
         */
        R.user.updateById = function() {
          var TargetResource = $injector.get("IBUser");
          var action = TargetResource["::updateById::device::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
