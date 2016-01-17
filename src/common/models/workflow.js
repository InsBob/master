var SPResponsePendingState = require("../../server/models/SPResponsePendingState");

module.exports = function (Workflow) {

    var that = this;
    //Initial state during constructor
    that.state = SPResponsePendingState;

    Workflow.cancel = function (reason) {
        that.state.cancel(that, reason);
    };

    Workflow.submitQuote = function (quote) {
        that.state.submitQuote(that, quote);
    };

    Workflow.acceptVisit = function (visitType, visitTime) {
        that.state.acceptVisit(that, visitType, visitTime);
    };

    Workflow.review = function (review) {
        that.state.review(that, review);
    };

    Workflow.bookSP = function (meetingTime, meetingType) {
        that.state.bookSP(that,meetingTime, meetingType);
    };

};