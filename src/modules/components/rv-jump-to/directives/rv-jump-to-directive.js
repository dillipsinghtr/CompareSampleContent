'use strict';

(function (angular) {

  angular
    .module('rv.components.RVJumpToModule')
    .directive('rvJumpTo', rvJumpTo);

  function rvJumpTo() {

    return {
      restrict: 'AE',
      scope: {},
      bindToController: {
        fieldNames: '=',
        totalSections: '@'
      },
      controller: rvJumpToController,
      controllerAs: 'vm',
      templateUrl: 'modules/components/rv-center/templates/rv-jump-to-template.html'
    };


  }

  rvJumpToController.$inject = ['$location', '$anchorScroll'];

  function rvJumpToController($location, $anchorScroll) {
    var vm = this; // jshint ignore:line

    vm.gotoAnchor = function(field) {
      if (angular.isDefined(totalSections)) {
        for(var i=1; i<=vm.totalSections;i++) {
          $location.hash(field + i);
          $anchorScroll();  
        }
      }else {
        $location.hash(field);
        $anchorScroll();  
      }
    }
  }

})(angular);