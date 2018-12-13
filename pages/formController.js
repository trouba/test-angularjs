testApp.controller('FormCtrl', ['$scope', 'userService', function($scope, userService) {

	var self = this;

  	self.user = userService;
  	$scope.user = self.user.load()

	$scope.save = function(user) {
		if (!self.user.save(user)) {
			$scope.displayWarningMessage = true;
		} else {
			$scope.displayWarningMessage = false;
			$scope.displaySuccessMessage = true;
		}
  	};
}]);