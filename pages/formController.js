testApp.controller('FormCtrl', ['$scope', 'userService', function($scope, userService) {

	var self = this;

  	self.user = userService;
  	$scope.user = self.user.load()

	$scope.save = function(user) {
		self.user.save(user)
  	};
}]);