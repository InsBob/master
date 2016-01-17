module.exports = function (WorkRequest) {

    WorkRequest.submit =
        function (workrequest, cb) {
            WorkRequest.create(workrequest,
                function (errCreate, WorkRequestObj) {
                    WorkRequest.findById(WorkRequestObj.id,
                        function (errFind, WorkRequestFoundObj) {
                            cb(null, WorkRequestFoundObj.id);
                        });
                });
        };

    WorkRequest.initiateSearch = function (WorkRequest) {
        //

    };

    WorkRequest.remoteMethod('submit', {
        accepts: [
            {arg: 'workrequest', type: 'Object'}
        ],
        description: "Used by service seeker to submit a work request",
        returns: {arg: 'id', type: 'string'},
        http: {path: '/submit', verb: 'post'}
    });
};