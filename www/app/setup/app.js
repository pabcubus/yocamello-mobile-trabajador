(function() {
	'use strict';
	require([
				'angular',
				'jquery',
				'uiRouter',
				'moment',
				'ngLodash',
				'angular-md5',
				'angular-animate',
				'angular-aria',
				'angular-messages',
				'angular-material',
				'jkAngularRatingStars',
				'zSchema',

				// Services
				'../app/services/HelperService',
				'../app/services/GoogleMapsService',
				'../app/services/SessionService',
				'../app/services/MenuService',
				'../app/services/UIService',
				'../app/services/SolicitudService',
				'../app/services/SchemaService',

				// Controllers for components
				'../app/components/loading/js/LoadingController',
				'../app/components/solicitud/js/SolicitudController',

				// Directives and Components
				'../app/components/loading/js/LoadingComponent',
				'../app/components/solicitud/js/SolicitudComponent',

				// Controllers
				'../app/AppController',
				'../app/screens/home/js/HomeController',
				'../app/screens/login/js/LoginController',
				'../app/screens/perfil/js/PerfilController',

				// ConfigServices
				'../app/setup/runConfig',
				'../app/setup/routesConfig'
			],
			function(
				ng,
				jquery,
				uiRouter,
				moment,
				ngLodash,
				angularMd5,
				angularAnimate,
				angularAria,
				angularMessages,
				angularMaterial,
				jkAngularRatingStars,
				zSchema,

				// Services
				HelperService,
				GoogleMapsService,
				SessionService,
				MenuService,
				UIService,
				SolicitudService,
				SchemaService,

				// Controllers for Directives and Components
				LoadingController,
				SolicitudController,

				// Directives and Components
				LoadingComponent,
				SolicitudComponent,

				// Controllers
				AppController,
				HomeController,
				LoginController,
				PerfilController,

				// ConfigServices
				runConfig,
				routesConfig
			) {
				ng.module('yocamello', ['ngMaterial', 'ui.router', 'angular-md5', 'ngLodash', 'jkAngularRatingStars'])
					// Services
					.service(HelperService.registeredName, HelperService)
					.service(GoogleMapsService.registeredName, GoogleMapsService)
					.service(SessionService.registeredName, SessionService)
					.service(MenuService.registeredName, MenuService)
					.service(UIService.registeredName, UIService)
					.service(SolicitudService.registeredName, SolicitudService)
					.service(SchemaService.registeredName, SchemaService)

					// Controllers for modules
					.controller(LoadingController.registeredName, LoadingController)
					.controller(SolicitudController.registeredName, SolicitudController)

					// Directives and Components
					.component('loading', LoadingComponent)
					.component('solicitud', SolicitudComponent)

					// Controllers
					.controller(AppController.registeredName, AppController)
					.controller(HomeController.registeredName, HomeController)
					.controller(LoginController.registeredName, LoginController)
					.controller(PerfilController.registeredName, PerfilController)

					.run(runConfig)
					.config(routesConfig);

				ng.bootstrap(document, ['yocamello']);
			}
		);
})();
