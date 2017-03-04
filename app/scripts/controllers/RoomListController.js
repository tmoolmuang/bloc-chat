(function() {
	function roomListCtrlFunct(RoomService) {
		this.roomList = RoomService.all;
	}

	angular
		.module('blocChat')
		.controller('RoomListController', ['RoomService', roomListCtrlFunct]);
})();