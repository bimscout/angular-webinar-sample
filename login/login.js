angular.module('sample.todoItem', [
    'ui.router'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: 'login/login.html'
            });
    })
    .controller('LoginCtrl', function(auth) {
        auth.signin({
            popup: true

        })
    });
