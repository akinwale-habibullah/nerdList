angular.module('NerdCtrl', []).controller('NerdController', function($scope, $log, $location, $route, $routeParams, Nerd) {
    function reloadRoute() {
        $route.reload();
    };

    $scope.tagline = 'Nothing beats a pocket protector!';
    
    $scope.id = $routeParams.id;
    if ($scope.id) {
        Nerd.get().then(function(response){
            $scope.name = response[0]['name'];
        });
    }
    
    $scope.submit = function(nerdData) {
        Nerd.create(nerdData).then(function(response) {
            $location.path('/nerds');
        }, function(error) {
            $log.error(error);
        });
    };

    $scope.edit = function(id, name) {
        Nerd.edit(id, name).then(function(response) {
            $location.path('/nerds');
        }, function(error) {
            $log.error(error);
        });
    };
    
    $scope.delete = function(id){
        Nerd.delete(id).then(function(response) {          
            reloadRoute();
        }, function(error) {
            $log.error('Error occured while trying to delete record', error);
        });
    };
    
    Nerd.get().then(function(response){
        $scope.nerds = response;
    }, function(error){
        $scope.error = error;
    });
});

