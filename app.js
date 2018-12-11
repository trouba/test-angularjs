var testApp = angular.module('testApp', ['ui.router']);

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
    controller:'MapCtrl'
  }

  var csvState = {
    name: 'csv',
    url: '/csv',
    templateUrl: 'pages/csv.html',
    controller:'CsvCtrl'
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

