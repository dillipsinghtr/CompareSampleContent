'use strict';

(function(angular){

  angular
  .module('rv.components.RVJumpToModule')
  .directive('rvJumpTo', RVJumpTo)
  .controller('rvJumpToController',RVJumpToController);

  function RVJumpTo(){
    return{
      restrict:'AE',
      scope:
      {
        title: '@'
      },
      templateUrl:'modules/components/jumpTo/templates/jumpto-template.html',
      bindToController:  {
        jumpItems:'='
      },
      controllerAs: 'vm',
      controller: 'rvJumpToController'
    };
  }


  RVJumpToController.$inject= ['$location','$anchorScroll'];


  function RVJumpToController( $location, $anchorScroll){
    var vm = this;
    vm.jumpToOptions= vm.jumpItems;;
    vm.jumpToLocation = function(key){
      $location.hash(key);
      $anchorScroll.yOffset = 80;
      $anchorScroll()
    }
  }
})(angular);