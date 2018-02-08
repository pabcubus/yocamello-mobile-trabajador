(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', '$mdDialog', 'lodash', 'GoogleMapsService'];

			var SolicitudController = function($scope, $mdDialog, lodash, GoogleMapsService) {
				var vm			= this;

				vm.title		= 'Solicitud';
				vm.solicitud	= {};

				vm.$onChanges = function (changes) {
					if (lodash.has(changes, 'solicitud')) {
						vm.solicitud	= changes.solicitud.currentValue[0];
						_initMapa();
					}
				}

				vm.acceptTrabajador = acceptTrabajador;
				vm.cancelTrabajador = cancelTrabajador;

				function _initMapa(){
					let points = [
						{
							color: 'red',
							coordinates: vm.solicitud.latitude+','+vm.solicitud.longitude
						}
					];
					vm.mapa = GoogleMapsService.createStaticMap(points);
				}

				function acceptTrabajador() {
					$mdDialog.cancel();
				}

				function cancelTrabajador() {
					$mdDialog.cancel();
				}
			};

			SolicitudController.$inject = ngDependencies;
			SolicitudController.registeredName = 'SolicitudController';
			return SolicitudController;
		}
	);
})();
