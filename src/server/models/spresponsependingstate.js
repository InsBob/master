module.exports = function(SPResponsePendingState) {
    SPResponsePendingState.submitQuote = function (workflow, quote) {
        //Validate Quote. TBD.
        workflow.request().respWaitingWorkflowIds.remove(workflow.id);
        workflow.request().connectedWorkflowIds.add(workflow.id);
        workflow.quotes.add(quote);
        workflow.state = modelsRef.SPQuoteSubmittedState;
    };

};
