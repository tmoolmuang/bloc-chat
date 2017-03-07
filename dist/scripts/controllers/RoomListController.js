(function() {
	function roomListCtrlFunct($uibModal, RoomService) {
		this.roomList = RoomService.all;
		this.showNewRoomModal = function () {
			var modalInstance = $uibModal.open({
				templateUrl: "/templates/add_room.html",
				controller: "AddRoomController as modal"
			});		
		};
	}

	angular
		.module('blocChat')
		.controller('RoomListController', ['$uibModal', 'RoomService', roomListCtrlFunct]);
})();