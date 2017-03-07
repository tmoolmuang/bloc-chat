(function() {
  function RoomSvcFunct($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
		
		var addRoom = function(newRoom) {			
			rooms.$add({name:newRoom})
			.then(function(ref) {
  				var id = ref.key;
					rooms.$indexFor(id); // necessary?			
			});						
		};
		
		var getRoom = function(id) {
			return $firebaseArray(ref.child(id));
		};		
		
    return {
      all: rooms,
			addNewRoom: addRoom,
			getRoomById: getRoom
    };
  }

  angular
    .module('blocChat')
    .factory('RoomService', ['$firebaseArray', RoomSvcFunct]);
})();