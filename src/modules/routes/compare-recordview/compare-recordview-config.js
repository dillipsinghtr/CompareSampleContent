'use strict';

(function(angular) {

  angular
  .module('rv.routes.CompareRecordViewModule')
  .config(CompareRecordViewConfig);

  CompareRecordViewConfig.$inject = ['$stateProvider'];

  function CompareRecordViewConfig($stateProvider) {
    $stateProvider
    .state('compareRV', {
      templateUrl: 'modules/views/compare-recordview/templates/compare-recordview.html',
      url: '/compareRV',
      controller: 'compareRVController',
      controllerAs: 'vm',
      resolve: {
        viewLoginModule: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
          var deferred = $q.defer();
          // This is to avoid bootstrap test digest itreation error
          // caused by unresolved otherwise route
          try {
            require.ensure([], function () {
              var module = require('../../views/compare-recordview/compare-recordview-module');
              $ocLazyLoad.load({
                name: 'rv.views.CompareRecordViewModule'
              });
              deferred.resolve(module);
            }, 'compareRV');
          } catch (e) {
            deferred.resolve(e);
          }
          return deferred.promise;

        }]
      }
    });
  }

})(angular);