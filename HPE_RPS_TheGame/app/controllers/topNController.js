(function () {

    var app = angular.module("gameApp");

    var topNController = function ($scope, dataService) {
        //alert("inside the controller");
        $scope.topNumber = 10;
        $scope.bestplayers = {}
        $scope.getTopN = function () {

               $scope.bestplayers = { };

            dataService.getTopN($scope.topNumber).then(

            function (result) {
    $scope.bestplayers = (result !== 'null') ? result : {};
 //  $scope.bestplayers = JSON.decode(ret);

             }, function (reason) {
                console.log('ERROR', reason);
            });
        };


        $scope.FilterNotifications = function (Notificationsdata) {
            for (var i = 0; i < Notificationsdata.length; i++) {
                var vbol = false;
                var algo = Notificationsdata[i].UserName;
                $scope.taskdata.push(Notificationsdata[i]);
            }
        }

    };



    app.controller("topNController", topNController);

}());