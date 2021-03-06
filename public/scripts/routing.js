var app = angular.module('business-landing');

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/greeting.html'
    }).when('/business-choice', {
        templateUrl: 'templates/business-choice.html'
    }).when('/map', {
        templateUrl: 'templates/map.html',
        controller: 'MapController'
    }).when('/demographicSelection', {
        templateUrl: 'templates/demographics-form.html',
        controller: 'DemographicsSelectionController'
    }).when('/getting-started', {
        templateUrl: 'templates/getting-started.html',
    });
}]);