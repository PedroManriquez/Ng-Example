(function () {
  angular.module('application').component('navBar', {
    templateUrl: 'src/app/components/NavBar/navbar.html',
    controller: navController,
    controllerAs: 'vm'
  });

  // inject dependencies in navController function 
  navController.$inject = ['$state'];

  function navController($state) {
    var vm = this;
    vm.isActive = function (value) {
    	return value === $state.current.name;
    };
  }
})();
