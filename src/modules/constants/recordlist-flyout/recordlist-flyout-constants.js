'use strict';

(function(angular) {

  angular
    .module('rv.constants.RecordListFlyOutModule')
    .constant('FLYOUT_CONFIG', {
      MORE_URL : 'http://localhost:8085/RESTServer/getMore'
    });

})(angular);