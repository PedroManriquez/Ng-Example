(function () {
  angular.module('application')
    .config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // StateProvider defined all states of app, with url and component or template and controller
    $stateProvider
      .state('app', {
        url: '/',
        component: 'baseComponent'
      })
      .state('client', {
        url: '/clientes',
        component: 'client'
      });
  }
})();
