var testApp = angular.module('testApp', ['ui.router', 'smart-table']);


testApp.config(function($stateProvider) {
  var formState = {
    name: 'form',
    url: '/',
    templateUrl: 'pages/form.html',
    controller:'FormCtrl'
  }

  var mapState = {
    name: 'map',
    url: '/map',
    templateUrl: 'pages/map.html',
    controller:'MapCtrl',
    resolve: {
      user: function(userService, $q, $state) {
        var deferred = $q.defer();
        if (userService.security()) {
          deferred.resolve({});
        } else {
          deferred.reject('no user')
          $state.go('form')
        }
        return deferred.promise;
      } 
    }
  }

  var csvState = {
    name: 'csv',
    url: '/csv',
    templateUrl: 'pages/csv.html',
    controller:'CsvCtrl',
    resolve: {
      user: function(userService, $q, $state) {
        var deferred = $q.defer();
        if (userService.security()) {
          deferred.resolve({});
        } else {
          deferred.reject('no user')
          $state.go('form')
        }
        return deferred.promise;
      } 
    }
  }

  var integrationState = {
    name: 'integration',
    url: '/integration',
    templateUrl: 'pages/integration.html'
  }

  $stateProvider.state(formState);
  $stateProvider.state(mapState);
  $stateProvider.state(csvState);
  $stateProvider.state(integrationState);
});


// Silence $state.go errors
testApp.run(function($state) {
  $state.defaultErrorHandler(function(error) {
  });
})
