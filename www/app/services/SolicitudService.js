(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$q', '$timeout', '$mdDialog'];

			var SolicitudService = function($q, $timeout, $mdDialog) {
				var vm = this;

				vm.solicitudes	= [
					{
						id: 1,
						tipo: 'Mecanico',
						latitude: 11.009401,
						longitude: -74.821543
					},
					{
						id: 2,
						tipo: 'Mecanico',
						latitude: 11.010466,
						longitude: -74.811384
					},
					{
						id: 3,
						tipo: 'Electricista',
						latitude: 11.010466,
						longitude: -74.811384
					}
				];

				vm.getServicesAvailable	= getServicesAvailable;
				vm.showSolicitudDialog	= showSolicitudDialog;

				function getServicesAvailable() {
					let defer = $q.defer();

					$timeout(function(){
						defer.resolve(vm.solicitudes);
					}, 1500);

					return defer.promise;
				};

				function showSolicitudDialog(ev){
					$mdDialog.show(
						{
							contentElement: '#solicitudDlg',
							parent: angular.element(document.body),
							targetEvent: ev,
							clickOutsideToClose: true
						}
					);
				};
			};

			SolicitudService.$inject = ngDependencies;
			SolicitudService.registeredName = 'SolicitudService';
			return SolicitudService;
		}
	);
})();
