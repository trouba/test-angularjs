testApp.controller('FormCtrl', ['$scope', function($scope) {

	localStorage.getItem('user') === null ? $scope.user = {} : $scope.user = JSON.parse(localStorage.getItem('user'))

	$scope.save = function(user) {
		if (user.email !== undefined && user.name !== undefined) {
			$scope.user = angular.copy(user);
        	localStorage.setItem('user', JSON.stringify($scope.user));
		}
		
  	};
}]);