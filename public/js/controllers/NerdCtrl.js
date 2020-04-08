angular.module('NerdCtrl', []).controller('NerdController', function($scope, $log, $location, Nerd) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.submit = function(nerdData) {
        Nerd.create(nerdData).then(function(response) {
            $location.path('/nerds');
        }, function(error) {
            $log.error(error);
        });
    };
    
    Nerd.get().then(function(response){
        $scope.nerds = response;
    }, function(error){
        $scope.error = error;
    });
});

