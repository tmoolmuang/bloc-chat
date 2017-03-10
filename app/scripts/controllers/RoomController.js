(function() {
	function roomCtrlFunct(MessageService, RoomService, $stateParams) {
		var roomId = $stateParams.roomId;
		this.roomObj = RoomService.getRoom(roomId);
		this.messages = MessageService.getByRoomId(roomId);
		this.sendMsg = function(newMessage) {
			MessageService.send(newMessage, roomId);
		}
	}

	angular
		.module('blocChat')
		.controller('RoomController', ["MessageService", "RoomService", "$stateParams", roomCtrlFunct]);
})();