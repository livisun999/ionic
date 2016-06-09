angular.module('starter.controllers', ['ionic','ds.clock','ionic-timepicker'])


.controller('SettingController', function($scope, Chats) {



})
.controller('AlarmController', function($scope, $ionicModal, ionicTimePicker) {
  $scope.show_list = true;
  $scope.time = '--:--';
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
  $scope.check_show_music = function (state){
    $scope.show_list = !state;
    $scope.show_music = state;
  }
      $scope.openTimePicker1 = function () {
        var ipObj1 = {
          callback: function (val) {      //Mandatory
            if (typeof (val) === 'undefined') {
              console.log('Time not selected');
            } else {
              var selectedTime = new Date(val * 1000);
              $scope.time = selectedTime.getUTCHours(), 'H :' + selectedTime.getUTCMinutes(), 'M :';
              console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
            }
          },
          inputTime: ((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60),   //Optional
          format: 12,         //Optional
          step: 1,           //Optional
          setLabel: 'Set'    //Optional
        };
        ionicTimePicker.openTimePicker(ipObj1);
      }
});
