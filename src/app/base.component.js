(function () {
  angular.module('application').component('baseComponent', {
    templateUrl: 'src/app/base.html',
    controller: baseCtrl,
    controllerAs: 'vm'
  });

  function baseCtrl() {
    var vm = this;
    vm.saludo = 'Hola a todos'
  }  
})();
