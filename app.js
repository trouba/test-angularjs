var testApp = angular.module('testApp', ['ui.router']);

testApp.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/',
    template: '<h3>Home</h3>'
  }

  var formState = {
    name: 'form',
    url: '/form',
    template: '<h3>form</h3>'
  }

  var mapState = {
    name: 'map',
    url: '/map',
    templateUrl: 'pages/map.html'
  }

  var csvState = {
    name: 'csv',
    url: '/csv',
    template: '<h3>CSV</h3>'
  }

  var integrationState = {
    name: 'integration',
    url: '/integration',
    templateUrl: 'pages/integration.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(formState);
  $stateProvider.state(mapState);
  $stateProvider.state(csvState);
  $stateProvider.state(integrationState);
});