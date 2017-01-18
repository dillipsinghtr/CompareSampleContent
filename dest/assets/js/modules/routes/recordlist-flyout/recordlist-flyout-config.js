'use strict';

(function(angular) {

  angular
  .module('rv.routes.RecordListFlyOutModule')
  .config(RecordListFlyOutConfig);

  RecordListFlyOutConfig.$inject = ['$stateProvider'];

  function RecordListFlyOutConfig($stateProvider) {
    $stateProvider
    .state('recordListFlyOut', {
      templateUrl: 'modules/views/recordlist-flyout/templates/recordlist-flyout.html',
      url: '/recordListFlyOut',
      controller: 'recordListFlyOutController',
      controllerAs: 'vm',
      resolve: {
        viewLoginModule: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
          var deferred = $q.defer();
          // This is to avoid bootstrap test digest itreation error
          // caused by unresolved otherwise route
          try {
            require.ensure([], function () {
              var module = require('../../views/recordlist-flyout/recordlist-flyout-module');
              $ocLazyLoad.load({
                name: 'rv.views.RecordListFlyOutModule'
              });
              deferred.resolve(module);
            }, 'recordListFlyOut');
          } catch (e) {
            deferred.resolve(e);
          }
          return deferred.promise;

        }]
      }
    });
  }

})(angular);