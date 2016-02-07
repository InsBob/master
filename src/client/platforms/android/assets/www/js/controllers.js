angular.module('app.controllers', ['app.services', 'ngOpenFB'])

.controller('homeCtrl', function($scope) {

})

.controller('selectCategoriesCtrl', function($scope) {
  var  vm = this,items = [];

    for (var i = 1; i <= 1000; i++) {
        var itemDate = moment().add(i, 'days');

        var item = {
            description: 'Description for item ' + i,
            date: itemDate.toDate()
        };
        items.push(item);
    }

    vm.items = items;
		return vm;

})

.controller('categoryCtrl', function($scope) {


})

.controller('submitCtrl', function($scope) {

})

.controller('mediaUploadCtrl', function($scope) {
  // limit capture operation to 3 images
  var options = { limit: 3 };
  // capture callback
  var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;

      var x = document.getElementById("imgUpload");
      x.src = path;
      // do something interesting with the file
    }
  };

  // capture error callback
  var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
  };

  // start image capture
  $scope.captureImages = function () {
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
  }



  // capture callback
  var vidcaptureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
      var x = document.getElementById("vidUpload");
      x.src = path;
      // do something interesting with the file
    }
  };

  // capture error callback
  var vidcaptureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
  };

  // start video capture
  $scope.captureVideos = function () {
    navigator.device.capture.captureVideo(vidcaptureSuccess, vidcaptureError, {limit:1});
  }

  // audio options
  var audoptions = { limit: 1, duration: 10 };
  // capture callback
  var audcaptureSuccess = function(mediaFiles) {
     $scope.sound.file = mediaFiles[0].localURL;
	   $scope.sound.filePath = mediaFiles[0].fullPath;
  };

  // capture error callback
  var audcaptureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
  };

  // start audio capture
  $scope.captureAudio = function () {
    navigator.device.capture.captureAudio(audcaptureSuccess, audcaptureError, audoptions);
  }

  $scope.play = function() {
	if(!$scope.sound.file) {
		navigator.notification.alert("Record a sound first.", null, "Error");
		return;
	}
	var media = new Media($scope.sound.file, function(e) {
		media.release();
	}, function(err) {
		console.log("media err", err);
	});
	media.play();
}



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
