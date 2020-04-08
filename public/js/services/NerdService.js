angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {
    var get = function() {
        return $http.get('/api/nerds').then(function(response){
            return response.data;
        }, function(error) {
            return error;
        });
    };

    // call to POST and create a new nerd
    var create = function(nerdData) {
        return $http.post('/api/nerds', nerdData).then(function(response) {
            return response.data;
        }, function(error) {
            return error;
        });
    };

    var dropNerd = function(id) {
        return $http.delete('/api/nerd' + id);
    };

    return {
        get: get,
        create: create,
        delete: dropNerd
    };
}]);