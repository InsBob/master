module.exports = function (SSWorkflow) {

    SSWorkflow.submitWorkOrder =
        function (ssworkflow, cb) {
            SSWorkflow.create(ssworkflow,
                function (errCreate, ssworkflowObj) {
                    SSWorkflow.findById(ssworkflowObj.id,
                        function (errFind, ssworkflowFoundObj) {
                            cb(null, ssworkflowFoundObj.id);
                        });
                });
        };
    SSWorkflow.remoteMethod('submitWorkOrder', {
        accepts: [
            {arg: 'ssworkflow', type: 'Object'}
        ],
        description: "Used to submit a workorder for service seeker",
        returns: {arg: 'id', type: 'string'},
        http: {path: '/submitWorkOrder', verb: 'post'}
    });
};