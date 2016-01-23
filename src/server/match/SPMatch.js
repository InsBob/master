var util = require("util");
var uuid = require('node-uuid');

var Match = (function () {
    var instance;
    function createInstance() {
        var object = new Object("I am the instance");
        object.getMatchedSPIds = function (workrequest, noOfSPNeeded)
        {
            var spList = [];
            for(var x = 0; x <noOfSPNeeded; x++)
            {
                spList.add(uuid.v4());
            }
            return spList;
        };
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = Match;
