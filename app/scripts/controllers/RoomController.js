(function() {
	function roomCtrlFunct($stateParams) {
		this.roomId = $stateParams.roomId;
	}

	angular
		.module('blocChat')
		.controller('RoomController', roomCtrlFunct);
})();