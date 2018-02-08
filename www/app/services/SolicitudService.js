(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$q', '$timeout', '$mdDialog'];

			var SolicitudService = function($q, $timeout, $mdDialog) {
				var vm = this;

				vm.servicesAvailable	= [
					{
						id: 1,
						tipo: 'Mecanico',
						precio: 50000
					},
					{
						id: 3,
						precio: 30000,
						tipo: 'Electricista'
					}
				];

				vm.getServicesAvailable	= getServicesAvailable;
				vm.getServices			= getServices;
				vm.showSolicitudDialog	= showSolicitudDialog;

				function getServicesAvailable() {
					let defer = $q.defer();

					$timeout(function(){
						defer.resolve(vm.servicesAvailable);
					}, 1500);

					return defer.promise;
				};

				function getServices(){
					let defer = $q.defer();

					$timeout(function(){
						defer.resolve([
							{
								id: 1,
								latitude: 11.009401,
								longitude: -74.821543,
								servicio: {
									id: 1,
									tipo: 'Mecanico',
									precio: 50000
								},
								cliente:{
									id: 1,
									name: 'Pablo',
									lastname: 'Bassil',
									email: 'pabcubus@gmail.com'
								}
							}
						]);
					}, 1500);

					return defer.promise;
				}

				function showSolicitudDialog(){
					$mdDialog.show(
						{
							'contentElement': '#solicitudDlg',
							'parent': angular.element(document.body),
							'clickOutsideToClose': true
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
