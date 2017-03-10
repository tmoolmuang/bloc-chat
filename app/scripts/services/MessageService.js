(function() {
  function MsgSvcFunct($cookies, $firebaseArray) {
		var MessageService = {};
		
		MessageService.getByRoomId = function(roomId) {
			var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
			return $firebaseArray(ref);
		};	
		
		MessageService.send = function(newMessage, roomId) {
			var msgObj = {};
			var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
			var msg = $firebaseArray(ref);
			msgObj.sentAt = new Date().getTime();
			msgObj.roomId = roomId;
			msgObj.content = newMessage;
			msgObj.username = $cookies.get('blocChatCurrentUser');
			msg.$add(msgObj)
			.then(function(ref) {
  				var id = ref.key;
					msg.$indexFor(id); 	
			});	
		};	
		
		return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$cookies', '$firebaseArray', MsgSvcFunct]);
})();