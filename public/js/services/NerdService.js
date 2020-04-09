angular.module('NerdService', []).factory('Nerd', ['$http', '$log', function($http) {
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

    var edit = function(id, name) {    
        var jsonName = JSON.stringify({name: name});

        return $http.patch('/api/nerds/' + id, jsonName).then(function(response) {
            return response.data;
        }, function(error) {
            return error;
        });
    };

    // call to delete
    var dropNerd = function(id) {
        return $http.delete('/api/nerds/' + id).then(function(response) {
            return response.data;
        }, function(error) {
            return error;
        });
    };

    return {
        get: get,
        create: create,
        delete: dropNerd,
        edit: edit
    };
}]);