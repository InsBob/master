angular.module('app.controllers', ['lbServices', 'app.services'])

.controller('homeCtrl', function($scope) {

})


.controller('selectCategoriesCtrl', ['$ionicFilterBar', function($ionicFilterBar) {
  var vm = this,
  items = [],
  filterBarInstance;

  for (var i = 1; i <= 1000; i++) {
    var itemDate = moment().add(i, 'days');

    var item = {
      description: 'Description for item ' + i,
      date: itemDate.toDate()
    };
    items.push(item);
  }

  // function getItems () {
  //   var items = [];
  //   for (var x = 1; x < 2000; x++) {
  //     items.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
  //   }
  //   vm.items = items;
  // }

  vm.items = items;

  //getItems();

  vm.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: vm.items,
      update: function (filteredItems) {
        vm.items = filteredItems;
      },
      filterProperties: 'description'
    });
  };

  // vm.refreshItems = function () {
  //   if (filterBarInstance) {
  //     filterBarInstance();
  //     filterBarInstance = null;
  //   }
  //
  //   $timeout(function () {
  //     getItems();
  //     vm.$broadcast('scroll.refreshComplete');
  //   }, 1000);
  // };

  return vm;
}])

.controller('categoryCtrl', function($scope,$stateParams) {
  $scope.category = $stateParams.categoryId;
})

.controller('submitCtrl', function($scope) {

})

.controller('requestsCtrl', function($scope) {

})

.controller('reqDetailsCtrl', function($scope) {
  $scope.slider = { //requires angular-bootstrap to display tooltips
    value: 3,
    options: {
      stepsArray: 'initiated-requests-received-underway-done'.split('-'),
      readOnly: false,
      showSelectionBar: true,
      showTicksValues: true,
      ticksValuesTooltip: function(v) {
        return 'Tooltip for ' + v;
      },
      getSelectionBarColor: function(value) {
        if (value <= 0)
        return 'red';
        if (value <= 2)
        return 'orange';
        if (value <= 3)
        return 'yellow';
        return '#2AE02A';
      },
      getPointerColor: function(value) {
        if (value <= 0)
        return 'red';
        if (value <= 2)
        return 'orange';
        if (value <= 3)
        return 'yellow';
        return '#2AE02A';
      }
    }
  };

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

//.controller('loginCtrl', function($scope, $ionicModal, $timeout, ngFB) {
.controller('loginCtrl', function($scope, $state, $q, $location, IBUser, $ionicLoading, $ionicPopup) {
  if (IBUser.getCachedCurrent()!==null) {
    $location.path('/menu/home');
  }
  /*$scope.fbLogin = function () {
  console.log("logging");
  ngFB.login({scope: 'email,publish_actions'}).then(
  function (response) {
  console.log("response"+response);
  if (response.status === 'connected') {
  console.log('Facebook login succeeded');
  $scope.closeLogin();
} else {
alert('Facebook login failed');
}
});
};*/

$scope.credentials = {};
$scope.registration = {};
// This method is executed when the user press the "Sign in with Google" button
$scope.googleSignIn = function() {
  $ionicLoading.show({
    template: 'Logging in...'
  });

  window.plugins.googleplus.login(
    {},
    function (user_data) {
      // For the purpose of this example I will store user data on local storage
      UserService.setUser({
        userID: user_data.userId,
        name: user_data.displayName,
        email: user_data.email,
        picture: user_data.imageUrl,
        accessToken: user_data.accessToken,
        idToken: user_data.idToken
      });

      $ionicLoading.hide();
      $state.go('app.home');
    },
    function (msg) {
      $ionicLoading.hide();
    }
  );
};

// This is the success callback from the login method
var fbLoginSuccess = function(response) {
  if (!response.authResponse){
    fbLoginError("Cannot find the authResponse");
    return;
  }

  var authResponse = response.authResponse;

  getFacebookProfileInfo(authResponse)
  .then(function(profileInfo) {
    // For the purpose of this example I will store user data on local storage
    UserService.setUser({
      authResponse: authResponse,
      userID: profileInfo.id,
      name: profileInfo.name,
      email: profileInfo.email,
      picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
    });
    $ionicLoading.hide();
    $state.go('menu.home');
  }, function(fail){
    // Fail get profile info
    console.log('profile info fail', fail);
  });
};

// This is the fail callback from the login method
var fbLoginError = function(error){
  console.log('fbLoginError', error);
  $ionicLoading.hide();
};

// This method is to get the user profile info from the facebook api
var getFacebookProfileInfo = function (authResponse) {
  var info = $q.defer();

  facebookConnectPlugin.api('/me?fields=email,id,gender,first_name,last_name,name&access_token=' + authResponse.accessToken, null,
  function (response) {
    console.log(response);
    info.resolve(response);
  },
  function (response) {
    console.log(response);
    info.reject(response);
  }
);
return info.promise;
};

$scope.showAlert = function (title, errorMsg) {
  var alertPopup = $ionicPopup.alert({
    title: title,
    template: errorMsg
  });
  alertPopup.then(function (res) {
    console.log($scope.loginError);
  });
};

$scope.appSignin = function() {
  if ($scope.credentials.password != 'FaceBookLogin') {
    $scope.loginResult = IBUser.login({include: 'user', rememberMe: true}, $scope.credentials,
    function () {
      var next = $location.nextAfterLogin || '/menu/home';
      $location.nextAfterLogin = null;
      $location.path(next);
    },
    function (err) {
      $scope.loginError = err;
      $scope.showAlert(err.statusText, err.data.error.message);
    }
  );
}else {
  $scope.showAlert("Invalid Password", "Please Login through facebook");
}

};

//This method is executed when the user press the "Login with facebook" button
$scope.facebookSignIn = function() {
  console.log($scope.credentials,"login creds");
  facebookConnectPlugin.getLoginStatus(function(success){
    console.log(success);
    if(success.status === 'connected'){
      // The user is logged in and has authenticated your app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed request, and the time the access token
      // and signed request each expire
      console.log('getLoginStatus', success.status);

      // After connection is success get username, email from facebook and check if exists in our database
      getFacebookProfileInfo(success.authResponse)
      .then(function(profileInfo) {
        // For the purpose of this example I will store user data on local storage
        /*  UserService.setUser({
        authResponse: success.authResponse,
        userID: profileInfo.id,
        name: profileInfo.name,
        email: profileInfo.email,
        picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
      });*/
      $scope.credentials.username=profileInfo.email;
      $scope.credentials.password='FaceBookLogin';

      $scope.loginResult = IBUser.login({include: 'user', rememberMe: true}, $scope.credentials,
      function () {
        var next = $location.nextAfterLogin || '/menu/home';
        $location.nextAfterLogin = null;
        $location.path(next);
      },
      function (err) {
        $scope.loginError = err;
        //$scope.showAlert(err.statusText, err.data.error.message);
        // user logged in through facebook is not present in our database.
        // Register the user
        console.log("Registering user");
        $scope.registration.username=profileInfo.email;
        $scope.registration.password='FaceBookLogin';
        $scope.registration.id=10;
        $scope.registration.gender=profileInfo.gender;
        $scope.registration.email=profileInfo.email;

        $scope.createResult = IBUser.create($scope.registration)
        .$promise
        .then(function (res) {
          console.log("registration done");
          var next = $location.nextAfterCreate || '/menu/home';
          $location.nextAfterCreate = null;
          $location.path(next);
        },
        function (err) {
          // Registration Error
          console.log("registration Error");
          $scope.loginError = err;
          $scope.showAlert(err.statusText, err.data);
        }
      );

    }
  );
  $state.go('menu.home');
}, function(fail){
  // Fail get profile info
  console.log('profile info fail', fail);
});
} else {
  // If (success.status === 'not_authorized') the user is logged in to Facebook,
  // but has not authenticated your app
  // Else the person is not logged into Facebook,
  // so we're not sure if they are logged into this app or not.

  console.log('getLoginStatus', success.status);

  $ionicLoading.show({
    template: 'Logging in...'
  });

  // Ask the permissions you need. You can learn more about
  // FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
  facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
}
});
};
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('sidemenu', function($scope) {
    $scope.img = "http://tse1.mm.bing.net/th?&id=HG.286605586806&w=300&h=300&c=0&pid=1.9&rs=0&p=0";
  })

  .controller('profile', function($scope) {
    $scope.img = "http://tse1.mm.bing.net/th?&id=OIP.M371f0b5610a2207bfaa7e704a58e5e72o0&w=300&h=300&c=0&pid=1.9&rs=0&p=0";
  })


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
