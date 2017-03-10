(function() {
	function homeCtrlFunct($cookies) {
		this.username = $cookies.get('blocChatCurrentUser');		
		this.warning = "null";

		/// debugging 
		this.removeCookie = function() {
			$cookies.remove('blocChatCurrentUser');
			window.location.reload();
		};	
		///
	}	

	angular
		.module('blocChat')
		.controller('HomeController', ['$cookies', homeCtrlFunct]);
})();