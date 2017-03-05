(function() {
	function homeCtrlFunct() {
		this.homeMsg = "home controller check";
	}

	angular
		.module('blocChat')
		.controller('HomeController', homeCtrlFunct);
})();