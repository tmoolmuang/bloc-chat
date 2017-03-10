(function() {
	function modalCtrlFunct($cookies, $uibModalInstance) {
		this.warning = null;
		this.ok = function () {
			if (!newUsername || newUsername.value.trim().length == 0) {
				this.warning = " invalid username!";				
			}
			else {
				$uibModalInstance.close(newUsername);			
				$cookies.put('blocChatCurrentUser', newUsername.value);
				window.location.reload();
			}			
		};	
	}

	angular
		.module('blocChat')
		.controller('AddUsernameController', ['$cookies', '$uibModalInstance', modalCtrlFunct]);
})();