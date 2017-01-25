'use strict';

(function (angular) {

  angular
    .module('rv.views.CompareRecordViewModule')
    .controller('compareRVController', CompareRecordViewController);

  CompareRecordViewController.$inject = [];

  function CompareRecordViewController() {
    var vm = this; // jshint ignore:line
    vm.param = 'PAT';
  }

})(angular);
