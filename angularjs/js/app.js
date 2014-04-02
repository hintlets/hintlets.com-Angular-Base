
var qbicApp = angular.module('qbicApp', ['ngRoute']);

/* ****************************************************************************** */
/* *                                                                            * */
/* *   R O U T E S                                                              * */
/* *                                                                            * */
/* ****************************************************************************** */

qbicApp.config(function ($routeProvider) {
	$routeProvider.when('/home', { templateUrl: 'templates/home.html',	controller: 'MainController' });
	$routeProvider.when('/login', { templateUrl: 'templates/login.html', controller: 'LoginController' });    
    $routeProvider.when('/about', {	templateUrl: 'templates/about.html', controller: 'AboutController' });	
	$routeProvider.otherwise({ redirectTo: '/login'});
});


/* ****************************************************************************** */
/* *                                                                            * */
/* *   C O N T R O L L E R S                                                    * */
/* *                                                                            * */
/* ****************************************************************************** */
 
qbicApp.controller('MainController', ['$scope', 'UserService', '$location', function ($scope, UserService, $location) {
    $scope.greeting = 'Hola!';
    $scope.selectedUser;
    $scope.users = function () {
        return UserService.list();
    };
    $scope.selectUser = function(user) {
        $scope.selectedUser = user;
    };
    $scope.addUser = function(user) {
        var userToAdd = angular.copy(user);
        UserService.addUser(userToAdd);
    }
    $scope.gotoHome = function () {  $location.path('/home'); };
    $scope.gotoAbout = function () { $location.path('/about'); };
}]);

qbicApp.controller('LoginController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {
  	 $scope.login = function() {
        $location.path('/home');
     };
}]);

qbicApp.controller('AboutController', ['$scope', '$location', 'ConfigurationService', function ($scope, $location, ConfigurationService) {
    $scope.configuration = ConfigurationService.applicationConfiguration;
}]);

/* ****************************************************************************** */
/* *                                                                            * */
/* *   S E R V I C E S                                                          * */
/* *                                                                            * */
/* ****************************************************************************** */

qbicApp.factory('UserService', function($http, $q) {
    return {
          users: [
            { id: "1", firstName: "Alex", lastName: "Goettel", age: "36"},
            { id: "2", firstName: "Steffi", lastName: "Goettel", age: "37"},
            { id: "3", firstName: "Moritz", lastName: "Goettel", age: "5"} 
        ], 
        addUser: function(user) {
            this.users.push( user );
        },
        list: function() {
            return this.users;
        },
        loadUsers: function() {
            return this.users;
        }
    };
});

qbicApp.factory('ConfigurationService', function() {
    return {
        applicationConfiguration: {
            name: "qbic",
            version: "0.1",
            buildVersion: "012",
        }
    };
});

/* ****************************************************************************** */
/* *                                                                            * */
/* *   D I R E C T I V E S                                                      * */
/* *                                                                            * */
/* ****************************************************************************** */