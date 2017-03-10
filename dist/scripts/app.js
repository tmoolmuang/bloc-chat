(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController as home',
        templateUrl: '/templates/home.html'
      })
      .state('room', {
        url: '/room',
        controller: 'RoomController as room',
        templateUrl: '/templates/room.html',
				params: {
    			roomId: null
  			}
      });
  }
	
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
		 		templateUrl: "/templates/add_username.html",
				controller: "AddUsernameController as modal",
				backdrop: 'static'
      });			
    }		
  }
	
  angular
    .module('blocChat', ['ngCookies', 'ui.bootstrap', 'firebase', 'ui.router'])
    .config(config)
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();
