angular.module('starter.controllers', ['ionic','ds.clock','ionic-timepicker'])


.controller('SettingController', function($scope, Chats) {



})
.controller('AlarmController', function($scope, $ionicModal) {
  $scope.show_list = true;
  
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

  $scope.check_selected_ = function (state) {
    $scope.show_repeat = state;
    $scope.show_list = !state;
  }
});

