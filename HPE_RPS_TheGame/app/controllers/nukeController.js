(function () {

    var app = angular.module("gameApp");

    var nukeController = function ($scope, dataService) {
        //alert("inside the controller");

        $scope.nukeIt = function () {
            dataService.nuke().then(function (result) {
                $scope.deleted = (result !== 'null') ? result : {};
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

    };

    app.controller("nukeController", nukeController);

}());