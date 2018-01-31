(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$state', '$scope', '$timeout', 'MenuService', 'UIService', 'SolicitudService'];

			var HomeController = function($state, $scope, $timeout, MenuService, UIService, SolicitudService) {
				var vm					= this;

				vm.inService			= true;
				vm.services				= [];
				vm.currentService		= {};

				vm.selectSolicitud		= selectSolicitud;

				$scope.$on('$viewContentLoaded', function(){
					_init();
				})

				function _init() {
					UIService.showLoadingScreen('Buscando...');

					SolicitudService.getServicesAvailable()
						.then(function(data){
							vm.services = data;
						})
						.catch()
						.finally(function(){
							UIService.hideLoadingScreen();
						});
				};

				function selectSolicitud(solicitud){
					UIService.showLoadingScreen('Cargando...');

					vm.currentService = solicitud;

					$timeout(function(){
						UIService.hideLoadingScreen();
					}, 2000);

					$timeout(function(){
						SolicitudService.showSolicitudDialog();
					}, 3000);
				}
			};

			HomeController.$inject = ngDependencies;
			HomeController.registeredName = 'HomeController';
			return HomeController;
		}
	);
})();
