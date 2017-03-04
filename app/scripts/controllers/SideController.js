(function() {
	function sideCtrlFunct() {
		this.sideMsg = "side controller check";
	}

	angular
		.module('blocChat')
		.controller('SideController', sideCtrlFunct);
})();