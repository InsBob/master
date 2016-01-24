module.exports = function(IBUser) {
    IBUser.validatesInclusionOf('gender', {in: ['male', 'female', 'other']});
};
