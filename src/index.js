angular.module('demo',['ui'])
.controller('dropdownCtrl',dropdownCtrl);

function dropdownCtrl($scope){
	this.list = ['option 1', 'option 2', 'option 3'];
	this.options = {
		defaultText:'Drop Me!'
	}
}