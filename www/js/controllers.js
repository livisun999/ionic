angular.module('starter.controllers', ['ionic','ds.clock','ionic-timepicker'])

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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AlarmController', function($scope, $ionicModal) {

  $scope.contacts = [
    { time: '22:00',
      A_content: 'dậy đi con heo',
      A_day: 'T2,T3,T4'
    },
    { time: '06:00',
      A_content: 'đi thi đi',
      A_day: 'T2,T3,T4,T5,T6,T7,CN'
    }
  ];

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function (u) {
    $scope.contacts.push({time: u.A_Time, A_content: u.A_content});
    $scope.modal.hide();
  };
});
