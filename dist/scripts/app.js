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
  angular
    .module('blocChat', ['ui.bootstrap', 'firebase', 'ui.router'])
    .config(config);
})();
