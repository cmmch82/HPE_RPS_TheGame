(function () {

    var app = angular.module("gameApp");

    var mainController = function ($scope, dataService) {
        //alert("inside the controller");
        $scope.imgTopN = '/Content/Template/img/gameoptions/topn.jpg ';
        $scope.imgDemo = '/Content/Template/img/gameoptions/demo.jpg ';
        $scope.imgManualGame = '/Content/Template/img/gameoptions/manualgame.jpg ';
        $scope.imgNarrator = '/Content/Template/img/gameoptions/narrator.jpg ';
        $scope.imgNuke = '/Content/Template/img/gameoptions/nuke.jpg ';
        $scope.imgUpload = '/Content/Template/img/gameoptions/upload.jpg ';

        $scope.getTopN = function () {
            dataService.getTopN(0).then(function (result) {
                $scope.bestplayers = (result !== 'null') ? result : {};
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };



    };

    app.controller("mainController", mainController);

}());