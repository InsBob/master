module.exports = function(SPQuoteSubmittedState) {
  SPQuoteSubmittedState.bookSP = function (workflow, meetingTime, meetingType) {
    //Validate Quote. TBD.
    workflow.request().respWaitingWorkflowIds.clear();
    workflow.request().connectedWorkflowIds.clear();
    workflow.request().respPostponedWorkflowIdList.clear();
    workflow.request().removedWorkflowIds.clear();
    workflow.request().quote = workflow.quote;
    workflow.currentMeetingTime = meetingTime;
    workflow.currentMeetingTime = meetingType;
    //workflow.state = modelsRef.MeetingScheduledInFutureState;
  };

};
