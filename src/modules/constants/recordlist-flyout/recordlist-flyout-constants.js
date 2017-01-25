'use strict';

(function(angular) {

  angular
    .module('rv.constants.RecordListFlyOutModule')
    .constant('FLYOUT_CONFIG', {
      MORE_URL : 'http://localhost:8445/Release5.3/getResultSetRecords.json'
    });

})(angular);