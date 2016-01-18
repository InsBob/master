module.exports = function (WorkRequest) {

    //This is the main code that deals with submitting a request by SS
    WorkRequest.submit =
        function (workrequest, cb) {
            WorkRequest.create(workrequest,
                function (errCreate, WorkRequestObj) {
                    if (errCreate) {
                        console.log(errCreate);
                        return;
                    }
                    WorkRequest.findById(WorkRequestObj.id,
                        function (errFind, WorkRequestFoundObj) {
                            if (errFind) {
                                console.log(errFind);
                                return;
                            }
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