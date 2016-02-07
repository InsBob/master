angular.module('app.controllers', ['app.services', 'ngOpenFB'])

.controller('homeCtrl', function($scope) {

})

.controller('selectCategoriesCtrl', function($scope) {


})

.controller('categoryCtrl', function($scope) {


})

.controller('submitCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, $ionicModal, $timeout, ngFB) {

  $scope.fbLogin = function () {
      ngFB.login({scope: 'email,publish_actions'}).then(
          function (response) {
              if (response.status === 'connected') {
                  console.log('Facebook login succeeded');
                  $scope.closeLogin();
              } else {
                  alert('Facebook login failed');
              }
          });
  };
})
