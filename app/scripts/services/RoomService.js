(function() {
  function RoomSvcFunct($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('RoomService', ['$firebaseArray', RoomSvcFunct]);
})();