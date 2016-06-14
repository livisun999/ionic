angular.module('starter.controllers', ['ionic','ds.clock','ionic-timepicker','ngStorage'])
.controller('SettingController', function($scope, Chats) {
})
.controller('AlarmController', function($scope, $ionicModal, ionicTimePicker) {
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

  $scope.check_selected_ = function (state) {
    $scope.show_repeat = state;
    $scope.show_list = !state;
  }
  $scope.check_show_music = function (state){
    $scope.show_list = !state;
    $scope.show_music = state;
  }

})
    .controller('NewAlarmController', function($scope, $ionicModal, ionicTimePicker, $rootScope) {
      $scope.time = '--:--';
      $scope.openTimePicker1 = function () {
        var ipObj1 = {
          callback: function (val) {      //Mandatory
            if (typeof (val) === 'undefined') {
              console.log('Time not selected');
            } else {
              var selectedTime = new Date(val * 1000);
              var H = selectedTime.getUTCHours().toString();
              if(H.length <2){
                H = '0' + H;
              }
              var M =  selectedTime.getUTCMinutes().toString();
              if(M.length <2){
                M = '0' + M;
              }
              $scope.time = H + " : " + M ;
              console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
            }
          },
          inputTime: ((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60),   //Optional
          format: 24,         //Optional
          step: 1,           //Optional
          setLabel: 'Set'    //Optional
        };
        ionicTimePicker.openTimePicker(ipObj1);
      }
      $scope.repeat_check = function (){
        if(!$scope.show_repeat){
          $scope.show_repeat = true;
        }
        else{
          $scope.show_repeat = false;
        }
      }

      // SAVE LOCAL STORAGE

    })
    .controller('RepeatController',function($scope, $rootScope){

        $scope.save_alarm_repeat = function (){
          var a = document.getElementById("list_repeat").innerHTML;
          var count_ = a.split(" ");
          console.log(count_);
          for(var i = 0; i < count_.length; i++){
            if (count_[i] != "" && count_[i] != ":"){
                      
            }
          }
          $rootScope.list_repeat_show = a;
        }
    })
    .controller('MusicController', function ($scope, $rootScope) {

    })


;

