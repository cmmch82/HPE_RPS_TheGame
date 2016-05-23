(function () {

    var dataService = function ($http, $q) {

       // var baseUrl = "http://localhost:55273/api/championship/"
        var baseUrl = "http://hpeservice.azurewebsites.net/api/championship/"
        var getTopN = function (count) {
            var deferred = $q.defer();
            var url = baseUrl + 'top';

            if (!count === 0) {
                url = url + '?count =' + count
            }

            $http.get(url).success(deferred.resolve).error(deferred.reject);

            return deferred.promise;
        };


        var setManualEntry = function (first, second) {
            var deferred = $q.defer();
            var url = baseUrl + 'results' + '?first=' + first + '&second=' + second;
            var data = '';
            $http.post(url, data).success(deferred.resolve).error(deferred.reject)
            return deferred.promise;
        };

        var postTournament = function (tournament) {
            var deferred = $q.defer();
            var url = baseUrl + 'new'
            var data = tournament;
            $http.post(url, tournament).success(deferred.resolve).error(deferred.reject);

            return deferred.promise;
        };

        var nuke = function () {
            var deferred = $q.defer();
            var url = baseUrl
            $http.delete(url).success(deferred.resolve).error(deferred.reject);

            return deferred.promise;
        };
        return {
            getTopN: getTopN,
            setManualEntry: setManualEntry,
            postTournament: postTournament,
            nuke: nuke
        }

    };

    var module = angular.module("gameApp");
    module.factory("dataService", dataService);

}());