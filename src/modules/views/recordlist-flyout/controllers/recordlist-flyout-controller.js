'use strict';

(function (angular) {

  angular
  .module('rv.views.RecordListFlyOutModule')
  .controller('recordListFlyOutController', RecordListFlyOutController);

  RecordListFlyOutController.$inject = ['RecordListFlyOutService', '$stateParams','$location'];

  function RecordListFlyOutController(RecordListFlyOutService, $stateParams,$location) {
    var vm = this; // jshint ignore:line
    var params = $location.search();
    vm.selectRecordList = [];
    vm.category = params.category;
    vm.resultsetId =  parseInt(params.resultsetId);
    vm.offset = parseInt(params.offset);
    vm.size = parseInt(params.size);
    vm.totalRecords = parseInt(params.totalRecords);
    vm.selectRecordToCompareTitle = 'Select Records To Compare';
    vm.recordListLoaded = false;
    vm.findLabel = 'Find Record';
    vm.findRecordToolTip ='Enter Record Number To Find';
    vm.resetFilter = 'Reset Filter';
    vm.loadingText = 'Loading...';
    vm.recordListCheckBoxToolTip = 'Select This Record To Compare';
    vm.moreButtonLabel = 'More';
    vm.moreButtonToolTip = '';
    vm.compareRecordLable = 'Compare';
    vm.compareRecordToolTip = '';
    vm.recordNumbers = [];
    vm.isEligibleToCompare = function(){
        if(vm.selectRecordList.length >1){
            vm.compareRecordToolTip = 'Click to compare selected records';
            return true;
        }else{
            vm.compareRecordToolTip = '';
            return false;
        }
    };
    vm.isLastRecordFound = function(){
        if(vm.recordNumbers.length === vm.totalRecords){
            vm.moreButtonToolTip = '';
            return true
        }else{
           vm.moreButtonToolTip = 'Click to see more records';
           return false;
       }
   };
   vm.selectRecord = function(recordNumber,event){
       if(vm.selectRecordList.indexOf(recordNumber) === -1){
        if(vm.selectRecordList.length === 4){
            alert('You can select maximum 4 records');
            event.preventDefault();
        }else {
            vm.selectRecordList.push(recordNumber);
            console.log(vm.selectRecordList);
        }
    }else{
      vm.selectRecordList.splice(vm.selectRecordList.indexOf(recordNumber), 1);
      console.log(vm.selectRecordList);  
  }
};

vm.fetchMoreRecords = function(){
    vm.recordListLoaded = false;
    RecordListFlyOutService.getRecords(vm.category,vm.resultsetId,vm.offset,vm.size,vm.totalRecords)
    .then(function (response){
        var records = response.recordList;
        vm.recordNumbers = vm.recordNumbers.concat(records);
        vm.offset = vm.offset + vm.size;
        vm.recordListLoaded = true;
    }).then(function (error){
        console.log(error);
    });
};
vm.compareRecords = function(){
    alert("records are ========");
    alert(vm.recordNumbers)
}
vm.fetchMoreRecords();
}
})(angular);
