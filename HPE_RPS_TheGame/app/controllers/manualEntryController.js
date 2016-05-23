(function () {

    var app = angular.module("gameApp");

    var manualEntryController = function ($scope, dataService) {
        //alert("inside the controller");

        $scope.firstplace = '';
        $scope.secondplace = '';


        $scope.manualEntry = function () {
            dataService.setManualEntry($scope.firstplace, $scope.secondplace).then(function (result) {
                $scope.manualdone = (result !== 'null') ? result : {};
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

    };

    app.controller("manualEntryController", manualEntryController);

}());