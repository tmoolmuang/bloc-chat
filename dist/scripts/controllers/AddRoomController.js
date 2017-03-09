(function() {
	function modalCtrlFunct(RoomService, $uibModalInstance) {
		this.ok = function () {
			$uibModalInstance.close(newRoom);
			RoomService.addRoom(newRoom.value);
			//switch immediately to new room?
		};
		this.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	}

	angular
		.module('blocChat')
		.controller('AddRoomController', ["RoomService", '$uibModalInstance', modalCtrlFunct]);
})();