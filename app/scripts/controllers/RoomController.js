(function() {
	function roomCtrlFunct(RoomService, $stateParams) {
		this.roomId = $stateParams.roomId;
		this.roomObj = RoomService.getRoomById(this.roomId);
		console.log(this.roomObj); // how to get to name?
	}

	angular
		.module('blocChat')
		.controller('RoomController', ["RoomService", "$stateParams", roomCtrlFunct]);
})();