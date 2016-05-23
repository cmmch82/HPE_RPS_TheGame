(function () {

    var app = angular.module("gameApp");

    var demoController = function ($scope, dataService) {
        //alert("inside the controller");

        $scope.downloadFile = function (downloadPath) {
            window.open(downloadPath, '_blank', '');
        }

    };

    app.controller("demoController", demoController);

}());