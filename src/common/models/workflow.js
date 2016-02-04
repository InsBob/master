/* jshint maxlen: 130 */

var WSPResponsePendingState = require('../../server/models/WSPResponsePendingState');

module.exports = function (Workflow) {

    var that = this;
    //Initial state during constructor
    this.state = new WSPResponsePendingState();

    Workflow.cancel = function (reason, cb) {
        this.state.cancel(that, reason, cb);
    };

    this.init = function(spId, ssId)
    {
        this.SPOwnerId = spId;
        this.SSUserId = spId;
    };

    this.notifySPOnCreate = function(SPid){
        //TBD
    };

    Workflow.remoteMethod('cancel', {
        accepts: [
            {arg: 'reason', type: 'String'}
        ],
        description: 'Cancel workflow at anytime',
        returns: {arg: 'success', type: 'Boolean'},
        http: {path: '/cancel', verb: 'post'}
    });
};