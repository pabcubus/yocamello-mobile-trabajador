define([], function () {
	'use strict';

	return {
		bindings: {
			solicitud: '<',
		},
		controller: 'SolicitudController',
		controllerAs: 'sc',
		templateUrl: 'app/components/solicitud/html/solicitud.html'
	};
});
