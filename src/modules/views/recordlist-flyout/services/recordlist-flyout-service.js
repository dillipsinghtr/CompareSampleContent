'use strict';
(function(angular) {
  angular
  .module('rv.views.RecordListFlyOutModule')
  .service('recordListFlyOutService', RecordListFlyOutService);

  RecordListFlyOutService.$inject = ['$q', '$http'];

  function RecordListFlyOutService($q, $http) {
    var getRecords = function (category, resultsetId, offset, size, totalRecords) {
      var defer = $q.defer();
      if (angular.isDefined(category) && angular.isDefined(resultsetId) && angular.isDefined(offset) && angular.isDefined(size) && angular.isDefined(totalRecords)) {
        var config = {
          method: 'GET',
          url: 'http://localhost:8085/RESTServer/getMore',
          params: {
            category: category,
            resultsetId: resultsetId,
            offset: offset,
            size: size,
            totalRecords: totalRecords,

          }
        };

        $http(config).then(function (response) {
          defer.resolve(response.data);
        }, function(reject) {
          defer.reject(reject.data);
        });

        return defer.promise;
      }else {
        defer.reject('Request params missing');
        return defer.promise;
      }
    };

    return {
      getRecords: getRecords
    };
  }
})(angular);
