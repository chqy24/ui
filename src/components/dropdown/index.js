angular.module('ui')
.directive('cDropdown',cDropdown);

function cDropdown(){
	return {
		restrict: 'AE',
		scope:{
			list: '=',
			options: '=',
			isOpen: '='
		},
		templateUrl:'components/dropdown/index.html',
		link:function(scope, ele, attr){
			var options = _.extend({
				prefix:'c-',
				check:false,
				isOpen: false
			}, scope.options);

			var prefix = options.prefix;

			ele.addClass(prefix + 'dropdown');
			ele.find('ul').addClass(prefix + 'dropdown-list');
			ele.find('li').addClass(prefix + 'dropdown-item');
		}
	}
}