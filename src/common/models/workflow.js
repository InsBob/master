var WSPResponsePendingState = require("../../server/models/WSPResponsePendingState");
//var SPResponsePendingState = require("./SPResponsePendingState");

module.exports = function (Workflow) {


    //Initial state during constructor
    this.state = new WSPResponsePendingState();

    Workflow.cancel = function (reason, cb) {
        console.log("Vamsee");
        this.state.cancel(that, reason, cb);
        //cb(null,true);
    };

    //that.submitQuote = function (quote) {
    //    that.state.submitQuote(that, quote);
    //};
    //
    //that.acceptVisit = function (visitType, visitTime) {
    //    that.state.acceptVisit(that, visitType, visitTime);
    //};
    //
    //that.review = function (review) {
    //    that.state.review(that, review);
    //};
    //
    //that.bookSP = function (meetingTime, meetingType) {
    //    that.state.bookSP(that,meetingTime, meetingType);
    //};

    this.init = function(spId, ssId)
    {
        this.SPOwnerId = spId;
        this.SSUserId = spId;
    }

    this.notifySPOnCreate = function(){
        //TBD
    }

    Workflow.remoteMethod('cancel', {
        accepts: [
            {arg: 'reason', type: 'String'}
        ],
        description: "Cancel workflow at anytime",
        returns: {arg: 'success', type: 'Boolean'},
        http: {path: '/cancel', verb: 'post'}
    });
};