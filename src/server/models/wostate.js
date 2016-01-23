module.exports = function (WOState) {
    WOState.cancel = function (workflow, reason, cb) {
        console.log("Reached WOState");
        cb(null, true);
        //if request came from SS,
        //workflow.request().notifyAllWorkflows(); //avoid race condition
        // For all cases
        //workflow.state = RequestEndState;
        //Move all workflows except the acceptedOne to a history table
    };

    WOState.submitQuote = function (workflow, quote) {
        // throw Not Implemented exception. This code should never be reached
    };

    WOState.acceptVisit = function (workflow, visitType, visitTime) {
        // throw Not Implemented exception. This code should never be reached
    };

    WOState.review = function (workflow, review) {
        // throw Not Implemented exception. This code should never be reached
    };

    WOState.bookSP = function (workflow, meetingTime, meetingType) {
        // throw Not Implemented exception. This code should never be reached
    };

};
