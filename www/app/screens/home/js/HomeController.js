(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$state', '$scope', '$timeout', 'MenuService', 'UIService', 'SolicitudService'];

			var HomeController = function($state, $scope, $timeout, MenuService, UIService, SolicitudService) {
				var vm					= this;

				vm.inService			= true;
				vm.servicesAvailable	= [];
				vm.currentService		= {};

				$scope.$on('$viewContentLoaded', function(){
					_init();
				})

				function _init() {
					UIService.showLoadingScreen('Cargando servicios disponibles...');

					SolicitudService.getServicesAvailable()
						.then(function(data){
							vm.servicesAvailable = data;
						})
						.catch()
						.finally(function(){
							UIService.hideLoadingScreen();
						});

					SolicitudService.getServices()
						.then(function(data){
							vm.currentService = data;
							
							$timeout(function(){
								SolicitudService.showSolicitudDialog();
							}, 5000);
						});

				};
			};

			HomeController.$inject = ngDependencies;
			HomeController.registeredName = 'HomeController';
			return HomeController;
		}
	);
})();
