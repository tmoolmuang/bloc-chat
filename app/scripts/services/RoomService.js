(function() {
  function RoomSvcFunct($firebaseArray) {
		var RoomService = {};
    var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		
		RoomService.all = rooms;
		
		RoomService.addRoom = function(newRoom) {			
			rooms.$add({name:newRoom})
			.then(function(ref) {
  				var id = ref.key;
					rooms.$indexFor(id); // necessary?			
			});						
		};
		
		RoomService.getRoom = function(id) {
			return rooms.$getRecord(id);
		};		
		
		return RoomService;
  }

  angular
    .module('blocChat')
    .factory('RoomService', ['$firebaseArray', RoomSvcFunct]);
})();