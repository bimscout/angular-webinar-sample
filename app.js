angular.module( 'sample', [
  'ui.router',
  'restangular',
  'sample.todoList',
  'sample.todoItem',
    'auth0'
])
.config( function ( RestangularProvider, $urlRouterProvider, authProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/open');

  $urlRouterProvider.otherwise('/');

        authProvider.init({
            domain: 'bimscout.auth0.com',
            clientID: 'dbJfHr8pZNMwSIbqEB03bx1jECo9TKqF',
            callbackURL: location.href
        })
})
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

})

;

