angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('menu', {
    url: '/menu',
    abstract:true,
    templateUrl: 'templates/menu.html'
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.selectCategories', {
    url: '/searchCategories',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selectCategories.html',
        controller: 'selectCategoriesCtrl'
      }
    }
  })

  .state('menu.selectCategory', {
    url: '/searchCategories/:categoryId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subCategories.html',
        controller: 'categoryCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.mediaUpload', {
    url: '/upload/:categoryId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mediaUpload.html',
        controller: 'mediaUploadCtrl'
      }
    }
  })

  .state('menu.submit', {
    url: '/submit',
    views: {
      'side-menu21': {
        templateUrl: 'templates/submit.html',
        controller: 'submitCtrl'
      }
    }
  })

  .state('menu.requests', {
    url: '/requests',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Requests.html',
        controller: 'requestsCtrl'
      }
    }
  })

  .state('menu.reqDetails', {
    url: '/reqDetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reqDetails.html',
        controller: 'reqDetailsCtrl'
      }
    }
  })

  .state('menu.tabs', {
    url: '/tabs',
    views: {
      'side-menu21': {
        controller: 'requestsCtrl',
        templateUrl: function() {
          if (ionic.Platform.isAndroid()) {
              return  "templates/tabs-android.html";
          }
          return "templates/tabs-ios.html";
        }

      }
    }
  })

  .state('menu.tabs.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('menu.tabs.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/home');

});
