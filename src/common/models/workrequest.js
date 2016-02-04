/* jshint maxlen: 1130 */
var match = require('../../server/match/SPMatch').getInstance();
var Workflow = require('../models/workflow');

module.exports = function (WorkRequest) {
    var DEFAULT_MATCH_COUNT = 5;


    //This is the main code that deals with submitting a request by SS
    WorkRequest.submit =
        function (workrequest, cb) {
            WorkRequest.create(workrequest,
                function (errCreate, workRequestObj) {
                    if (errCreate) {
                        console.log(errCreate);
                        return;
                    }

                    var ssId = workRequestObj.SSid;
                    //Get matched ids of SPs
                    var spList = match.getMatchedSPIds(workRequestObj, DEFAULT_MATCH_COUNT);

                    //Create Workflow with each of these SPs and the current SS
                    //For each of the workflow items, create a notification push request to the phones
                    for (var i = 0; i < spList.length; i++) {
                        var spId = spList[i];
                        var workflow = new Workflow();
                        workflow.init(spId, ssId);
                        console.log('Notifying SP',spId);
                        workflow.notifySPOnCreate();
                    }
                    cb(null, workRequestObj.id);
                    //A batch job runs every minute and based on a wait-time mapping, creates more workflows .
                    // after 2 mins, 5 mins, 10 mins, 20 mins, 40 mins, 1 hour, 2 hr, 6 hr, 12 hr, 1 day, 1.5 days days till noOfRequests are met
                    //After 2 days, if there is no response from any SPs, close all the workflows and the current request

                    //Another batch job expires all old workflows.
                });
        };

    WorkRequest.remoteMethod('submit', {
        accepts: [
            {arg: 'workrequest', type: 'Object'}
        ],
        description: 'Used by service seeker to submit a work request',
        returns: {arg: 'id', type: 'string'},
        http: {path: '/submit', verb: 'post'}
    });
};