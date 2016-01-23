var SPResponsePendingState = require("../../server/models/SPResponsePendingState");

module.exports = function (Workflow) {

    var that = this;
    //Initial state during constructor
    that.state = SPResponsePendingState;

    that.cancel = function (reason) {
        console.log("Vamsee");
        that.state.cancel(that, reason);
    };

    that.submitQuote = function (quote) {
        that.state.submitQuote(that, quote);
    };

    that.acceptVisit = function (visitType, visitTime) {
        that.state.acceptVisit(that, visitType, visitTime);
    };

    that.review = function (review) {
        that.state.review(that, review);
    };

    that.bookSP = function (meetingTime, meetingType) {
        that.state.bookSP(that,meetingTime, meetingType);
    };

    that.init = function(spId, ssId)
    {
        this.SPOwnerId = spId;
        this.SSUserId = spId;
    }

    that.notifySPOnCreate = function(){
        //TBD
    }

};