(function() {
  function MsgSvcFunct($firebaseArray) {
		var MessageService = {};
		
		MessageService.getByRoomId = function(roomId) {
			var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
			return $firebaseArray(ref);
		};		
		
		return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', MsgSvcFunct]);
})();