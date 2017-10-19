(function () {
  angular.module('application').component('client', {
    templateUrl: 'src/app/components/client/client.html',
    controller: clientController,
    controllerAs: 'vm'
  });
  // ClientController is a global function, this is a ng controller for component client
  function clientController() {
    var vm = this;
    // capital model
    vm.capital = 15000000;
    // clients model
    vm.clients = [
    {
      id: 1,
      nombre: 'Pedro',
      email: 'p.manriquez01@ufromail.cl',
      cuotas: [{
        id: 1,
        monto: 250000,
        fecha: '10-10-2017',
        pagado: false
      },
      {
        id: 2,
        monto: 250000,
        fecha: '10-11-2017',
        pagado: false
      },
      {
        id: 3,
        monto: 250000,
        fecha: '10-12-2017',
        pagado: false
      }]
    },
    {
      id: 2,
      nombre: 'Andrés',
      email: 'a.guzman01@ufromail.cl',
      cuotas: [{
        id: 1,
        monto: 375000,
        fecha: '05-10-2017',
        pagado: false
      },
      {
        id: 2,
        monto: 375000,
        fecha: '05-11-2017',
        pagado: false
      },
      {
        id: 3,
        monto: 375000,
        fecha: '05-12-2017',
        pagado: false
      }]
    }];
    // Controller for calculate cuote, this value be going to print in table 
    vm.calculateCuote = function (cuotes) {
      var mount = 0;
      cuotes.forEach(function (cuote) {
        if (!cuote.pagado) {
          mount += cuote.monto;
        }
      });
      return mount
    };
    // Controller for pay cuote, update boolean value and capital model
    vm.payCuote = function (cuotes) {
      for (var cuote of cuotes) {
        if (!cuote.pagado) {
          cuote.pagado = !cuote.pagado
          vm.capital += cuote.monto
          break;
        }
      }
    };
  }
})();
