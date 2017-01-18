'use strict';

(function (angular) {

  angular
    .module('rv.views.RecordListFlyOutModule')
    .controller('recordListFlyOutController', RecordListFlyOutController);

  RecordListFlyOutController.$inject = [];

  function RecordListFlyOutController() {
    var vm = this; // jshint ignore:line
    vm.selectRecordList = [];
    vm.param = 'PAT';
    vm.selectRecordToCompareTitle = "Select Records To Compare";
    vm.recordListLoaded = true;
    vm.findLabel = "Find Record";
    vm.findRecordToolTip ="Enter Record Number To Find";
    vm.resetFilter = "Reset Filter";
    vm.loadingText = "Loading...";
    vm.recordListCheckBoxToolTip = "Select This Record To Compare";
    vm.moreLabel = "More";
    vm.compareRecordLable = "Compare";
    vm.recordNumbers = [{
    		"recordNumber":"US1234561",
    		"recordTitle":"US1234561"
    	},{
    		"recordNumber":"US1234562",
    		"recordTitle":"US1234562"
    	},{
    		"recordNumber":"US1234563",
    		"recordTitle":"US1234563"
    	},{
    		"recordNumber":"US1234564",
    		"recordTitle":"US1234564"
    	},
    	{
    		"recordNumber":"US1234561",
    		"recordTitle":"US1234561"
    	},{
    		"recordNumber":"US1234562",
    		"recordTitle":"US1234562"
    	},{
    		"recordNumber":"US1234563",
    		"recordTitle":"US1234563"
    	},{
    		"recordNumber":"US1234564",
    		"recordTitle":"US1234564"
    	},{
    		"recordNumber":"US1234561",
    		"recordTitle":"US1234561"
    	},{
    		"recordNumber":"US1234562",
    		"recordTitle":"US1234562"
    	},{
    		"recordNumber":"US1234563",
    		"recordTitle":"US1234563"
    	},{
    		"recordNumber":"US1234564",
    		"recordTitle":"US1234564"
    	},
    	{
    		"recordNumber":"US1234561",
    		"recordTitle":"US1234561"
    	},{
    		"recordNumber":"US1234562",
    		"recordTitle":"US1234562"
    	},{
    		"recordNumber":"US1234563",
    		"recordTitle":"US1234563"
    	},{
    		"recordNumber":"US1234564",
    		"recordTitle":"US1234564"
    	}];
    vm.getRecordNumbers = function(){
    	var jsondata = [{
    		"recordNumber":"US1234561",
    		"recordTitle":"US1234561"
    	},{
    		"recordNumber":"US1234562",
    		"recordTitle":"US1234562"
    	},{
    		"recordNumber":"US1234563",
    		"recordTitle":"US1234563"
    	},{
    		"recordNumber":"US1234564",
    		"recordTitle":"US1234564"
    	}];
    	return jsondata;
    };
    vm.selectRecord = function(recordNumber){
    	if(vm.selectRecordList.length == 4){
    		alert("You can select maximum 4 records.");
    		//event.preventDefault();
    	}else if(vm.selectRecordList.indexOf(recordNumber) !== -1){
    		vm.selectRecordList.splice(vm.selectRecordList.indexOf(recordNumber), 1);
    		console.log(vm.selectRecordList);  
    	}else{
    		vm.selectRecordList.push(recordNumber);
    		console.log(vm.selectRecordList);
    	}
    }

  }

})(angular);
