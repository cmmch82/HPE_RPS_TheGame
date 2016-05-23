(function () {

    var app = angular.module("gameApp");

    var uploadGameController = function ($scope, dataService) {
        //alert("inside the controller");

        $scope.postFile = function () {
            gameService.postTournament($scope.content).then(function (result) {
                dataService.tournamentResults = (result !== 'null') ? result : {};
            }, function (reason) {
                console.log('ERROR', reason);
            });
        };

    };

    app.controller("uploadGameController", uploadGameController);

    app.directive('onReadFile', function ($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                var fn = $parse(attrs.onReadFile);

                element.on('change', function (onChangeEvent) {
                    var reader = new FileReader();

                    reader.onload = function (onLoadEvent) {
                        scope.$apply(function () {
                            fn(scope, { $fileContent: onLoadEvent.target.result });
                        });
                    };

                    reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                });
            }
        };
    });

}());