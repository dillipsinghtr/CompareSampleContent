'use strict';

(function (angular) {

  angular
    .module('rv.components.RVJumpToModule')
    .directive('rvJumpTo', RVJumpToField);

  function RVJumpToField() {

    return {
      restrict: 'AE',
      scope: {},
      bindToController: {
        fieldNames: '=',
      },
      controller: rvJumpToController,
      controllerAs: 'vm',
      templateUrl: 'modules/components/rv-center/templates/rv-jump-to-template.html'
    };


  }

  rvJumpToController.$inject = [];

  function rvJumpToController() {
    var vm = this; // jshint ignore:line

    vm.gotoAnchor = function(field) {
      //creating selector in the below format as ID's have space & cannot be accessed directly like $('#id')
      var selector = '[id=\'' + field + '\']';
      $(".content-display-scroll").scrollTop(0);
      $('.content-display-scroll').animate({scrollTop:$(selector).position().top}, 'slow');
    }
  }

})(angular);